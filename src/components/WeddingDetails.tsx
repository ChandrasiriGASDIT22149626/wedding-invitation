import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar } from 'lucide-react';


interface OrnateBoxProps {
  children: React.ReactNode;
}

const OrnateBox = ({ children }: OrnateBoxProps) => (
  <div className="relative w-full max-w-[280px] h-14 flex items-center justify-center my-3 mx-auto">
    {/* The background SVG border path */}
    <svg className="absolute inset-0 w-full h-full text-[#C0C0C0]/50 fill-[#0c0c0b] stroke-current" viewBox="0 0 280 56" preserveAspectRatio="none">
      {/* Draw the ornate shape */}
      <path 
        d="M 12,6 
           L 268,6 
           Q 274,6 274,12 
           L 274,18 
           C 278,22 278,34 274,38 
           L 274,44 
           Q 274,50 268,50 
           L 12,50 
           Q 6,50 6,44 
           L 6,38 
           C 2,34 2,22 6,18 
           L 6,12 
           Q 6,6 12,6 Z" 
        strokeWidth="0.8" 
      />
      {/* Corner decorative diamonds */}
      <polygon points="12,4 14,6 12,8 10,6" className="fill-[#C0C0C0]/60 stroke-none" />
      <polygon points="268,4 270,6 268,8 266,6" className="fill-[#C0C0C0]/60 stroke-none" />
      <polygon points="12,48 14,50 12,52 10,50" className="fill-[#C0C0C0]/60 stroke-none" />
      <polygon points="268,48 270,50 268,52 266,50" className="fill-[#C0C0C0]/60 stroke-none" />
      
      {/* Decorative side scrolls */}
      <circle cx="4" cy="28" r="1.5" className="fill-[#C0C0C0]/60 stroke-none" />
      <circle cx="276" cy="28" r="1.5" className="fill-[#C0C0C0]/60 stroke-none" />
    </svg>
    {/* Box Content */}
    <div className="relative z-10 font-serif text-lg md:text-xl tracking-[0.08em] luxury-gradient-text">
      {children}
    </div>
  </div>
);

export function WeddingDetails() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const handleAddToCalendar = () => {
    const title = "Wedding of Ridmi & Nalin";
    const details = "We are getting married! Join us for our celebration.";
    const location = "No. 660, Welipillewa, Panagoda, Homagama, Sri Lanka";
    const start = "20260724T090000";
    const end = "20260724T160000";
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${start}/${end}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`;
    window.open(url, '_blank');
  };

  return (
    <section 
      ref={ref} 
      className="relative py-16 md:py-24 px-6 md:px-12 bg-transparent overflow-hidden text-center text-white border-t border-[#C0C0C0]/10"
    >
      {/* Cutwork Background */}
      <div className="absolute inset-0 z-0 bg-spotlight opacity-[0.05] pointer-events-none mix-blend-screen"></div>

      {/* Background soft cool highlights */}
      <div 
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse 60% 80% at 0% 0%, rgba(192, 192, 192, 0.05) 0%, rgba(0, 0, 0, 0) 70%)',
        }}
      />
      <div 
        className="absolute bottom-0 right-0 w-full h-full pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse 60% 80% at 100% 100%, rgba(192, 192, 192, 0.05) 0%, rgba(0, 0, 0, 0) 70%)',
        }}
      />

      {/* Floating Silver Sparkles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`sparkle-details-${i}`}
            className="absolute w-[2px] h-[2px] bg-[#C0C0C0]/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.1, 0.6, 0.1]
            }}
            transition={{
              duration: 5 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="relative max-w-3xl mx-auto space-y-8 z-10">
        {/* Title and Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="space-y-2"
        >
          <h2 className="font-serif text-4xl md:text-5xl luxury-gradient-text uppercase font-light tracking-[0.2em]">
            Event Details
          </h2>
          <p className="font-serif text-xs md:text-sm text-[#C0C0C0]/80 italic">
            Here's everything you need for the day.
          </p>
        </motion.div>

        {/* Ornate Divider Scroll */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex justify-center text-[#C0C0C0]/40"
        >
          <svg className="w-28 h-6 fill-none stroke-current" viewBox="0 0 100 24" strokeWidth="0.8">
            <path d="M10 12 C25 2, 35 22, 45 12 L 55 12 C65 2, 75 22, 90 12" />
            <polygon points="50,8 54,12 50,16 46,12" className="fill-[#C0C0C0]/50 stroke-none" />
          </svg>
        </motion.div>

        {/* Premium Event Details Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="relative max-w-[420px] w-full mx-auto mt-8 glass-dark luxury-border-glow rounded-2xl p-8 flex flex-col items-center overflow-hidden"
        >
          {/* Divider */}
          <div className="w-32 h-[1px] bg-[#C0C0C0]/20 my-4 z-10" />

          {/* Save The Date Header */}
          <span className="font-sans text-[10px] tracking-[0.35em] text-[#C0C0C0]/80 uppercase font-semibold z-10">
            Save the Date
          </span>

          {/* Date */}
          <div className="flex flex-col items-center mt-3 z-10">
            <span className="font-serif text-xl tracking-[0.15em] text-white/90 uppercase font-light">
              Friday, 24 July
            </span>
            <span className="block font-serif text-5xl md:text-6xl tracking-wider luxury-gradient-text font-semibold drop-shadow-[0_2px_8px_rgba(192,192,192,0.2)] mt-1">
              2026
            </span>
          </div>

          {/* Divider */}
          <div className="w-32 h-[1px] bg-[#C0C0C0]/20 my-5 z-10" />

          {/* Time Sections */}
          <div className="w-full flex flex-col items-center z-10 space-y-1">
            <span className="font-sans text-[9px] tracking-[0.25em] text-[#C0C0C0]/70 uppercase font-medium">
              — Time —
            </span>
            <OrnateBox>09:00 AM Onwards</OrnateBox>

            <span className="font-sans text-[9px] tracking-[0.25em] text-[#C0C0C0]/70 uppercase font-medium mt-3">
              — Poruwa —
            </span>
            <OrnateBox>10:05 AM</OrnateBox>
          </div>

          {/* Bottom Divider */}
          <div className="w-20 h-[1px] bg-[#C0C0C0]/20 my-6 z-10" />

          {/* Add to Calendar Button */}
          <button 
            onClick={handleAddToCalendar}
            className="relative z-10 px-8 py-3.5 rounded-none border border-[#C0C0C0]/40 bg-transparent text-[#C0C0C0] font-sans text-[10px] tracking-[0.3em] uppercase hover:border-[#C0C0C0] hover:bg-[#C0C0C0] hover:text-black transition-all duration-500 flex items-center gap-2 shadow-[0_4px_12px_rgba(0,0,0,0.4)] cursor-pointer group"
          >
            <Calendar className="w-3.5 h-3.5 text-[#C0C0C0] group-hover:text-black stroke-[1.2] transition-colors" />
            <span className="group-hover:font-semibold transition-all">Add to Calendar</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}