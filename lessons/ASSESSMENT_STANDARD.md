# CPLA Interactive Assessment Standard

**Status:** Active v1.0 · Applied to all Volume 1 modules (Lessons 1.1–1.30)
**Applies to:** every lesson-module page under `lessons/**` — existing and future.
**Template:** [`lessons/_assessment-template.html`](_assessment-template.html)

Every lesson assessment must be **submittable and gradable**. This is the
standard that makes that true, and the one all future lessons follow.

---

## What "graded" means here

Each lesson assessment has two parts, graded two ways:

- **Part 1 — Multiple choice** is **auto-graded in the browser** the moment the
  student clicks *Submit assessment*. Pass mark is **80%**. Right and wrong
  choices are highlighted and the score is shown immediately. This mirrors the
  `gradeQuiz()` pattern already used in `lesson.html`.
- **Part 2 — Short answer** cannot be auto-graded. Each response is captured
  verbatim and written to a submission record for the **instructor to grade**.
  The instructor's grade is always the final say.

A submission writes to two places, using collections and fields already defined
in `PROGRESS_TRACKING_DATA_MODEL.md`:

| Write | Doc | Purpose |
|-------|-----|---------|
| `progress/{uid}_{lessonId}` (merge) | student's own progress | `quizScore`, `assessmentStatus`, `assessmentSubmittedAt` — feeds the student's progress signals |
| `submissions/{autoId}` (add) | one per submission | `studentId`, `classId`, `lessonId`, `method:"assessment"`, `mcScore`, `mcCorrect`, `mcTotal`, `mcPassed`, `shortAnswers[]`, and the grading fields (`grade`, `score`, `feedback`, `gradedBy`, `gradedAt`) the instructor fills in |

Submitting requires the student to be **signed in** (the record is tied to their
account). Lesson content stays viewable when signed out; only the submit action
gates on auth and shows a sign-in prompt.

---

## The three pieces every lesson page needs

Copy them from [`_assessment-template.html`](_assessment-template.html).

1. **CSS** — the `/* ===== INTERACTIVE ASSESSMENT ===== */` block, pasted once
   inside the page's `<style>`. It uses the module palette variables
   (`--ink --mid --rule --mod --ml --green --gnl --accent --al`) that every
   CPLA lesson page already defines.
2. **One assessment block per lesson** in the lesson body (see contract below).
3. **The engine**, pasted **once** just before `</body>`: the Firebase SDK
   tags, `/firebase-config.js`, and the `submitAssessment` / `retryAssessment`
   functions.

---

## Assessment block contract

```html
<div id="lNN-ass" class="tc"
     data-lesson="V.L"
     data-title="Lesson V.L Assessment"
     data-correct="1,2,0,3,1">
  <div class="wrap"> … </div>
</div>
```

Rules that the engine depends on — get these right and it just works:

- **`data-lesson`** is the Firestore lessonId (e.g. `"2.1"`). It must match the
  lesson's id in `data/lessons-v1.js` so scores line up across the platform.
- **`data-correct`** is the 0-based correct option index for each MC question,
  **in the order the questions appear**: `A=0, B=1, C=2, D=3`.
  Five questions → five comma-separated numbers.
- **Radio inputs**: `name="{blockId}-q{n}"` where `n` is the 0-based MC question
  index (`-q0`, `-q1`, …); `value` is the 0-based option index. Wrap each option
  in `<label class="qopt-i"><input type="radio" …><span>…</span></label>`.
- **Short answers**: `<textarea class="qtextarea" name="{blockId}-sa{n}"
  data-qn="Q06" data-prompt="the question text">`. `data-qn` and `data-prompt`
  are what the instructor sees next to each written answer.
- **Answer key**: keep the printed `<div class="ak">` but set
  `style="display:none;"`. The engine reveals it after submission for review.
- **Actions**: the `.assess-actions` block (Submit + Try again + `.assess-note`)
  and an empty `.assess-result` div, both inside `.wrap`.

---

## Authoring a new lesson assessment

1. Copy one PIECE 2 block from the template into the lesson body.
2. Set `id`, `data-lesson`, `data-title`.
3. Write five MC questions (four options each) and set `data-correct`.
4. Write the short-answer questions; set each textarea's `data-qn` / `data-prompt`.
5. Confirm PIECE 1 (CSS) and PIECE 3 (engine) are present once on the page.
6. Sign in as a test student, submit, and confirm the score shows and a
   `submissions` doc appears in Firestore.

---

## Known content follow-up (not a mechanism issue)

The migrated Volume 1 answer keys are heavily weighted to option **B** — several
modules key every question to B. The grading mechanism faithfully uses whatever
each `data-correct` says, but a key where the correct answer is almost always in
the same position is trivially gameable and may indicate placeholder keys from
authoring. **Recommend a subject-matter-expert pass** to (a) confirm each key is
correct and (b) shuffle option order so the correct choice is distributed across
A–D. This is a curriculum-content task, tracked separately from this standard.

---

## Security rules

`firestore.rules` includes the `submissions` collection: a student may create and
read their own; the instructor who teaches the class may read and grade (update);
admins have full access. This matches `PROGRESS_TRACKING_DATA_MODEL.md` §6.
Deploy the updated rules for grading to work end-to-end.
