'use client';
import React from 'react';
import ContactSection from './Contact'; // আপনার তৈরি কন্টাক্ট ফর্ম

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-4 sm:p-6 lg:p-8 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* =================১. বাম কলাম (Sidebar) ================= */}
        <aside className="lg:col-span-3 space-y-6">
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 backdrop-blur-xl sticky top-6">
            <div className="flex flex-col items-center text-center">
              <img 
                src="/profile.jpg" // আপনার ছবি public/profile.jpg-এ রাখুন
                alt="MD. JANNATUN NAEM REFAT" 
                className="w-24 h-24 rounded-full border-2 border-cyan-400 p-1 mb-4 object-cover"
              />
              <h1 className="text-xl font-bold text-white">Naem Refat</h1>
              <p className="text-xs text-cyan-400 font-mono mt-1">Software Engineer</p>
            </div>

            <nav className="mt-8 space-y-2">
              <a href="#home" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-cyan-500/10 text-cyan-400 font-medium">
                🏠 Home
              </a>
              <a href="#about" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800/50 text-slate-400 hover:text-white transition">
                👤 About
              </a>
              <a href="#projects" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800/50 text-slate-400 hover:text-white transition">
                💼 Projects
              </a>
              <a href="#contact" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800/50 text-slate-400 hover:text-white transition">
                ✉️ Contact
              </a>
            </nav>
          </div>
        </aside>

        {/* ================= ২. মাঝের কলাম (Main Banner & Feed) ================= */}
        <section className="lg:col-span-6 space-y-6">
          {/* Hero Banner Card */}
          <div className="relative overflow-hidden bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border border-slate-800 rounded-2xl p-8 backdrop-blur-xl">
            <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
              {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' })}
            </span>
            <h2 className="text-3xl font-black text-white mt-4 uppercase tracking-wide">
              Let's Code With <span className="text-cyan-400">Refat</span>
            </h2>
            <p className="text-slate-400 text-sm mt-2">Compiling Ideas into Seamless Digital Experiences.</p>
          </div>

          {/* Career Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4 text-center">
              <span className="text-slate-400 text-xs font-mono uppercase">Experience</span>
              <p className="text-2xl font-extrabold text-white mt-1">1+ Yrs</p>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4 text-center">
              <span className="text-slate-400 text-xs font-mono uppercase">Projects</span>
              <p className="text-2xl font-extrabold text-cyan-400 mt-1">10+</p>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4 text-center">
              <span className="text-slate-400 text-xs font-mono uppercase">Tech Stack</span>
              <p className="text-2xl font-extrabold text-white mt-1">15+</p>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4 text-center">
              <span className="text-slate-400 text-xs font-mono uppercase">Commits</span>
              <p className="text-2xl font-extrabold text-cyan-400 mt-1">500+</p>
            </div>
          </div>

          {/* Contact Section Component */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-2">
            <ContactSection />
          </div>
        </section>

        {/* ================= ৩. ডান কলাম (Widgets & Skills) ================= */}
        <aside className="lg:col-span-3 space-y-6">
          {/* Skill Set Widget */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 backdrop-blur-xl">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              ⚡ Skill Set
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {['React', 'Next.js', 'Tailwind', 'Python', 'Node.js', 'MongoDB', 'Git', 'C++', 'MySQL'].map((skill) => (
                <div key={skill} className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-3 text-center hover:border-cyan-400/50 transition">
                  <span className="text-xs font-semibold text-slate-300 block">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>

      </div>
    </main>
  );
}