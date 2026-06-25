import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ChevronDown } from 'lucide-react';

const OrnateDivider = () => (
  <div className="flex items-center justify-center space-x-4 my-6 opacity-60">
    <div className="w-12 md:w-20 h-[1px] bg-gradient-to-r from-transparent via-[#C0C0C0]/50 to-[#C0C0C0]" />
    <div className="relative flex items-center justify-center">
      <div className="w-2 h-2 rotate-45 border-[0.5px] border-[#FFFFFF] bg-white/10 shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
      <div className="absolute w-1 h-1 rotate-45 bg-[#FFFFFF] shadow-[0_0_5px_rgba(255,255,255,1)]" />
    </div>
    <div className="w-12 md:w-20 h-[1px] bg-gradient-to-l from-transparent via-[#C0C0C0]/50 to-[#C0C0C0]" />
  </div>
);

const TinyDiamond = () => (
  <div className="w-1.5 h-1.5 rotate-45 bg-gradient-to-br from-[#FFFFFF] to-[#C0C0C0] shadow-[0_0_8px_rgba(255,255,255,0.6)] my-4" />
);

export function CoupleHero() {
  return (
    <section className="relative min-h-screen bg-transparent flex items-center justify-center overflow-hidden">
      
      {/* Royal Spotlight & Texture */}
      <div className="absolute inset-0 bg-spotlight pointer-events-none" />
      <div className="absolute inset-0 bg-silver-dust opacity-30 mix-blend-screen pointer-events-none" />
      
      {/* Subtle edge vignette to deepen the royal feel */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.8)_100%)] pointer-events-none" />

      {/* Very subtle cutwork silver background hugging the edges instead of ugly vines */}
      <div className="absolute inset-y-0 left-[-5%] w-[30%] bg-cutwork-silver opacity-20 pointer-events-none" style={{ maskImage: 'linear-gradient(to right, black, transparent)', WebkitMaskImage: 'linear-gradient(to right, black, transparent)' }} />
      <div className="absolute inset-y-0 right-[-5%] w-[30%] bg-cutwork-silver opacity-20 pointer-events-none" style={{ maskImage: 'linear-gradient(to left, black, transparent)', WebkitMaskImage: 'linear-gradient(to left, black, transparent)' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center mt-12 md:mt-0">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <span className="font-sans text-[9px] md:text-[11px] tracking-[0.45em] text-[#C0C0C0] uppercase font-light drop-shadow-md">
              You Are Invited To
            </span>
            
            <OrnateDivider />
            
            <span className="font-sans text-[11px] md:text-[13px] tracking-[0.4em] text-[#C0C0C0] uppercase font-light drop-shadow-md">
              The Wedding Of
            </span>
          </motion.div>

          {/* Royal Typography Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            className="flex flex-col items-center mt-8 mb-10 w-full relative"
          >
            {/* Script Name - Alex Brush forced */}
            <h1 className="text-7xl md:text-9xl text-transparent bg-clip-text bg-gradient-to-br from-[#FFFFFF] via-[#E8E8E8] to-[#C0C0C0] drop-shadow-[0_4px_12px_rgba(255,255,255,0.2)] mb-4" style={{ fontFamily: "'Alex Brush', cursive", filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.8))' }}>
              Ridmi
            </h1>
            
            {/* Ampersand */}
            <span className="text-4xl md:text-5xl text-[#E8E8E8] font-light my-2 relative" style={{ fontFamily: "'Alex Brush', cursive", filter: 'drop-shadow(0px 2px 2px rgba(0,0,0,0.8))' }}>
              <div className="absolute top-1/2 left-[-80px] md:left-[-120px] w-[60px] md:w-[100px] h-[1px] bg-gradient-to-r from-transparent to-[#C0C0C0]" />
              &amp;
              <div className="absolute top-1/2 right-[-80px] md:right-[-120px] w-[60px] md:w-[100px] h-[1px] bg-gradient-to-l from-transparent to-[#C0C0C0]" />
            </span>
            
            {/* Script Name - Alex Brush forced */}
            <h1 className="text-7xl md:text-9xl text-transparent bg-clip-text bg-gradient-to-br from-[#FFFFFF] via-[#E8E8E8] to-[#C0C0C0] drop-shadow-[0_4px_12px_rgba(255,255,255,0.2)] mt-4" style={{ fontFamily: "'Alex Brush', cursive", filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.8))' }}>
              Nalin
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1 }}
            className="flex flex-col items-center mt-2 space-y-5"
          >
            <TinyDiamond />
            
            <div className="flex items-center space-x-3 text-[#E8E8E8] font-sans tracking-[0.25em] text-xs md:text-sm drop-shadow-md">
              <Calendar className="w-4 h-4 stroke-[1.5]" />
              <span>JULY 24, 2026</span>
            </div>

            <TinyDiamond />

            <div className="flex flex-col items-center space-y-2 mt-2 drop-shadow-md">
              <div className="flex items-center space-x-2 text-[#E8E8E8] font-sans tracking-[0.25em] text-xs md:text-sm">
                <MapPin className="w-4 h-4 stroke-[1.5]" />
                <span>HOTEL GRAND MINARO</span>
              </div>
              <span className="font-sans text-[11px] tracking-[0.35em] text-[#808080] uppercase font-light">
                Homagama
              </span>
            </div>
            
            <OrnateDivider />
            
            <p className="font-serif text-base md:text-lg text-[#E8E8E8] italic mt-4 mb-8 max-w-lg px-4 leading-relaxed" style={{ filter: 'drop-shadow(0px 1px 2px rgba(0,0,0,0.8))' }}>
              We're getting married and we're so excited to share this special moment with you!
            </p>

            {/* Ultra-Premium Main Action Button */}
            <button className="relative group overflow-hidden rounded-full border border-[#FFFFFF]/20 bg-[#0A0A0A]/80 backdrop-blur-md px-12 py-3.5 mb-5 transition-all duration-500 hover:border-[#FFFFFF]/60 hover:bg-[#111111] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              {/* Top edge glow reflection */}
              <div className="absolute top-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-[#FFFFFF] to-transparent opacity-100 shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
              {/* Inner subtle shadow */}
              <div className="absolute inset-0 rounded-full shadow-[inset_0_2px_10px_rgba(255,255,255,0.05)] pointer-events-none" />
              {/* Shine sweep */}
              <div className="absolute inset-y-0 w-[40%] bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[200%] skew-x-[-30deg] group-hover:translate-x-[300%] transition-transform duration-1000 ease-in-out" />
              <span className="relative z-10 font-sans text-xs tracking-[0.35em] text-[#FFFFFF] uppercase font-light">
                Enter Celebration
              </span>
            </button>

            {/* Secondary Action Button */}
            <button className="flex items-center space-x-2 rounded-xl border border-[#FFFFFF]/10 bg-transparent px-6 py-2.5 transition-all duration-300 hover:border-[#C0C0C0]/50 hover:bg-white/5">
              <Calendar className="w-4 h-4 text-[#C0C0C0]" />
              <span className="font-sans text-[11px] tracking-widest text-[#C0C0C0] font-light">
                Add to Calendar
              </span>
            </button>

          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="font-sans text-[9px] tracking-[0.35em] text-[#606060] uppercase mb-4 font-light">
          Scroll for details
        </span>
        <div className="w-8 h-8 rounded-full border border-[#606060]/50 flex items-center justify-center transition-colors hover:border-[#C0C0C0]">
          <ChevronDown className="w-4 h-4 text-[#808080] animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}