# CPLA Progress-Tracking Data Model

**Purpose:** Define the Firestore data that powers the shared attention engine so the Student
Workspace, Studio Director, and Administrator Control Center panels populate with real signals
instead of their "all clear / caught up" placeholder state.
**Grounded in:** existing collections (`users`, `classes`, `messages`, `instructor_notes`) and the
lesson catalog (`data/lessons-v1.js`).
**Status:** Design proposal for review.
**Last updated:** July 31, 2026

---

## 1. What exists today

| Collection | Key fields | Notes |
|---|---|---|
| `users/{uid}` | `firstName`, `lastName`, `email`, `accountType` (`instructor` / student), `role`, `classId` | One class per student today |
| `classes/{classId}` | `name`, `inviteCode`, `instructorId`, `currentLesson` (e.g. `"1.1"`), `active`, `createdAt` | `currentLesson` is the class's pacing pointer |
| `messages/{id}` | `classId`, `type`, `studentId`, `senderRole`, `text`, `readByInstructor`, `readByStudent`, `createdAt` | Already live |
| `instructor_notes/{uid}_{classId}_{lessonId}` | `text`, `classId`, `lessonId`, `updatedAt` | Doc id prefixed with uid so rules pass |
| Lesson catalog (`data/lessons-v1.js`) | `CPLA_LESSONS[]` (ordered, `id` like `"1.1"`, `title`, `mod`, `curriculum.deliverable`), `CPLA_MODULES` | Client-side source of truth; **ordered array = lesson sequence** |

What's missing: any record of what a student has **done** — submissions, lesson progress, or
last activity. That's this spec.

---

## 2. The attention contract (the one thing everything depends on)

All three panels already read a small set of **flat signal fields on the student's `users/{uid}`
document.** Defining and populating these fields is the whole objective — everything else in this
document exists to keep them accurate.

```jsonc
// users/{uid} — attention signal fields (flat, denormalized for O(1) panel reads)
{
  // …existing user fields…
  "lastActiveAt":   Timestamp,       // updated every app load
  "lessonsBehind":  0,               // class pace index − student's furthest completed index
  "missingCount":   0,               // # of due deliverables not yet submitted
  "missingItems":   [                // detail for the student's "Your Focus" panel
    { "lessonId": "1.2", "title": "Line & Shape exercise", "lessonUrl": "volume1.html" }
  ],
  "lastActiveDays": 0,               // derived; may also be computed live from lastActiveAt
  "nextDue":        null             // { title, due, lessonUrl } once pacing dates exist (Phase 3)
}
```

Field names match the panel code exactly:
- Student Workspace `computeStudentAttention()` reads `lessonsBehind`, `missingItems`, `nextDue`.
- Studio Director `computeAttentionItems()` reads `lessonsBehind`, `missingCount` / `missingItems`, `lastActiveDays`.

Keeping these **flat** (not nested) means no panel code changes are needed — populate the fields
and the panels light up.

---

## 3. New collections

### 3.1 `submissions` — student turns in a deliverable

```jsonc
// submissions/{autoId}
{
  "studentId": "uid",
  "classId":   "classId",
  "lessonId":  "1.2",
  "deliverableTitle": "Line & Shape exercise",
  "status":    "submitted",          // submitted | returned | graded
  "url":       "https://…",          // link, or Firebase Storage path, or Milanote board ref
  "submittedAt": Timestamp,
  "grade":     null,                 // e.g. "B+"  (nullable until graded)
  "score":     null,                 // 0–100     (nullable)
  "feedback":  "",
  "gradedBy":  null,
  "gradedAt":  null
}
```
Queryable by `studentId` (student's own) and by `classId` (instructor roster view).

### 3.2 `lesson_progress` — per-student per-lesson state (drives the roster live-status chips)

```jsonc
// lesson_progress/{uid}_{lessonId}   (uid-prefixed id so security rules pass)
{
  "studentId": "uid",
  "classId":   "classId",
  "lessonId":  "1.1",
  "status":    "learning",           // not_started | learning | practicing | creating |
                                     // reviewing | awaiting_feedback | certified
  "startedAt":   Timestamp,
  "completedAt": null,
  "updatedAt":   Timestamp
}
```
The status enum matches the roster caption already in `studio-director.html`
("Learning · Practicing · Creating · Reviewing · Awaiting Feedback · Certified").

### 3.3 Activity
For the pilot, a single `lastActiveAt` timestamp on `users/{uid}`, written on every app load, is
enough. A full `activity` event log (per-page, per-video) is a Phase-3 nicety, not required to make
the panels work.

---

## 4. Derivation logic

Lesson order comes from the catalog array — no Firestore needed:

```js
const ORDER = CPLA_LESSONS.map(l => l.id);          // ["1.1","1.2",…]
const idx   = id => ORDER.indexOf(id);
```

```
lessonsBehind = max(0, idx(class.currentLesson) − idx(studentFurthestCompletedLesson))
                // studentFurthestCompletedLesson = highest lessonId whose lesson_progress.status
                // is in {creating, reviewing, awaiting_feedback, certified} OR that has a submission

missingItems  = for each lesson L where idx(L) ≤ idx(class.currentLesson)
                       and L.curriculum.deliverable exists
                       and no submission(studentId, L.id):
                   push { lessonId: L.id, title: L.curriculum.deliverable.title, lessonUrl }
missingCount  = missingItems.length

lastActiveDays = floor((now − user.lastActiveAt) / 1 day)

nextDue        = null   // until a pacing schedule with due dates exists (Phase 3)
```

---

## 5. Who computes and writes the signals — the key decision

The panels read O(1) flat fields; someone has to keep those fields fresh. Three options:

**Option A — Every surface computes on read.** Each panel pulls raw `submissions` / `lesson_progress`
and computes live. *Pro:* always fresh, no stored duplication. *Con:* the instructor and admin
views must read every student's raw docs (N×M reads), logic is duplicated in three places, and it's
the slowest to load. *Not recommended past a single class.*

**Option B — Cloud Function recompute.** A function triggers on `submissions` writes, `lesson_progress`
writes, and `classes.currentLesson` changes, recomputes the signal fields, and writes them to the
student's `users` doc. *Pro:* one authoritative implementation, O(1) reads everywhere, always fresh
even for inactive students. *Con:* requires Cloud Functions (Firebase **Blaze** plan) and a bit more
ops.

**Option C — Student self-writes on load (pilot default).** When a student opens the Workspace, the
client recomputes their own signals (it can read `classes.currentLesson` and its own submissions)
and writes the flat fields to its own `users` doc. Staff panels just read those denormalized fields.
*Pro:* no backend infrastructure, O(1) reads for staff, minimal code. *Con:* a student who never
logs in has stale `lessonsBehind`/`missingCount` — but **inactivity is itself the signal**, and
`lastActiveDays` is computed live from `lastActiveAt`, so the "hasn't logged in" alert still fires
correctly. The instructor can also trigger a recompute from the roster if needed.

**Recommendation — Option C for the August pilot** (no Blaze dependency, ships fast, panels already
read the fields), with a clean migration to **Option B** once you're on Blaze and want authoritative,
always-fresh signals for inactive students. The read contract (Section 2) is identical for B and C,
so moving from C to B is a writer swap with **no panel or schema change.**
*Confidence: moderate — the right choice hinges on whether Cloud Functions are available to you.*

---

## 6. Security rules (alignment notes)

You already gate roster/message/notes reads on Firestore rules; extend the same posture:

- `submissions`: a student may **create/read** docs where `studentId == request.auth.uid`; an
  instructor may **read** where `classId` belongs to them and **update** only grading fields
  (`grade`, `score`, `feedback`, `status`, `gradedBy`, `gradedAt`); admin reads all.
- `lesson_progress/{uid}_{lessonId}`: student read/write own (doc-id uid prefix, same trick as
  `instructor_notes`); instructor/admin read.
- `users/{uid}` signal fields + `lastActiveAt`: student writes **own**; instructor/admin read.

Firestore rules can't cheaply express "instructor *of this class*" without a lookup or custom claims.
Simplest pilot posture (consistent with today's roster reads): allow authenticated **instructor
accounts** to read class-scoped `submissions`/`lesson_progress`, and tighten later with custom
claims (`instructor` / `admin`) if you want hard multi-tenant isolation before onboarding a second
organization.

---

## 7. How each surface consumes it

| Surface | Reads | Writes |
|---|---|---|
| **Student Workspace** | own `users/{uid}` signal fields → `renderFocus()` (already wired) | `lastActiveAt`; and (Option C) recomputes + writes its own signal fields on load |
| **Studio Director** | class students' `users` docs (already queried) → `computeAttentionItems()`; computes `lastActiveDays` live from `lastActiveAt` | grading writes to `submissions`; optional "recompute" action |
| **Control Center** | aggregates signal fields across the org's students for Monitoring + Attention | — (admin oversight is read-only via View As) |

No panel code changes are required for Phase 1 — they already read these fields.

---

## 8. Phased rollout

**Phase 1 — Pilot-minimal (targets the August launch).**
Ship the `submissions` collection with a student **submit** action and an instructor **grade**
action; write `lastActiveAt` on load; have the Workspace compute and write `lessonsBehind`,
`missingCount`, `missingItems` on load (Option C). Result: both attention panels light up with real
data; the Monitoring screen gets real completion/pacing numbers.

**Phase 2 — Roster live status.** Add `lesson_progress` states so the Studio Director roster chips
move through Learning → … → Certified instead of the current "Not started" placeholder.

**Phase 3 — Authoritative + due dates.** Move recompute to a Cloud Function (Option B); add a class
**pacing schedule** (per-lesson target/due dates) to enable `nextDue` and true "overdue" flags; add
a fuller `activity` log if you want time-on-lesson / video-completion evidence.

---

## 9. Open decisions (needed before Phase 1 build)

1. **Cloud Functions / Blaze plan available?** Determines Option B vs C. *(If unsure, start with C — it needs nothing.)*
2. **Submission mechanism:** file upload (Firebase Storage), external link, or a **Milanote** board reference? Your knowledge base leans on Milanote for student work — a Milanote link may be the lowest-friction pilot option.
3. **Pacing schedule / due dates:** do you want per-lesson due dates now (enables `nextDue` and overdue), or is "behind the class pointer" sufficient for the pilot?
4. **Grading source of truth:** does a `score` here feed the Studio Director skill/mastery model later, or stay separate?

---

## 10. Confidence assessment

- **Schema (Sections 2–4):** High — grounded directly in existing collections and the panel code; the flat-field contract needs no client changes.
- **Compute placement (Section 5):** Moderate — Option C is right for the pilot; the B/C choice depends on your Blaze status.
- **`nextDue` / overdue:** Low until a pacing schedule with dates exists (Phase 3).
- **Security rules:** Moderate — the pilot posture is pragmatic; hard multi-tenant isolation should wait for custom claims before a second organization onboards.
