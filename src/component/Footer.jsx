import React from 'react';
import { ArrowUpRight } from 'lucide-react'; // Make sure lucide-react is installed

export default function Footer() {
  const linksColumn1 = [
    { name: "Home", href: "/", active: true },
    { name: "About", href: "/about" },
    { name: "All courses", href: "/courses" }
  ];

  const linksColumn2 = [
    { name: "Contact", href: "/contact" },
    { name: "Blogs", href: "#" },
    { name: "Mentors", href: "/about" },
  ];

 

  const socialLinks = [
    { name: "Facebook", href: "https://www.facebook.com/profile.php?id=100063877729072" },
    { name: "Instagram", href: "#" },
    { name: "Email", href: "mailto:joyanta155@gmail.com" },
    { name: "Twitter", href: "#" },
  ];

  return (
    <footer className="bg-[#050505] text-white pt-16 pb-8 px-4 md:px-8 lg:px-16 font-sans relative overflow-hidden">
      {/* Background Star Texture Effect (Optional - mimics your background) */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Section: CTA and Links Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-16">
          
          {/* Left Block: Call to Action (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col justify-center pr-0 lg:pr-12">
            <h3 className="text-xl md:text-2xl font-normal leading-relaxed max-w-md mb-8">
              Begin your learning journey today and gain the knowledge, confidence, and skills to shape your future.
            </h3>
            
            {/* Inline Email Form */}
            <form onSubmit={(e) => e.preventDefault()} className="flex w-full max-w-md bg-neutral-900/80 border border-neutral-800 rounded-lg p-1.5 focus-within:border-neutral-700 transition-colors">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="bg-transparent text-sm w-full px-3 py-2 text-white placeholder-neutral-500 outline-none"
                required
              />
              <button 
                type="submit" 
                className="bg-[#cf4d28] hover:bg-[#b84120] text-white text-sm font-medium px-6 py-2 rounded-md transition-colors whitespace-nowrap"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Right Block: Navigation Links Grid (7 Columns) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8 lg:pl-12 lg:border-l border-neutral-800/60">
            
            {/* Col 1 */}
            <div>
              <ul className="space-y-4 text-sm">
                {linksColumn1.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.href} className={`hover:text-white transition-colors ${link.active ? 'text-[#cf4d28]' : 'text-neutral-400'}`}>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 2 */}
            <div>
              <ul className="space-y-4 text-sm">
                {linksColumn2.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.href} className="text-neutral-400 hover:text-white transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

           

            {/* Col 4: Socials with icons */}
            <div>
              <ul className="space-y-4 text-sm">
                {socialLinks.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.href} className="text-neutral-400 hover:text-white transition-colors flex items-center gap-1 group">
                      <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-white transition-colors" />
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Middle Section: Massive Brand Text */}
        <div className="border-t border-neutral-800/60 py-6 text-center overflow-hidden select-none">
          <h1 className="text-[3vw] lg:text-[2vw] font-light tracking-widest leading-none text-white font-sans text-center block w-full">
            Dewanghat Bhartiya Yuva Computer Prashikshan Kendra
          </h1>
        </div>

        {/* Bottom Section: Sub-footer Links & Copyright */}
        <div className="border-t border-neutral-800/60 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
          <div className="flex gap-6">
            
            <a href="#" className="hover:text-neutral-300 transition-colors">Style Guide</a>
          </div>
          <p className="text-center sm:text-right">
            Copyright © DBYCPK | Designed by <span className="text-neutral-300 font-medium">Sukumar</span> - Powered by <span className="text-neutral-300 font-medium">DBYCPK</span>
          </p>
        </div>

      </div>
    </footer>
  );
}