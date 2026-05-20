import React, { useState } from 'react';
import { Globe } from 'lucide-react';

export default function Home_promise() {
  const [activeTab, setActiveTab] = useState(1);

  // Mock data for the mentor carousel/tabs
  const mentors = [
    { id: 1, name: "Joyanta Hazra", quote: "Keep learning and success will follow." },
    { id: 2, name: "Joyanta Hazra", quote: "Growth begins at the end of your comfort zone." },
    { id: 3, name: "Joyanta Hazra", quote: "Consistency is the bridge between goals and accomplishment." },
    { id: 4, name: "Joyanta Hazra", quote: "Skills define your future; never stop acquiring them." },
  ];

  // Avatars for the bottom slider and top right group
  const avatars = [
   "/images/mentor.jpg",
   "/images/mentor2.jpg",
  ];

  const activeMentor = mentors.find(m => m.id === activeTab) || mentors[0];

  return (
    <div className="bg-[#0b0b0b] text-white min-h-screen py-16 px-4 md:px-8 lg:px-16 font-sans select-none">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
        <div>
          <h2 className="text-5xl md:text-6xl font-normal tracking-tight">
            Our <span className="text-neutral-400">promise</span>
          </h2>
        </div>
        <p className="text-neutral-400 text-sm max-w-sm leading-relaxed">
          We promise high-quality learning, expert mentorship, and flexible courses designed to help you grow confidently and achieve your career goals.
        </p>
      </div>

      {/* Main Grid Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-px bg-neutral-800 border border-neutral-800 rounded-2xl overflow-hidden">
        
        {/* Left Column: Big Mentor Feature Card (4 cols on lg) */}
        <div className="lg:col-span-5 bg-neutral-900 flex flex-col justify-between p-8 relative min-h-[450px] overflow-hidden group">
          {/* Background image fade matching the design */}
          <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#cf4d28]/40 via-transparent to-transparent opacity-60 mix-blend-color-burn" />
          <img 
            src="/images/mentor.jpg" 
            alt="Mentor" 
            className="absolute inset-0 w-full h-full object-cover object-top z-0 opacity-40 grayscale group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/30 z-10" />

          {/* Card Content */}
          <div className="relative z-20 mt-auto">
            <h3 className="text-3xl md:text-4xl font-medium leading-tight max-w-xs mb-6">
              "{activeMentor.quote}"
            </h3>
            <div>
              <p className="text-lg font-medium">{activeMentor.name}</p>
              <p className="text-xs text-neutral-400 uppercase tracking-wider">Quote from Our Mentor</p>
            </div>
          </div>
        </div>

        {/* Right Dynamic Layout (7 cols on lg) */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-12 gap-px bg-neutral-800">
          
          {/* Top Row Block: Tab Controller & Mentor Blurb (Full width of right layout) */}
          <div className="md:col-span-12 bg-neutral-900/95 p-8 flex flex-col justify-between min-h-[240px] bg-[radial-gradient(#262626_1px,transparent_1px)] [background-size:16px_16px]">
            <div className="flex justify-between items-center mb-6">
              {/* Pagination Controls */}
              <div className="flex gap-1.5">
                {[1, 2, 3, 4].map((num) => (
                  <button
                    key={num}
                    onClick={() => setActiveTab(num)}
                    className={`w-6 h-6 rounded text-xs font-medium flex items-center justify-center transition-colors ${
                      activeTab === num 
                        ? 'bg-[#cf4d28] text-white' 
                        : 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>

              {/* Overlapping Mini Avatars */}
              <div className="flex -space-x-2 overflow-hidden">
                {avatars.slice(0, 4).map((src, idx) => (
                  <img key={idx} className="inline-block h-7 w-7 rounded-full ring-2 ring-neutral-900 object-cover" src={src} alt="Team member" />
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-2">Expert Mentors</h4>
              <p className="text-neutral-400 text-xs leading-relaxed max-w-xl">
                Learn from industry leaders who provide expert guidance, actionable insights, and hands-on experience in every course to help you succeed confidently, advance your career, and unlock your full potential.
              </p>
            </div>
          </div>

          {/* Bottom Row Left: Mentorship Slider & Star Graphic (5 cols) */}
          <div className="md:col-span-5 grid grid-rows-2 gap-px bg-neutral-800">
            {/* Custom 4-pointed Sparkle/Star Container */}
            <div className="bg-neutral-900 flex items-center justify-center p-6 min-h-[120px]">
              <div className="w-12 h-12 bg-[#cf4d28] relative [clip-path:polygon(50%_0%,_63%_37%,_100%_50%,_63%_63%,_50%_100%,_37%_63%,_0%_50%,_37%_37%)]"></div>
            </div>
            {/* 51+ Metric Block */}
            <div className="bg-neutral-900 p-6 flex items-center justify-center min-h-[120px]">
              <span className="text-5xl font-light tracking-tight">12+</span>
            </div>
          </div>

          {/* Bottom Row Right: Stats Card (7 cols) */}
          <div className="md:col-span-7 bg-neutral-900 p-8 flex flex-col justify-between min-h-[240px]">
            <div className="flex items-center gap-2 text-neutral-400 text-xs tracking-wide">
              <Globe className="w-3.5 h-3.5" />
              <span>Around the Panchla, Howrah</span>
            </div>

            <div className="text-center my-auto py-4">
              <h3 className="text-6xl md:text-7xl font-light tracking-tight mb-2">2K</h3>
              <p className="text-sm font-medium tracking-wide text-neutral-200">Courses Completed</p>
            </div>

            <p className="text-[11px] text-neutral-500 text-center leading-normal max-w-xs mx-auto">
              This is some Learners across the panchla, howrah have successfully completed our courses, developing real-world skills, professional confidence, and a lifelong passion for continuous learning text inside of a div block.
            </p>
          </div>

          {/* Mentorship Footer Info Panel */}
          <div className="md:col-span-12 bg-neutral-900 p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 border-t border-neutral-800/50">
            <div className="max-w-xs">
              <h5 className="text-sm font-medium mb-1">Mentorship</h5>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Hands-on guidance from industry leaders ensures you progress confidently and efficiently.
              </p>
            </div>
            
            {/* Horizontal Avatar Strip */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              {avatars.map((src, idx) => (
                <img 
                  key={idx} 
                  className="w-8 h-11 object-cover rounded bg-neutral-800 grayscale hover:grayscale-0 transition-all duration-300 flex-shrink-0" 
                  src={src} 
                  alt="Learner reference" 
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}