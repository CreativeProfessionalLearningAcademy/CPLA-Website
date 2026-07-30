"""Build CPLA-FRM-IER-001 — Instructor Experience Evaluation Form.
A professional fillable AcroForm PDF: text fields, 1-5 radio scales,
checkboxes, and a signature block. Save & email back after completion."""
import os
from qa_pdf_lib import (Doc, _p, BODYF, BODYB, DISPLAY, DISPLAY_I, MONO,
                        INK, BLUE, GOLD, MID, RULE, CREAM, PAPER, GOLDL, WHITE, FIELDBG,
                        LM, RM, PAGE_W, PAGE_H, CONTENT_W)
from reportlab.pdfbase.pdfmetrics import stringWidth

OUT = os.path.join(os.path.dirname(__file__), "..", "forms", "CPLA-FRM-IER-001.pdf")
os.makedirs(os.path.dirname(OUT), exist_ok=True)

d = Doc(OUT, "CPLA-FRM-IER-001",
        "Instructor Experience Evaluation Form",
        "Companion instrument to CPLA-STD-IER-001",
        version="1.0", classification="Fillable QA Record")


def band_plain(title):
    """Unnumbered section band."""
    d.ensure(40)
    c = d.c
    bh = 26
    c.setFillColor(BLUE); c.roundRect(LM, d.y - bh, CONTENT_W, bh, 5, fill=1, stroke=0)
    c.setFillColor(GOLD); c.roundRect(LM, d.y - bh, 5, bh, 2, fill=1, stroke=0)
    c.setFont(BODYB, 11.5); c.setFillColor(WHITE)
    c.drawString(LM + 18, d.y - 17.5, title)
    d.y -= bh + 14


def priority_row(base):
    """Text field (left) + Critical/High/Medium/Low radio group (right)."""
    d.ensure(24)
    c = d.c
    tw = CONTENT_W * 0.50
    d.text_field(d.fid(base), LM, d.y - 18, tw, 16)
    gname = d.fid(base + "_pri")
    opts = ["Critical", "High", "Medium", "Low"]
    rx = LM + tw + 10
    for opt in opts:
        c.acroForm.radio(name=gname, value=opt, selected=False, x=rx, y=d.y - 16,
                         size=10, buttonStyle='circle', borderColor=MID, fillColor=WHITE,
                         textColor=BLUE, borderWidth=0.8, forceBorder=True)
        c.setFont(BODYF, 7.6); c.setFillColor(MID)
        c.drawString(rx + 12, d.y - 14, opt)
        rx += stringWidth(opt, BODYF, 7.6) + 26
    d.y -= 26


# ---------------- PAGE 1: title + exec summary ----------------
d.doc_title_block(top=PAGE_H - 92, tight=True)
d.note("This is a fillable form. Complete it in Adobe Acrobat, Apple Preview, or any modern PDF reader, "
       "then save and email it back to CPLA as an attachment. It can be completed entirely offline. Rating "
       "scales run 1 (low) to 5 (high) unless noted; check all boxes that apply.", gap=10)

band_plain("Executive Summary  —  complete after the detailed review")
d.rating("Overall rating of the lesson(s) reviewed", "exec_overall")
d.label("Release readiness")
d.radio_group("exec_readiness", ["Ready", "Minor Revision", "Major Revision", "Not Ready"], cols=4)
d.labeled_line("Overall recommendation", "exec_reco")
d.labeled_line("Highest-priority issue", "exec_issue")
d.label("Category scores  (1 = weak, 5 = excellent)")
for cat in ["Lesson Preparation", "Instructor Guide", "Studio Director", "Student Lesson",
            "Navigation", "Assessment", "Classroom Workflow"]:
    d.rating(cat, "cat_" + cat.split()[0].lower())

# ---------------- Reviewer info ----------------
d.new_page()
band_plain("Reviewer Information")
d.two_up("Reviewer name", "rev_name", "Institution", "rev_inst")
d.two_up("Position", "rev_pos", "Years teaching", "rev_years")
d.labeled_line("Area of expertise", "rev_expertise")
d.two_up("Date", "rev_date", "Volume", "rev_vol")
d.two_up("Lesson(s) reviewed", "rev_lessons", "Version no.", "rev_ver")
d.labeled_line("Approx. review time", "rev_time")
d.space(6)
band_plain("Overall Impression")
d.label("My overall impression of the lesson(s) was")
d.radio_group("overall_impression", ["Excellent", "Very Good", "Good", "Fair", "Needs Improvement"], cols=3)

# ---------------- Section 1 ----------------
d.new_page()
d.sec_band(1, "Lesson Preparation")
d.note("Rate each statement from 1 (strongly disagree) to 5 (strongly agree).")
d.rating("The Instructor Guide prepared me to teach this lesson.", "s1_prep")
d.rating("I clearly understood the lesson objectives.", "s1_obj")
d.rating("I understood what students should know before beginning.", "s1_prior")
d.rating("I could prepare for this lesson with minimal additional research.", "s1_research")
d.comment("s1_comments", lines=2)

d.sec_band(2, "Studio Director")
d.rating("The Studio Director provides the information I need before class.", "s2_info")
d.rating("Information is organized logically.", "s2_org")
d.rating("Important information is easy to locate.", "s2_locate")
d.label("I would keep the Studio Director open during class")
d.radio_group("s2_openduring", ["Yes", "No", "Maybe"], cols=3)
d.comment("s2_why", lines=2, lab="Why?")

# ---------------- Section 3 ----------------
d.new_page()
d.sec_band(3, "Instructor Guide")
d.rating("Overall, the Instructor Guide is useful for teaching this lesson.", "s3_overall")
d.label("The guide tells me:  (check all that apply)")
d.check_group("s3_tells", ["what to teach", "what to demonstrate", "what to emphasize",
                           "what students commonly misunderstand", "what successful work looks like"], cols=2)
d.comment("s3_missing", lines=2, lab="Was anything missing?")

d.sec_band(4, "Student Lesson")
d.rating("The lesson is appropriately paced.", "s4_pace")
d.rating("Instructions are clear.", "s4_clear")
d.rating("Students are likely to remain engaged.", "s4_engage")
d.rating("Professional terminology is introduced appropriately.", "s4_term")
d.comment("s4_comments", lines=2)

# ---------------- Section 5 ----------------
d.new_page()
d.sec_band(5, "Classroom Experience")
d.label("Imagining teaching this lesson, would you feel comfortable?")
d.radio_group("s5_comfort", ["Immediately", "After some preparation", "Only with modifications", "No"], cols=2)
d.comment("s5_explain", lines=2, lab="Explain")
d.comment("s5_search", lines=2, lab="During teaching, what information would you most likely search for?")
d.comment("s5_overwhelm", lines=2, lab="Did you ever feel overwhelmed? When?")

d.sec_band(6, "Teaching Support")
d.label("The lesson adequately provided:  (check all that apply)")
d.check_group("s6_provided", ["Demonstrations", "Examples", "Talking points", "Common misconceptions",
                              "Assessment guidance", "Timing suggestions", "Transition suggestions"], cols=2)
d.comment("s6_missing", lines=2, lab="Anything missing?")

# ---------------- Section 7 ----------------
d.new_page()
d.sec_band(7, "Navigation")
d.note("How easy was it to find each item?  (1 = hard to find, 5 = immediate)")
for item in ["Objectives", "Vocabulary", "Exercise", "Assessment", "Teacher Notes", "Demonstrations"]:
    d.rating(item, "nav_" + item.split()[0].lower())

d.sec_band(8, "Suggested Improvements")
d.comment("s8_easier", lines=2, lab="What would make this lesson easier to teach?")
d.comment("s8_add", lines=2, lab="What tools would you add?")
d.comment("s8_remove", lines=2, lab="What information should be removed?")
d.comment("s8_relocate", lines=2, lab="What information should be relocated?")

# priority matrix
d.new_page()
band_plain("Priority Matrix  —  tag your key suggestions")
d.note("Write a suggestion on each line and mark its priority.")
for i in range(5):
    priority_row(f"pri_{i}")
d.space(4)

d.sec_band(9, "Instructor Perspective")
d.label("Would you actually use this system?")
d.radio_group("s9_use", ["Yes", "Probably", "Maybe", "No"], cols=4)
d.label("Would this system reduce your lesson-preparation time?")
d.radio_group("s9_prep", ["Significantly", "Somewhat", "No change", "Increase prep"], cols=4)
d.label("Would you recommend this to another instructor?")
d.radio_group("s9_recommend", ["Definitely", "Probably", "Maybe", "No"], cols=4)

# ---------------- Section 10 ----------------
d.new_page()
d.sec_band(10, "Final Recommendation")
d.label("This lesson is ready for:")
d.radio_group("s10_ready", ["Classroom Pilot", "Limited Release", "General Release", "Requires Revision"], cols=2)
d.comment("s10_priority", lines=2, lab="Highest-priority recommendation")
d.comment("s10_additional", lines=2, lab="Additional comments")
d.comment("s10_biggest", lines=2, lab="My single biggest recommendation")

band_plain("Classroom Simulation Log")
d.comment("sim_pause", lines=2, lab="At what point would you pause instruction?")
d.comment("sim_struggle", lines=2, lab="Where would students most likely struggle?")
d.comment("sim_demo", lines=2, lab="When would you demonstrate software?")
d.comment("sim_order", lines=2, lab="Would you change the lesson order? If so, how?")

# ---------------- Innovation + certification ----------------
d.new_page()
band_plain("Innovation Ideas")
d.note("While using CPLA, did you find yourself thinking “I wish it could…”? List every idea, no matter "
       "how small. This question often produces the most valuable feedback, because it captures ideas that arise "
       "during authentic use rather than in hindsight.")
d.comment("innovation", lines=7, lab="")

band_plain("Final Certification")
d.para("I certify that I personally reviewed the lesson(s) listed in this evaluation and have provided my "
       "professional assessment based upon my experience as an educator and/or industry professional.",
       _p("", BODYF, 10, 14, INK))
d.space(4)
d.labeled_line("Reviewer signature (type full name)", "cert_sig")
d.two_up("Date", "cert_date", "Institution", "cert_inst")

d.save()
print("Wrote", os.path.normpath(OUT))
