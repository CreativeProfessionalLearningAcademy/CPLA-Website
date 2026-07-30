"""Build CPLA-STD-IER-001 — Instructor Experience Reviewer Program Standard.
A clean, professional, print-ready PDF (no form fields)."""
import os
from qa_pdf_lib import (Doc, _p, BODYF, BODYB, DISPLAY, DISPLAY_I, MONO,
                        INK, BLUE, GOLD, MID, RULE, CREAM, GOLDL, PAPER,
                        LM, RM, PAGE_W, PAGE_H, CONTENT_W)
from reportlab.lib.colors import HexColor

OUT = os.path.join(os.path.dirname(__file__), "..", "standards", "CPLA-STD-IER-001.pdf")
os.makedirs(os.path.dirname(OUT), exist_ok=True)

d = Doc(OUT, "CPLA-STD-IER-001",
        "Instructor Experience Reviewer Program Standard",
        "Independent professional evaluation of the CPLA teaching experience",
        version="1.0", classification="Controlled Document — Quality Assurance")

# ---------------- COVER ----------------
d.doc_title_block()

# metadata card
c = d.c
cardh = 132
c.setFillColor(PAPER); c.setStrokeColor(RULE); c.setLineWidth(0.8)
c.roundRect(LM, d.y - cardh, CONTENT_W, cardh, 8, fill=1, stroke=1)
rows = [
    ("Document ID", "CPLA-STD-IER-001"),
    ("Document Type", "Program Standard"),
    ("Version", "1.0"),
    ("Status", "Active"),
    ("Owner", "CPLA Quality Assurance"),
    ("Applies To", "All CPLA curriculum prior to release or wide adoption"),
]
ry = d.y - 22
for i, (k, v) in enumerate(rows):
    col = i % 2
    x = LM + 20 + col * (CONTENT_W / 2)
    yy = ry - (i // 2) * 34
    c.setFont(MONO, 7.5); c.setFillColor(GOLD)
    c.drawString(x, yy, k.upper())
    c.setFont(BODYF, 10); c.setFillColor(INK)
    c.drawString(x, yy - 14, v)
d.y -= cardh + 22

# revision history
d.h1("Revision History")
c = d.c
# table header
th = 20
c.setFillColor(BLUE); c.rect(LM, d.y - th, CONTENT_W, th, fill=1, stroke=0)
cols = [("VERSION", 70), ("DATE", 110), ("AUTHOR", 150), ("SUMMARY OF CHANGE", CONTENT_W - 330)]
cx = LM + 8
c.setFont(MONO, 7.6); c.setFillColor(HexColor("#ffffff"))
for name, w in cols:
    c.drawString(cx, d.y - 13.5, name); cx += w
d.y -= th
hist = [("1.0", "2026-07-29", "CPLA Quality Assurance", "Initial issue of the IER Program Standard.")]
for row in hist:
    rh = 22
    c.setStrokeColor(RULE); c.setLineWidth(0.6)
    c.rect(LM, d.y - rh, CONTENT_W, rh, fill=0, stroke=1)
    cx = LM + 8
    c.setFont(BODYF, 9); c.setFillColor(INK)
    for val, (_, w) in zip(row, cols):
        c.drawString(cx, d.y - 14.5, val); cx += w
    d.y -= rh
d.y -= 18

# ---------------- PURPOSE ----------------
d.new_page()
d.h1("1. Purpose")
d.para("The CPLA Instructor Experience Reviewer (IER) Program provides independent, professional "
       "evaluation of the instructional experience from the perspective of an educator who is actively "
       "teaching within the discipline. The reviewer evaluates the effectiveness, usability, organization, "
       "and instructional value of CPLA learning materials before curriculum is released or widely adopted.")
d.para("Unlike curriculum validation, which verifies the <b>accuracy</b> of content, the Instructor "
       "Experience Review verifies that the curriculum is <b>practical, intuitive, teachable, and supportive</b> "
       "of instructors with varying levels of teaching experience. Together, the two review types establish that "
       "CPLA validates not only what is taught but whether it can be taught well.",
       _p("", BODYF, 10.2, 14.5, INK))

d.h1("2. Objectives")
d.para("The Instructor Experience Reviewer evaluates whether the CPLA instructional system:")
for it in [
    "prepares instructors effectively before class",
    "supports instructors during class",
    "reduces lesson-planning time",
    "promotes consistent instructional quality",
    "anticipates common student difficulties",
    "provides sufficient teaching guidance",
    "improves instructor confidence",
    "supports experienced professionals who may have limited formal teaching experience",
]:
    d.para(f"•&nbsp;&nbsp;{it}", _p("", BODYF, 10, 13.5, INK), gap=2.5)
d.y -= 6

d.h1("3. Primary Responsibilities")
d.para("The reviewer is expected to:")
for it in [
    "teach or simulate teaching selected CPLA lessons",
    "evaluate Studio Director usability",
    "evaluate Instructor Guide usefulness",
    "evaluate Student Lesson organization",
    "evaluate classroom workflow",
    "evaluate assessment clarity",
    "identify missing instructional tools",
    "recommend improvements and document observations objectively",
]:
    d.para(f"•&nbsp;&nbsp;{it}", _p("", BODYF, 10, 13.5, INK), gap=2.5)
d.y -= 4

# ---------------- AREAS OF EVALUATION ----------------
d.new_page()
d.h1("4. Areas of Evaluation")
areas = [
    ("Lesson Preparation", "Can an instructor prepare effectively without reading the entire student lesson?"),
    ("Classroom Delivery", "Can the instructor comfortably teach using the available materials?"),
    ("Student Engagement", "Will the lesson likely maintain student attention?"),
    ("Instructional Support", "Does the guide tell the instructor what to say, what to demonstrate, "
        "what to emphasize, what misconceptions to expect, and what successful work looks like?"),
    ("Assessment", "Can student understanding be evaluated fairly?"),
    ("Navigation", "Is information easy to locate during preparation and during class?"),
    ("Professional Value", "Would another instructor actually want to use this system?"),
]
c = d.c
for name, desc in areas:
    # measure
    from reportlab.platypus import Paragraph
    ps = _p("", BODYF, 9.6, 13, INK)
    p = Paragraph(desc, ps)
    _, ph = p.wrap(CONTENT_W - 150, 200)
    rh = max(ph + 16, 34)
    d.ensure(rh + 6)
    c.setFillColor(PAPER); c.setStrokeColor(RULE); c.setLineWidth(0.7)
    c.roundRect(LM, d.y - rh, CONTENT_W, rh, 5, fill=1, stroke=1)
    c.setFillColor(GOLD); c.roundRect(LM, d.y - rh, 4, rh, 2, fill=1, stroke=0)
    c.setFont(BODYB, 10); c.setFillColor(BLUE)
    c.drawString(LM + 14, d.y - 18, name)
    p.drawOn(c, LM + 150, d.y - rh + (rh - ph) / 2)
    d.y -= rh + 7
d.y -= 6

d.h1("5. Reviewer Qualifications")
d.para("Preferred reviewers bring professional knowledge of the discipline together with teaching or "
       "instructional-design experience. Suitable reviewers include:")
d.check_group  # (no-op ref; qualifications are print-only below)
for it in ["college instructors", "high-school CTE instructors", "industry professionals",
           "curriculum specialists", "instructional designers", "subject-matter experts"]:
    d.para(f"•&nbsp;&nbsp;{it}", _p("", BODYF, 10, 13.5, INK), gap=2.5)

# ---------------- METHODOLOGY + DELIVERABLES ----------------
d.new_page()
d.h1("6. Evaluation Methodology")
d.para("Reviews are conducted as a <b>limited pilot</b>, not as ordinary user access. Each reviewer is given a "
       "controlled set of approximately three connected lessons chosen to represent different instructional "
       "demands — typically one concept-heavy, one demonstration-heavy, and one production-heavy lesson. A small, "
       "deep review produces far more reliable feedback than a superficial pass across an entire volume.")
d.para("Reviewers are asked first to <b>use what exists</b> and to document actual moments of friction encountered "
       "while preparing and while imagining teaching in front of students — for example, “I was trying to prepare "
       "for the demonstration, but I could not find…” Feedback tied to a real task is markedly more reliable than "
       "general feature ideas, so task-anchored observation is required before open-ended suggestions.")
d.para("Where the platform permits, reviewers exercise instructor customization — personal teaching notes, timing "
       "adjustments, anticipated misconceptions, alternative examples, and section flags. Reviewer changes are stored "
       "as the reviewer’s own instructor layer and must never overwrite the authoritative CPLA curriculum.")

d.h1("7. Expected Deliverables")
d.para("Each review produces:")
for it in [
    "a completed Instructor Experience Evaluation Form (CPLA-FRM-IER-001)",
    "written observations tied to specific moments of use",
    "suggested improvements with priority levels",
    "an overall release recommendation",
]:
    d.para(f"•&nbsp;&nbsp;{it}", _p("", BODYF, 10, 13.5, INK), gap=2.5)
d.y -= 4

d.h1("8. Confidentiality")
d.para("CPLA curriculum, guides, and platform materials provided for review are pre-release, proprietary, and "
       "confidential. Reviewers agree to use the materials solely for the purpose of evaluation, not to reproduce or "
       "distribute them, and to treat all lesson content and platform functionality as confidential until CPLA "
       "authorizes wider release.")

d.h1("9. Relationship to the CPLA Standards Library")
d.para("This Standard is issued alongside its companion instrument, the Instructor Experience Evaluation Form "
       "(CPLA-FRM-IER-001), and is designed to serve as the template for future review standards as they are needed. "
       "It establishes that CPLA follows a documented, repeatable process for developing, validating, and continuously "
       "improving both the accuracy and the teachability of its curriculum.")

# signature acknowledgment
d.new_page()
d.h1("10. Reviewer Acknowledgment")
d.para("By signing below, the reviewer acknowledges that they have read and understood the CPLA Instructor "
       "Experience Reviewer Program Standard and agree to conduct their review in accordance with it, including its "
       "confidentiality provisions.")
d.y -= 10
c = d.c
def sigline(label, w):
    c.setStrokeColor(INK); c.setLineWidth(0.8)
    c.line(LM, d.y, LM + w, d.y)
    c.setFont(BODYF, 8.5); c.setFillColor(MID)
    c.drawString(LM, d.y - 12, label)
sigline("Reviewer name (print)", 300); d.y -= 46
sigline("Reviewer signature", 300); d.y -= 46
d.two_line = None
c.setStrokeColor(INK); c.setLineWidth(0.8)
c.line(LM, d.y, LM + 200, d.y)
c.setFont(BODYF, 8.5); c.setFillColor(MID); c.drawString(LM, d.y - 12, "Institution")
c.line(LM + 260, d.y, LM + 260 + 160, d.y)
c.drawString(LM + 260, d.y - 12, "Date")
d.y -= 46

d.save()
print("Wrote", os.path.normpath(OUT))
