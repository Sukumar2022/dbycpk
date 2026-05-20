import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  PenTool,
  TrendingUp,
  Database,
  Cpu,
  Palette,
} from "lucide-react";
import { Link } from "react-router-dom";

const Home_discover = () => {
  // Container animation configuration for staggered items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  // Header specific animation
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Grid box entries slide up and fade in
  const cellVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  // Data map matching your image layout safely
  const categories = [
    {
      id: "//01",
      title: "Development",
      desc: "Craft scalable products",
      count: "120",
      icon: Code2,
    },
    {
      id: "//02",
      title: "Fundametals",
      desc: "Build solid fundamental",
      count: "100",
      icon: PenTool,
    },
    {
      id: "//03",
      title: "Tally",
      desc: "Drive smart growth",
      count: "70",
      icon: TrendingUp,
    },
    {
      id: "//04",
      title: "Coreldraw",
      desc: "Unlock your imagination",
      count: "110",
      icon: Palette,
    },
    {
      id: "//05",
      title: "DataBase",
      desc: "MySQL",
      count: "60",
      icon: Database,
    },
    {
      id: "//06",
      title: "Technology",
      desc: "Power the future",
      count: "80",
      icon: Cpu,
    },
    {
      id: "//07",
      title: "Photoshop",
      desc: "Inspire ideas",
      count: "30",
      icon: Palette,
    },
  ];

  return (
    <div className="bg-[#0D0D0D] text-white min-h-screen py-20 px-6 md:px-12 lg:px-16 flex flex-col justify-center font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto w-full">
        {/* Top Meta Tag & Section Header Area */}
        <motion.div
          className="flex flex-col md:flex-row md:items-start justify-between mb-16 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
        >
          {/* Left Mini Badge */}
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-400">
            <span className="text-[#E03A14] font-bold">◆ 003</span>
            <span className="h-1 w-1 rounded-full bg-zinc-600"></span>
            <span>Categories</span>
          </div>

          {/* Right Main Title Block */}
          <div className="text-left md:text-right max-w-md md:ml-auto">
            <h2 className="text-6xl md:text-8xl font-medium tracking-tight mb-4">
              Discover
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-light leading-relaxed">
              Explore courses across top categories and learn new skills
              anytime, anywhere, at your own pace.
            </p>
          </div>
        </motion.div>

        {/* Dynamic Bento Style Grid Frame */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border-t border-l border-zinc-800"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Render standard category boxes */}
          {categories.map((cat) => {
            const IconComponent = cat.icon;
            return (
              <motion.div
                key={cat.id}
                variants={cellVariants}
                whileHover={{ backgroundColor: "#141414" }}
                className="relative p-8 border-b border-r border-zinc-800 flex flex-col min-h-[220px] justify-between group cursor-pointer transition-colors duration-200"
              >
                {/* Micro-index identifier */}
                <span className="absolute top-6 right-6 text-xs text-zinc-600 font-mono tracking-tighter group-hover:text-zinc-400 transition-colors">
                  {cat.id}
                </span>

                {/* Graphic Icon Wrapper */}
                <div className="text-white bg-transparent w-fit transition-transform duration-300 group-hover:scale-110">
                  <IconComponent strokeWidth={1.5} size={28} />
                </div>

                {/* Info block */}
                <div className="mt-8">
                  <h3 className="text-lg font-medium text-zinc-100 mb-1 group-hover:text-white">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-zinc-500 font-light mb-4 line-clamp-1">
                    {cat.desc}
                  </p>
                  <span className="text-xs text-zinc-600 font-mono font-medium">
                    {cat.count}
                  </span>
                </div>
              </motion.div>
            );
          })}

          {/* Special Custom Brick: Educate Grid Block */}
          <motion.div
            variants={cellVariants}
            className="relative p-8 border-b border-r border-zinc-800 flex flex-col min-h-[220px] justify-between bg-gradient-to-br from-transparent to-[#101010]/40"
            style={{
              backgroundImage:
                "radial-gradient(circle, #1a1a1a 1px, transparent 1px)",
              backgroundSize: "16px 16px",
            }}
          >
            <span className="text-lg font-medium text-zinc-200">Educate</span>
            <div className="text-zinc-400 font-light text-base leading-snug">
              Your goals. <br />
              <span className="text-zinc-500 font-normal">our </span>
              <span className="text-[#E03A14] font-medium underline decoration-1 underline-offset-4">
                courses.
              </span>
            </div>
          </motion.div>

          {/* Placeholder Blank Brick for Grid Alignments (Hidden on small displays) */}
          <div className="hidden lg:block border-b border-r border-zinc-800 bg-[#0D0D0D]"></div>

          {/* Call-to-Action Callout Brick (Accent block matching your red visual marker) */}
          <motion.div
            variants={cellVariants}
            className="p-8 bg-[#B12206] text-white flex flex-col justify-between min-h-[220px] border-b border-r border-zinc-800"
          >
            <div>
              <h3 className="text-2xl font-medium tracking-tight mb-2">
                Top categories
              </h3>
              <p className="text-xs text-white/80 font-light leading-relaxed">
                Discover trending courses across all categories.
              </p>
            </div>

            {/* Micro-interaction Button with live pulsing recording indicator */}
            <Link to="/courses">
              <button className="w-full mt-4 py-2.5 px-4 bg-white hover:bg-zinc-100 text-black font-medium text-xs rounded-md shadow-sm transition-all flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#B12206] animate-pulse"></span>
                Explore all
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home_discover;
