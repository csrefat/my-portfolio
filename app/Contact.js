'use client';
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    // ⚠️ আপনার EmailJS-এর Public Key-টি এখানে দিন (যেমন: 'gkX_abc123xyz')
    const PUBLIC_KEY = 'Cjc_EgEqMeuq11BB5Y'; 

    emailjs.send(
      'service_359h6qf',
      '6l1w2t8',
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      PUBLIC_KEY
    )
    .then(() => {
      setStatus('Message sent successfully! 🎉');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      // স্ক্রিনে মূল এরর মেসেজটি দেখাবে
      setStatus(`Failed: ${error?.text || JSON.stringify(error)}`);
    });
  };

  return (
    <section id="contact" className="max-w-3xl mx-auto px-6 py-20 text-center">
      <h2 className="text-3xl font-bold text-white mb-4">Let's Work Together</h2>
      <p className="text-slate-400 mb-8">Got a project or job opportunity? Send me a message!</p>
      
      <form onSubmit={sendEmail} className="flex flex-col gap-4 text-left">
        <input 
          type="text" 
          name="name" 
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name" 
          required 
          className="p-3 bg-slate-900 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-cyan-400"
        />
        <input 
          type="email" 
          name="email" 
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email" 
          required 
          className="p-3 bg-slate-900 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-cyan-400"
        />
        <textarea 
          name="message" 
          rows="5" 
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message" 
          required 
          className="p-3 bg-slate-900 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-cyan-400"
        />
        <button 
          type="submit" 
          className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold py-3 px-6 rounded-lg transition-all"
        >
          Send Message
        </button>
      </form>
      
      {status && <p className="mt-4 text-cyan-400 font-medium">{status}</p>}
    </section>
  );
}