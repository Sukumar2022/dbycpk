import React from 'react';
import { motion } from 'framer-motion';
import Button from '../component/Button';
import { Link } from 'react-router-dom';

const Home_banner = () => {
  // Container variant that controls the sequence orchestrating the children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25, // Time gap between each element animating
        delayChildren: 0.1,    // Initial delay before the first animation starts
      },
    },
  };

  // Individual element animation rules (Fade in + Slide up)
  const itemVariants = {
    hidden: { 
      y: 40, 
      opacity: 0 
    },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        duration: 0.8, 
        ease: [0.215, 0.61, 0.355, 1] // Custom smooth cubic-bezier curve
      } 
    },
  };

  return (
    <div className="bg-[linear-gradient(to_bottom,rgba(0,0,0,0.65),rgba(0,0,0,0.85)),url('/images/home_bg.jpg')] bg-cover bg-center min-h-[92vh] w-full flex justify-center items-center px-5 py-10 overflow-hidden">
      
      {/* Container holding the content with motion orchestration */}
      <motion.div 
        className="w-full md:w-[85%] lg:w-[75%] flex flex-col gap-6 md:gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        {/* 1. Tagline/Subtitle */}
        <motion.h4 
          variants={itemVariants}
          className="text-amber-300 text-2xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight md:tracking-normal leading-tight font-medium"
        >
          Your First Step into Tech Starts Here
        </motion.h4>

        {/* 2. Main Institution Title */}
        <motion.h1 
          variants={itemVariants}
          className="bebas text-5xl sm:text-7xl md:text-8xl text-white leading-[1.1] max-w-5xl tracking-wide"
        >
          Dewanghat Bhartiya Yuva Computer Prashikshan Kendra
        </motion.h1>

        {/* 3. Description Paragraph */}
        <motion.p 
          variants={itemVariants}
          className="mt-2 w-full md:w-[80%] text-xl sm:text-2xl text-gray-200 font-sans leading-relaxed font-light"
        >
          Step into the future of technology with comprehensive training
          designed to bridge the gap between theory and real-world application.
          From coding to digital mastery, we provide the tools and mentorship.
        </motion.p>

        {/* 4. Action Button */}
        <motion.div 
          variants={itemVariants}
          className="mt-4"
        >
         <Link to="tel:+7003014415"><Button text="Enroll Now"/></Link> 
        </motion.div>

      </motion.div>
    </div>
  );
}

export default Home_banner;