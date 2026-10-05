'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ContactSection from './Contact';

export default function Home() {
  const [openExpertise, setOpenExpertise] = useState(0);
  const [currentDate, setCurrentDate] = useState('');
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setCurrentDate(
      new Date().toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      })
    );
  }, []);

  const expertiseData = [
    {
      title: "Front-End Development",
      icon: "💻",
      skills: "React.js, Next.js (App Router), Tailwind CSS, Framer Motion",
      description: "Crafting highly responsive, interactive, and modern UI/UX experiences with micro-animations and performance optimization."
    },
    {
      title: "Back-End & API Engineering",
      icon: "⚙️",
      skills: "Node.js, Express, MongoDB, REST APIs",
      description: "Building scalable backend architecture, managing database schemas, and securing API endpoints for full-stack apps."
    },
    {
      title: "C++ & Hardware / IoT",
      icon: "🤖",
      skills: "C++, Arduino, Embedded Systems, Problem Solving",
      description: "Designing low-level system software, embedded IoT automation projects, and algorithmic problem-solving."
    }
  ];

  const projects = [
    {
      title: "Interactive Bento Portfolio Platform",
      repo: "jannatunnaemrefat/nextjs-portfolio",
      desc: "High-performance developer portfolio built with Next.js App Router, Bento Grid layout, EmailJS integration, and interactive Framer Motion UI.",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion", "EmailJS"],
      github: "https://github.com/refatislam630",
      demo: "https://serefat-portfolio.vercel.app"
    },
    {
      title: "IoT Smart Home Controller",
      repo: "jannatunnaemrefat/iot-smart-controller",
      desc: "Embedded hardware automation controller built using C++ and Arduino with real-time sensor reporting and web dashboard integration.",
      tech: ["C++", "Arduino", "IoT", "Node.js"],
      github: "https://github.com/refatislam630",
      demo: "https://github.com/refatislam630"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-4 sm:p-6 lg:p-8 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* ================= 1.left coloum (Sidebar Profile) ================= */}
        <aside className="lg:col-span-3 space-y-6">
          <div className="bg-slate-900/60 border border-slate-800/80 rounded-3xl p-6 backdrop-blur-xl sticky top-6 shadow-2xl">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              Available for work
            </div>

            {/* Profile Info */}
            <div className="flex flex-col items-center text-center">
              <div className="relative group mb-4">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-500" />
                <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-slate-900 bg-slate-800 flex items-center justify-center text-3xl font-black text-cyan-400">
                  {!imgError ? (
                    <img 
                      src="/profile.jpg" 
                      alt="Md. Jannatun Naem Refat" 
                      className="w-full h-full object-cover"
                      onError={() => setImgError(true)}
                    />
                  ) : (
                    <span>NR</span>
                  )}
                </div>
              </div>
              <h1 className="text-xl font-extrabold text-white tracking-tight">Md. Jannatun Naem Refat</h1>
              <p className="text-xs text-cyan-400 font-mono mt-1 font-semibold">Software Engineer</p>
            </div>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-2 gap-3 mt-6">
              <a 
                href="/resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700/60 text-xs font-semibold text-center text-slate-200 transition flex items-center justify-center gap-1.5"
              >
                <span>📄</span> Resume
              </a>
              <a 
                href="#contact" 
                className="py-2.5 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold text-center transition flex items-center justify-center gap-1.5"
              >
                <span>✈️</span> Message
              </a>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center justify-center gap-3 mt-6 pt-6 border-t border-slate-800/80">
              <a 
                href="https://github.com/csrefat" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-800/60 hover:bg-slate-700 border border-slate-700/50 text-slate-300 hover:text-white transition"
                title="GitHub"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/md-jannatun-naem-refat-839655234/?isSelfProfile=true" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-800/60 hover:bg-slate-700 border border-slate-700/50 text-slate-300 hover:text-cyan-400 transition"
                title="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a 
                href="mailto:jannatun.naem.cse@ulab.edu.bd" 
                className="p-2.5 rounded-xl bg-slate-800/60 hover:bg-slate-700 border border-slate-700/50 text-slate-300 hover:text-cyan-400 transition"
                title="Email Me"
              >
                <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </a>
            </div>

            {/* Navigation Links */}
            <nav className="mt-8 space-y-2 text-sm font-medium">
              <a href="#home" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <span>🏠</span> Home
              </a>
              <button 
                onClick={() => setShowAboutModal(true)}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800/60 text-slate-400 hover:text-white transition text-left"
              >
                <span>👤</span> About Me
              </button>
              <a href="#projects" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800/60 text-slate-400 hover:text-white transition">
                <span>💼</span> Projects
              </a>
              <a href="#contact" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800/60 text-slate-400 hover:text-white transition">
                <span>✉️</span> Contact
              </a>
            </nav>
          </div>
        </aside>

        {/* ================= ২. মাঝের কলাম (Main Feed & Projects) ================= */}
        <section id="home" className="lg:col-span-6 space-y-6">
          
          {/* Hero Banner Card */}
          <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900/90 to-cyan-950/40 border border-slate-800 rounded-3xl p-8 backdrop-blur-xl shadow-2xl">
            <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-4">
              <span className="bg-slate-800/80 px-3 py-1 rounded-full border border-slate-700/60">
                📅 {currentDate || 'Today'}
              </span>
              <span className="text-cyan-400 font-semibold">📍 Dhaka, Bangladesh</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight tracking-tight mt-2">
              {"LET'S CODE WITH"} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500">
                JANNATUN NAEM REFAT
              </span>
            </h2>
            <p className="text-slate-400 text-sm mt-3 leading-relaxed">
              Junior Software Engineer compiling dreams into high-performance web applications and hardware solutions.
            </p>
          </div>

          {/* Career Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "EXPERIENCE", value: "1+ Yrs", color: "text-white" },
              { label: "PROJECTS", value: "10+", color: "text-cyan-400" },
              { label: "TECH STACK", value: "12+", color: "text-white" },
              { label: "COMMITS", value: "450+", color: "text-cyan-400" },
            ].map((stat, idx) => (
              <div key={idx} className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-4 text-center backdrop-blur-md">
                <span className="text-slate-500 text-[10px] font-mono tracking-wider uppercase">{stat.label}</span>
                <p className={`text-2xl font-black mt-1 ${stat.color}`}>{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Featured Projects Bento Cards */}
          <div id="projects" className="space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <span>📌</span> Featured Projects
            </h3>

            {projects.map((proj, idx) => (
              <div key={idx} className="bg-slate-900/60 border border-slate-800/80 rounded-2xl overflow-hidden backdrop-blur-md hover:border-slate-700 transition duration-300">
                <div className="bg-slate-950/80 px-4 py-2.5 border-b border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="text-[11px] text-slate-500">{proj.repo}</span>
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-bold text-white">{proj.title}</h4>
                  <p className="text-slate-400 text-xs sm:text-sm mt-2 leading-relaxed">{proj.desc}</p>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {proj.tech.map((t) => (
                      <span key={t} className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 mt-6 pt-4 border-t border-slate-800/60">
                    <a href={proj.github} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1.5 transition">
                      <span>💻</span> Codebase
                    </a>
                    <a href={proj.demo} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-400 flex items-center gap-1.5 transition ml-auto">
                      <span>🚀</span> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Section Component */}
          <div className="bg-slate-900/60 border border-slate-800/80 rounded-3xl p-2 backdrop-blur-xl">
            <ContactSection />
          </div>
        </section>

        {/* ================= ৩. ডান কলাম (Skill Set & Expertise) ================= */}
        <aside className="lg:col-span-3 space-y-6">
          
          {/* Skill Set Widget */}
          <div className="bg-slate-900/60 border border-slate-800/80 rounded-3xl p-6 backdrop-blur-xl shadow-2xl">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span>⚡</span> Skill Set
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {[
                { name: "React", icon: "⚛️", color: "text-cyan-400" },
                { name: "Next.js", icon: "▲", color: "text-white" },
                { name: "Tailwind", icon: "🎨", color: "text-sky-400" },
                { name: "JavaScript", icon: "🟨", color: "text-yellow-400" },
                { name: "Python", icon: "🐍", color: "text-blue-400" },
                { name: "C++", icon: "⚡", color: "text-indigo-400" },
                { name: "Node.js", icon: "🟢", color: "text-emerald-400" },
                { name: "MongoDB", icon: "🍃", color: "text-green-500" },
                { name: "Git", icon: "🟧", color: "text-orange-500" },
              ].map((s) => (
                <div key={s.name} className="bg-slate-800/40 border border-slate-700/40 rounded-xl p-3 text-center hover:border-cyan-400/50 hover:bg-slate-800/80 transition duration-300">
                  <span className="text-xl block mb-1">{s.icon}</span>
                  <span className={`text-[11px] font-semibold block ${s.color}`}>{s.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Expertise Accordion */}
          <div className="bg-slate-900/60 border border-slate-800/80 rounded-3xl p-6 backdrop-blur-xl shadow-2xl">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span>🛠️</span> Expertise
            </h3>

            <div className="space-y-3">
              {expertiseData.map((item, idx) => {
                const isOpen = openExpertise === idx;
                return (
                  <div key={idx} className="border border-slate-800 rounded-2xl overflow-hidden bg-slate-950/40">
                    <button
                      onClick={() => setOpenExpertise(isOpen ? -1 : idx)}
                      className="w-full p-4 text-left flex items-center justify-between font-bold text-xs sm:text-sm text-slate-200 hover:text-cyan-400 transition"
                    >
                      <span className="flex items-center gap-2">
                        <span>{item.icon}</span> {item.title}
                      </span>
                      <span className="text-slate-500">{isOpen ? "▲" : "▼"}</span>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-4 pb-4 border-t border-slate-800/60 pt-3"
                        >
                          <p className="text-xs text-cyan-400 font-mono mb-2 font-medium">{item.skills}</p>
                          <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

        </aside>

      </div>

      {/* ================= Interactive About Me Modal ================= */}
      <AnimatePresence>
        {showAboutModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-slate-900 border border-slate-800 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative"
            >
              <button 
                onClick={() => setShowAboutModal(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-full bg-slate-800"
              >
                ✕
              </button>

              <h3 className="text-2xl font-bold text-white mb-2">About Me 👤</h3>
              <p className="text-xs font-mono text-cyan-400 mb-4">Md. Jannatun Naem Refat — Software Engineer</p>

              <div className="space-y-3 text-slate-300 text-xs sm:text-sm leading-relaxed">
                <p>
                  I am a passionate <strong className="text-white">Computer Science & Engineering (CSE)</strong> student at ULAB and a Junior Software Engineer based in Dhaka, Bangladesh.
                </p>
                <p>
                  My core strengths lie in full-stack web applications using <strong className="text-cyan-400">Next.js, React, Node.js</strong>, and hardware automation using <strong className="text-cyan-400">C++ and IoT</strong>.
                </p>
                <p>
                  I thrive on solving complex engineering problems and crafting fluid user experiences with modern tools like Framer Motion & Tailwind CSS.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end">
                <button 
                  onClick={() => setShowAboutModal(false)}
                  className="px-5 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs"
                >
                  Close Window
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}