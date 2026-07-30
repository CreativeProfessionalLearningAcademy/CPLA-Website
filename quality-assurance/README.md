# CPLA Quality Assurance Manual

The controlled documents that govern how CPLA validates its curriculum — not only that
content is **accurate**, but that it is **teachable**. This folder is the home for CPLA's
standards, the fillable forms that operationalize them, and the generators that produce them.

## Contents

| ID | Title | Type | Status | File |
|----|-------|------|--------|------|
| CPLA-STD-IER-001 | Instructor Experience Reviewer Program Standard | Standard | Active v1.0 | [standards/CPLA-STD-IER-001.pdf](standards/CPLA-STD-IER-001.pdf) |
| CPLA-FRM-IER-001 | Instructor Experience Evaluation Form | Fillable form | Active v1.0 | [forms/CPLA-FRM-IER-001.pdf](forms/CPLA-FRM-IER-001.pdf) |

### Planned (author when the need is concrete)

- **CPLA-STD-SME-001 / CPLA-FRM-SME-001** — Subject-Matter Expert Review Standard + Form
- **CPLA-STD-CAVS-001** — Curriculum Authority & Validation Standard
- **CPLA-STD-KAOS-001** — Knowledge Acquisition & Organization Standard
- **CPLA-STD-KSRC-001** — Approved Knowledge Source Registry

New documents inherit the layout and numbering of the IER pair.

## Folder layout

```
quality-assurance/
├── README.md          this index
├── standards/         program standards (print-ready PDFs)
├── forms/             fillable AcroForm PDFs (reviewers type, save, email back)
└── tools/             Python generators — edit source, rebuild, never hand-edit the PDFs
```

## Regenerating the documents

The PDFs are generated, not hand-built. From `quality-assurance/tools/`:

```bash
python3 build_std_ier.py     # -> ../standards/CPLA-STD-IER-001.pdf
python3 build_frm_ier.py     # -> ../forms/CPLA-FRM-IER-001.pdf
```

Both share `qa_pdf_lib.py` (brand palette, layout engine, AcroForm field helpers, and the
reversed white/gold header logo). Requires `reportlab`, `svglib`, and `pypdf`.

## Governance rules

1. **Blank templates are public.** This repo is served statically, so the blank Standard and
   Form are reachable by URL. That is intended — they can be shared as a credibility signal.
2. **Completed reviews are private and never committed here.** A returned form carries a
   named reviewer's candid assessment. Store completed forms in a private location
   (e.g. a Firestore `instructor_reviews` collection or a private Drive folder), not in this
   public repo.
3. **Edit the generator, not the PDF.** Changes to a document are made in `tools/` and the PDF
   is rebuilt, keeping the source of truth in one place.
