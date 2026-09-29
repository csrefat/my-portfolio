import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center px-6 py-12">
      <section className="flex flex-col-reverse md:flex-row items-center justify-between max-w-5xl w-full gap-10">
        
        {/* Bam pashe: Text & Info */}
        <div className="flex-1 text-center md:text-left">
          <span className="inline-block px-3 py-1 bg-cyan-500/10 text-cyan-400 text-sm font-medium rounded-full mb-4 border border-cyan-500/20">
            Software Engineer & Web Developer
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            Hi, I'm <span className="text-cyan-400">Refat</span> 👋
          </h1>
          <p className="mt-4 text-lg text-slate-400 leading-relaxed">
            Building modern, high-performance web applications with Next.js, React, and Tailwind CSS.
          </p>
          
          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="#contact"
              className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold rounded-xl transition-all shadow-lg shadow-cyan-500/20"
            >
              Get in Touch
            </a>
            <a
              href="/resume.pdf"
              download="Refat_Resume.pdf"
              className="px-6 py-3 border border-slate-700 hover:border-slate-500 text-slate-300 rounded-xl transition-all"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Dan pashe: Apnar Profile Photo */}
        <div className="flex justify-center">
          <div className="relative w-60 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden border-2 border-cyan-500/40 shadow-[0_0_30px_rgba(6,182,212,0.25)]">
            <Image
              src="/profile.jpg"
              alt="MD. JANNATUN NAEM REFAT"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>

      </section>
    </main>
  );
}
'use client';

import { motion } from 'framer-motion';
import { Mail, ArrowRight, ExternalLink, Cpu, Shield, Database, Network } from 'lucide-react';

export default function Portfolio() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-slate-200 font-sans selection:bg-cyan-500/30 overflow-hidden relative">
      
      {/* Background Orbs */}
      <div className="fixed top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-cyan-600/10 blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-indigo-600/10 blur-[120px] pointer-events-none" />

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-[#050505]/70 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-mono text-xl font-bold tracking-tighter text-white">
            REFAT<span className="text-cyan-400">.</span>
          </div>
          <a href="#contact" className="text-sm font-medium border border-white/10 hover:border-cyan-400/50 hover:text-cyan-400 px-5 py-2 rounded-full transition-all duration-300 backdrop-blur-md bg-white/5">
            Let's Talk
          </a>
        </div>
      </nav>

      <main className="pt-32 pb-24 relative z-10">
        
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={staggerContainer} 
            className="max-w-4xl"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-3 px-4 py-1.5 mb-8 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-cyan-300 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Software Engineer | ULAB CSE
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tighter text-white mb-8 leading-[1.1]">
              Architecting <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">
                Digital Realities.
              </span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-lg sm:text-xl text-slate-400 max-w-2xl font-light mb-12 leading-relaxed">
              Bridging hardware and software to build resilient systems. Specialized in IoT infrastructures, network topologies, and high-performance applications.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-6">
              <a href="#projects" className="bg-white text-black px-8 py-4 rounded-full font-medium hover:scale-105 transition-transform flex items-center gap-2">
                Explore Work <ArrowRight className="w-4 h-4" />
              </a>
              <div className="flex gap-4">
                <a href="https://github.com/csrefat" target="_blank" className="p-4 rounded-full bg-white/5 border border-white/10 hover:border-cyan-400 hover:text-cyan-400 transition-all">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/md-jannatun-naem-refat-839655234" target="_blank" className="p-4 rounded-full bg-white/5 border border-white/10 hover:border-cyan-400 hover:text-cyan-400 transition-all">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            className="mb-16"
          >
            <h2 className="text-sm font-mono text-cyan-400 uppercase tracking-widest mb-4">Core Arsenal</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white">Technical Expertise</h3>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div whileHover={{ y: -5 }} className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 p-8 rounded-3xl backdrop-blur-md">
              <Database className="w-8 h-8 text-cyan-400 mb-6" />
              <h4 className="text-xl font-bold text-white mb-4">Backend & Data</h4>
              <p className="text-slate-400 text-sm leading-relaxed font-mono">
                Python, Node.js, SQL, MySQL. Building scalable APIs, managing databases, and processing data pipelines.
              </p>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 p-8 rounded-3xl backdrop-blur-md">
              <Network className="w-8 h-8 text-indigo-400 mb-6" />
              <h4 className="text-xl font-bold text-white mb-4">Networks & IoT</h4>
              <p className="text-slate-400 text-sm leading-relaxed font-mono">
                Mesh topologies, self-healing networks, sensor integration, and hardware-software bridging.
              </p>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 p-8 rounded-3xl backdrop-blur-md">
              <Cpu className="w-8 h-8 text-emerald-400 mb-6" />
              <h4 className="text-xl font-bold text-white mb-4">Web & Architecture</h4>
              <p className="text-slate-400 text-sm leading-relaxed font-mono">
                JavaScript, React, Tailwind CSS. Designing responsive interfaces and software architectures.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16">
            <h2 className="text-sm font-mono text-cyan-400 uppercase tracking-widest mb-4">Case Studies</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white">Engineered Solutions</h3>
          </motion.div>

          <div className="space-y-12">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="group relative grid md:grid-cols-2 gap-8 items-center bg-white/[0.02] border border-white/5 rounded-[2rem] p-8 hover:bg-white/[0.04] transition-colors">
              <div>
                <div className="text-xs font-mono text-cyan-400 mb-4 tracking-wider uppercase">IoT Healthcare</div>
                <h3 className="text-3xl font-bold text-white mb-4">Smart Medicine Box (Medio)</h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                  An intelligent hardware-software integration designed to automate medication tracking with real-time sensor alerts.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono">Python</span>
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono">Sensors</span>
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono">IoT Automation</span>
                </div>
                <a href="https://github.com/csrefat" target="_blank" className="inline-flex items-center gap-2 text-white hover:text-cyan-400 transition-colors font-medium">
                  View Codebase <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <div className="h-64 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 border border-white/10 flex items-center justify-center relative overflow-hidden">
                <Shield className="w-20 h-20 text-cyan-400/50 group-hover:scale-110 transition-transform duration-700" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="max-w-5xl mx-auto px-6 py-32 border-t border-white/5 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Let's build something <br/><span className="text-cyan-400">extraordinary.</span></h2>
            <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
              Actively seeking software engineering roles and open to collaborative tech projects.
            </p>
            <a href="mailto:your.email@example.com" className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform">
              <Mail className="w-5 h-5" /> Say Hello
            </a>
          </motion.div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-[#050505] relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500">
          <p>&copy; 2026 MD.JANNATUN NAEM REFAT. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="https://github.com/csrefat" target="_blank" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/md-jannatun-naem-refat-839655234" target="_blank" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Resume</a>
          </div>
        </div>
      </footer>
    </div>
  );
}