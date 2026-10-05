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

export default function Home() {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* Header / Navbar */}
      <header className="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-800 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            Portfolio
          </h1>
          <nav className="flex space-x-6 text-sm">
            <a href="#about" className="hover:text-blue-400 transition">About</a>
            <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 px-6 max-w-6xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
          Cybersecurity Specialist & Full-Stack Developer
        </h2>
        <p className="text-slate-400 max-w-2xl mb-8 text-lg">
          Building secure network defense systems, web platforms, and automated software solutions.
        </p>
        <div className="flex space-x-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 font-medium rounded-lg transition"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-slate-700 hover:border-slate-500 font-medium rounded-lg transition"
          >
            Get In Touch
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
          <div>
            <h3 className="text-3xl font-bold mb-2">Featured Projects</h3>
            <p className="text-slate-400">Explore my cybersecurity & web applications</p>
          </div>

          {/* Filter Tabs */}
          <div className="flex space-x-2 mt-4 md:mt-0 bg-slate-900 p-1 rounded-xl border border-slate-800">
            {["all", "web", "cyber"].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition ${
                  filter === category
                    ? "bg-blue-600 text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-slate-700 transition"
            >
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="text-xs uppercase px-2.5 py-1 bg-slate-800 text-blue-400 rounded-md font-semibold tracking-wide">
                    {project.category}
                  </span>
                </div>
                <h4 className="text-xl font-bold mb-1">{project.title}</h4>
                <p className="text-xs text-blue-400 font-medium mb-3">{project.tagline}</p>
                <p className="text-slate-400 text-sm mb-4 line-clamp-3">{project.desc}</p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((t, index) => (
                    <span
                      key={index}
                      className="text-xs bg-slate-800/80 text-slate-300 px-2 py-0.5 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-sm text-blue-400 hover:underline font-medium"
                >
                  View Details
                </button>
                <div className="flex space-x-3 text-sm">
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
                      className="text-blue-400 hover:text-blue-300 transition"
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

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-4">Let's Connect</h3>
        <p className="text-slate-400 mb-8 max-w-lg mx-auto">
          Interested in collaboration, security consulting, or standard web development? Feel free to reach out.
        </p>
        <form onSubmit={(e) => e.preventDefault()} className="max-w-md mx-auto space-y-4 text-left">
          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-2.5 text-slate-200 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">Email</label>
            <input
              type="email"
              placeholder="your.email@example.com"
              className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-2.5 text-slate-200 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">Message</label>
            <textarea
              rows={4}
              placeholder="Your message..."
              className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-2.5 text-slate-200 focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-500 font-semibold rounded-lg transition text-white"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-900 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Serefat Portfolio. All rights reserved.
      </footer>

      {/* Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 space-y-6">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs uppercase px-2.5 py-1 bg-slate-800 text-blue-400 rounded-md font-semibold">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl font-bold mt-2">{selectedProject.title}</h3>
                <p className="text-sm text-blue-400">{selectedProject.tagline}</p>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-slate-400 hover:text-white p-2 text-xl"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 bg-slate-950 p-4 rounded-lg text-sm border border-slate-800/60">
              <div>
                <span className="text-slate-500 text-xs block">Client</span>
                <span className="text-slate-200 font-medium">{selectedProject.client || "N/A"}</span>
              </div>
              <div>
                <span className="text-slate-500 text-xs block">Industry</span>
                <span className="text-slate-200 font-medium">{selectedProject.industry || "N/A"}</span>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-slate-300 mb-2">Overview</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{selectedProject.overview}</p>
            </div>

            {selectedProject.requirements && selectedProject.requirements.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-slate-300 mb-2">Key Requirements & Features</h4>
                <ul className="list-disc list-inside text-slate-400 text-sm space-y-1">
                  {selectedProject.requirements.map((req, idx) => (
                    <li key={idx}>{req}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="pt-4 border-t border-slate-800 flex justify-end space-x-3">
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-slate-700 hover:border-slate-500 rounded-lg text-sm transition"
                >
                  View GitHub
                </a>
              )}
              {selectedProject.demo && (
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm transition"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}