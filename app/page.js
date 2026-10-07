"use client";

import React, { useState } from "react";

// Portfolio Projects Data
const projects = [
  {
    id: 0,
    title: "Market Pulse Tracker",
    category: "web",
    tagline: "Next.js & REST API Financial Platform",
    desc: "Real-time financial and market data tracking web application with interactive charts and live rate updates.",
    tech: ["Next.js", "React", "Tailwind CSS", "REST API", "Recharts"],
    github: "https://github.com/csrefat/market-pulse-tracker",
    demo: "https://serefat-portfolio.vercel.app",
    client: "Financial Tech Labs",
    industry: "FinTech & Analytics",
    gradient: "from-emerald-600 to-teal-900",
    overview: "Market Pulse Tracker allows traders and investors to monitor real-time stock and currency market changes with interactive visualization and live REST API socket connections.",
    requirements: [
      "Real-time websocket/polling data update.",
      "Interactive chart rendering for financial trends.",
      "Mobile-first responsive dashboard with glassmorphism."
    ]
  },
  {
    id: 1,
    title: "Cybersecurity MITM Simulation",
    category: "cyber",
    tagline: "Python Attack & Defense Framework",
    desc: "Network packet manipulation and Man-In-The-Middle attack/defense simulation framework built for security analysis.",
    tech: ["Python", "Scapy", "Networking", "Cybersecurity", "Linux"],
    github: "https://github.com/csrefat/Cybersecurity-MITM-Simulation",
    demo: "",
    client: "Security Research Lab",
    industry: "Cybersecurity & Defense",
    gradient: "from-cyan-600 to-blue-950",
    overview: "A comprehensive network security simulation tool that demonstrates packet sniffing, ARP spoofing detection, and mitigation strategies in a controlled environment.",
    requirements: [
      "Low-level packet interception using Python Scapy.",
      "Automated ARP cache poisoning detection.",
      "Logging and alert trigger mechanism with instant UI alerts."
    ]
  },
  {
    id: 2,
    title: "NetGuard Filter System",
    category: "cyber",
    tagline: "High-Performance Packet Inspection Filter",
    desc: "Automated network security filter and monitoring system designed for threat detection and packet payload analysis.",
    tech: ["C++", "Python", "Network Security", "Socket Programming"],
    github: "https://github.com/csrefat/NetGuard-Project",
    demo: "",
    client: "Enterprise IT Infra",
    industry: "Network Infrastructure",
    gradient: "from-slate-700 to-emerald-950",
    overview: "NetGuard acts as an intelligent network filter layer that evaluates socket traffic, identifies malicious payloads, and blocks suspicious connection requests in real-time.",
    requirements: [
      "High-performance C++ packet filtering layer.",
      "Python analytics dashboard for traffic statistics."
    ]
  }
];

// Skills Data
const skills = [
  {
    icon: "💻",
    title: "Full-Stack Web Engineering",
    techs: "Next.js, React, Node.js, REST APIs",
    desc: "Architecting high-performance, responsive web applications with clean frontend design and modern code structures."
  },
  {
    icon: "⚙️",
    title: "Backend & Systems Design",
    techs: "RESTful Architecture, Databases, Microservices",
    desc: "Building scalable server-side logic, optimized database schemas, and robust API endpoints for seamless system communication."
  },
  {
    icon: "🐍",
    title: "Python Development & Automation",
    techs: "Python, Scripting, Data Workflows, Automation",
    desc: "Writing efficient automation scripts, backend utilities, data pipelines, and core software tools."
  },
  {
    icon: "⚡",
    title: "C++ & Core Algorithms",
    techs: "Data Structures, Systems Programming, C++",
    desc: "Implementing memory-efficient logic, complex algorithms, and high-performance system-level modules."
  }
];

// Timeline Data (Education & Experience)
const timeline = [
  {
    type: "experience",
    period: "2023 - Present",
    title: "Software Engineer / Developer",
    organization: "Independent Software Development & Projects",
    desc: "Building production-ready full-stack applications, designing REST APIs, optimizing system database queries, and implementing network security concepts."
  },
  {
    type: "education",
    period: "2023 - Present",
    title: "B.Sc. in Computer Science & Engineering",
    organization: "University of Liberal Arts Bangladesh (ULAB)",
    desc: "Specializing in Software Engineering, Data Structures, Algorithms, Computer Networks, Systems Programming, and Cybersecurity."
  }
];

const stats = [
  { label: "Completed Projects", value: "12+" },
  { label: "Software Systems Built", value: "5+" },
  { label: "Code Contributions", value: "500+" },
  { label: "Client Satisfaction", value: "100%" }
];

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Form State Management
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Terminal State Management
  const [termInput, setTermInput] = useState("");
  const [termLogs, setTermLogs] = useState([
    { type: "sys", text: "Refat DevTerminal v1.2.0 loaded." },
    { type: "sys", text: "Type 'help' to view all interactive commands." }
  ]);

  // Copy Email Handler
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("refatislam630@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  // Terminal Logic
  const handleTerminalSubmit = (e) => {
    e.preventDefault();
    const cmd = termInput.trim().toLowerCase();
    if (!cmd) return;

    let response = [];
    if (cmd === "help") {
      response = [
        "Available commands:",
        "  about     - Brief background summary",
        "  skills    - Core technical stack",
        "  projects  - Featured software projects",
        "  contact   - Contact information & email",
        "  whoami    - Terminal user identification",
        "  clear     - Wipe terminal output"
      ];
    } else if (cmd === "about") {
      response = ["Md. Jannatun Naem Refat - Software Engineer focused on web applications, backends, and system performance."];
    } else if (cmd === "skills") {
      response = ["Full-Stack: Next.js, React, Node.js, REST APIs | Systems: Python, C++, Networking, SQL/NoSQL"];
    } else if (cmd === "projects") {
      response = ["1. Market Pulse Tracker (FinTech) | 2. Cybersecurity MITM Simulation | 3. NetGuard Filter System"];
    } else if (cmd === "contact") {
      response = ["Email: refatislam630@gmail.com | LinkedIn & GitHub: csrefat"];
    } else if (cmd === "whoami") {
      response = ["Guest Recruiter / Engineering Evaluator"];
    } else if (cmd === "clear") {
      setTermLogs([]);
      setTermInput("");
      return;
    } else {
      response = [`Command not recognized: '${cmd}'. Type 'help' for available commands.`];
    }

    setTermLogs((prev) => [
      ...prev,
      { type: "usr", text: `$ ${termInput}` },
      ...response.map((r) => ({ type: "sys", text: r }))
    ]);
    setTermInput("");
  };

  // Contact Form Submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: "9e4783f0-69c5-4136-a413-8d71221df4eb",
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });

      const result = await response.json();

      if (result.success) {
        setFormSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setFormSubmitted(false), 5000);
      } else {
        alert("There was an error sending your message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to send message. Please check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <div
      className={`min-h-screen flex flex-col lg:flex-row font-sans transition-colors duration-500 pb-16 lg:pb-0 selection:bg-emerald-500 selection:text-white ${
        darkMode ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-800"
      }`}
    >
      {/* Toast Notification */}
      {copiedEmail && (
        <div className="fixed top-6 right-6 z-50 bg-emerald-500 text-white text-xs font-bold px-4 py-3 rounded-xl shadow-2xl animate-bounce flex items-center gap-2">
          <span>✓ Email copied to clipboard!</span>
        </div>
      )}

      {/* DevCard Premium Sidebar */}
      <aside className="w-full lg:w-80 bg-[#10B981] text-white p-6 flex flex-col justify-between lg:fixed lg:h-screen z-40 shadow-2xl transition-all">
        <div>
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-900/40 border border-emerald-300/30 rounded-full text-[11px] font-medium mb-6 backdrop-blur-sm shadow-inner">
            <span className="w-2 h-2 rounded-full bg-emerald-300 animate-ping" />
            <span className="text-emerald-50 font-semibold tracking-wide">Open for Opportunities</span>
          </div>

          {/* Profile Section */}
          <div className="flex flex-col items-center text-center pb-6 border-b border-white/20">
            <div className="relative group mb-4">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-200 to-teal-100 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-white shadow-xl">
                <img
                  src="/profile.jpg"
                  alt="Md. Jannatun Naem Refat"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/150";
                  }}
                />
              </div>
            </div>

            <h1 className="text-xl font-extrabold tracking-tight text-white mb-1">
              Md. Jannatun Naem Refat
            </h1>
            <p className="text-xs text-emerald-100 font-medium tracking-wide uppercase mb-3">
              Software Engineer
            </p>
            <p className="text-xs text-emerald-50/90 leading-relaxed px-2 font-light">
              Hi, I&apos;m Refat! I am a Software Engineer focused on building scalable web applications, robust backend systems, and clean interfaces.
            </p>

            {/* Social Vector Icons + Copy Email */}
            <div className="flex space-x-2 mt-4 text-xs justify-center items-center">
              <a
                href="https://www.linkedin.com/in/md-jannatun-naem-refat-839655234/"
                target="_blank"
                rel="noreferrer"
                title="LinkedIn"
                className="w-9 h-9 rounded-full bg-white/20 hover:bg-white text-white hover:text-emerald-700 flex items-center justify-center transition-all duration-300 shadow hover:scale-110"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>

              <a
                href="https://github.com/csrefat"
                target="_blank"
                rel="noreferrer"
                title="GitHub"
                className="w-9 h-9 rounded-full bg-white/20 hover:bg-white text-white hover:text-emerald-700 flex items-center justify-center transition-all duration-300 shadow hover:scale-110"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                </svg>
              </a>

              <button
                onClick={handleCopyEmail}
                title="Copy Email Address"
                className="w-9 h-9 rounded-full bg-white/20 hover:bg-white text-white hover:text-emerald-700 flex items-center justify-center transition-all duration-300 shadow hover:scale-110"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="my-6 space-y-1.5 text-xs font-medium">
            {[
              { href: "#about", label: "👤 About Me" },
              { href: "#terminal", label: "💻 Dev Terminal" },
              { href: "#what-i-do", label: "🛠️ Technical Skills" },
              { href: "#portfolio", label: "💼 Portfolio Projects" },
              { href: "#timeline", label: "🎓 Experience & Education" },
              { href: "/resume.html", label: "📄 Online Resume", external: true },
              { href: "#contact", label: "✉️ Get In Touch" }
            ].map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target={link.external ? "_blank" : "_self"}
                className="flex items-center px-3 py-2 rounded-lg text-emerald-100 hover:text-white hover:bg-white/10 transition duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Action Button & Dark Mode Switch */}
        <div className="pt-4 border-t border-white/20 text-center space-y-3">
          <a
            href="#contact"
            className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-emerald-900 hover:bg-emerald-950 text-white font-semibold text-xs rounded-xl transition duration-300 shadow-lg active:scale-95"
          >
            <span>🚀 Hire Me Today</span>
          </a>

          <div className="flex items-center justify-between text-xs font-semibold text-emerald-100 pt-1">
            <span className="flex items-center gap-1.5">
              {darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
            </span>
            <button
              type="button"
              onClick={() => setDarkMode(!darkMode)}
              className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 shadow-inner ${
                darkMode ? "bg-slate-900 justify-end" : "bg-emerald-700 justify-start"
              }`}
              aria-label="Toggle Dark Mode"
            >
              <div className="bg-white w-4 h-4 rounded-full shadow-md transform transition-transform" />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main
        className={`flex-1 lg:ml-80 p-6 md:p-12 w-full min-h-screen transition-colors duration-500 ${
          darkMode ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-800"
        }`}
      >
        {/* Hero Section */}
        <section id="about" className="mb-16 pt-4">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
            <div className="flex-1 space-y-4">
              <div className="inline-block px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-mono font-semibold">
                Software Engineer
              </div>
              
              <h2 className={`text-4xl md:text-6xl font-black tracking-tight leading-none ${
                darkMode ? "text-white" : "text-slate-900"
              }`}>
                Md. Jannatun Naem <span className="text-[#10B981]">Refat</span>
              </h2>

              <p className={`text-base md:text-lg leading-relaxed max-w-3xl ${
                darkMode ? "text-slate-300" : "text-slate-600"
              }`}>
                Specialized in designing and architecting modern full-stack web applications, scalable backend APIs, and high-performance software systems. Passionate about writing clean, maintainable code, modern user interfaces, and optimizing system performance.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="#portfolio"
                  className="px-6 py-3 bg-[#10B981] hover:bg-emerald-600 text-white font-bold text-xs rounded-xl transition-all shadow-lg hover:shadow-emerald-500/25 active:scale-95 flex items-center gap-2"
                >
                  <span>Explore Work</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </a>
                <button
                  onClick={handleCopyEmail}
                  className={`px-5 py-3 rounded-xl font-bold text-xs transition-all border shadow-sm flex items-center gap-2 active:scale-95 ${
                    darkMode
                      ? "bg-slate-900 hover:bg-slate-800 border-slate-800 text-slate-200"
                      : "bg-white hover:bg-slate-100 border-slate-200 text-slate-700"
                  }`}
                >
                  <span>📋 Copy Email</span>
                </button>
                <a
                  href="/resume.html"
                  target="_blank"
                  className={`px-5 py-3 rounded-xl font-bold text-xs transition-all border shadow-sm flex items-center gap-2 active:scale-95 ${
                    darkMode
                      ? "bg-slate-900 hover:bg-slate-800 border-slate-800 text-slate-200"
                      : "bg-white hover:bg-slate-100 border-slate-200 text-slate-700"
                  }`}
                >
                  <span>View Resume</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                </a>
              </div>
            </div>

            {/* Profile Photo Card */}
            <div className="relative group w-full sm:w-72 h-72 sm:h-80 flex-shrink-0">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur-lg opacity-40 group-hover:opacity-75 transition duration-500"></div>
              <div className={`relative w-full h-full rounded-2xl overflow-hidden border shadow-2xl ${
                darkMode ? "border-slate-800 bg-slate-900" : "border-slate-200 bg-white"
              }`}>
                <img
                  src="/profile.jpg"
                  alt="Md. Jannatun Naem Refat"
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition duration-500 transform hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/350x350";
                  }}
                />
              </div>
            </div>
          </div>

          {/* Dynamic Stats Banner */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 p-6 rounded-2xl border ${
            darkMode ? "bg-slate-900/60 border-slate-800/80" : "bg-white border-slate-200 shadow-sm"
          }`}>
            {stats.map((st, i) => (
              <div key={i} className="text-center p-2">
                <div className="text-2xl md:text-3xl font-black text-[#10B981] mb-1">{st.value}</div>
                <div className={`text-xs font-semibold uppercase tracking-wider ${
                  darkMode ? "text-slate-400" : "text-slate-500"
                }`}>
                  {st.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Dev Terminal Section */}
        <section id="terminal" className="mb-16">
          <div className="flex items-center mb-3">
            <div className="w-2 h-8 bg-[#10B981] mr-3 rounded-full"></div>
            <h3 className={`text-2xl font-black ${darkMode ? "text-white" : "text-slate-900"}`}>
              Interactive Developer Terminal
            </h3>
          </div>
          <p className={`text-sm mb-4 ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
            Type CLI commands below to explore my profile like a terminal system!
          </p>

          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-4 font-mono text-xs shadow-2xl overflow-hidden">
            <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-800 text-slate-500">
              <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-500 inline-block" />
              <span className="ml-2 text-slate-400 font-bold">refat@dev-machine:~</span>
            </div>

            <div className="space-y-1.5 max-h-48 overflow-y-auto pr-2 mb-3">
              {termLogs.map((log, idx) => (
                <div
                  key={idx}
                  className={log.type === "usr" ? "text-emerald-400 font-bold" : "text-slate-300"}
                >
                  {log.text}
                </div>
              ))}
            </div>

            <form onSubmit={handleTerminalSubmit} className="flex items-center gap-2 pt-2 border-t border-slate-800/80">
              <span className="text-emerald-400 font-bold">$</span>
              <input
                type="text"
                placeholder="type 'help' or commands..."
                value={termInput}
                onChange={(e) => setTermInput(e.target.value)}
                className="flex-1 bg-transparent text-emerald-300 focus:outline-none placeholder-slate-600 font-mono"
              />
              <button type="submit" className="px-3 py-1 bg-emerald-600 hover:bg-emerald-500 text-white rounded text-[10px] font-bold">
                Run
              </button>
            </form>
          </div>
        </section>

        {/* Technical Skills Section */}
        <section id="what-i-do" className="mb-16">
          <div className="flex items-center mb-3">
            <div className="w-2 h-8 bg-[#10B981] mr-3 rounded-full"></div>
            <h3 className={`text-2xl font-black ${darkMode ? "text-white" : "text-slate-900"}`}>
              What I Do & Core Expertise
            </h3>
          </div>
          <p className={`text-sm mb-8 max-w-2xl ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
            I focus on end-to-end software engineering, from responsive frontends to maintainable backend architectures.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {skills.map((s, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                  darkMode
                    ? "bg-slate-900/70 border-slate-800 hover:border-emerald-500/50 hover:shadow-emerald-500/5"
                    : "bg-white border-slate-200 hover:border-emerald-500 hover:shadow-md"
                }`}
              >
                <div className="text-3xl mb-3">{s.icon}</div>
                <h4 className={`text-lg font-bold mb-1 ${darkMode ? "text-white" : "text-slate-900"}`}>
                  {s.title}
                </h4>
                <div className="text-xs font-mono text-[#10B981] font-semibold mb-2">
                  {s.techs}
                </div>
                <p className={`text-xs leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Portfolio / Projects Showcase */}
        <section id="portfolio" className="mb-16">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
            <div className="flex items-center">
              <div className="w-2 h-8 bg-[#10B981] mr-3 rounded-full"></div>
              <h3 className={`text-2xl font-black ${darkMode ? "text-white" : "text-slate-900"}`}>
                Featured Projects
              </h3>
            </div>

            {/* Filter Buttons */}
            <div className="flex p-1 rounded-xl bg-slate-800/40 border border-slate-700/50">
              {["all", "web", "cyber"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                    filter === cat
                      ? "bg-[#10B981] text-white shadow-md"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {cat === "cyber" ? "Systems" : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid with Mockup Preview Header */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className={`rounded-2xl overflow-hidden flex flex-col justify-between border transition-all duration-300 hover:-translate-y-1.5 ${
                  darkMode
                    ? "bg-slate-900/90 border-slate-800 hover:border-emerald-500/60"
                    : "bg-white border-slate-200 hover:border-emerald-500 hover:shadow-xl"
                }`}
              >
                {/* Visual Header Mockup */}
                <div className={`h-28 bg-gradient-to-br ${project.gradient} p-4 flex flex-col justify-between relative overflow-hidden`}>
                  <div className="flex items-center justify-between z-10">
                    <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-black/40 text-emerald-300 backdrop-blur-sm border border-emerald-500/30">
                      {project.category}
                    </span>
                    <span className="text-[10px] text-white/80 font-mono">system_v1.0</span>
                  </div>
                  <div className="z-10">
                    <h5 className="text-white text-base font-black tracking-tight drop-shadow">{project.title}</h5>
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/10 rounded-full blur-xl pointer-events-none" />
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs text-[#10B981] font-semibold mb-2">
                      {project.tagline}
                    </p>
                    <p className={`text-xs mb-4 leading-relaxed line-clamp-3 ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                      {project.desc}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tech.map((t, i) => (
                        <span
                          key={i}
                          className={`text-[10px] font-medium px-2.5 py-0.5 rounded-md ${
                            darkMode ? "bg-slate-800 text-slate-300" : "bg-slate-100 text-slate-700"
                          }`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className={`pt-4 border-t flex items-center justify-between text-xs font-semibold ${
                    darkMode ? "border-slate-800" : "border-slate-100"
                  }`}>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-[#10B981] hover:underline flex items-center gap-1"
                    >
                      <span>View Case Study</span>
                      <span>→</span>
                    </button>
                    <div className="flex space-x-3">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-emerald-400">
                          GitHub
                        </a>
                      )}
                      {project.demo && (
                        <a href={project.demo} target="_blank" rel="noreferrer" className="text-[#10B981] hover:underline">
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience & Education Timeline Section */}
        <section id="timeline" className="mb-16">
          <div className="flex items-center mb-3">
            <div className="w-2 h-8 bg-[#10B981] mr-3 rounded-full"></div>
            <h3 className={`text-2xl font-black ${darkMode ? "text-white" : "text-slate-900"}`}>
              Experience & Education
            </h3>
          </div>
          <p className={`text-sm mb-8 max-w-xl ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
            My academic foundation and engineering roadmap.
          </p>

          <div className="relative border-l-2 border-emerald-500/30 ml-3 space-y-8 pl-6">
            {timeline.map((item, i) => (
              <div key={i} className="relative group">
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-[#10B981] border-4 border-slate-950 group-hover:scale-125 transition-transform" />
                <div className={`p-6 rounded-2xl border transition-all ${
                  darkMode ? "bg-slate-900/60 border-slate-800" : "bg-white border-slate-200 shadow-sm"
                }`}>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {item.period}
                  </span>
                  <h4 className={`text-base font-bold mt-2 ${darkMode ? "text-white" : "text-slate-900"}`}>
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#10B981] font-medium mb-2">{item.organization}</p>
                  <p className={`text-xs leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Get In Touch Section */}
        <section id="contact" className={`pt-8 border-t ${darkMode ? "border-slate-800" : "border-slate-200"}`}>
          <div className="flex items-center mb-3">
            <div className="w-2 h-8 bg-[#10B981] mr-3 rounded-full"></div>
            <h3 className={`text-2xl font-black ${darkMode ? "text-white" : "text-slate-900"}`}>
              Let&apos;s Build Something Together
            </h3>
          </div>

          <p className={`text-sm mb-6 max-w-xl ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
            Have a software engineering role, project inquiry, or collaboration in mind? Drop me a message below!
          </p>

          <form onSubmit={handleFormSubmit} className="max-w-2xl space-y-4 text-xs">
            {formSubmitted && (
              <div className="p-3 bg-emerald-500/20 border border-emerald-500/50 rounded-xl text-emerald-400 font-semibold text-xs">
                ✓ Thank you! Your message has been sent successfully to my email.
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className={`block font-bold mb-1.5 ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
                  Your Name
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Refat"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#10B981] border transition ${
                    darkMode ? "bg-slate-900 border-slate-800 text-white placeholder-slate-500" : "bg-white border-slate-300 text-slate-800"
                  }`}
                />
              </div>
              <div>
                <label className={`block font-bold mb-1.5 ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
                  Email Address
                </label>
                <input
                  required
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#10B981] border transition ${
                    darkMode ? "bg-slate-900 border-slate-800 text-white placeholder-slate-500" : "bg-white border-slate-300 text-slate-800"
                  }`}
                />
              </div>
            </div>

            <div>
              <label className={`block font-bold mb-1.5 ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
                Your Message
              </label>
              <textarea
                required
                rows={4}
                placeholder="Tell me about your software project or opportunity..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={`w-full rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#10B981] border transition ${
                  darkMode ? "bg-slate-900 border-slate-800 text-white placeholder-slate-500" : "bg-white border-slate-300 text-slate-800"
                }`}
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto px-8 py-3 bg-[#10B981] hover:bg-emerald-600 disabled:opacity-50 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-emerald-500/25 active:scale-95 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <span>Sending Message...</span>
              ) : (
                <span>Send Message</span>
              )}
            </button>
          </form>
        </section>

        {/* Footer */}
        <footer className={`mt-16 pt-8 border-t text-center text-xs ${
          darkMode ? "border-slate-900 text-slate-500" : "border-slate-200 text-slate-400"
        }`}>
          © {new Date().getFullYear()} Md. Jannatun Naem Refat. Built with Next.js & Tailwind CSS.
        </footer>
      </main>

      {/* Mobile Floating Bottom Bar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-slate-900/90 backdrop-blur-md border-t border-slate-800 z-50 flex justify-around py-3 lg:hidden text-[10px] text-slate-400 font-bold">
        <a href="#about" className="hover:text-emerald-400 flex flex-col items-center">
          <span>👤</span>
          <span>About</span>
        </a>
        <a href="#terminal" className="hover:text-emerald-400 flex flex-col items-center">
          <span>💻</span>
          <span>Terminal</span>
        </a>
        <a href="#portfolio" className="hover:text-emerald-400 flex flex-col items-center">
          <span>💼</span>
          <span>Projects</span>
        </a>
        <a href="#timeline" className="hover:text-emerald-400 flex flex-col items-center">
          <span>🎓</span>
          <span>Timeline</span>
        </a>
        <a href="#contact" className="hover:text-emerald-400 flex flex-col items-center text-emerald-400">
          <span>✉️</span>
          <span>Contact</span>
        </a>
      </nav>

      {/* Case Study Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className={`rounded-2xl max-w-2xl w-full p-8 space-y-5 shadow-2xl border transition-all ${
            darkMode ? "bg-slate-900 text-slate-100 border-slate-800" : "bg-white text-slate-800 border-slate-200"
          }`}>
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {selectedProject.category}
                </span>
                <h3 className={`text-2xl font-black mt-2 ${darkMode ? "text-white" : "text-slate-900"}`}>
                  {selectedProject.title}
                </h3>
                <p className="text-xs text-[#10B981] font-semibold">{selectedProject.tagline}</p>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-lg bg-slate-800/50 hover:bg-slate-800 text-slate-400 hover:text-white transition"
              >
                ✕
              </button>
            </div>

            <p className={`text-xs leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
              {selectedProject.overview}
            </p>

            {selectedProject.requirements && (
              <div className="p-4 rounded-xl bg-slate-800/30 border border-slate-700/40">
                <h4 className="text-xs font-bold text-emerald-400 mb-2">Key Engineering Highlights:</h4>
                <ul className={`list-disc list-inside text-xs space-y-1 ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
                  {selectedProject.requirements.map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="pt-4 border-t border-slate-800 flex justify-end space-x-3 text-xs font-bold">
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-xl border border-slate-700 text-slate-300 hover:bg-slate-800 transition"
                >
                  Source Code
                </a>
              )}
              {selectedProject.demo && (
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 bg-[#10B981] hover:bg-emerald-600 text-white rounded-xl transition"
                >
                  Live Preview
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}