import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, Send, Mail, MapPin } from 'lucide-react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form Submitted Safely:', formData);
  };

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <section className="bg-[#050505] text-white py-24 px-4 md:px-8 lg:px-16 font-sans relative overflow-hidden">
      {/* Background blur effects */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#cf4d28]/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-neutral-800/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Block */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-[#cf4d28] mb-3 block">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
            Let's start a <span className="text-neutral-400 italic">conversation</span>
          </h2>
          <p className="text-neutral-400 text-sm max-w-md mx-auto leading-relaxed">
            Have questions about our courses or mentorship tracks? Drop us a line or jump directly into chat.
          </p>
        </motion.div>

        {/* Two-Column Core Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Communication Channels (5 Columns) */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 space-y-4"
          >
            {/* WHATSAPP CALL TO ACTION */}
            <motion.a 
              href="https://wa.me/7003014415?text=Hello%20DBYCPK,%20I'm%20interested%20in%20your%20courses!" 
              target="_blank" 
              rel="noopener noreferrer"
              variants={fadeInUp}
              whileHover={{ y: -4, borderColor: "rgba(34, 197, 94, 0.4)" }}
              className="block bg-neutral-900 border border-neutral-800/80 p-6 rounded-2xl group transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center rounded-xl group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-emerald-400 font-semibold uppercase tracking-wider block mb-0.5">Fastest Response</span>
                  <h3 className="text-lg font-medium text-neutral-100 group-hover:text-white">Chat on WhatsApp</h3>
                  <p className="text-xs text-neutral-400 mt-1">Message our support desk anytime. Standard response within minutes.</p>
                </div>
              </div>
            </motion.a>

            {/* DIRECT PHONE CALL */}
            <motion.a 
              href="tel:+7003014415"
              variants={fadeInUp}
              whileHover={{ y: -4, borderColor: "rgba(207, 77, 40, 0.4)" }}
              className="block bg-neutral-900 border border-neutral-800/80 p-6 rounded-2xl group transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#cf4d28]/10 border border-[#cf4d28]/20 text-[#cf4d28] flex items-center justify-center rounded-xl group-hover:bg-[#cf4d28] group-hover:text-white transition-all duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-[#cf4d28] font-semibold uppercase tracking-wider block mb-0.5">Mon - Sat (9am - 7pm)</span>
                  <h3 className="text-lg font-medium text-neutral-100 group-hover:text-white">Call Direct</h3>
                  <p className="text-xs text-neutral-400 mt-1">Speak directly to an academic advisor to map your learning goals.</p>
                </div>
              </div>
            </motion.a>

            {/* Static Info Cards Divider */}
            <div className="pt-6 border-t border-neutral-900 grid grid-cols-2 gap-4 text-xs text-neutral-400">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-neutral-600" />
                    <Link to="mailto:joyanta155@gmail.com">Email</Link>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-neutral-600" />
                <span>Global Digital Operations</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Interactive Email Form Block (7 Columns) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 bg-neutral-900 border border-neutral-800 rounded-2xl p-8 bg-[radial-gradient(#262626_1px,transparent_1px)] [background-size:24px_24px]"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="name" className="text-xs text-neutral-400 font-medium">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-neutral-950/80 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-neutral-600 transition-colors"
                    placeholder="John Doe"
                    required
                  />
                </div>

                {/* Email Address */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="email" className="text-xs text-neutral-400 font-medium">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-neutral-950/80 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-neutral-600 transition-colors"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col space-y-2">
                <label htmlFor="subject" className="text-xs text-neutral-400 font-medium">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-neutral-950/80 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-neutral-600 transition-colors"
                  placeholder="How can we help you?"
                  required
                />
              </div>

              {/* Message */}
              <div className="flex flex-col space-y-2">
                <label htmlFor="message" className="text-xs text-neutral-400 font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-neutral-950/80 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-neutral-600 transition-colors resize-none"
                  placeholder="Tell us details about your request..."
                  required
                />
              </div>

              {/* Submit Button */}
              <motion.button
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-[#cf4d28] hover:bg-[#b84120] text-white text-sm font-medium py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </motion.button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}