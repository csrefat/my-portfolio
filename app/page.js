"use client";

import React, { useState } from "react";

// Project Data from screen
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

export default function Home() {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col lg:flex-row font-sans">
      
      {/* DevCard Sidebar (Left Side) */}
      <aside className="w-full lg:w-72 bg-slate-900 border-r border-slate-800 p-6 flex flex-col justify-between lg:fixed lg:h-screen z-40">
        <div>
          {/* Profile Section */}
          <div className="flex flex-col items-center text-center pb-6 border-b border-slate-800">
            <div className="w-28 h-28 rounded-full overflow-hidden mb-4 border-2 border-emerald-500 shadow-lg">
              <img
                src="/profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/150";
                }}
              />
            </div>
            <h1 className="text-xl font-bold text-white">Serefat</h1>
            <p className="text-xs text-emerald-400 font-medium mt-1">
              Cybersecurity & Full-Stack Dev
            </p>
            <p className="text-xs text-slate-400 mt-2 line-clamp-2">
              Building secure network tools & high-performance web platforms.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="my-6 space-y-2">
            <a
              href="#about"
              className="flex items-center space-x-3 px-4 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-white transition"
            >
              <span>👤 About Me</span>
            </a>
            <a
              href="#projects"
              className="flex items-center space-x-3 px-4 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-white transition"
            >
              <span>💼 Portfolio</span>
            </a>
            <a
              href="#contact"
              className="flex items-center space-x-3 px-4 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-white transition"
            >
              <span>✉️ Contact</span>
            </a>
          </nav>
        </div>

        {/* Action Button & Footer */}
        <div className="pt-4 border-t border-slate-800 text-center">
          <a
            href="/resume.html"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-block text-center py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm rounded-lg transition mb-4 shadow"
          >
            📄 View Resume
          </a>
          <p className="text-[11px] text-slate-500">
            © {new Date().getFullYear()} DevCard Portfolio
          </p>
        </div>
      </aside>

      {/* Main Content Area (Right Side) */}
      <main className="flex-1 lg:ml-72 p-6 md:p-12 max-w-5xl">
        
        {/* DevCard Banner / About */}
        <section id="about" className="mb-16 pt-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
              Welcome to my DevCard
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 mb-4">
              Hi, I'm Serefat 👋
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base mb-6">
              I am a specialized software engineer focusing on Cybersecurity, Network Protocols, and Modern Web Applications using Next.js, Python, and C++.
            </p>

            {/* Quick Feature Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800/80">
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <span className="text-lg">🛡️</span>
                <h3 className="text-sm font-bold text-white mt-1">Security First</h3>
                <p className="text-xs text-slate-400 mt-0.5">Packet sniffing & ARP spoof detection</p>
              </div>
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <span className="text-lg">⚡</span>
                <h3 className="text-sm font-bold text-white mt-1">Web Apps</h3>
                <p className="text-xs text-slate-400 mt-0.5">Interactive Next.js dashboards & APIs</p>
              </div>
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <span className="text-lg">⚙️</span>
                <h3 className="text-sm font-bold text-white mt-1">Low-Level Dev</h3>
                <p className="text-xs text-slate-400 mt-0.5">Socket programming with Python & C++</p>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio / Projects Section */}
        <section id="projects" className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
            <div>
              <h3 className="text-2xl font-bold text-white">Featured Projects</h3>
              <p className="text-xs text-slate-400 mt-1">Explore my security tools & web platforms</p>
            </div>

            {/* DevCard Filter Tabs */}
            <div className="flex space-x-2 bg-slate-900 p-1 rounded-xl border border-slate-800 self-start">
              {["all", "web", "cyber"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold capitalize transition ${
                    filter === cat
                      ? "bg-emerald-600 text-white"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-emerald-500/50 transition shadow-lg group"
              >
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800/50">
                      {project.category}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white group-hover:text-emerald-400 transition">
                    {project.title}
                  </h4>
                  <p className="text-xs text-emerald-400/90 font-medium mb-2">{project.tagline}</p>
                  <p className="text-xs text-slate-400 mb-4 line-clamp-3 leading-relaxed">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] bg-slate-950 text-slate-300 border border-slate-800 px-2 py-0.5 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-emerald-400 hover:underline font-semibold"
                  >
                    View Case Study →
                  </button>
                  <div className="flex space-x-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white transition"
                      >
                        GitHub
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:text-emerald-300 transition"
                      >
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="mb-12">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-2">Get In Touch</h3>
            <p className="text-xs text-slate-400 mb-6">
              Have a project or security audit request? Send a message directly.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">Name</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2 text-sm text-slate-200 focus:outline-none focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2 text-sm text-slate-200 focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Message</label>
                <textarea
                  rows={4}
                  placeholder="How can I help you?"
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2 text-sm text-slate-200 focus:outline-none focus:border-emerald-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm rounded-lg transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>

      </main>

      {/* DevCard Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 space-y-6 shadow-2xl">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800/50">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl font-bold text-white mt-2">{selectedProject.title}</h3>
                <p className="text-xs text-emerald-400 mt-0.5">{selectedProject.tagline}</p>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-slate-400 hover:text-white p-1 text-xl"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs">
              <div>
                <span className="text-slate-500 block">Client</span>
                <span className="text-slate-200 font-medium">{selectedProject.client || "N/A"}</span>
              </div>
              <div>
                <span className="text-slate-500 block">Industry</span>
                <span className="text-slate-200 font-medium">{selectedProject.industry || "N/A"}</span>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-2">Overview</h4>
              <p className="text-slate-300 text-sm leading-relaxed">{selectedProject.overview}</p>
            </div>

            {selectedProject.requirements && selectedProject.requirements.length > 0 && (
              <div>
                <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-2">Requirements & Key Features</h4>
                <ul className="list-disc list-inside text-slate-300 text-sm space-y-1">
                  {selectedProject.requirements.map((req, idx) => (
                    <li key={idx}>{req}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="pt-4 border-t border-slate-800 flex justify-end space-x-3 text-sm">
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-slate-700 hover:border-slate-500 text-slate-300 rounded-lg transition"
                >
                  GitHub Repository
                </a>
              )}
              {selectedProject.demo && (
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition"
                >
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