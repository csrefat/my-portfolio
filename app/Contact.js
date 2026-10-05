'use client';
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    const SERVICE_ID = 'service_359h6qf';
    const TEMPLATE_ID = 'template_iq64p1i';
    const PUBLIC_KEY = 'Cjc_EgEqMeuq11BB5';

    emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      PUBLIC_KEY
    )
    .then(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000); // 
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      setStatus('error');
      setErrorMessage(error?.text || 'Could not send message.');
    });
  };

  return (
    <section id="contact" className="max-w-3xl mx-auto px-6 py-24 text-center relative overflow-hidden">
      {/* Background Glow Overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-extrabold text-white mb-3 tracking-tight">
          Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Extraordinary</span>
        </h2>
        <p className="text-slate-400 mb-10 max-w-lg mx-auto text-sm sm:text-base">
          Got a project or job opportunity? Drop a line and let's turn ideas into reality.
        </p>

        <form onSubmit={sendEmail} className="flex flex-col gap-5 text-left relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="relative group">
              <input 
                type="text" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name" 
                required 
                className="w-full p-4 bg-slate-900/80 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
              />
            </div>
            <div className="relative group">
              <input 
                type="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email" 
                required 
                className="w-full p-4 bg-slate-900/80 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
              />
            </div>
          </div>

          <div className="relative group">
            <textarea 
              name="message" 
              rows="5" 
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message" 
              required 
              className="w-full p-4 bg-slate-900/80 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300 resize-none"
            />
          </div>

          {/* Unique Animated Submit Button */}
          <motion.button 
            type="submit" 
            disabled={status === 'sending'}
            whileHover={{ scale: status === 'sending' ? 1 : 1.02 }}
            whileTap={{ scale: status === 'sending' ? 1 : 0.98 }}
            className={`relative overflow-hidden w-full py-4 px-8 rounded-xl font-semibold text-slate-950 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg ${
              status === 'success' 
                ? 'bg-emerald-400 shadow-emerald-500/25' 
                : 'bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 hover:shadow-cyan-500/25'
            }`}
          >
            {/* Shimmer Light Effect */}
            <span className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:animate-shimmer" />

            <AnimatePresence mode="wait">
              {status === 'idle' && (
                <motion.div 
                  key="idle"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-2"
                >
                  <span>Send Message</span>
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.div>
              )}

              {status === 'sending' && (
                <motion.div 
                  key="sending"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2"
                >
                  <svg className="animate-spin w-5 h-5 text-slate-950" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span>Transmitting...</span>
                </motion.div>
              )}

              {status === 'success' && (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2 font-bold"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Message Received!</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </form>

        {/* Error Status Banner */}
        {status === 'error' && (
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 text-red-400 text-sm font-medium bg-red-500/10 py-2 px-4 rounded-lg border border-red-500/20 inline-block"
          >
            Failed: {errorMessage}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}