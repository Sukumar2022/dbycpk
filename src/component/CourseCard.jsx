import React from "react";
import Button from "./Button"; // Assuming your custom button handles styles, or modify below

const CourseCard = ({imgSrc, duration, lesson, cousreTitle, rating}) => {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden bg-[#121212] border border-[#222222] p-4 text-white shadow-xl transition-all duration-300 hover:border-gray-700">
      
      {/* Image Wrapper with Relative Positioning */}
      <div className="relative rounded-lg overflow-hidden aspect-[4/3] bg-zinc-900 mb-5">
        <img 
          src={imgSrc} // Swap with your actual image path
          alt="Mastering Web Development"
          className="w-full h-full object-cover"
        />
        
        {/* Translucent Floating Bookmark Button */}
        <button className="absolute top-3 right-3 w-10 h-10 flex items-center justify-center rounded-full bg-black/30 backdrop-blur-md text-white/80 hover:text-white hover:bg-black/50 transition-colors">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
          </svg>
        </button>
      </div>

      {/* Meta Indicators Grid */}
      <div className="flex items-center justify-between text-sm text-zinc-300 px-1 mb-4 font-medium">
        {/* Duration */}
        <div className="flex items-center gap-1.5">
          <svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{duration}</span>
        </div>
        
        {/* Lessons */}
        <div className="flex items-center gap-1.5">
          <svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m11.142 0L21.75 12l-4.179-2.25M12 5.75L3.75 10l8.25 4.25L20.25 10 12 5.75zM3.75 14.25l8.25 4.25 8.25-4.25" />
          </svg>
          <span>{lesson}</span>
        </div>
        
        {/* Rating */}
        <div className="flex items-center gap-1.5 ml-auto">
          <svg className="w-4 h-4 text-white fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="font-semibold text-white">{rating}</span>
        </div>
      </div>

      {/* Course Title */}
      <h1 className="text-2xl font-semibold tracking-tight text-white px-1 mb-6 leading-snug">
        {cousreTitle}
      </h1>
      
      {/* Footer Area: Price & Action */}
      <div className="flex items-center justify-between items-center mt-auto px-1 pt-1">
        
        
        {/* Inline style for the unique 'Enroll Now' button variant in your image */}
        <Button text="Enroll"/>
      </div>

    </div>
  );
};

export default CourseCard;