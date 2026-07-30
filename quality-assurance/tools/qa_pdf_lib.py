"""CPLA Quality-Assurance PDF toolkit.
Shared layout engine for building professional, brand-styled PDFs — including
true fillable AcroForm fields — on top of reportlab's canvas.
Origin is bottom-left; we track a top-down y-cursor and auto page-break.
"""
import os
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import letter
from reportlab.lib.colors import Color, HexColor
from reportlab.lib.units import inch
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.platypus import Paragraph
from reportlab.lib.styles import ParagraphStyle
from reportlab.graphics import renderPDF
from svglib.svglib import svg2rlg

# ---- reversed white/gold CPLA logo, loaded once and scaled to header height ----
_LOGO_PATH = os.path.join(os.path.dirname(__file__), "..", "..", "CPLA-logo-full-rev.svg")
_LOGO_H = 22.0  # target height in points, fits inside the 40pt header band
try:
    _LOGO = svg2rlg(_LOGO_PATH)
    _sc = _LOGO_H / _LOGO.height
    _LOGO.width *= _sc
    _LOGO.height *= _sc
    _LOGO.scale(_sc, _sc)
    _LOGO_W = _LOGO.width
except Exception:
    _LOGO = None
    _LOGO_W = 0

# ---- CPLA brand palette (from the site CSS) ----
INK   = HexColor("#1a1410")
BLUE  = HexColor("#01123a")
NAV2  = HexColor("#0a1c44")
GOLD  = HexColor("#da9e2b")
CREAM = HexColor("#f0ead8")
PAPER = HexColor("#faf7f2")
MID   = HexColor("#6b5e52")
RULE  = HexColor("#d4c9b8")
WHITE = HexColor("#ffffff")
FIELDBG = HexColor("#fbfaf6")
GOLDL = HexColor("#f7edd4")

DISPLAY = "Times-Bold"
DISPLAY_I = "Times-Italic"
BODYF = "Helvetica"
BODYB = "Helvetica-Bold"
MONO = "Courier"

PAGE_W, PAGE_H = letter
LM, RM = 62, 62           # left / right margins
TOP = PAGE_H - 96         # first content baseline after header
BOTTOM = 66               # bottom limit
CONTENT_W = PAGE_W - LM - RM


def _p(text=None, font=BODYF, size=10.2, leading=14.5, color=INK, align=0, space=0):
    return ParagraphStyle("s", fontName=font, fontSize=size, leading=leading,
                          textColor=color, alignment=align, spaceAfter=space)


class Doc:
    def __init__(self, path, docid, title, subtitle, version="1.0", classification="Controlled Document"):
        self.c = canvas.Canvas(path, pagesize=letter)
        self.c.setTitle(title)
        self.c.setAuthor("Creative Professional Learning Academy")
        self.c.setSubject(docid)
        self.docid = docid
        self.title = title
        self.subtitle = subtitle
        self.version = version
        self.classification = classification
        self.page = 0
        self.y = TOP
        self._fid = 0
        self._start_page(first=True)

    # ---------- field-name helper ----------
    def fid(self, base):
        self._fid += 1
        return f"{base}_{self._fid}"

    # ---------- page chrome ----------
    def _start_page(self, first=False):
        self.page += 1
        c = self.c
        # top band
        c.setFillColor(BLUE)
        c.rect(0, PAGE_H - 40, PAGE_W, 40, fill=1, stroke=0)
        c.setFillColor(GOLD)
        c.rect(0, PAGE_H - 43, PAGE_W, 3, fill=1, stroke=0)
        # reversed white/gold logo, vertically centered in the band
        if _LOGO is not None:
            renderPDF.draw(_LOGO, c, LM, PAGE_H - 20 - _LOGO_H / 2)
        else:
            c.setFont(DISPLAY, 12); c.setFillColor(WHITE)
            c.drawString(LM, PAGE_H - 27, "CPLA")
        c.setFont(MONO, 8)
        c.setFillColor(GOLD)
        c.drawRightString(PAGE_W - RM, PAGE_H - 26.5, self.docid)
        # footer
        c.setStrokeColor(RULE); c.setLineWidth(0.6)
        c.line(LM, 52, PAGE_W - RM, 52)
        c.setFont(BODYF, 7.6); c.setFillColor(MID)
        c.drawString(LM, 41, f"{self.docid} · v{self.version} · {self.classification}")
        c.drawRightString(PAGE_W - RM, 41, f"Page {self.page}")
        self.y = TOP if not first else TOP

    def new_page(self):
        self.c.showPage()
        self._start_page()

    def ensure(self, h):
        if self.y - h < BOTTOM:
            self.new_page()

    def space(self, h):
        self.y -= h

    # ---------- primitives ----------
    def para(self, text, style=None, gap=6):
        style = style or _p()
        p = Paragraph(text, style)
        w, h = p.wrap(CONTENT_W, self.y - BOTTOM)
        if h > self.y - BOTTOM:
            self.new_page()
            w, h = p.wrap(CONTENT_W, self.y - BOTTOM)
        p.drawOn(self.c, LM, self.y - h)
        self.y -= h + gap

    def para_w(self, text, x, w, style=None, gap=0):
        style = style or _p()
        p = Paragraph(text, style)
        _, h = p.wrap(w, 400)
        p.drawOn(self.c, x, self.y - h)
        return h

    def rule(self, color=RULE, w=0.7, gap=10):
        self.ensure(gap + 4)
        self.c.setStrokeColor(color); self.c.setLineWidth(w)
        self.c.line(LM, self.y, PAGE_W - RM, self.y)
        self.y -= gap

    def doc_title_block(self, top=None, tight=False):
        c = self.c
        self.y = top if top is not None else (PAGE_H - 150)
        gap1, gap2, gap3 = (22, 14, 16) if tight else (30, 22, 22)
        c.setFillColor(GOLD); c.setFont(MONO, 9)
        c.drawString(LM, self.y, self.docid.upper())
        self.y -= gap1
        # title (may wrap)
        h = self.para_w(self.title, LM, CONTENT_W, _p(self.title, DISPLAY, 30, 34, BLUE))
        self.y -= h + 8
        h = self.para_w(self.subtitle, LM, CONTENT_W, _p(self.subtitle, DISPLAY_I, 14.5, 19, MID))
        self.y -= h + gap2
        c.setStrokeColor(GOLD); c.setLineWidth(2)
        c.line(LM, self.y, LM + 90, self.y)
        self.y -= gap3

    def h1(self, text):
        self.ensure(46)
        self.c.setFillColor(BLUE)
        self.c.setFont(DISPLAY, 16)
        self.c.drawString(LM, self.y, text)
        self.y -= 8
        self.c.setStrokeColor(GOLD); self.c.setLineWidth(1.4)
        self.c.line(LM, self.y, LM + 34, self.y)
        self.y -= 16

    def sec_band(self, number, title):
        """Gold-accented section header band."""
        self.ensure(40)
        c = self.c
        bh = 26
        c.setFillColor(BLUE)
        c.roundRect(LM, self.y - bh, CONTENT_W, bh, 5, fill=1, stroke=0)
        c.setFillColor(GOLD)
        c.roundRect(LM, self.y - bh, 5, bh, 2, fill=1, stroke=0)
        c.setFont(MONO, 8.5); c.setFillColor(GOLD)
        c.drawString(LM + 16, self.y - 17, str(number))
        c.setFont(BODYB, 11.5); c.setFillColor(WHITE)
        c.drawString(LM + 46, self.y - 17.5, title)
        self.y -= bh + 14

    def label(self, text, size=9.6, color=INK, font=BODYB, gap=5, indent=0):
        self.ensure(size + gap + 2)
        self.c.setFont(font, size); self.c.setFillColor(color)
        self.c.drawString(LM + indent, self.y - size, text)
        self.y -= size + gap

    def note(self, text, gap=8):
        self.para(text, _p(text, BODYF, 9.4, 13.2, MID), gap=gap)

    # ---------- form fields ----------
    def _field_common(self):
        return dict(borderColor=RULE, fillColor=FIELDBG, textColor=INK,
                    borderWidth=0.8, forceBorder=True)

    def text_field(self, name, x, y, w, h, multiline=False, size=10):
        self.c.acroForm.textfield(
            name=name, x=x, y=y, width=w, height=h,
            fontName=BODYF, fontSize=size,
            fieldFlags='multiline' if multiline else '',
            **self._field_common())

    def labeled_line(self, label, base, w=None, lab_w=None):
        """Label on the left, single-line box filling the rest of the row."""
        self.ensure(24)
        self.c.setFont(BODYB, 9.6); self.c.setFillColor(INK)
        lab_w = lab_w or (stringWidth(label, BODYB, 9.6) + 10)
        self.c.drawString(LM, self.y - 13, label)
        bx = LM + lab_w
        bw = (w or (PAGE_W - RM - bx))
        self.text_field(self.fid(base), bx, self.y - 18, bw, 16)
        self.y -= 26

    def two_up(self, l1, b1, l2, b2):
        """Two labeled single-line fields side by side."""
        self.ensure(24)
        colw = CONTENT_W / 2
        c = self.c
        for (lab, base, x) in [(l1, b1, LM), (l2, b2, LM + colw)]:
            c.setFont(BODYB, 9.6); c.setFillColor(INK)
            lw = stringWidth(lab, BODYB, 9.6) + 8
            c.drawString(x, self.y - 13, lab)
            bw = colw - lw - 14
            self.text_field(self.fid(base), x + lw, self.y - 18, bw, 16)
        self.y -= 26

    def comment(self, name, lines=2, lab="Comments"):
        h = 15 * lines
        self.ensure(h + 20)
        if lab:
            self.c.setFont(DISPLAY_I, 9); self.c.setFillColor(MID)
            self.c.drawString(LM, self.y - 10, lab)
            self.y -= 15
        self.text_field(self.fid(name), LM, self.y - h, CONTENT_W, h, multiline=True)
        self.y -= h + 10

    def rating(self, statement, name, lo="1 low", hi="5 high"):
        """A statement with an inline 1–5 radio group."""
        self.ensure(26)
        c = self.c
        c.setFont(BODYF, 9.8); c.setFillColor(INK)
        # wrap statement to leave room for the scale on the right
        scale_w = 168
        st_w = CONTENT_W - scale_w
        h = self.para_w(statement, LM, st_w, _p(statement, BODYF, 9.8, 13, INK))
        rowh = max(h, 18)
        gname = self.fid(name)
        # radios along the right
        rx = LM + st_w + 6
        cy = self.y - 13
        c.setFont(MONO, 7); c.setFillColor(MID)
        for i in range(1, 6):
            self.c.acroForm.radio(name=gname, value=str(i), selected=False,
                                  x=rx, y=cy - 6, size=12, buttonStyle='circle',
                                  borderColor=MID, fillColor=WHITE, textColor=BLUE,
                                  borderWidth=0.8, forceBorder=True)
            c.setFont(MONO, 7.5); c.setFillColor(MID)
            c.drawCentredString(rx + 6, cy - 15, str(i))
            rx += 28
        self.y -= rowh + 12

    def radio_group(self, name, options, cols=None, gap_after=10, box=True):
        """A standalone radio group; options is a list of labels."""
        gname = self.fid(name)
        cols = cols or len(options)
        colw = CONTENT_W / cols
        rows = (len(options) + cols - 1) // cols
        self.ensure(rows * 20 + gap_after)
        c = self.c
        for idx, opt in enumerate(options):
            r, col = divmod(idx, cols)
            x = LM + col * colw
            yy = self.y - r * 20
            c.acroForm.radio(name=gname, value=opt.replace(" ", "_"), selected=False,
                             x=x, y=yy - 13, size=11, buttonStyle='circle',
                             borderColor=MID, fillColor=WHITE, textColor=BLUE,
                             borderWidth=0.8, forceBorder=True)
            c.setFont(BODYF, 9.4); c.setFillColor(INK)
            c.drawString(x + 16, yy - 11, opt)
        self.y -= rows * 20 + gap_after

    def check_group(self, name_prefix, options, cols=1, gap_after=10):
        cols = cols or 1
        colw = CONTENT_W / cols
        rows = (len(options) + cols - 1) // cols
        self.ensure(rows * 19 + gap_after)
        c = self.c
        for idx, opt in enumerate(options):
            r, col = divmod(idx, cols)
            x = LM + col * colw
            yy = self.y - r * 19
            c.acroForm.checkbox(name=self.fid(name_prefix), x=x, y=yy - 12,
                                size=11, checked=False, buttonStyle='check',
                                borderColor=MID, fillColor=WHITE, textColor=BLUE,
                                borderWidth=0.8, forceBorder=True)
            c.setFont(BODYF, 9.4); c.setFillColor(INK)
            c.drawString(x + 16, yy - 10, opt)
        self.y -= rows * 19 + gap_after

    def save(self):
        self.c.showPage()
        self.c.save()
