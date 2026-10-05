'use client';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactSection() {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs.sendForm(
      'service_359h6qf',   //  Service ID
      '6l1w2t8',           // Template ID
      form.current,
      's7Pp8NUpee8xOyoVa-FKd'    //  Public Key 
    )
    .then(() => {
      setStatus('Message sent successfully! 🎉');
      form.current.reset();
    }, (error) => {
      setStatus('Failed to send message. Please try again.');
    });
  };

  return (
    <section id="contact" className="max-w-3xl mx-auto px-6 py-20 text-center">
      <h2 className="text-3xl font-bold text-white mb-4">Let's Work Together</h2>
      <p className="text-slate-400 mb-8">Got a project or job opportunity? Send me a message!</p>
      
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 text-left">
        <input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          required 
          className="p-3 bg-slate-900 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-cyan-400"
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          required 
          className="p-3 bg-slate-900 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-cyan-400"
        />
        <textarea 
          name="message" 
          rows="5" 
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