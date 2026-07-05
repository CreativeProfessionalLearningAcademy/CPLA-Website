# CPLA Platform — Development Notes

---

## Filename Validation — Upgrade to Option B when registration is built

**Current behavior (Option A):**
The submit step in `lesson.html` checks that the uploaded file matches the expected name for the logged-in student. The student's last name is extracted from their Firebase Auth `displayName` — for example, a user registered as "Jane Miller" produces the expected filename `L2.9_Miller_CloudStudy.ai`. If no `displayName` is set, it falls back to the portion of their email address before the `@`.

**Why this needs upgrading (Option B):**
`displayName` is a free-text field and may be set inconsistently — some users may enter only a first name, a nickname, or nothing at all. This makes the last-name extraction unreliable.

**What Option B looks like:**
When the student registration / account creation flow is built, collect **first name** and **last name** as separate fields. On account creation, write `lastName` as its own field in the student's Firestore `users` document:

```js
// In the registration handler:
await db.collection('users').doc(uid).set({
  firstName: 'Jane',
  lastName: 'Miller',
  email: 'jane@example.com',
  ...
});
```

Then in `lesson.html`, load `lastName` from Firestore during `loadProgress()` (or a separate profile fetch), assign it to `userLastName`, and the `getExpectedFilename()` function will use it automatically — no other changes needed.

**Guest reviewer account:**
Add `lastName: 'Reviewer'` to the document seeded by `seed-guest.html`. The reviewer's expected filename will then be `L2.9_Reviewer_CloudStudy.ai`.

**Files to update when Option B is implemented:**
- `lesson.html` — swap `userLastName` extraction from displayName → Firestore `lastName` field
- `seed-guest.html` — add `lastName: 'Reviewer'` to the seeded user profile document
- New registration page (to be built) — collect and store `lastName`
