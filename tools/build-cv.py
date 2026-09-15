# Builds Mustafa Hadi's CV as a clean, ATS-friendly single-column docx.
# usage: python build_cv.py OUT.docx [body_pt] [margin_in]
import sys
from docx import Document
from docx.shared import Pt, Inches, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH, WD_TAB_ALIGNMENT
from docx.oxml.ns import qn
from docx.oxml import OxmlElement

OUT = sys.argv[1]
BODY = float(sys.argv[2]) if len(sys.argv) > 2 else 10.0
MARGIN = float(sys.argv[3]) if len(sys.argv) > 3 else 0.5
FONT = "Calibri"
TEXT_W = 8.5 - 2 * MARGIN
ACCENT = RGBColor(0x8B, 0x00, 0x00)
GREY = RGBColor(0x40, 0x40, 0x40)

doc = Document()
sec = doc.sections[0]
sec.page_width, sec.page_height = Inches(8.5), Inches(11)
sec.left_margin = sec.right_margin = Inches(MARGIN)
sec.top_margin = sec.bottom_margin = Inches(max(MARGIN - 0.05, 0.3))

st = doc.styles["Normal"]
st.font.name = FONT
st.font.size = Pt(BODY)
st.element.rPr.rFonts.set(qn("w:eastAsia"), FONT)
st.paragraph_format.space_before = Pt(0)
st.paragraph_format.space_after = Pt(0)
st.paragraph_format.line_spacing = 1.0
st.paragraph_format.widow_control = False


def para(text="", size=None, bold=False, italic=False, align=None, before=0, after=0, color=None):
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(before)
    p.paragraph_format.space_after = Pt(after)
    if align is not None:
        p.alignment = align
    if text:
        r = p.add_run(text)
        r.bold, r.italic = bold, italic
        if size:
            r.font.size = Pt(size)
        if color:
            r.font.color.rgb = color
    return p


def run(p, text, bold=False, italic=False, size=None, color=None):
    r = p.add_run(text)
    r.bold, r.italic = bold, italic
    if size:
        r.font.size = Pt(size)
    if color:
        r.font.color.rgb = color
    return r


def hyperlink(p, url, text):
    r_id = p.part.relate_to(
        url, "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink", is_external=True)
    h = OxmlElement("w:hyperlink")
    h.set(qn("r:id"), r_id)
    r = OxmlElement("w:r")
    rPr = OxmlElement("w:rPr")
    c = OxmlElement("w:color"); c.set(qn("w:val"), "1F4E79"); rPr.append(c)
    u = OxmlElement("w:u"); u.set(qn("w:val"), "single"); rPr.append(u)
    r.append(rPr)
    t = OxmlElement("w:t"); t.text = text; t.set(qn("xml:space"), "preserve")
    r.append(t)
    h.append(r)
    p._p.append(h)


def heading(text):
    p = para(text.upper(), size=BODY + 1, bold=True, before=3, after=1, color=ACCENT)
    pPr = p._p.get_or_add_pPr()
    bdr = OxmlElement("w:pBdr")
    bottom = OxmlElement("w:bottom")
    for k, v in (("w:val", "single"), ("w:sz", "6"), ("w:space", "1"), ("w:color", "8B0000")):
        bottom.set(qn(k), v)
    bdr.append(bottom)
    pPr.append(bdr)
    return p


def right_tab(p):
    p.paragraph_format.tab_stops.add_tab_stop(Inches(TEXT_W), WD_TAB_ALIGNMENT.RIGHT)


def entry(title, org, right, sub=None):
    p = para(before=3)
    right_tab(p)
    run(p, title, bold=True)
    if org:
        run(p, " — " + org, bold=True)
    run(p, "\t" + right, italic=True)
    if sub:
        para(sub, italic=True, color=GREY)


def bullet(text):
    p = doc.add_paragraph()
    pf = p.paragraph_format
    pf.left_indent = Inches(0.17)
    pf.first_line_indent = Inches(-0.12)
    pf.space_after = Pt(0.5)
    run(p, "•  " + text)
    return p


def project(name, stack, url, label):
    p = para(before=3)
    right_tab(p)
    run(p, name, bold=True)
    run(p, " — " + stack + "\t")
    hyperlink(p, url, label)


def line(label, text):
    p = para(after=0.5)
    run(p, label + ": ", bold=True)
    run(p, text)


# ── Header ──────────────────────────────────────────────────────────────────
para("MUSTAFA HADI", size=18, bold=True, align=WD_ALIGN_PARAGRAPH.CENTER, color=ACCENT)
p = para(align=WD_ALIGN_PARAGRAPH.CENTER)
run(p, "Clive, IA 50325  |  (515) 444-6495  |  ")
hyperlink(p, "mailto:mustafahadi053@gmail.com", "mustafahadi053@gmail.com")
run(p, "  |  U.S. Citizen")
p = para(align=WD_ALIGN_PARAGRAPH.CENTER, after=2)
hyperlink(p, "https://niklausv.github.io/My-Portfolio/", "niklausv.github.io/My-Portfolio")
run(p, "  |  ")
hyperlink(p, "https://github.com/NiklausV", "github.com/NiklausV")
run(p, "  |  ")
hyperlink(p, "https://www.linkedin.com/in/mustafa-hadi-0aa967312/", "linkedin.com/in/mustafa-hadi-0aa967312")

# ── Summary ─────────────────────────────────────────────────────────────────
heading("Summary")
para("Founder-engineer and WGU Software Engineering student (B.S. expected Jan 2027) seeking a Software Engineering "
     "internship in Iowa. Founder of Vextora AI Solutions and IronOS: I ship production systems "
     "end to end with Next.js/TypeScript, Supabase/PostgreSQL, Stripe, and n8n on Vercel, AWS, and Azure.",
     after=1)

# ── Education ───────────────────────────────────────────────────────────────
heading("Education")
entry("Western Governors University", "B.S. Software Engineering (Clive, IA)", "Expected Jan 2027")

heading("Certifications")
bullet("Harvard CS50: Introduction to Computer Science, Python, and SQL — Completed Dec 2024")
bullet("Expected Jan 2027: AWS Certified Cloud Practitioner · CompTIA Project+ · AXELOS ITIL 4 Foundation · CIW JavaScript "
       "Specialist · CIW User Interface Designer · CIW Advanced HTML5 & CSS3 Specialist · WGU Certified Front-End & Back-End Developer")

# ── Experience ──────────────────────────────────────────────────────────────
heading("Experience")
entry("Founder & Software Engineer", "Vextora AI Solutions", "Clive, IA  ·  Apr 2026 – Present",
      "AI-powered web presence and lead-generation agency for local service businesses; I build and operate every layer.")
bullet("Shipped production client websites and an admin CMS with Next.js, TypeScript, Tailwind, and Supabase (PostgreSQL, "
       "Auth, Row-Level Security) on Vercel with preview and production environments; closed and delivered the agency's "
       "first paying client.")
bullet("Designed a multi-tenant PostgreSQL schema (leads, deals, contracts, commissions, events) behind a 7,000+ lead CRM; "
       "built a Python scraping and dedupe pipeline and a sales-rep portal with magic-link auth, clickwrap e-signature, "
       "Stripe deposit links, and webhook-verified payments.")
bullet("Automated research, scoring, outreach drafting, and nurture (n8n in Docker, Node scripts, Resend + Calendly webhooks "
       "on Vercel Cron) behind a default-deny send gate with a TCPA / CAN-SPAM compliance checklist.")
bullet("Architected a standalone Microsoft Azure stack (App Service, Azure Database for PostgreSQL + pgvector, Entra External ID, "
       "Blob Storage) for a healthcare-adjacent client and evaluated AWS alternatives for cost and compliance.")

entry("Founder & Lead Engineer", "IronOS", "Remote  ·  Apr 2026 – Present",
      "SaaS platform that gives powerlifting coaches an AI content engine, client onboarding, and subscription billing.")
bullet("Built the product in Next.js / TypeScript with Supabase (PostgreSQL), Clerk auth, and Stripe subscriptions; shipped "
       "self-serve checkout, webhook-driven coach provisioning, and automated setup pipelines across 1,000+ commits.")
bullet("Maintain a 1,600+ automated test suite with zero TypeScript errors on a production Vercel deployment; hardened "
       "secrets handling and key rotation.")
bullet("Designed a 12-agent AI operations system with a Next.js + Supabase Realtime dashboard; integrated OpenAI and "
       "Anthropic APIs with cost controls.")

entry("Buying Coordinator", "Crunchyroll", "Sep 2025 – Present")
bullet("Built Excel KPI dashboards and NetSuite / RF-SMART analyses that cut data discrepancies 25%, improved team "
       "efficiency 18%, and reduced report response times 20%.")

entry("Federation Athlete & Coach", "Powerlifting America", "Feb 2023 – Present")
bullet("Lead a team of 5 coaches serving 30+ athletes; design periodized, biomechanics-based programs and ran a campaign "
       "that grew athlete acquisition 250%.")

# ── Projects ────────────────────────────────────────────────────────────────
heading("Projects")
project("AI Resume Screening Bot", "Python, Flask, scikit-learn, React, Tailwind",
        "https://github.com/NiklausV/Resume-Screening-Bot", "github.com/NiklausV/Resume-Screening-Bot")
bullet("Full-stack NLP app that scores resumes against job descriptions with TF-IDF + cosine similarity, cutting false-positive "
       "matches 40% versus keyword search; parses PDF and DOCX in under 5 seconds; CI/CD to Vercel and Heroku.")
project("Chat Vibe", "Next.js, Node/Express, Socket.IO, MongoDB, JWT",
        "https://github.com/NiklausV/Chat-Vibe", "github.com/NiklausV/Chat-Vibe")
bullet("Real-time messaging with authenticated WebSocket connections, bcrypt-hashed credentials, email password recovery, "
       "and notifications; 99.9% delivery reliability in testing.")
project("MyGit", "Node.js, Express, React (Vite), Commander.js",
        "https://github.com/NiklausV/Own-Version-git", "github.com/NiklausV/Own-Version-git")
bullet("Git re-implementation with SHA-1 content-addressable storage, staging, commits, branches, and a side-by-side visual "
       "diff viewer served through a REST API and CLI.")

# ── Skills ──────────────────────────────────────────────────────────────────
heading("Skills")
line("Languages & Frameworks", "TypeScript, JavaScript, Python, Java, SQL, C++, HTML/CSS · React, Next.js, Node.js/Express, "
     "Flask, Spring Boot, Tailwind CSS, Socket.IO, React Native")
line("Cloud & Infrastructure", "Vercel (serverless functions, cron, preview deploys), Supabase (PostgreSQL, Auth, RLS, Realtime, "
     "Edge Functions), AWS (EC2, S3, IAM, Lambda fundamentals), Microsoft Azure (App Service, Azure Database for PostgreSQL, "
     "Entra ID, Blob Storage), Docker, Cloudflare DNS, GitHub Actions CI/CD")
line("Data, Tools & Practices", "PostgreSQL, MongoDB, Stripe API, Clerk, n8n, REST APIs, Git/GitHub, Playwright, Vitest, "
     "Excel (pivot tables), Power BI (DAX) · data structures & algorithms, test-driven development, code review, agile delivery")

# Modern Word compatibility (Word 2013+), so the file does not open in "Compatibility Mode".
settings = doc.settings.element
compat = settings.find(qn("w:compat"))
if compat is None:
    compat = OxmlElement("w:compat")
    settings.append(compat)
for cs in list(compat.findall(qn("w:compatSetting"))):
    if cs.get(qn("w:name")) == "compatibilityMode":
        compat.remove(cs)
cs = OxmlElement("w:compatSetting")
cs.set(qn("w:name"), "compatibilityMode")
cs.set(qn("w:uri"), "http://schemas.microsoft.com/office/word")
cs.set(qn("w:val"), "15")
compat.append(cs)

doc.save(OUT)
print("saved", OUT)
