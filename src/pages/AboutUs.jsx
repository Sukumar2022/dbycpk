import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Users, Award } from 'lucide-react';

export default function AboutUs() {
  // Animation presets
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const stats = [
    { number: "4K+", label: "Learners" },
    { number: "95%", label: "Success Rate" },
    { number: "4+", label: "Expert Mentors" },
  ];

  const values = [
    { icon: <Target className="w-5 h-5 text-[#cf4d28]" />, title: "Our Mission", desc: "Empowering individuals through tailored, future-proof digital skillsets." },
    { icon: <Shield className="w-5 h-5 text-[#cf4d28]" />, title: "Trust & Safety", desc: "Curated learning tracks backed by real-world industry veterans." },
    { icon: <Users className="w-5 h-5 text-[#cf4d28]" />, title: "Community First", desc: "A global network fostering collaboration over competition." },
    { icon: <Award className="w-5 h-5 text-[#cf4d28]" />, title: "Excellence", desc: "We maintain uncompromised standards in mentorship and curriculum." },
  ];

  return (
    <section className="bg-[#050505] text-white py-24 px-4 md:px-8 lg:px-16 font-sans relative overflow-hidden">
      {/* Background ambient glow matching previous components */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#cf4d28]/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Header Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          
          {/* Animated Header Text Block */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="lg:col-span-6"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-[#cf4d28] mb-3 block">
              Who We Are
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-tight mb-6">
              Shaping the next <br />
              <span className="text-neutral-400 italic">generation</span> of creators.
            </h2>
          </motion.div>

          {/* Animated Paragraph Intro Block */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } }
            }}
            className="lg:col-span-6 lg:pt-8 text-neutral-400 text-lg leading-relaxed space-y-6"
          >
            <p>
              Dewanghat Bhartiya Yuva Computer Prashikshan Kendra was founded on a simple truth: formal education is lagging behind real-world technological evolution. We bridge that gap cleanly.
            </p>
            <p>
              By treating learning as an active, continuous journey guided by active industry professionals rather than an abstract curriculum, we ensure your momentum never stalls.
            </p>
          </motion.div>
        </div>

        {/* Visual Media & Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-neutral-800 border border-neutral-800 rounded-2xl overflow-hidden mb-24">
          
          {/* Left: Animated Showcase Image Placeholder */}
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 bg-neutral-900 min-h-[350px] relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/50 to-transparent z-10" />
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop&q=80" 
              alt="Team collaborating" 
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:scale-105 group-hover:opacity-50 transition-all duration-700 ease-out"
            />
          </motion.div>

          {/* Right: Sequential Stats Counters */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-5 grid grid-rows-3 gap-px bg-neutral-800"
          >
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                variants={fadeIn}
                className="bg-neutral-900 p-8 flex flex-col justify-center"
              >
                <h4 className="text-5xl font-light tracking-tight text-white mb-1">
                  {stat.number}
                </h4>
                <p className="text-xs text-neutral-400 uppercase tracking-widest">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Core Values Section */}
        <div>
          <div className="mb-12">
            <h3 className="text-2xl font-normal tracking-tight">Our Core Values</h3>
            <div className="w-12 h-[2px] bg-[#cf4d28] mt-3" />
          </div>

          {/* 4-Column Grid with hover and scroll animations */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {values.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeIn}
                whileHover={{ y: -8, borderColor: "rgba(207, 77, 40, 0.4)" }}
                className="bg-neutral-900/40 border border-neutral-800/60 p-6 rounded-xl transition-colors duration-300 backdrop-blur-sm"
              >
                <div className="w-10 h-10 bg-neutral-900 border border-neutral-800 flex items-center justify-center rounded-lg mb-4">
                  {item.icon}
                </div>
                <h4 className="text-base font-medium mb-2 text-neutral-100">{item.title}</h4>
                <p className="text-neutral-400 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}