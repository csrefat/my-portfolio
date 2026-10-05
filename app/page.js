'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ContactSection from './Contact';

export default function Home() {
  // Accordion State for Expertise
  const [openExpertise, setOpenExpertise] = useState(0);

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
      title: "Interactive Portfolio Platform",
      repo: "naemrefat/nextjs-portfolio",
      desc: "High-performance developer portfolio built with Next.js, Bento Grid layout, EmailJS integration, and interactive Framer Motion UI.",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion", "EmailJS"],
      github: "https://github.com",
      demo: "https://serefat-portfolio.vercel.app"
    },
    {
      title: "IoT Smart Automation System",
      repo: "naemrefat/iot-smart-controller",
      desc: "Embedded hardware automation controller built using C++ and Arduino with real-time sensor reporting and web dashboard integration.",
      tech: ["C++", "Arduino", "IoT", "Node.js"],
      github: "https://github.com",
      demo: "#"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-4 sm:p-6 lg:p-8 font-sans selection:bg-cyan-500 selection:text-slate-950">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* ================= ১. বাম কলাম (Sidebar Profile) ================= */}
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
                <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-slate-900 bg-slate-800 flex items-center justify-center text-4xl font-black text-cyan-400">
                  NR
                </div>
              </div>
              <h1 className="text-xl font-extrabold text-white tracking-tight">Md. Jannatun Naem Refat</h1>
              <p className="text-xs text-cyan-400 font-mono mt-1 font-semibold">Software Engineer</p>
            </div>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-2 gap-3 mt-6">
              <a 
                href="#resume" 
                className="py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700/60 text-xs font-semibold text-center text-slate-200 transition"
              >
                📄 Resume
              </a>
              <a 
                href="#contact" 
                className="py-2.5 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold text-center transition"
              >
                ✈️ Message
              </a>
            </div>

            {/* Navigation Links */}
            <nav className="mt-8 space-y-2 text-sm font-medium">
              <a href="#home" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <span>🏠</span> Home
              </a>
              <a href="#about" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800/60 text-slate-400 hover:text-white transition">
                <span>👤</span> About Me
              </a>
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
        <section className="lg:col-span-6 space-y-6">
          
          {/* Hero Banner Card */}
          <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900/90 to-cyan-950/40 border border-slate-800 rounded-3xl p-8 backdrop-blur-xl shadow-2xl">
            <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-4">
              <span className="bg-slate-800/80 px-3 py-1 rounded-full border border-slate-700/60">
                📅 {new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })}
              </span>
              <span className="text-cyan-400 font-semibold">📍 Dhaka, Bangladesh</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight tracking-tight mt-2">
              LET'S CODE WITH <br />
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
                {/* Mac-style Window Top Header */}
                <div className="bg-slate-950/80 px-4 py-2.5 border-b border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="text-[11px] text-slate-500">{proj.repo}</span>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h4 className="text-xl font-bold text-white">{proj.title}</h4>
                  <p className="text-slate-400 text-xs sm:text-sm mt-2 leading-relaxed">{proj.desc}</p>
                  
                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {proj.tech.map((t) => (
                      <span key={t} className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3 mt-6 pt-4 border-t border-slate-800/60">
                    <a href={proj.github} target="_blank" className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1.5 transition">
                      <span>💻</span> Codebase
                    </a>
                    <a href={proj.demo} target="_blank" className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-400 flex items-center gap-1.5 transition ml-auto">
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
                      className="w-full p-4 text-left flex items-center justify-between font-bold text-xs