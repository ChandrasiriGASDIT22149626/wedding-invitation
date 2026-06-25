import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Calendar, MapPin } from 'lucide-react';

interface EnvelopeOpeningProps {
  onComplete: () => void;
}

// Letterpress Floral Path Components (Embossed on Gold/Black Paper)
const TopFlapFloral = () => {
  const paths = [
    "M 50,3 Q 50,45 50,85",
    "M 50,20 Q 32,30 25,48",
    "M 50,20 Q 68,30 75,48",
    "M 50,38 C 48,38 48,42 50,42 C 52,42 52,38 50,38 Z",
    "M 48,37 C 45,36 44,43 49,44",
    "M 52,37 C 55,36 56,43 51,44",
    "M 46,39 C 43,44 47,48 50,47",
    "M 54,39 C 57,44 53,48 50,47",
    "M 44,35 C 38,40 44,52 50,52 C 56,52 62,40 56,35",
    "M 25,46 C 23,46 23,50 25,50 C 27,50 27,46 25,46 Z",
    "M 23,45 C 20,44 19,51 24,52",
    "M 27,45 C 30,44 31,51 26,52",
    "M 21,43 C 15,48 21,60 25,60 C 29,60 35,48 29,43",
    "M 75,46 C 73,46 73,50 75,50 C 77,50 77,46 75,46 Z",
    "M 73,45 C 70,44 69,51 74,52",
    "M 77,45 C 80,44 81,51 76,52",
    "M 71,43 C 65,48 71,60 75,60 C 79,60 85,48 79,43",
    "M 50,15 Q 42,8 36,14 C 42,18 45,16 50,15", 
    "M 50,15 Q 44,12 38,14",
    "M 50,15 Q 58,8 64,14 C 58,18 55,16 50,15", 
    "M 50,15 Q 56,12 62,14",
    "M 38,28 Q 28,26 24,32 C 30,35 34,32 38,28", 
    "M 38,28 Q 30,28 26,31",
    "M 62,28 Q 72,26 76,32 C 70,35 66,32 62,28", 
    "M 62,28 Q 70,28 74,31",
    "M 50,65 Q 42,70 38,80 C 45,83 48,75 50,65", 
    "M 50,65 Q 44,72 40,78",
    "M 50,65 Q 58,70 62,80 C 55,83 52,75 50,65", 
    "M 50,65 Q 56,72 60,78"
  ];
  return (
    <svg className="w-full h-full fill-none" viewBox="0 0 100 100">
      {/* Embossed Shadow */}
      <g stroke="#000000" strokeWidth="1" strokeLinecap="round" opacity="0.9" transform="translate(0.5, 0.5)">
        {paths.map((p, i) => <path key={`sh-${i}`} d={p} />)}
      </g>
      {/* Embossed Highlight */}
      <g stroke="#3a3a3a" strokeWidth="0.6" strokeLinecap="round" opacity="0.7" transform="translate(-0.5, -0.5)">
        {paths.map((p, i) => <path key={`hi-${i}`} d={p} />)}
      </g>
      {/* Base Pattern */}
      <g stroke="#151515" strokeWidth="0.8" strokeLinecap="round">
        {paths.map((p, i) => <path key={`base-${i}`} d={p} />)}
      </g>
    </svg>
  );
};

const BottomFlapFloral = () => {
  const paths = [
    "M 5,95 Q 25,85 40,60",
    "M 12,91 C 8,86 12,80 15,82 C 18,84 15,89 12,91 Z",
    "M 22,81 Q 14,75 18,68 C 22,70 23,76 22,81",
    "M 30,71 Q 25,60 30,55 C 34,57 32,66 30,71",
    "M 40,60 C 37,52 42,48 44,50 C 46,52 42,57 40,60 Z",
    "M 95,95 Q 75,85 60,60",
    "M 88,91 C 92,86 88,80 85,82 C 82,84 85,89 88,91 Z",
    "M 78,81 Q 86,75 82,68 C 78,70 77,76 78,81",
    "M 70,71 Q 75,60 70,55 C 66,57 68,66 70,71",
    "M 60,60 C 63,52 58,48 56,50 C 54,52 58,57 60,60 Z",
    "M 50,83 C 48,79 52,79 50,83 Z", 
    "M 50,87 C 48,91 52,91 50,87 Z",
    "M 48,85 C 44,83 44,87 48,85 Z", 
    "M 52,85 C 56,83 56,87 52,85 Z",
    "M 50,85 Q 40,88 30,88", 
    "M 50,85 Q 60,88 70,88"
  ];
  return (
    <svg className="w-full h-full fill-none" viewBox="0 0 100 100">
      {/* Embossed Shadow */}
      <g stroke="#000000" strokeWidth="1" strokeLinecap="round" opacity="0.9" transform="translate(0.5, 0.5)">
        {paths.map((p, i) => <path key={`sh-${i}`} d={p} />)}
      </g>
      {/* Embossed Highlight */}
      <g stroke="#3a3a3a" strokeWidth="0.6" strokeLinecap="round" opacity="0.7" transform="translate(-0.5, -0.5)">
        {paths.map((p, i) => <path key={`hi-${i}`} d={p} />)}
      </g>
      {/* Base Pattern */}
      <g stroke="#151515" strokeWidth="0.8" strokeLinecap="round">
        {paths.map((p, i) => <path key={`base-${i}`} d={p} />)}
      </g>
    </svg>
  );
};

const LeftFlapFloral = () => {
  const paths = [
    "M 10,50 Q 40,48 80,55",
    "M 30,49 Q 25,38 32,35 C 38,37 35,46 30,49",
    "M 50,51 Q 55,62 48,65 C 42,63 45,54 50,51",
    "M 70,53 Q 65,42 72,38 C 78,40 75,49 70,53"
  ];
  return (
    <svg className="w-full h-full fill-none" viewBox="0 0 100 100">
      {/* Embossed Shadow */}
      <g stroke="#000000" strokeWidth="1" strokeLinecap="round" opacity="0.9" transform="translate(0.5, 0.5)">
        {paths.map((p, i) => <path key={`sh-${i}`} d={p} />)}
      </g>
      {/* Embossed Highlight */}
      <g stroke="#3a3a3a" strokeWidth="0.6" strokeLinecap="round" opacity="0.7" transform="translate(-0.5, -0.5)">
        {paths.map((p, i) => <path key={`hi-${i}`} d={p} />)}
      </g>
      {/* Base Pattern */}
      <g stroke="#151515" strokeWidth="0.8" strokeLinecap="round">
        {paths.map((p, i) => <path key={`base-${i}`} d={p} />)}
      </g>
    </svg>
  );
};

const RightFlapFloral = () => {
  const paths = [
    "M 90,50 Q 60,48 20,55",
    "M 70,49 Q 75,38 68,35 C 62,37 65,46 70,49",
    "M 50,51 Q 45,62 52,65 C 58,63 55,54 50,51",
    "M 30,53 Q 35,42 28,38 C 22,40 25,49 30,53"
  ];
  return (
    <svg className="w-full h-full fill-none" viewBox="0 0 100 100">
      {/* Embossed Shadow */}
      <g stroke="#000000" strokeWidth="1" strokeLinecap="round" opacity="0.9" transform="translate(0.5, 0.5)">
        {paths.map((p, i) => <path key={`sh-${i}`} d={p} />)}
      </g>
      {/* Embossed Highlight */}
      <g stroke="#3a3a3a" strokeWidth="0.6" strokeLinecap="round" opacity="0.7" transform="translate(-0.5, -0.5)">
        {paths.map((p, i) => <path key={`hi-${i}`} d={p} />)}
      </g>
      {/* Base Pattern */}
      <g stroke="#151515" strokeWidth="0.8" strokeLinecap="round">
        {paths.map((p, i) => <path key={`base-${i}`} d={p} />)}
      </g>
    </svg>
  );
};

export function EnvelopeOpening({ onComplete }: EnvelopeOpeningProps) {
  const [isCracked, setIsCracked] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const [showSparks, setShowSparks] = useState(false);

  // Mouse tilt coordinates for 3D parallax tilt
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isOpening || isCracked) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const offsetX = (clientX / innerWidth) - 0.5;
    const offsetY = (clientY / innerHeight) - 0.5;
    setRotateX(-offsetY * 16); 
    setRotateY(offsetX * 16);  
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const handleOpen = () => {
    if (isCracked) return;
    setIsCracked(true);
    setIsShaking(true);
    setShowSparks(true);
    setIsOpening(true);

    setTimeout(() => {
      setIsShaking(false);
    }, 280);

    setTimeout(() => {
      onComplete();
    }, 3200);
  };

  // Helper Wax Seal Content
  const SealContent = () => (
    <div className="relative w-full h-full bg-gradient-to-br from-[#111] via-[#050505] to-[#000] rounded-[51%_49%_53%_47%/48%_52%_47%_53%] flex items-center justify-center shadow-[inset_1.5px_1.5px_3px_rgba(212,175,55,0.15),inset_-2.5px_-2.5px_4px_rgba(0,0,0,0.85),0_8px_20px_rgba(0,0,0,0.8)] border border-[#D4AF37]/30 overflow-hidden">
      {/* Inner stamp face background */}
      <div className="absolute inset-[6px] bg-gradient-to-br from-[#151515] via-[#080808] to-[#000] rounded-[50%_48%_49%_51%] shadow-[inset_1.5px_1.5px_3px_rgba(0,0,0,0.8),1.5px_1.5px_3px_rgba(212,175,55,0.05)] flex items-center justify-center">
        {/* Double Gold Metal Bezel Ring */}
        <div className="absolute inset-[1px] border border-[#D4AF37]/50 rounded-full" />
        <div className="absolute inset-[3px] border border-[#D4AF37]/20 rounded-full" />
        
        {/* Monogram initials "R | N" */}
        <span className="font-serif text-[24px] text-[#D4AF37] font-light tracking-widest select-none drop-shadow-[1.5px_1.5px_1.5px_rgba(0,0,0,0.9)] flex items-center justify-center">
          R<span className="text-[#D4AF37]/50 mx-1 text-base font-light">|</span>N
        </span>
      </div>

      {/* Shine Reflection Sweep */}
      <motion.div
        animate={isCracked ? {} : { x: ['-120%', '220%'] }}
        transition={{ repeat: Infinity, repeatDelay: 2.5, duration: 1.4, ease: "easeInOut" }}
        className="absolute inset-y-0 w-8 bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent transform -skew-x-25 pointer-events-none"
      />
    </div>
  );

  return (
    <AnimatePresence mode="wait">
      <motion.div
        exit={{ opacity: 0 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="fixed inset-0 z-50 overflow-hidden bg-black flex flex-col items-center justify-between py-8 px-4"
      >
        {/* 1. White Fade-In screen overlay on load */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="fixed inset-0 bg-black z-50 pointer-events-none"
        />

        {/* 2. Soft warm spotlight diagonal rays from top-left */}
        <div 
          className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
          style={{
            background: 'radial-gradient(ellipse 70% 120% at 0% 0%, rgba(212, 175, 55, 0.15) 0%, rgba(0, 0, 0, 0) 65%)',
          }}
        />
        <div 
          className="absolute top-[-20%] left-[-20%] w-[150%] h-[150%] pointer-events-none z-0 opacity-20"
          style={{
            background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.18) 0%, rgba(212, 175, 55, 0.02) 30%, transparent 60%)',
            filter: 'blur(40px)'
          }}
        />

        {/* 3. Gold glitter reflection floor blur at bottom */}
        <div 
          className="absolute bottom-0 inset-x-0 h-56 pointer-events-none z-0 opacity-30"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(212, 175, 55, 0.22) 0%, rgba(212, 175, 55, 0.04) 50%, transparent 100%)',
          }}
        />

        {/* Floor glitter sparks */}
        <div className="absolute bottom-0 inset-x-0 h-32 overflow-hidden pointer-events-none z-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`floor-${i}`}
              className="absolute w-1.5 h-1.5 bg-[#D4AF37] rounded-full"
              style={{
                left: `${5% + Math.random() * 90}%`,
                bottom: `${Math.random() * 80}px`
              }}
              animate={{
                scale: [0.3, 1.2, 0.3],
                opacity: [0.1, 0.8, 0.1]
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>

        {/* Floating gold dust particles slowly drifting in background */}
        <div className="absolute inset-0 pointer-events-none z-0 bg-gold-dust opacity-10"></div>
        <div className="absolute inset-0 pointer-events-none z-0">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={`sparkle-${i}`}
              className="absolute w-[3px] h-[3px] bg-[#D4AF37]/50 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
              animate={isOpening ? { opacity: 0 } : {
                y: [0, -70, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0.1, 0.6, 0.1]
              }}
              transition={{
                duration: 5 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 3
              }}
            />
          ))}
        </div>

        {/* 4. Luxury Header Typography */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isOpening ? { opacity: 0 } : { opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-center space-y-2 relative z-10 pointer-events-none select-none"
        >
          <span className="font-sans text-[10px] md:text-[11px] tracking-[0.45em] text-[#D4AF37] uppercase font-semibold">
            You are invited to
          </span>
          <h1 className="font-serif text-3xl md:text-4xl text-white font-normal tracking-wide">
            Something Extraordinary
          </h1>
          {/* Fine gold flourish SVG */}
          <div className="flex justify-center text-[#D4AF37]/50 mt-2">
            <svg className="w-20 h-4 fill-none stroke-current" viewBox="0 0 100 24" strokeWidth="1">
              <path d="M10 12 C30 0, 40 24, 50 12 C60 0, 70 24, 90 12" />
              <circle cx="50" cy="12" r="1.5" className="fill-[#D4AF37]" />
            </svg>
          </div>
        </motion.div>

        {/* 5. Envelope Container */}
        <div 
          className="relative flex-1 flex items-center justify-center w-full py-4 z-10 pointer-events-none"
          style={{ perspective: '1400px' }}
        >
          {/* Floating, Tilted 3D Envelope */}
          <motion.div 
            animate={isShaking ? { 
              x: [-5, 5, -4, 4, -2, 2, 0],
              y: [-1, 1, -0.5, 0.5, 0]
            } : (isOpening ? { 
              scale: [1, 1.05, 3.8],
              y: [0, 0, -40],
              rotateX: 0,
              rotateY: 0,
              rotateZ: 0,
              opacity: [1, 1, 0]
            } : { 
              y: [-8, 8, -8],
              rotateY: rotateY - 15,
              rotateX: rotateX + 12,
              rotateZ: 4
            })}
            transition={isShaking ? { duration: 0.28 } : { 
              y: isOpening ? { delay: 2.6, duration: 1.2, ease: 'easeInOut' } : { repeat: Infinity, duration: 6, ease: 'easeInOut' },
              scale: { delay: 2.6, duration: 1.2, ease: 'easeInOut' },
              rotateX: { duration: 0.4, ease: 'easeOut' },
              rotateY: { duration: 0.4, ease: 'easeOut' },
              opacity: { delay: 2.6, duration: 1.2 }
            }}
            style={{ 
              transformStyle: 'preserve-3d',
              height: 'min(60vh, 460px)',
              aspectRatio: '3.6 / 4'
            }}
            className="relative rounded-xl border border-[#D4AF37]/20 shadow-[0_30px_80px_rgba(0,0,0,0.9),0_10px_30px_rgba(0,0,0,0.5)] bg-black pointer-events-auto overflow-hidden"
          >
            {/* Envelope Viewport */}
            <div className="absolute inset-0 bg-transparent flex flex-col items-center justify-center overflow-hidden z-10">
              
              {/* 6. Gold glow inside on open */}
              {isOpening && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 0.5, scale: 1.2 }}
                  transition={{ delay: 0.8, duration: 1.5 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-2xl z-5 pointer-events-none"
                  style={{
                    backgroundImage: 'radial-gradient(circle, rgba(212, 175, 55, 0.4) 0%, rgba(212, 175, 55, 0) 70%)'
                  }}
                />
              )}

              {/* 7. Sparks drifting on open */}
              {isOpening && [...Array(20)].map((_, i) => {
                const delay = 0.8 + Math.random() * 0.8;
                const duration = 1.6 + Math.random() * 1.4;
                const startX = 40 + Math.random() * 20; 
                const endX = startX + (Math.random() * 40 - 20);
                return (
                  <motion.div
                    key={`magic-${i}`}
                    initial={{ x: `${startX}%`, y: '60%', scale: 0, opacity: 0 }}
                    animate={{ x: `${endX}%`, y: ['60%', '20%'], scale: [0, 1.4, 0], opacity: [0, 1, 0] }}
                    transition={{ delay, duration, ease: 'easeOut' }}
                    className="absolute w-1.5 h-1.5 bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] rounded-full z-15 pointer-events-none shadow-[0_0_6px_#D4AF37]"
                    style={{ left: 0, top: 0 }}
                  />
                );
              })}

              {/* 8. Invitation Card Inside (Slides Up out of envelope mouth) */}
              <AnimatePresence>
                {isOpening && (
                  <motion.div
                    initial={{ y: 220, opacity: 0, scale: 0.95 }}
                    animate={{ y: 40, opacity: 1, scale: 1 }}
                    transition={{ delay: 1.1, type: 'spring', stiffness: 60, damping: 12 }}
                    style={{ zIndex: 10 }}
                    className="absolute inset-x-6 top-6 h-[68%] bg-gradient-to-br from-[#F5F0E6] via-[#E8DCC4] to-[#D4C3A3] text-[#2A2A2A] rounded-sm shadow-[0_0_40px_rgba(212,175,55,0.4)] p-6 text-center border border-[#FFFFFF]/60 flex flex-col items-center justify-between overflow-hidden"
                  >
                    {/* Inner texture / glow */}
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-30 mix-blend-multiply pointer-events-none z-0" />

                    {/* Inset Gold Border Frame */}
                    <div className="absolute inset-2.5 border border-[#C5A059]/40 rounded-sm pointer-events-none z-10" />
                    <div className="absolute inset-3 border border-[#C5A059]/20 rounded-sm pointer-events-none z-10" />

                    {/* Leaf border sketches on left and right inside the card */}
                    <div className="absolute left-1.5 top-0 bottom-0 w-8 pointer-events-none z-5 opacity-30">
                      <svg className="w-full h-full stroke-[#C5A059] fill-none" viewBox="0 0 40 400" strokeWidth="1">
                        <path d="M 5,20 Q 25,90 10,160 T 35,280 T 5,380" />
                        <path d="M 12,45 C 22,42 27,47 20,55 C 13,63 8,50 12,45 Z" />
                        <path d="M 15,85 C 3,75 0,82 7,92 C 14,102 17,90 15,85 Z" />
                        <path d="M 10,125 C 25,120 27,128 20,135 C 13,142 6,132 10,125 Z" />
                        <path d="M 20,165 C 35,152 39,160 31,169 C 23,178 16,170 20,165 Z" />
                        <path d="M 25,205 C 15,192 11,200 18,209 C 25,218 32,210 25,205 Z" />
                      </svg>
                    </div>
                    <div className="absolute right-1.5 top-0 bottom-0 w-8 pointer-events-none z-5 opacity-30 transform scale-x-[-1]">
                      <svg className="w-full h-full stroke-[#C5A059] fill-none" viewBox="0 0 40 400" strokeWidth="1">
                        <path d="M 5,20 Q 25,90 10,160 T 35,280 T 5,380" />
                        <path d="M 12,45 C 22,42 27,47 20,55 C 13,63 8,50 12,45 Z" />
                        <path d="M 15,85 C 3,75 0,82 7,92 C 14,102 17,90 15,85 Z" />
                        <path d="M 10,125 C 25,120 27,128 20,135 C 13,142 6,132 10,125 Z" />
                        <path d="M 20,165 C 35,152 39,160 31,169 C 23,178 16,170 20,165 Z" />
                        <path d="M 25,205 C 15,192 11,200 18,209 C 25,218 32,210 25,205 Z" />
                      </svg>
                    </div>

                    {/* Card Content */}
                    <div className="relative z-10 w-full h-full flex flex-col items-center justify-between py-2 select-none">
                      
                      {/* Header */}
                      <div className="flex flex-col items-center space-y-1 mt-2">
                        <span className="font-sans text-[4px] sm:text-[5px] tracking-[0.4em] text-[#6b5b3d] uppercase font-semibold">
                          Together with their families
                        </span>
                        {/* Divider ornament */}
                        <svg className="w-10 h-1.5 fill-none stroke-[#C5A059]/60 mt-1" viewBox="0 0 60 12" strokeWidth="1">
                          <path d="M5 6 C15 0, 20 12, 25 6 L 35 6 C45 0, 50 12, 55 6" />
                          <circle cx="30" cy="6" r="1.5" className="fill-[#C5A059] stroke-none" />
                        </svg>
                      </div>

                      {/* Names */}
                      <div className="flex flex-col items-center -space-y-1 my-2">
                        <span className="font-serif text-2xl sm:text-3xl text-[#2A2A2A] font-light tracking-widest uppercase">
                          Ridmi
                        </span>
                        <span className="font-script text-base sm:text-lg text-[#8C7A5B] italic py-1">&amp;</span>
                        <span className="font-serif text-2xl sm:text-3xl text-[#2A2A2A] font-light tracking-widest uppercase leading-none">
                          Nalin
                        </span>
                      </div>

                      {/* Date and Venue */}
                      <div className="flex flex-col items-center space-y-1 mb-2">
                        <span className="font-sans text-[4px] sm:text-[5px] tracking-[0.3em] text-[#6b5b3d] uppercase font-medium mb-1">
                          Request the pleasure of your company
                        </span>
                        
                        <div className="flex items-center justify-center gap-2 mt-2">
                          <span className="font-sans text-[5px] sm:text-[6px] tracking-[0.2em] text-[#2A2A2A] uppercase">Saturday</span>
                          <span className="font-serif text-lg text-[#2A2A2A] border-x border-[#C5A059]/40 px-2 mx-1">24</span>
                          <span className="font-sans text-[5px] sm:text-[6px] tracking-[0.2em] text-[#2A2A2A] uppercase">July 2026</span>
                        </div>

                        <div className="flex flex-col items-center space-y-0.5 mt-2">
                          <span className="font-sans text-[5px] sm:text-[6px] tracking-[0.2em] text-[#2A2A2A] uppercase font-semibold">
                            Hotel Grand Minaro
                          </span>
                          <span className="font-sans text-[4px] sm:text-[5px] tracking-[0.2em] text-[#6b5b3d] uppercase font-light">
                            Homagama, Sri Lanka
                          </span>
                        </div>
                      </div>

                      {/* Quote */}
                      <p className="font-script text-[8px] sm:text-[10px] text-[#8C7A5B] italic mt-auto">
                        Reception to follow
                      </p>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* 9. Left Flap with drop-shadow filter wrapper */}
              <div 
                style={{ filter: 'drop-shadow(-3px 3px 5px rgba(0, 0, 0, 0.4))', zIndex: 5 }}
                className="absolute inset-y-0 left-0 w-1/2 pointer-events-none"
              >
                <div 
                  className="w-full h-full bg-[#0a0a0a] rounded-l-2xl relative border-r border-[#D4AF37]/10"
                  style={{ clipPath: 'polygon(0 0, 100% 55%, 0 100%)' }}
                >
                  <div className="absolute inset-0 flex items-center justify-start pl-2">
                    <div className="w-24 h-24 scale-95 opacity-80">
                      <LeftFlapFloral />
                    </div>
                  </div>
                </div>
              </div>

              {/* 10. Right Flap with drop-shadow filter wrapper */}
              <div 
                style={{ filter: 'drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.4))', zIndex: 5 }}
                className="absolute inset-y-0 right-0 w-1/2 pointer-events-none"
              >
                <div 
                  className="w-full h-full bg-[#0a0a0a] rounded-r-2xl relative border-l border-[#D4AF37]/10"
                  style={{ clipPath: 'polygon(100% 0, 0 55%, 100% 100%)' }}
                >
                  <div className="absolute inset-0 flex items-center justify-end pr-2">
                    <div className="w-24 h-24 scale-95 opacity-80">
                      <RightFlapFloral />
                    </div>
                  </div>
                </div>
              </div>

              {/* 11. Bottom Flap with drop-shadow filter wrapper (overlaps sides) */}
              <div 
                style={{ filter: 'drop-shadow(0px -4px 6px rgba(0, 0, 0, 0.4))', zIndex: 15 }}
                className="absolute inset-x-0 bottom-0 h-[55%] pointer-events-none"
              >
                <div 
                  className="w-full h-full bg-[#111] rounded-b-2xl relative border-t border-[#D4AF37]/20"
                  style={{ clipPath: 'polygon(0 100%, 50% 0, 100% 100%)' }}
                >
                  <div className="absolute inset-0 flex items-end justify-center pb-4">
                    <div className="w-52 h-52 scale-95 opacity-80">
                      <BottomFlapFloral />
                    </div>
                  </div>
                </div>
              </div>

              {/* 12. Top Flap with 3D Rotate and drop-shadow wrapper */}
              <motion.div
                initial={{ rotateX: 0, zIndex: 20 }}
                animate={isOpening ? { rotateX: -180, zIndex: 2 } : { rotateX: 0, zIndex: 20 }}
                transition={{ delay: 0.2, duration: 1.2, ease: 'easeInOut' }}
                style={{ 
                  originY: 0,
                  filter: 'drop-shadow(0px 5px 8px rgba(0, 0, 0, 0.4))'
                }}
                className="absolute inset-x-0 top-0 h-[55%] pointer-events-none"
              >
                <div 
                  className="w-full h-full bg-[#151515] rounded-t-2xl relative border-b border-[#D4AF37]/30"
                  style={{ clipPath: 'polygon(0 0, 50% 100%, 100% 0)' }}
                >
                  <div className="absolute inset-0 flex items-center justify-center pt-2 pb-6">
                    <div className="w-52 h-52 scale-95 opacity-90">
                      <TopFlapFloral />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* 13. Wax Seal Button */}
              <div className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-auto w-24 h-24 sm:w-26 sm:h-26">
                <AnimatePresence>
                  {!isOpening && (
                    <div className="relative w-full h-full">
                      <motion.div
                        className="relative w-full h-full cursor-pointer"
                        onClick={handleOpen}
                      >
                        {/* Left Seal Half */}
                        <motion.div
                          initial={{ x: 0, y: 0, rotate: 0, opacity: 1 }}
                          whileHover={{ scale: 1.04 }}
                          animate={isCracked ? { x: -75, y: 10, rotate: -20, opacity: 0 } : { x: 0 }}
                          transition={{ duration: 0.9, ease: 'easeOut' }}
                          className="absolute inset-0 select-none"
                          style={{
                            clipPath: 'polygon(0% 0%, 50% 0%, 46% 15%, 53% 35%, 47% 55%, 52% 75%, 49% 90%, 50% 100%, 0% 100%)'
                          }}
                        >
                          <SealContent />
                        </motion.div>

                        {/* Right Seal Half */}
                        <motion.div
                          initial={{ x: 0, y: 0, rotate: 0, opacity: 1 }}
                          whileHover={{ scale: 1.04 }}
                          animate={isCracked ? { x: 75, y: 12, rotate: 20, opacity: 0 } : { x: 0 }}
                          transition={{ duration: 0.9, ease: 'easeOut' }}
                          className="absolute inset-0 select-none"
                          style={{
                            clipPath: 'polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%, 49% 90%, 52% 75%, 47% 55%, 53% 35%, 46% 15%)'
                          }}
                        >
                          <SealContent />
                        </motion.div>
                      </motion.div>
                    </div>
                  )}
                </AnimatePresence>

                {/* Spark Burst Animation on Click */}
                {showSparks && [...Array(30)].map((_, i) => {
                  const angle = (i * 360) / 30 + Math.random() * 8;
                  const distance = 70 + Math.random() * 85;
                  const x = Math.cos((angle * Math.PI) / 180) * distance;
                  const y = Math.sin((angle * Math.PI) / 180) * distance;
                  return (
                    <motion.div
                      key={i}
                      initial={{ x: 0, y: 0, scale: 0, opacity: 1 }}
                      animate={{ x, y, scale: [0, 1.3, 0], opacity: 0 }}
                      transition={{ duration: 1.2, ease: 'easeOut' }}
                      className="absolute w-1.5 h-1.5 bg-[#D4AF37] rounded-full z-40 pointer-events-none shadow-[0_0_8px_#D4AF37]"
                      style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
                    />
                  );
                })}
              </div>

            </div>
          </motion.div>
        </div>

        {/* 14. Spaced Footer Prompt (TAP TO BEGIN / Chevron Down) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isOpening ? { opacity: 0 } : { opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-center flex flex-col items-center select-none z-10 relative"
        >
          <span className="font-sans text-[10px] tracking-[0.35em] text-[#D4AF37] uppercase font-light">
            Tap to Begin
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            onClick={handleOpen}
            className="w-10 h-10 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]/80 hover:text-[#D4AF37] hover:border-[#D4AF37] hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all mt-2 pointer-events-auto cursor-pointer"
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
