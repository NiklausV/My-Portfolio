import { useState, useEffect, useRef } from 'react'
import { motion, useInView, AnimatePresence, useScroll, useTransform } from 'motion/react'
import {
  Mail, Phone, ExternalLink,
  Award, Code2, GraduationCap, Menu, X,
  ChevronDown, Terminal, Zap, Shield,
  ArrowUpRight, Circle
} from 'lucide-react'
import FlowFieldBackground from './components/ui/FlowFieldBackground'
import './index.css'

const GithubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
)

const LinkedinIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

// ─── Data ────────────────────────────────────────────────────────────────────
const DATA = {
  name: "Mustafa Hadi",
  role: "Full Stack Developer",
  roleAlt: "Software Engineer / AI Engineer",
  tagline: "Building elegant solutions to complex problems. Experienced in Full Stack Web Dev, App Development, APIs, and Data Systems.",
  email: "Mustafahadi053@gmail.com",
  phone: "+1 (515) 444-6495",
  github: "https://github.com/NiklausV",
  linkedin: "https://www.linkedin.com/in/mustafa-hadi-",
  resumeLink: "https://1drv.ms/w/c/75B06AAA3EF144F3/ASt5R-A6lktPnSt23N11PJE?e=vZg6FC",
  profileImage: `${import.meta.env.BASE_URL}me_new.png`,

  education: {
    degree: "B.S. Software Engineering (Java focus)",
    school: "Western Governors University",
    graduationDate: null
  },

  interests: ["Web Development","Machine Learning","Cloud Architecture","App Development","Open Source","UI/UX Design","Team Leadership","Data Analysis"],

  certifications: [
    { name: "CS50 Intro to Computer Science", year: "2024" },
    { name: "CS50 Intro to Python", year: "2024" },
    { name: "CS50 Intro to SQL", year: "2024" },
    { name: "CIW JavaScript Specialist", year: "2025" },
    { name: "CIW User Interface Designer", year: "2025" },
    { name: "CIW Advanced HTML5 & CSS3 Specialist", year: "2025" },
    { name: "CompTIA Project+", year: "2026" },
    { name: "AWS Certified Cloud Practitioner", year: "2026" },
    { name: "AXELOS ITIL Foundations", year: "2026" },
    { name: "WGU Certified Back End Developer", year: "2026" },
    { name: "WGU Certified Front End Developer", year: "2026" }
  ],

  awards: [
    { name: "Capstone Project Selected for Department Showcase", year: "2023" },
    { name: "Built Top-Rated App for Community Use", year: "2024" },
    { name: "Process Optimization Recognition", year: "2024" },
    { name: "Excellence in Data Reporting", year: "2024" },
    { name: "Powerlifting Coach / Athlete in PA", year: "2024" }
  ],

  experience: [
    {
      title: "Buying Coordinator",
      company: "Crunchyroll",
      period: "Sep 2025 – Present",
      description: "Managed and optimized operational data across multiple systems to support business performance. Built advanced KPI dashboards, analyzed data from NetSuite and RF-SMART, and collaborated with cross-functional teams.",
      highlights: [
        "Standardized product data, reducing discrepancies by 25%",
        "Built KPI dashboards in Excel, boosting team efficiency by 18%",
        "Improved order fulfillment accuracy by 12% via NetSuite analysis",
        "Cut response times by 20% through daily/weekly operational reports",
        "Improved project completion timelines by 10% via workflow streamlining"
      ],
      skills: ["Microsoft Excel","Oracle NetSuite","RF-SMART","OMS TechSys","Data Analysis","Reporting","Process Optimization"]
    },
    {
      title: "Federation Athlete & Coach",
      company: "Powerlifting America (PA)",
      period: "Feb 2023 – Present",
      description: "Led strength coaching for competitive athletes using biomechanics, exercise physiology, and data-driven performance strategies. Managed athlete pipelines and ran marketing campaigns.",
      highlights: [
        "Designed individualized programs using progressive overload and periodization",
        "Managed coaching team of 5+ serving 30+ athletes",
        "Ran campaigns resulting in 250% increase in athlete acquisition",
        "Conducted motion analysis using physics-based models",
        "Educated clients on neuromuscular adaptation and injury prevention"
      ],
      skills: ["Biomechanics","Exercise Physiology","Periodization Design","Performance Analytics","Marketing","Team Leadership"]
    }
  ],

  skills: {
    "Programming": ["Python","Java","JavaScript","HTML/CSS","SQL","C++","Spring Boot","Node.js","React","React Native","Pandas","Tailwind CSS","Django","AI Automation","AI Workflows","AI Building","AI Skills","AI Agents"],
    "Technical": ["Data Structures & Algorithms","Data Analysis","Backend Development","REST APIs","JSON / ENV Config","Git / Version Control","Excel (VLOOKUP, Pivot Tables)","Power BI (DAX, Data Modeling)"],
    "Platforms": ["Linux","Windows","macOS","AWS","GitHub"],
    "Domain": ["Biomechanics & Force Analysis","Exercise Physiology","Athlete Performance Analytics","Technical Documentation","Project & Time Management","Client Communication & Coaching"]
  },

  projects: [
    {
      title: "AI Resume Screening Bot",
      description: "Full-stack ML application that analyzes resumes against job descriptions using NLP, providing candidate evaluation with detailed insights and scoring.",
      techStack: ["Python","Flask","Scikit-learn","PyPDF2","React","Tailwind CSS"],
      features: ["PDF & DOCX Support","Holistic AI Analysis","Smart Scoring","Actionable Insights","Real-time Results"],
      github: "https://github.com/NiklausV/Resume-Screening-Bot",
      image: `${import.meta.env.BASE_URL}resume-bot.png`,
      tag: "ML / NLP"
    },
    {
      title: "Chat Vibe",
      description: "Feature-rich real-time messaging platform with Socket.IO, JWT authentication, profile customization, and mobile-optimized UI.",
      techStack: ["React","Next.js","Socket.IO","Express.js","MongoDB","JWT","Nodemailer"],
      features: ["Instant messaging with typing indicators","JWT auth + bcrypt","Block/unblock & contact lists","Toast & sound notifications","Group & 1-on-1 conversations"],
      github: "https://github.com/NiklausV/Chat-Vibe",
      image: `${import.meta.env.BASE_URL}chat-vibe.png`,
      tag: "Full Stack"
    },
    {
      title: "MyGit (Version Control System)",
      description: "Custom Git implementation from scratch with an interactive visual diff viewer. Demonstrates deep understanding of version control internals and SHA-1 content-addressable storage.",
      techStack: ["Node.js","Express.js","React","Vite","Tailwind CSS","SHA-1","Commander.js"],
      features: ["Init, add, commit, log, status, diff","GitHub-style side-by-side diff UI","Branch create/switch/manage","Full-featured REST API","Keyboard shortcuts"],
      github: "https://github.com/NiklausV/Own-Version-git",
      image: `${import.meta.env.BASE_URL}mygit.png`,
      tag: "Systems"
    }
  ]
}

// ─── Reusable Components ──────────────────────────────────────────────────────
const FadeIn = ({ children, delay = 0, className = '' }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

const SectionLabel = ({ children }) => (
  <span className="mono text-xs tracking-[0.2em] uppercase text-red-500 border border-red-500/30 px-3 py-1 rounded-sm">
    {children}
  </span>
)

const AccentDot = () => (
  <span className="inline-block w-2 h-2 rounded-full bg-red-500 mr-2 glow-red" />
)

// ─── Navigation ───────────────────────────────────────────────────────────────
function Nav({ active, scrollTo }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = ['home', 'about', 'experience', 'projects', 'contact']

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050505]/90 backdrop-blur-xl border-b border-[#1c1c1c]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <button
          onClick={() => scrollTo('home')}
          className="flex items-center gap-2 cursor-pointer"
        >
          <span className="mono text-red-500 text-sm font-semibold tracking-wider">
            MH<span className="cursor-blink text-red-500">_</span>
          </span>
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className={`px-4 py-2 mono text-sm capitalize cursor-pointer transition-all duration-200 rounded ${
                active === l
                  ? 'text-red-500 bg-red-500/10'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {l}
            </button>
          ))}
          <a
            href={DATA.resumeLink}
            target="_blank"
            rel="noreferrer"
            className="ml-4 px-4 py-2 bg-red-600 hover:bg-red-500 text-white text-sm font-bold mono rounded transition-all duration-200 flex items-center gap-1"
          >
            Resume <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-zinc-300 cursor-pointer"
          onClick={() => setOpen(v => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#050505]/95 border-t border-[#1c1c1c] overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {links.map(l => (
                <button
                  key={l}
                  onClick={() => { scrollTo(l); setOpen(false) }}
                  className="text-left py-2 text-zinc-300 capitalize mono text-sm hover:text-red-500 transition cursor-pointer"
                >
                  {l}
                </button>
              ))}
              <a
                href={DATA.resumeLink}
                target="_blank"
                rel="noreferrer"
                className="mt-2 py-2 text-center bg-red-600 text-white font-bold mono text-sm rounded"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero({ scrollTo }) {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 400], [0, -80])

  const typewriterPhrases = ["Full Stack Developer", "Software Engineer", "API Builder", "ML Enthusiast"]
  const [phraseIdx, setPhraseIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const phrase = typewriterPhrases[phraseIdx]
    if (typing) {
      if (displayed.length < phrase.length) {
        const t = setTimeout(() => setDisplayed(phrase.slice(0, displayed.length + 1)), 60)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setTyping(false), 2000)
        return () => clearTimeout(t)
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
        return () => clearTimeout(t)
      } else {
        setPhraseIdx(i => (i + 1) % typewriterPhrases.length)
        setTyping(true)
      }
    }
  }, [displayed, typing, phraseIdx])

  return (
    <section id="home" className="relative min-h-screen flex items-center px-6 overflow-hidden">
      {/* Flow field — lowest z layer */}
      <FlowFieldBackground
        color="#7f1d1d"
        trailOpacity={0.06}
        particleCount={350}
        speed={0.6}
      />
      {/* Subtle grid on top of flow field */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(239,68,68,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.025)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      {/* Side glow */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full bg-red-950/20 blur-[120px] pointer-events-none -translate-x-1/2" />

      <div className="relative z-10 max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 lg:gap-20 items-center pt-24 pb-16">

        {/* Left column */}
        <motion.div style={{ y }}>
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-red-500/5 border border-red-500/20 rounded-full"
          >
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="mono text-xs text-zinc-400">Available for opportunities</span>
          </motion.div>

          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="font-black leading-[0.9] tracking-tight mb-6" style={{ fontSize: 'clamp(3.5rem, 8vw, 6rem)' }}>
              <span className="block text-white">Crafting</span>
              <span className="block text-white">Digital</span>
              <span className="block text-red-500 shimmer-text">Excellence.</span>
            </h1>
          </motion.div>

          {/* Name */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mono text-zinc-500 text-sm mb-3 tracking-widest uppercase"
          >
            — Mustafa Hadi
          </motion.p>

          {/* Typewriter role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="h-8 mb-5 flex items-center"
          >
            <span className="mono text-lg text-red-500">
              {displayed}<span className="cursor-blink">|</span>
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="text-zinc-400 text-base max-w-md mb-10 leading-relaxed"
          >
            {DATA.tagline}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            <button
              onClick={() => scrollTo('projects')}
              className="px-6 py-3 bg-red-600 hover:bg-red-500 text-white font-bold text-sm mono rounded transition-all duration-200 cursor-pointer flex items-center gap-2"
            >
              <Zap size={15} /> View Projects
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="px-6 py-3 border border-[#2e2e2e] hover:border-red-500/50 text-zinc-300 hover:text-red-400 font-semibold text-sm mono rounded transition-all duration-200 cursor-pointer"
            >
              Get In Touch
            </button>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex gap-3"
          >
            {[
              { href: DATA.github, Icon: GithubIcon, label: 'GitHub' },
              { href: DATA.linkedin, Icon: LinkedinIcon, label: 'LinkedIn' },
              { href: `mailto:${DATA.email}`, Icon: Mail, label: 'Email' },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="p-3 border border-[#1c1c1c] hover:border-red-500/40 hover:bg-red-500/5 text-zinc-500 hover:text-red-400 rounded-lg transition-all duration-200"
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right column — profile photo */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="hidden md:flex items-center justify-center"
        >
          <div className="relative flex flex-col items-center gap-5">
            {/* Outer spinning ring */}
            <div className="relative">
              {/* Animated glow ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-[3px] rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, #ef4444, #7f1d1d, #050505, #7f1d1d, #ef4444)',
                  borderRadius: '50%',
                }}
              />
              {/* Static glow beneath */}
              <div
                className="absolute -inset-[10px] rounded-full pointer-events-none"
                style={{ boxShadow: '0 0 60px 10px rgba(239,68,68,0.18)' }}
              />
              {/* Photo circle */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden">
                <img
                  src={DATA.profileImage}
                  alt="Mustafa Hadi"
                  className="w-full h-full object-cover scale-[1.05]"
                  style={{ objectPosition: 'center 8%' }}
                  loading="eager"
                  decoding="sync"
                  fetchpriority="high"
                />
              </div>
            </div>

            {/* Name badge below circle */}
            <div className="text-center">
              <p className="font-bold text-white text-lg leading-tight">{DATA.name}</p>
              <p className="mono text-red-400 text-xs mt-1 tracking-widest uppercase">{DATA.role}</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade — dissolves hero into next section */}
      <div className="absolute inset-x-0 bottom-0 h-40 pointer-events-none z-20" style={{ background: 'linear-gradient(to top, #050505 30%, transparent)' }} />

      {/* Scroll cue */}
      <motion.button
        onClick={() => scrollTo('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer text-zinc-700 hover:text-red-500 transition-colors"
        aria-label="Scroll down"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
          <ChevronDown size={28} />
        </motion.div>
      </motion.button>
    </section>
  )
}

// ─── About ────────────────────────────────────────────────────────────────────
function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-16">
          <SectionLabel>About</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-black mt-4 mb-4">Background & Credentials</h2>
          <p className="text-zinc-500 max-w-xl mx-auto">Driven developer with a foundation in software engineering and a track record across data, systems, and performance domains.</p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Education */}
          <FadeIn delay={0.1}>
            <div className="h-full p-6 bg-[#0d0d0d] border border-[#1c1c1c] rounded-xl hover:border-red-500/20 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-red-500/10 rounded-lg">
                  <GraduationCap size={20} className="text-red-500" />
                </div>
                <h3 className="font-bold text-lg">Education</h3>
              </div>
              <p className="font-semibold text-white mb-1">{DATA.education.degree}</p>
              <p className="text-zinc-400 text-sm">{DATA.education.school}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {DATA.interests.map(i => (
                  <span key={i} className="px-2 py-1 bg-[#151515] border border-[#2a2a2a] text-zinc-400 text-xs rounded">
                    {i}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Certifications */}
          <FadeIn delay={0.2}>
            <div className="h-full p-6 bg-[#0d0d0d] border border-[#1c1c1c] rounded-xl hover:border-red-500/20 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-red-500/10 rounded-lg">
                  <Shield size={20} className="text-red-500" />
                </div>
                <h3 className="font-bold text-lg">Certifications</h3>
              </div>
              <ul className="space-y-2">
                {DATA.certifications.map(c => (
                  <li key={c.name} className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 text-zinc-300">
                      <AccentDot />{c.name}
                    </span>
                    <span className="mono text-xs text-zinc-600 shrink-0 ml-2">{c.year}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Awards */}
          <FadeIn delay={0.3} className="md:col-span-2">
            <div className="p-6 bg-[#0d0d0d] border border-[#1c1c1c] rounded-xl hover:border-red-500/20 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-red-500/10 rounded-lg">
                  <Award size={20} className="text-red-500" />
                </div>
                <h3 className="font-bold text-lg">Awards & Recognition</h3>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {DATA.awards.map(a => (
                  <div key={a.name} className="flex items-start gap-2 p-3 bg-[#111111] rounded-lg border border-[#222222]">
                    <Zap size={14} className="text-red-500 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm text-zinc-200 font-medium">{a.name}</p>
                      <p className="mono text-xs text-zinc-600">{a.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

// ─── Tech Stack ───────────────────────────────────────────────────────────────
const TECH_ICONS = [
  { name: 'Python',      slug: 'python',              variant: 'original', color: '#3776AB', bg: 'rgba(55,118,171,0.1)' },
  { name: 'JavaScript',  slug: 'javascript',          variant: 'original', color: '#F7DF1E', bg: 'rgba(247,223,30,0.1)'  },
  { name: 'Java',        slug: 'java',                variant: 'original', color: '#f89820', bg: 'rgba(248,152,32,0.1)'  },
  { name: 'HTML5',       slug: 'html5',               variant: 'original', color: '#E34F26', bg: 'rgba(227,79,38,0.1)'   },
  { name: 'CSS3',        slug: 'css3',                variant: 'original', color: '#1572B6', bg: 'rgba(21,114,182,0.1)'  },
  { name: 'React',       slug: 'react',               variant: 'original', color: '#61DAFB', bg: 'rgba(97,218,251,0.1)'  },
  { name: 'Node.js',     slug: 'nodejs',              variant: 'original', color: '#5FA04E', bg: 'rgba(95,160,78,0.1)'   },
  { name: 'C++',         slug: 'cplusplus',           variant: 'original', color: '#00599C', bg: 'rgba(0,89,156,0.1)'    },
  { name: 'Django',      slug: 'django',              variant: 'plain',    color: '#44B78B', bg: 'rgba(68,183,139,0.1)'  },
  { name: 'Tailwind',    slug: 'tailwindcss',         variant: 'original', color: '#06B6D4', bg: 'rgba(6,182,212,0.1)'   },
  { name: 'Spring Boot', slug: 'spring',              variant: 'original', color: '#6DB33F', bg: 'rgba(109,179,63,0.1)'  },
  { name: 'SQL',         slug: 'postgresql',          variant: 'original', color: '#4169E1', bg: 'rgba(65,105,225,0.1)'  },
  { name: 'Git',         slug: 'git',                 variant: 'original', color: '#F05032', bg: 'rgba(240,80,50,0.1)'   },
  { name: 'AWS',         slug: 'amazonwebservices',   variant: 'original', color: '#FF9900', bg: 'rgba(255,153,0,0.1)'   },
  { name: 'Linux',       slug: 'linux',               variant: 'original', color: '#FCC624', bg: 'rgba(252,198,36,0.1)'  },
  { name: 'GitHub',      slug: 'github',              variant: 'original', color: '#ffffff', bg: 'rgba(255,255,255,0.07)' },
]

function TechStack() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-14">
          <SectionLabel>Stack</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-black mt-4">The Tech Stack</h2>
          <p className="text-zinc-500 mt-3 text-sm">Technologies I work with daily</p>
        </FadeIn>

        <div className="flex flex-wrap justify-center gap-4">
          {TECH_ICONS.map((tech, i) => (
            <FadeIn key={tech.slug} delay={i * 0.04}>
              <motion.div
                whileHover={{
                  y: -10,
                  scale: 1.08,
                  transition: { type: 'spring', stiffness: 400, damping: 15 }
                }}
                className="flex flex-col items-center gap-2 p-4 rounded-xl border border-[#1c1c1c] bg-[#0d0d0d] cursor-default w-[88px]"
                style={{
                  '--tech-color': tech.color,
                  '--tech-bg': tech.bg,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = tech.color + '55'
                  e.currentTarget.style.background = tech.bg
                  e.currentTarget.style.boxShadow = `0 8px 32px ${tech.color}22`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = ''
                  e.currentTarget.style.background = ''
                  e.currentTarget.style.boxShadow = ''
                }}
              >
                <img
                  src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech.slug}/${tech.slug}-${tech.variant}.svg`}
                  alt={tech.name}
                  width={40}
                  height={40}
                  loading="lazy"
                  onError={e => {
                    // fallback: colored initial badge if icon fails
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                <span
                  className="hidden w-10 h-10 items-center justify-center rounded-lg text-xs font-bold mono"
                  style={{ background: tech.bg, color: tech.color }}
                >
                  {tech.name.slice(0, 2).toUpperCase()}
                </span>
                <span className="text-[11px] text-zinc-500 text-center leading-tight font-medium">
                  {tech.name}
                </span>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Skills ───────────────────────────────────────────────────────────────────
function Skills() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-14">
          <SectionLabel>Skills</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-black mt-4">Technical Arsenal</h2>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {Object.entries(DATA.skills).map(([cat, items], i) => (
            <FadeIn key={cat} delay={i * 0.1}>
              <div className="p-5 bg-[#0d0d0d] border border-[#1c1c1c] rounded-xl hover:border-red-500/20 transition-all duration-300 h-full">
                <p className="mono text-red-500 text-xs uppercase tracking-widest mb-4 font-semibold">{cat}</p>
                <div className="flex flex-wrap gap-2">
                  {items.map(s => (
                    <motion.span
                      key={s}
                      whileHover={{ scale: 1.05 }}
                      className="px-2 py-1 bg-[#151515] hover:bg-red-500/10 hover:text-red-400 border border-[#2a2a2a] hover:border-red-500/30 text-zinc-400 text-xs rounded cursor-default transition-all duration-150"
                    >
                      {s}
                    </motion.span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Experience ───────────────────────────────────────────────────────────────
function Experience() {
  const [expanded, setExpanded] = useState(null)

  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn className="text-center mb-16">
          <SectionLabel>Experience</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-black mt-4 mb-4">Work & Leadership</h2>
        </FadeIn>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-0 md:left-6 top-0 bottom-0 w-px bg-[#1c1c1c]" />
          <div className="space-y-10 md:pl-16">
            {DATA.experience.map((exp, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div className="relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-[calc(4rem+5px)] md:-left-[calc(4rem-3px)] top-5 w-3 h-3 rounded-full bg-red-500 border-2 border-[#050505] glow-red hidden md:block" />

                  <motion.div
                    layout
                    className="p-6 bg-[#0d0d0d] border border-[#1c1c1c] rounded-xl hover:border-red-500/20 transition-colors duration-300 cursor-pointer"
                    onClick={() => setExpanded(expanded === i ? null : i)}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                        <p className="text-red-500 font-semibold text-sm">{exp.company}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="mono text-xs text-zinc-600 bg-[#111111] px-2 py-1 rounded">{exp.period}</span>
                      </div>
                    </div>

                    <p className="text-zinc-500 text-sm mt-3 leading-relaxed">{exp.description}</p>

                    <AnimatePresence>
                      {expanded === i && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <ul className="mt-4 space-y-2">
                            {exp.highlights.map((h, hi) => (
                              <li key={hi} className="flex items-start gap-2 text-sm text-zinc-300">
                                <span className="text-red-500 mt-1 shrink-0">▹</span>
                                {h}
                              </li>
                            ))}
                          </ul>
                          <div className="flex flex-wrap gap-2 mt-4">
                            {exp.skills.map(s => (
                              <span key={s} className="px-2 py-1 bg-[#111111] text-zinc-500 text-xs rounded mono border border-[#2a2a2a]">
                                {s}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="flex items-center gap-1 mt-3 text-xs text-zinc-700">
                      <span>{expanded === i ? 'Click to collapse' : 'Click to expand'}</span>
                      <ChevronDown size={12} className={`transition-transform duration-200 ${expanded === i ? 'rotate-180' : ''}`} />
                    </div>
                  </motion.div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Projects ─────────────────────────────────────────────────────────────────
function Projects() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-16">
          <SectionLabel>Projects</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-black mt-4 mb-4">Featured Work</h2>
          <p className="text-zinc-500 max-w-lg mx-auto">A selection of projects showcasing full-stack, ML, and systems engineering capabilities.</p>
        </FadeIn>

        <div className="grid lg:grid-cols-3 gap-6">
          {DATA.projects.map((proj, i) => (
            <FadeIn key={i} delay={i * 0.12}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="group flex flex-col bg-[#0d0d0d] border border-[#1c1c1c] rounded-xl overflow-hidden hover:border-red-500/30 transition-colors duration-300 h-full"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/30 to-transparent" />
                  <span className="absolute top-3 right-3 mono text-xs px-2 py-1 bg-[#050505]/80 text-red-500 border border-red-500/30 rounded">
                    {proj.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg font-bold mb-2">{proj.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-4 flex-1">{proj.description}</p>

                  {/* Features */}
                  <ul className="space-y-1 mb-4">
                    {proj.features.slice(0, 3).map(f => (
                      <li key={f} className="flex items-center gap-2 text-xs text-zinc-600">
                        <Circle size={4} className="text-red-500 fill-red-500 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-1 mb-5">
                    {proj.techStack.map(t => (
                      <span key={t} className="px-2 py-0.5 bg-[#111111] text-zinc-500 text-xs rounded mono border border-[#222222]">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 bg-[#111111] hover:bg-red-500/10 hover:text-red-400 border border-[#2a2a2a] hover:border-red-500/40 text-zinc-400 text-sm font-semibold rounded-lg transition-all duration-200"
                  >
                    <GithubIcon size={16} /> View Source
                  </a>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Contact ──────────────────────────────────────────────────────────────────
function Contact() {
  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <FadeIn>
          <SectionLabel>Contact</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-black mt-4 mb-4">Let's Connect</h2>
          <p className="text-zinc-500 mb-12 leading-relaxed">
            Open to new opportunities, collaborations, and interesting problems.<br />
            Let's build something great together.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { href: `mailto:${DATA.email}`, Icon: Mail, label: 'Email', value: DATA.email },
              { href: `tel:${DATA.phone}`, Icon: Phone, label: 'Phone', value: DATA.phone },
              { href: DATA.github, Icon: GithubIcon, label: 'GitHub', value: 'NiklausV' },
              { href: DATA.linkedin, Icon: LinkedinIcon, label: 'LinkedIn', value: 'mustafa-hadi' },
            ].map(({ href, Icon, label, value }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="flex items-center gap-4 p-5 bg-[#0d0d0d] border border-[#1c1c1c] rounded-xl hover:border-red-500/30 hover:bg-red-500/5 transition-all duration-300 group text-left"
              >
                <div className="p-2.5 bg-[#111111] group-hover:bg-red-500/10 rounded-lg transition-colors">
                  <Icon size={20} className="text-red-500" />
                </div>
                <div>
                  <p className="text-xs text-zinc-600 mono uppercase tracking-wider">{label}</p>
                  <p className="text-zinc-200 text-sm font-medium">{value}</p>
                </div>
                <ArrowUpRight size={16} className="text-zinc-700 group-hover:text-red-500 ml-auto transition-colors" />
              </a>
            ))}
          </div>

          <a
            href={DATA.resumeLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-500 text-white font-bold text-sm mono rounded-lg transition-all duration-200"
          >
            <Terminal size={16} /> Download Resume
          </a>
        </FadeIn>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="py-8 px-6 text-center">
      <p className="mono text-xs text-zinc-700">
        © 2025 Mustafa Hadi &nbsp;·&nbsp; Built with React + Vite + Motion
        &nbsp;·&nbsp; <span className="text-red-500/60">Available for hire</span>
      </p>
    </footer>
  )
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [activeSection, setActiveSection] = useState('home')

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setActiveSection(id)
  }

  useEffect(() => {
    const sections = ['home', 'about', 'experience', 'projects', 'contact']
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActiveSection(e.target.id)
        })
      },
      { threshold: 0.3 }
    )
    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen text-white">
      <Nav active={activeSection} scrollTo={scrollTo} />
      <Hero scrollTo={scrollTo} />
      <About />
      <TechStack />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}
