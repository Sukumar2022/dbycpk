import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Clock, Star, BookOpen } from 'lucide-react';

export default function CoursesSection() {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Designing', 'Development', 'Account', 'Programming'];

  const courses = [
    {
      id: 1,
      title: 'Microsoft Word, Excel and Powerpoint',
      category: 'Fundamentals',
      duration: '3 Months',
      rating: '4.9',
      image: '/images/c1.jpg',
      price: '#'
    },
    {
      id: 2,
      title: 'Tally & GST Billing',
      category: 'Account',
      duration: '3-6 Months',
      rating: '5.0',
      image: '/images/c2.jpg',
      price: '#'
    },
    {
      id: 3,
      title: 'CorelDRAW',
      category: 'Designing',
      duration: '3 Months',
      rating: '4.8',
      image: '/images/c3.jpg',
      price: '#'
    },
    {
      id: 4,
      title: 'Diploma in Computer Application',
      category: 'Development',
      duration: '3-6 Months',
      rating: '4.7',
      image: '/images/c4.jpg',
      price: '#'
    },
    {
      id: 5,
      title: 'Programming Language (Python, Java, C++)',
      category: 'Programming',
      duration: '3-6 Months',
      rating: '4.9',
      image: '/images/c5.jpg',
      price: '#'
    },
    {
      id: 6,
      title: 'Database',
      category: 'Development',
      duration: '8 Weeks',
      rating: '4.9',
      image: '/images/c6.jpg',
      price: '#'
    },
    {
      id: 7,
      title: 'PhotoShop',
      category: 'Designing',
      duration: '2-3 Months',
      rating: '4.9',
      image: '/images/c7.jpg',
      price: '#'
    }
  ];

  const filteredCourses = activeFilter === 'All' 
    ? courses 
    : courses.filter(course => course.category === activeFilter);

  return (
    <section className="bg-[#050505] text-white py-24 px-4 md:px-8 lg:px-16 font-sans relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#cf4d28] mb-3 block">
              Curriculum Catalogue
            </span>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight">
              Explore our <span className="text-neutral-400 italic">courses</span>
            </h2>
          </div>
          
          {/* Animated Filter Pill Tabs */}
          <div className="flex flex-wrap gap-2 bg-neutral-900/60 p-1.5 border border-neutral-800 rounded-xl overflow-x-auto scrollbar-none max-w-full">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`relative px-4 py-2 text-xs font-medium rounded-lg transition-colors duration-300 whitespace-nowrap ${
                  activeFilter === category ? 'text-white' : 'text-neutral-400 hover:text-neutral-200'
                }`}
              >
                {activeFilter === category && (
                  <motion.div 
                    layoutId="activeFilterBg"
                    className="absolute inset-0 bg-[#cf4d28] rounded-lg -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Animated Courses Grid Layout */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-800 border border-neutral-800 rounded-2xl overflow-hidden"
        >
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={course.id}
                className="bg-neutral-900 flex flex-col justify-between group hover:bg-neutral-900/80 transition-colors duration-300"
              >
                {/* Course Thumbnail Image Box */}
                <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-neutral-800">
                  <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-transparent z-10 transition-colors duration-500" />
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  {/* Category Pill Tag */}
                  <span className="absolute top-4 left-4 bg-neutral-950/80 border border-neutral-800 text-[10px] uppercase font-semibold tracking-wider px-2.5 py-1 rounded z-20">
                    {course.category}
                  </span>
                </div>

                {/* Content Block */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    {/* Meta stats */}
                    <div className="flex items-center gap-4 text-xs text-neutral-400 mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#cf4d28]" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                        <span>{course.rating}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-normal leading-snug text-neutral-100 mb-6 group-hover:text-white transition-colors">
                      {course.title}
                    </h3>
                  </div>

                  {/* Pricing / Action Footer */}
                  <div className="border-t border-neutral-800/60 pt-4 flex items-center justify-between mt-auto">
                    <div>
                      <span className="text-xs text-neutral-500 block">Investment</span>
                      <span className="text-2xl font-light text-white">{course.price}</span>
                    </div>
                    
                    {/* Circle Link Arrow Button */}
                    <div className="w-10 h-10 rounded-full border border-neutral-800 bg-neutral-950 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:bg-[#cf4d28] group-hover:border-[#cf4d28] transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}