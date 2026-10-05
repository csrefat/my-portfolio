'use client';
import React, { useState } from 'react';

export default function Home() {
  const [imgError, setImgError] = useState(false);

  const projects = [
    {
      title: "Market Pulse Tracker",
      tagline: "Next.js & REST API Web Platform",
      desc: "Real-time financial and market data tracking web application with interactive charts and live currency rate updates.",
      tech: ["Next.js", "React", "Tailwind CSS", "REST API"],
      github: "https://github.com/csrefat/market-pulse-tracker",
      demo: "https://serefat-portfolio.vercel.app"
    },
    {
      title: "Cybersecurity MITM Simulation",
      tagline: "Python & Network Security Simulation",
      desc: "Network packet manipulation and Man-In-The-Middle attack/defense simulation framework built for security protocol analysis.",
      tech: ["Python", "Networking", "Cybersecurity", "Linux"],
      github: "https://github.com/csrefat/Cybersecurity-MITM-Simulation",
      demo: ""
    },
    {
      title: "NetGuard Project",
      tagline: "Network Security Filter & Packet Inspection",
      desc: "Automated network security filter and monitoring system designed for real-time threat detection and socket packet inspection.",
      tech: ["Python", "C++", "Network Security", "Sockets"],
      github: "https://github.com/csrefat/NetGuard-Project",
      demo: ""
    },
    {
      title: "Smart Traffic Management System",
      tagline: "IoT & Microcontroller Signal Control",
      desc: "Intelligent traffic control system leveraging sensors and microcontrollers to dynamically reduce signal congestion.",
      tech: ["C++", "Python", "IoT", "Arduino"],
      github: "https://github.com/csrefat/smart-traffic-management-system",
      demo: ""
    },
    {
      title: "Smart Medicine Box",
      tagline: "Arduino & Healthcare Automation Device",
      desc: "IoT-enabled healthcare automation system featuring timed pill dispensing, RTC alarm schedules, and remote alerts.",
      tech: ["C++", "Arduino", "IoT", "Embedded Systems"],
      github: "https://github.com/csrefat/smart-medicine-box",
      demo: ""
    }
  ];

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col lg:flex-row font-sans text-slate-800">
      
      {/* ================= LEFT SIDEBAR (DevCard Theme) ================= */}
      <aside className="w-full lg:w-72 bg-[#4eac82] text-white flex flex-col justify-between p-6 shrink-0 lg:fixed lg:h-screen lg:top-0 lg:left-0 lg:overflow-y-auto">
        <div>
          {/* Profile Image & Name */}
          <div className="text-center">
            <div className="w-28 h-28 mx-auto rounded-full overflow-hidden border-4 border-white/30 bg-emerald-800 flex items-center justify-center text-3xl font-bold shadow-md mb-3">
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
            <h1 className="text-xl font-bold tracking-tight">Md. Jannatun Naem Refat</h1>
            <p className="text-xs text-emerald-100 mt-1 leading-relaxed px-2 opacity-90">
              Hi, my name is Refat and I'm a software engineer. Welcome to my personal website!
            </p>
          </div>

          {/* Social Links Icons */}
          <div className="flex items-center justify-center gap-2 mt-4 text-emerald-900">
            <a href="https://github.com/csrefat" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition shadow-sm" title="GitHub">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/md-jannatun-naem-refat-839655234/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition shadow-sm" title="LinkedIn">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="mailto:refatislam630@gmail.com" className="w-8 h-8 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition shadow-sm" title="Email">
              <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            </a>
          </div>

          {/* Navigation Bar */}
          <nav className="mt-8 space-y-1 text-sm font-semibold">
            <a href="#about" className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-black/10 text-white">
              <span>👤</span> About Me
            </a>
            <a href="#portfolio" className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-black/10 text-emerald-50 hover:text-white transition">
              <span>🖼️</span> Portfolio
            </a>
            <a href="#what-i-do" className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-black/10 text-emerald-50 hover:text-white transition">
              <span>🛠️</span> Services & Skills
            </a>
            <a href="/resume.html" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-black/10 text-emerald-50 hover:text-white transition">
              <span>📄</span> Resume
            </a>
            <a href="#contact" className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-black/10 text-emerald-50 hover:text-white transition">
              <span>✉️</span> Contact
            </a>
          </nav>
        </div>

        {/* Hire Me Action Button */}
        <div className="mt-8 pt-6 border-t border-white/20">
          <a 
            href="#contact" 
            className="w-full py-3 px-4 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-center flex items-center justify-center gap-2 shadow-lg transition"
          >
            <span>✈️</span> Hire Me
          </a>
        </div>
      </aside>

      {/* ================= MAIN CONTENT AREA ================= */}
      <main className="flex-1 lg:ml-72 bg-white p-6 sm:p-12 space-y-16">
        
        {/* HERO SECTION */}
        <section id="about" className="flex flex-col md:flex-row items-center justify-between gap-8 pt-4">
          <div className="space-y-4 max-w-xl">
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Md. Jannatun Naem Refat
            </h1>
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-600">
              Software Engineer
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              I'm a software engineer specialised in full-stack web development, cybersecurity simulations, and IoT automation systems. Want to know how I may help your project? Check out my project <a href="#portfolio" className="text-[#4eac82] font-semibold underline">portfolio</a> and <a href="/resume.html" target="_blank" className="text-[#4eac82] font-semibold underline">online resume</a>.
            </p>
            
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a 
                href="#portfolio" 
                className="px-6 py-3 rounded-lg bg-[#4eac82] hover:bg-[#3f8f6b] text-white font-bold text-sm flex items-center gap-2 shadow-md transition"
              >
                <span>➔</span> View Portfolio
              </a>
              <a 
                href="/resume.html" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-6 py-3 rounded-lg bg-slate-700 hover:bg-slate-800 text-white font-bold text-sm flex items-center gap-2 shadow-md transition"
              >
                <span>📄</span> View Resume
              </a>
            </div>
          </div>

          {/* Photo Frame */}
          <div className="w-full md:w-80 h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-100 bg-slate-200 shrink-0">
            {!imgError ? (
              <img src="/profile.jpg" alt="Refat" className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-slate-400 font-bold">Refat Photo</div>
            )}
          </div>
        </section>

        <hr className="border-slate-100" />

        {/* WHAT I DO SECTION */}
        <section id="what-i-do" className="space-y-6">
          <div className="border-l-4 border-[#4eac82] pl-3">
            <h2 className="text-2xl font-bold text-slate-900">What I do</h2>
          </div>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl">
            I have 1+ year of experience building web software, cybersecurity threat simulation tools, and IoT hardware automation projects. Below is a quick overview of my main technical skill sets.
          </p>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            
            <div className="space-y-2 p-4 rounded-xl border border-slate-100 bg-slate-50 hover:shadow-md transition">
              <div className="text-2xl">⚛️</div>
              <h3 className="font-bold text-slate-900 text-base">React & Next.js</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Building scalable frontend applications, App Router layout, Tailwind CSS design system, and Framer Motion UI animations.
              </p>
            </div>

            <div className="space-y-2 p-4 rounded-xl border border-slate-100 bg-slate-50 hover:shadow-md transition">
              <div className="text-2xl">🟢</div>
              <h3 className="font-bold text-slate-900 text-base">Node.js & Express</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Developing RESTful APIs, server logic, MongoDB database integration, authentication, and backend routing.
              </p>
            </div>

            <div className="space-y-2 p