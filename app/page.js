"use client";

import React, { useState } from "react";

// Project Data
const projects = [
  {
    id: 0,
    title: "Market Pulse Tracker",
    category: "web",
    tagline: "Next.js & REST API Financial Platform",
    desc: "Real-time financial and market data tracking web application with interactive charts and live rate updates.",
    tech: ["Next.js", "React", "Tailwind CSS", "REST API"],
    github: "https://github.com/csrefat/market-pulse-tracker",
    demo: "https://serefat-portfolio.vercel.app",
    client: "Financial Tech",
    industry: "FinTech & Analytics",
    overview: "Market Pulse Tracker allows traders and investors to monitor real-time stock and currency market changes with interactive visualization and live REST API socket connections.",
    requirements: [
      "Real-time websocket/polling data update.",
      "Interactive chart rendering for financial trends.",
      "Mobile-first responsive UI dashboard."
    ]
  },
  {
    id: 1,
    title: "Cybersecurity MITM Simulation",
    category: "cyber",
    tagline: "Python Attack & Defense Network Framework",
    desc: "Network packet manipulation and Man-In-The-Middle attack/defense simulation framework built for security protocol analysis.",
    tech: ["Python", "Networking", "Cybersecurity", "Linux"],
    github: "https://github.com/csrefat/Cybersecurity-MITM-Simulation",
    demo: "",
    client: "Security Lab Research",
    industry: "Cybersecurity & Defense",
    overview: "A comprehensive network security simulation tool that demonstrates packet sniffing, ARP spoofing detection, and mitigation strategies in a controlled environment.",
    requirements: [
      "Low-level packet interception using Python scapy.",
      "Automated ARP cache poisoning detection.",
      "Logging and alert trigger mechanism."
    ]
  },
  {
    id: 2,
    title: "NetGuard Project",
    category: "cyber",
    tagline: "Packet Inspection & Security Filter",
    desc: "Automated network security filter and monitoring system designed for threat detection and packet analysis.",
    tech: ["Python", "C++", "Network Security", "Socket Programming"],
    github: "https://github.com/csrefat/NetGuard-Project",
    demo: "",
    client: "Enterprise IT Security",
    industry: "Network Infrastructure",
    overview: "NetGuard acts as an intelligent network filter layer that evaluates socket traffic, identifies malicious payloads, and blocks suspicious connection requests.",
    requirements: [
      "High-performance C++ packet filtering layer.",
      "Python dashboard for real-time traffic statistics."
    ]
  }
];

const skills = [
  {
    tag: "JS",
    title: "Next.js & React",
    desc: "Building modern, responsive full-stack web applications with high performance, dynamic routing, and clean UI."
  },
  {
    tag: "🛡️",
    title: "Cybersecurity & Defense",
    desc: "Packet sniffing, ARP spoofing detection, threat mitigation, socket filter implementation, and security analysis."
  },
  {
    tag: "🐍",
    title: "Python & Scapy",
    desc: "Developing low-level packet manipulation scripts, security attack/defense simulations, and automation frameworks."
  },
  {
    tag: "⚡",
    title: "C++ & Socket Dev",
    desc: "High-performance network packet filtering layers, socket programming, and system level application logic."
  },
  {
    tag: "🌐",
    title: "REST APIs & WebSockets",
    desc: "Designing and integrating real-time API socket connections, interactive charts, and live financial data streams."
  },
  {
    tag: "🐧",
    title: "Linux & Networking",
    desc: "Deep understanding of TCP/IP protocol stack, network routing, firewall configurations, and server management."
  }
];

export default function Home() {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 flex flex-col lg:flex-row font-sans">
      
      {/* DevCard Green Left Sidebar */}
      <aside className="w-full lg:w-72 bg-[#54B689] text-white p-6 flex flex-col justify-between lg:fixed lg:h-screen z-40 shadow-md">
        <div>
          {/* Header Title */}
          <h1 className="text-center font-bold text-lg mb-4 tracking-wide text-white">
            Md. Jannatun Naem Refat
          </h1>

          {/* Profile Section */}
          <div className="flex flex-col items-center text-center pb-6 border-b border-emerald-400/40">
            <div className="w-28 h-28 rounded-full overflow-hidden mb-3 border-2 border-white shadow-md">
              <img
                src="/profile.jpg"
                alt="Md. Jannatun Naem Refat"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/150";
                }}
              />
            </div>
            <p className="text-xs text-emerald-100 leading-relaxed px-2 font-light">
              Hi, my name is Md. Jannatun Naem Refat and I'm a Software Engineer! Welcome to my personal portfolio.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-2 mt-4 text-xs">
            
              <a href="https://www.linkedin.com/in/md-jannatun-naem-refat-839655234/?isSelfProfile=true" target="_blank" rel="noreferrer" className="w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition">in</a>
              <a href="https://github.com/csrefat" target="_blank" rel="noreferrer" className="w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition">gh</a>
              <a href="refatislam630@gmail.com" target="_blank" rel="noreferrer" className="w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition">so</a>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="my-6 space-y-3 text-sm font-medium">
            <a href="#about" className="flex items-center space-x-2 text-white hover:text-emerald-100 transition">
              <span>👤 About Me</span>
            </a>
            <a href="#portfolio" className="flex items-center space-x-2 text-emerald-100 hover:text-white transition">
              <span>💼 Portfolio</span>
            </a>
            <a href="#what-i-do" className="flex items-center space-x-2 text-emerald-100 hover:text-white transition">
              <span>🛠️ What I Do</span>
            </a>
            <a href="/resume.html" target="_blank" className="flex items-center space-x-2 text-emerald-100 hover:text-white transition">
              <span>📄 Resume</span>
            </a>
            <a href="#contact" className="flex items-center space-x-2 text-emerald-100 hover:text-white transition">
              <span>✉️ Contact</span>
            </a>
          </nav>
        </div>

        {/* Hire Me Button */}
        <div className="pt-4 border-t border-emerald-400/40 text-center">
          <a
            href="#contact"
            className="w-full inline-block py-2.5 px-4 bg-[#3d9169] hover:bg-[#327a58] text-white font-semibold text-sm rounded-md transition shadow mb-3"
          >
            ✈️ Hire Me
          </a>
        </div>
      </aside>

      {/* DevCard Main Content Area (Right Side) */}
      <main className="flex-1 lg:ml-72 p-6 md:p-12 max-w-6xl bg-white min-h-screen">
        
        {/* Hero Banner Section */}
        <section id="about" className="mb-14 pb-12 border-b border-slate-200">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                Md. Jannatun Naem Refat
              </h2>
              <p className="text-slate-500 font-medium text-lg mt-1 mb-4">
                Software Engineer
              </p>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                I'm a software engineer specialised in full-stack web applications, cybersecurity network tools, and scalable system development. Want to know how I may help your project? Check out my project{" "}
                <a href="#portfolio" className="text-[#54B689] underline font-medium">portfolio</a> and{" "}
                <a href="/resume.html" className="text-[#54B689] underline font-medium">online resume</a>.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#portfolio"
                  className="px-5 py-2.5 bg-[#54B689] hover:bg-[#439c73] text-white font-semibold text-sm rounded-md transition shadow"
                >
                  ➜ View Portfolio
                </a>
                <a
                  href="/resume.html"
                  target="_blank"
                  className="px-5 py-2.5 bg-[#4F5864] hover:bg-[#3d4550] text-white font-semibold text-sm rounded-md transition shadow"
                >
                  📄 View Resume
                </a>
              </div>
            </div>

            {/* Profile Hero Photo */}
            <div className="w-full md:w-80 h-64 md:h-72 rounded-md overflow-hidden shadow-md border border-slate-200 bg-slate-100 flex-shrink-0">
              <img
                src="/profile.jpg"
                alt="Md. Jannatun Naem Refat"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-300"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/350x300";
                }}
              />
            </div>
          </div>
        </section>

        {/* What I Do Section */}
        <section id="what-i-do" className="mb-16">
          <div className="flex items-center mb-2">
            <div className="w-1.5 h-7 bg-[#54B689] mr-3 rounded-full"></div>
            <h3 className="text-2xl font-bold text-slate-900">What I do</h3>
          </div>
          <p className="text-slate-600 text-sm mb-8 leading-relaxed">
            Quick overview of my main technical skill sets and technologies I use. Want to find out more about my experience? Check out my{" "}
            <a href="/resume.html" className="text-[#54B689] underline">online resume</a> and{" "}
            <a href="#portfolio" className="text-[#54B689] underline">project portfolio</a>.
          </p>

          {/* Skill Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((s, idx) => (
              <div key={idx} className="p-4 bg-slate-50 border border-slate-200/80 rounded-lg hover:shadow-sm transition">
                <div className="text-2xl font-extrabold text-[#54B689] mb-2">{s.tag}</div>
                <h4 className="text-sm font-bold text-slate-800 mb-1">{s.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Portfolio / Projects Section */}
        <section id="portfolio" className="mb-16">
          <div className="flex items-center mb-6">
            <div className="w-1.5 h-7 bg-[#54B689] mr-3 rounded-full"></div>
            <h3 className="text-2xl font-bold text-slate-900">Featured Projects</h3>
          </div>

          {/* Filter Category Buttons */}
          <div className="flex space-x-2 mb-8">
            {["all", "web", "cyber"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 rounded text-xs font-semibold uppercase tracking-wider transition ${
                  filter === cat
                    ? "bg-[#54B689] text-white"
                    : "bg-slate-200 text-slate-700 hover:bg-slate-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white border border-slate-200 rounded-lg p-5 flex flex-col justify-between hover:border-[#54B689] hover:shadow-md transition"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-50 text-[#54B689] border border-emerald-200">
                    {project.category}
                  </span>
                  <h4 className="text-base font-bold text-slate-900 mt-2">{project.title}</h4>
                  <p className="text-xs text-[#54B689] font-medium mb-2">{project.tagline}</p>
                  <p className="text-xs text-slate-500 mb-4 leading-relaxed line-clamp-3">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-medium">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-[#54B689] hover:underline"
                  >
                    Details →
                  </button>
                  <div className="flex space-x-2 text-slate-500">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-slate-900">GitHub</a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noreferrer" className="text-[#54B689] hover:underline">Demo</a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="mb-12 pt-6 border-t border-slate-200">
          <div className="flex items-center mb-4">
            <div className="w-1.5 h-7 bg-[#54B689] mr-3 rounded-full"></div>
            <h3 className="text-2xl font-bold text-slate-900">Contact</h3>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="max-w-xl space-y-4 text-xs">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-600 font-semibold mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-slate-50 border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-[#54B689]"
                />
              </div>
              <div>
                <label className="block text-slate-600 font-semibold mb-1">Email</label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full bg-slate-50 border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-[#54B689]"
                />
              </div>
            </div>
            <div>
              <label className="block text-slate-600 font-semibold mb-1">Message</label>
              <textarea
                rows={4}
                placeholder="Write your message..."
                className="w-full bg-slate-50 border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-[#54B689]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-6 py-2.5 bg-[#54B689] hover:bg-[#439c73] text-white font-semibold rounded transition shadow"
            >
              Send Message
            </button>
          </form>
        </section>

      </main>

      {/* Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-xl w-full p-6 space-y-4 shadow-xl text-slate-800">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-50 text-[#54B689]">
                  {selectedProject.category}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">{selectedProject.title}</h3>
                <p className="text-xs text-[#54B689]">{selectedProject.tagline}</p>
              </div>
              <button onClick={() => setSelectedProject(null)} className="text-slate-400 hover:text-slate-700 text-lg">
                ✕
              </button>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">{selectedProject.overview}</p>

            {selectedProject.requirements && (
              <div>
                <h4 className="text-xs font-bold text-slate-700 mb-1">Key Features:</h4>
                <ul className="list-disc list-inside text-xs text-slate-600 space-y-0.5">
                  {selectedProject.requirements.map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="pt-3 border-t border-slate-100 flex justify-end space-x-2 text-xs font-medium">
              {selectedProject.github && (
                <a href={selectedProject.github} target="_blank" rel="noreferrer" className="px-4 py-1.5 border border-slate-300 rounded hover:bg-slate-50">
                  GitHub
                </a>
              )}
              {selectedProject.demo && (
                <a href={selectedProject.demo} target="_blank" rel="noreferrer" className="px-4 py-1.5 bg-[#54B689] text-white rounded hover:bg-[#439c73]">
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}