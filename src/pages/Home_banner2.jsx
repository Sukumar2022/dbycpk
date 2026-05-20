import React from "react";
import { Link } from "react-router-dom";
import { delay, motion } from "framer-motion";
import Button from "../component/Button";
import CourseCard from "../component/CourseCard";

const Home_banner2 = () => {
  // Animation variants for staggered children entry
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      delay:2,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="manrope min-h-screen bg-black text-white py-20 px-4 md:px-12 flex flex-col justify-between items-center overflow-hidden">
      
      {/* Top Header Section */}
      <motion.div 
        className="w-full max-w-7xl flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="max-w-3xl">
          {/* Big Bold Heading */}
          <motion.h1 
            variants={itemVariants}
            className="bebas text-7xl sm:text-8xl lg:text-9xl tracking-wide uppercase leading-none"
          >
            Best <span className="text-gray-500">Courses</span>
          </motion.h1>
          
          {/* Subtext description */}
          <motion.p 
            variants={itemVariants}
            className="text-gray-400 text-lg sm:text-xl max-w-xl mt-6 font-light leading-relaxed"
          >
            Learn from our most popular courses designed to boost your skills, grow your knowledge, and take your learning to the next level.
          </motion.p>
        </div>

        {/* View More Button (Moved out of absolute positioning for better responsiveness) */}
        <motion.div variants={itemVariants} className="self-start md:self-end">
          <Link to="/courses"> 
            <Button text="View More"/> 
          </Link>
        </motion.div>
      </motion.div>

      {/* Courses Grid / List Container */}
      <motion.div 
        className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        {/* Course Cards wrapped in motion divs for reveal effect */}
        <motion.div variants={itemVariants} className="w-full max-w-sm">
          <CourseCard imgSrc='./images/img5.jpg' duration="6 Months" cousreTitle="Microsoft Tools (Word, Excel, Powerpoint, Access)" lesson="30+ Lessions" rating="4.9" />
        </motion.div>
        <motion.div variants={itemVariants} className="w-full max-w-sm">
          <CourseCard imgSrc='./images/img6.jpg' duration="6 Months" cousreTitle="Tally, Payroll, GST Balance Sheet &  Statutory Taxation" lesson="20+ Lessions" rating="4.6"/>
        </motion.div>
        <motion.div variants={itemVariants} className="w-full max-w-sm">
          <CourseCard imgSrc='./images/img3.jpg' duration="6 Months" cousreTitle="Web Development, Java, Python, MySQL & C++" lesson="60+ Lessions" rating="4.2"/>
        </motion.div>
      </motion.div>

    </div>
  );
};

export default Home_banner2;