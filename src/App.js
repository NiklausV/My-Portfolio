
import React, { useState } from 'react';
import profilePic from './Images/Me.jpg';
import project1pic from './Images/Project1.jpg';
import project2pic from './Images/Chat-Vibe.png';
import project3pic from './Images/Project3.png';
import { Github, Linkedin, Mail, Phone, ExternalLink, Award, Briefcase, Code, GraduationCap, Menu, X } from 'lucide-react';


export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const portfolioData = {
    name: "Mustafa Hadi",
    role: "Full Stack Developer / Software Engineer",
    tagline: "Building elegant solutions to complex problems with code. Experienced in MS Suite, Full stack web development, App development and API’s.",
    email: "Mustafahadi053@gmail.com",
    phone: "+1 (515) 444-6495",
    github: "https://github.com/NiklausV",
    linkedin: "https://www.linkedin.com/in/mustafa-hadi-?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    resumeLink: "https://1drv.ms/w/c/75b06aaa3ef144f3/ESt5R-A6lktPnSt23N11PJEBfGEd-r0XVacs2HgReYz88A",
    profileImage: profilePic,
    
    about: {
      education: {
        degree: "Bachelor of Science in Software Engineering with a focus on Java.",
        school: "Western Governors University",
        graduationDate: "June 2026"
      },
      interests: [
        "Web Development",
        "Machine Learning",
        "Cloud Architecture",
        "App Development",
        "Open Source Contribution",
        "Analysis",
        "Ui/UX Design",
        "Team Leadership"
      ],
      certifications: [
        { name: "CS50 Intro to Computer Science", year: "2024" },
        { name: "CS50 Intro to Python", year: "2024" },
        { name: "CS50 Intro to SQL", year: "2024" },
        { name: "CIW JavaScript Specialist", year: "2025" },
        { name: "CIW User Interface Designer", year: "2025" },
        { name: "CIW Advanced HTML5 and CSS3 Specialist", year: "2025" },
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
        { name: "Powerlifting Coach / Athlete in PA as a Junior", year: "2024" }
      ]
    },

    experience: [
      {
        title: "Buying Coordinator",
        company: "Crunchyroll",
        period: "September 2025 - Present",
        description: "Was responsible for managing and optimizing operational data and processes across multiple systems to support business performance and decision-making. I standardized product data, reducing discrepancies and aligning it with strategic goals. I developed advanced KPI dashboards in Excel, enabling leadership to monitor productivity and identify inefficiencies. By analyzing data from platforms like NetSuite and RF-SMART, I supported improvements in order fulfillment, labor efficiency, and process visibility. I also produced regular performance reports, collaborated with cross-functional teams and vendors, and maintained documentation to streamline workflows and ensure timely project delivery.",
        highlights: [
          "Managed and standardized product data across multiple systems to ensure consistency and accuracy, reducing data discrepancies by 25% and improving alignment with business strategies.",
          "Built and maintained KPI dashboards in Microsoft Excel using advanced formulas and visualizations to track productivity and performance, enabling leadership to identify bottlenecks and increase team efficiency by 18%.",
          "Extracted and analyzed operational data from NetSuite and RF-SMART to deliver friendly summaries, made data informed decisions that boosted order fulfillment accuracy by 12%.",
          "Generated daily and weekly reports on throughput, labor efficiency, and order accuracy to improve visibility into operations, cutting response times by 20% and increasing process efficiency by 15%.",
          "Collaborated with vendors, stakeholders, and cross-functional teams while maintaining SOPs, project trackers, and documentation to streamline workflows, strengthen vendor relations, and improve project completion timelines by 10%."
        ],
        skills: [
      "Microsoft Excel",
      "Oracle NetSuite",
      "RF-SMART",
      "OMS TechSys",
      "Slack",
      "Admin Control",
      "Data Analysis",
      "Reporting",
      "Process Optimization"
    ]
      },
      {
        title: "Federation Athlete",
        company: "Powerlifting America (PA)",
        period: "February 2023 - Present",
        description: "Led strength coaching for competitive and recreational athletes by designing customized training programs grounded in biomechanics, exercise physiology, and data-informed performance strategies. I coached individuals and teams on proper lifting mechanics, managed athlete pipelines, and used physics-based analysis to optimize movement patterns for peak performance and injury prevention. My coaching integrated scientific principles from kinesiology, neuromuscular physiology, and progressive overload to deliver results in strength, hypertrophy, and recovery. I also ran marketing campaigns and athlete engagement strategies to scale operations.",
        highlights: [
          "Designed individualized strength programs using principles of progressive overload, biomechanics, and periodization.",
          "Instructed and corrected squat, bench press, and deadlift mechanics based on joint angles, lever mechanics, and force application.",
          "Managed a coaching team of 5+ lifters, serving 30+ athletes across various skill levels.",
          "Ran digital marketing campaigns that resulted in 250% increase in athlete acquisition.",
          "Conducted motion analysis using physics-based models to improve torque, stability, and lifting efficiency.",
          "Educated clients on neuromuscular adaptation, hormonal response, and injury prevention strategies.",
          "Applied knowledge of exercise physiology and energy system recovery to maximize training output."
        ],
        skills: [
      "Biomechanics & Physics-Based Movement Analysis",
      "Exercise Physiology & Periodization Design",
      "Athlete Performance Data Interpretation",
      "Strength Program Design (Powerlifting Focus)",
      "Client Education & Injury Prevention",
      "Marketing & Athlete Acquisition Strategy",
      "Leadership & Team Management",
      "Reporting",
      "Communication & Instructional Coaching"
    ]
      }
    ],

    skills: {
      "Programming": ["Python", "Java", "Javascript", "HTML/CSS", "SQL", "C++", "Spring Boot", "Node.js", "React Native", "Pandas", "Tailwind CSS", "Django" ],
      "Technical": ["Data Structures and Algorithms", "Data analysis / cleaning.js", "Backend development", "API’s", "JSON and environment config", "Git/Version Control", "Microsoft Excel (VLOOKUP, COUNTIF, pivot tables, formulas) and Power BI (dashboards, DAX, data modeling)"],
      "Platforms": ["Linux", "Windows", "MacOS"],
      "Professional": ["Biomechanics: torque, joint angles, force application" , "Exercise physiology: periodization, recovery, hypertrophy, Neuromuscular adaptation, hormonal response to training", "Athlete performance analysis using SQL and visualization tools", "Technical documentation and professional reporting", "Project and time management (self-paced learning and client delivery)", "Effective communication, coaching, and client feedback"]
    },

    projects: [
      {
        title: "AI Resume Screening Bot",
        description: "A full-stack machine learning application that intelligently analyzes resumes against job descriptions using advanced Natural Language Processing (NLP) and provides candidate evaluation with detailed insights.",
        techStack: ["Python", "Flask", "Scikit-learn", "PyPDF2", "React", "Tailwind CSS"],
        features: [
          "PDF & DOCX Support",
          "Holistic AI Analysis",
          "Smart Scoring System",
          "Intelligent Recommendations",
          "Actionable Insights",
          "Real-time Results"
        ],
        github: "https://github.com/NiklausV/Resume-Screening-Bot",
        demo: "#",
        image: project1pic
      },
      {
        title: "Chat Vibe - Real-Time Chat Application",
        description: "A feature-rich, real-time messaging platform built with Next.js and Socket.IO that enables instant communication with comprehensive user management and authentication.",
        techStack: ["React", "Next.js", "Socket.IO", "Express.js", "MongoDB", "Tailwind CSS", "JWT", "Nodemailer"],
        features: [
          "Instant message delivery with typing indicators and read receipts",
          "JWT-based auth with bcrypt password hashing and email recovery",
          "Profile customization, block/unblock functionality, and contact lists",
          "Toast alerts and sound notifications for new messages",
          "Mobile-friendly interface optimized for all devices",
          "Support for both one-on-one and group conversations"
        ],
        github: "https://github.com/NiklausV/Chat-Vibe",
        demo: "#",
        image: project2pic
      },
      {
        title: "MyGit - Visual Version Control System",
        description: "A custom Git implementation from scratch with an interactive visual diff viewer, demonstrating my understanding of version control internals and modern web development. --- Built from the ground up to understand Git internals: content-addressable storage, tree objects, commit snapshots, and SHA-1 hashing.",
        techStack: ["Node.js", "Express.js", "React", "Vite", "Tailwind CSS", "SHA-1 Hashing", "Commander.js", "Lucide Icons"],
        features: [
          "Init, add, commit, log, status, diff, branch, and checkout commands",
          "GitHub-style UI with side-by-side comparisons and syntax highlighting",
          "Create, switch, and manage branches with intuitive interface",
          "Visual commit history with file tree navigation",
          "Full-featured backend for programmatic repository access",
          "Customizable viewing experience with keyboard shortcuts"
        ],
        github: "https://github.com/NiklausV/Own-Version-git",
        demo: "#",
        image: project3pic
      }
    ]
  };

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-purple-950 text-white relative overflow-x-hidden">
      {/* Animated background blobs */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-purple-700 opacity-30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-pink-600 opacity-20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-[40%] left-[60%] w-[300px] h-[300px] bg-purple-400 opacity-10 rounded-full blur-2xl animate-pulse" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-xl z-50 border-b border-purple-900/40 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img src={portfolioData.profileImage} alt="Profile" style={{ width: '50px',
    height: '50px',
    borderRadius: '50%',
    objectPosition: 'center 0%',
    objectFit: 'cover'}} className="w-10 h-10 rounded-full border-2 border-purple-500 shadow-lg" />
              <span className="text-xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent tracking-wide drop-shadow-lg">
                {portfolioData.name}
              </span>
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'experience', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize font-medium px-2 py-1 rounded transition duration-200 ${
                    activeSection === item
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md'
                      : 'hover:text-purple-400 hover:bg-slate-800/60'
                  }`}
                >
                  {item}
                </button>
              ))}
              <a
                href={portfolioData.resumeLink}
                className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg shadow-md font-semibold transition"
              >
                Resume
              </a>
            </div>
            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900/95 border-t border-purple-500/20 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'experience', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-3 py-2 capitalize font-medium hover:bg-purple-700/30 rounded transition"
                >
                  {item}
                </button>
              ))}
              <a href={portfolioData.resumeLink} className="block w-full text-left px-3 py-2 hover:bg-purple-700/30 rounded font-semibold">
                Resume
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-36 pb-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <img
              src={portfolioData.profileImage}
              alt="Profile"
              style={{ width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectPosition: 'center 0%',
    objectFit: 'cover'}}
              className="w-36 h-36 rounded-full mx-auto border-4 border-purple-500 shadow-xl shadow-purple-500/40 ring-4 ring-purple-700/20"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x drop-shadow-lg">
            {portfolioData.name}
          </h1>
          <p className="text-2xl md:text-3xl text-purple-300 mb-6 font-semibold tracking-wide">{portfolioData.role}</p>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">{portfolioData.tagline}</p>
          <div className="mt-10 flex justify-center space-x-5">
            <a href={portfolioData.github} className="p-3 bg-slate-900/80 hover:bg-purple-700/80 rounded-full transition shadow-lg border border-purple-700/30">
              <Github size={26} />
            </a>
            <a href={portfolioData.linkedin} className="p-3 bg-slate-900/80 hover:bg-purple-700/80 rounded-full transition shadow-lg border border-purple-700/30">
              <Linkedin size={26} />
            </a>
            <a href={`mailto:${portfolioData.email}`} className="p-3 bg-slate-900/80 hover:bg-purple-700/80 rounded-full transition shadow-lg border border-purple-700/30">
              <Mail size={26} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/70 backdrop-blur-md rounded-t-3xl shadow-inner relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-14 text-center flex items-center justify-center drop-shadow-lg">
            <GraduationCap className="mr-3 text-purple-400" size={38} />
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            {/* Education */}
            <div className="bg-gradient-to-br from-slate-900/80 to-purple-950/60 p-7 rounded-2xl border border-purple-700/30 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Education</h3>
              <p className="text-xl font-semibold">{portfolioData.about.education.degree}</p>
              <p className="text-gray-400">{portfolioData.about.education.school}</p>
              <p className="text-gray-500">Expected to Graduate: {portfolioData.about.education.graduationDate}</p>
            </div>
            {/* Interests */}
            <div className="bg-gradient-to-br from-slate-900/80 to-purple-950/60 p-7 rounded-2xl border border-purple-700/30 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Key Interests</h3>
              <div className="flex flex-wrap gap-2">
                {portfolioData.about.interests.map((interest, idx) => (
                  <span key={idx} className="px-3 py-1 bg-purple-700/30 rounded-full text-sm font-medium shadow">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
            {/* Certifications */}
            <div className="bg-gradient-to-br from-slate-900/80 to-purple-950/60 p-7 rounded-2xl border border-purple-700/30 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-purple-400 flex items-center">
                <Award className="mr-2" size={24} />
                Certifications
              </h3>
              <ul className="space-y-2">
                {portfolioData.about.certifications.map((cert, idx) => (
                  <li key={idx} className="flex justify-between">
                    <span>{cert.name}</span>
                    <span className="text-gray-400">{cert.year}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Awards */}
            <div className="bg-gradient-to-br from-slate-900/80 to-purple-950/60 p-7 rounded-2xl border border-purple-700/30 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-purple-400 flex items-center">
                <Award className="mr-2" size={24} />
                Awards
              </h3>
              <ul className="space-y-2">
                {portfolioData.about.awards.map((award, idx) => (
                  <li key={idx} className="flex justify-between">
                    <span>{award.name}</span>
                    <span className="text-gray-400">{award.year}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Leadership Section */}
      <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-14 text-center flex items-center justify-center drop-shadow-lg">
            <Briefcase className="mr-3 text-purple-400" size={38} />
            Experience & Leadership
          </h2>
          <div className="space-y-10">
            {portfolioData.experience.map((exp, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-slate-900/80 to-purple-950/60 p-7 rounded-2xl border border-purple-700/30 hover:border-purple-400/60 transition shadow-lg"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-purple-400">{exp.title}</h3>
                    <p className="text-xl text-gray-300">{exp.company}</p>
                  </div>
                  <span className="text-gray-400">{exp.period}</span>
                </div>
                <p className="text-gray-300 mb-4">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start">
                      <span className="text-purple-400 mr-2">▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/70 backdrop-blur-md rounded-t-3xl shadow-inner relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-14 text-center flex items-center justify-center drop-shadow-lg">
            <Code className="mr-3 text-purple-400" size={38} />
            Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(portfolioData.skills).map(([category, skills]) => (
              <div key={category} className="bg-gradient-to-br from-slate-900/80 to-purple-950/60 p-7 rounded-2xl border border-purple-700/30 shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-purple-400">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1 bg-purple-700/30 hover:bg-purple-700/50 rounded-lg text-sm font-medium transition shadow">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-14 text-center drop-shadow-lg">Featured Projects</h2>
          <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-10">
            {portfolioData.projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-slate-900/80 to-purple-950/60 rounded-2xl overflow-hidden border border-purple-700/30 hover:border-purple-400/60 transition shadow-xl"
              >
                <img src={project.image} alt={project.title} className="w-full h-96 object-cover bg-black rounded-t-2xl"/>
                <div className="p-7">
                  <h3 className="text-2xl font-bold mb-2 text-purple-400">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-purple-300">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, tIdx) => (
                        <span key={tIdx} className="px-2 py-1 bg-purple-700/30 rounded text-xs font-medium shadow">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-purple-300">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start text-sm">
                          <span className="text-purple-400 mr-2">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg transition font-semibold shadow"
                    >
                      <Github size={18} className="mr-2" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition font-semibold shadow"
                    >
                      <ExternalLink size={18} className="mr-2" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/70 backdrop-blur-md rounded-t-3xl shadow-inner relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-10 drop-shadow-lg">Get In Touch</h2>
          <p className="text-xl text-gray-300 mb-14">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <a
              href={`mailto:${portfolioData.email}`}
              className="flex items-center justify-center p-5 bg-gradient-to-br from-slate-900/80 to-purple-950/60 rounded-2xl border border-purple-700/30 hover:border-purple-400/60 transition shadow-lg font-medium"
            >
              <Mail className="mr-3 text-purple-400" size={26} />
              <span>{portfolioData.email}</span>
            </a>
            <a
              href={`tel:${portfolioData.phone}`}
              className="flex items-center justify-center p-5 bg-gradient-to-br from-slate-900/80 to-purple-950/60 rounded-2xl border border-purple-700/30 hover:border-purple-400/60 transition shadow-lg font-medium"
            >
              <Phone className="mr-3 text-purple-400" size={26} />
              <span>{portfolioData.phone}</span>
            </a>
            <a
              href={portfolioData.github}
              className="flex items-center justify-center p-5 bg-gradient-to-br from-slate-900/80 to-purple-950/60 rounded-2xl border border-purple-700/30 hover:border-purple-400/60 transition shadow-lg font-medium"
            >
              <Github className="mr-3 text-purple-400" size={26} />
              <span>GitHub</span>
            </a>
            <a
              href={portfolioData.linkedin}
              className="flex items-center justify-center p-5 bg-gradient-to-br from-slate-900/80 to-purple-950/60 rounded-2xl border border-purple-700/30 hover:border-purple-400/60 transition shadow-lg font-medium"
            >
              <Linkedin className="mr-3 text-purple-400" size={26} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center border-t border-purple-700/30 bg-black/80 relative z-10">
        <p className="text-gray-400">
          © 2025 {portfolioData.name}. Built with <span className="text-purple-400 font-semibold">React</span> & <span className="text-pink-400 font-semibold">Tailwind CSS</span>
        </p>
      </footer>
    </div>
  );
}