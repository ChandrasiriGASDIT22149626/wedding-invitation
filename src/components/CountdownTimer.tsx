import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, AnimatePresence, useScroll, useTransform } from 'framer-motion';

const weddingDate = new Date('2026-07-24T09:00:00');

export function CountdownTimer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Parallax effect for the background particles
  const yBg = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = weddingDate.getTime() - new Date().getTime();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label, delay }: { value: number; label: string; delay: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 1, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative"
    >
      <div className="glass-dark luxury-border-glow rounded-sm p-6 md:p-8 transition-all duration-500 hover:shadow-[0_0_30px_rgba(192,192,192,0.15)] group">
        <div className="relative overflow-hidden h-20 md:h-24 flex items-center justify-center">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={value}
              initial={{ y: 30, opacity: 0, filter: "blur(10px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              exit={{ y: -30, opacity: 0, filter: "blur(10px)" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-light luxury-gradient-text tracking-widest group-hover:scale-105 transition-transform duration-500"
            >
              {value.toString().padStart(2, '0')}
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Animated divider line */}
        <div className="relative h-px w-8 mx-auto my-4 overflow-hidden">
          <div className="absolute inset-0 bg-[#C0C0C0]/20"></div>
          <motion.div 
            className="absolute inset-0 bg-[#C0C0C0]"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          ></motion.div>
        </div>
        
        <p className="text-[#C0C0C0]/80 text-[10px] md:text-xs uppercase tracking-[0.4em] mt-2 font-sans font-medium">
          {label}
        </p>
      </div>
    </motion.div>
  );

  return (
    <section ref={ref} id="countdown" className="relative py-16 md:py-24 px-6 bg-transparent overflow-hidden border-t border-[#C0C0C0]/10">
      {/* Dynamic Silver Aura Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none mix-blend-screen opacity-20">
        <div className="w-[80vw] h-[80vw] max-w-4xl max-h-4xl bg-[#C0C0C0] rounded-full blur-[150px] animate-pulse-glow"></div>
      </div>

      <div className="absolute inset-0 z-0 bg-spotlight opacity-[0.05] pointer-events-none mix-blend-screen"></div>

      {/* Parallax Particles */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#C0C0C0] rounded-full shadow-[0_0_8px_#C0C0C0]"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ y: [0, -40, 0], opacity: [0, 0.6, 0] }}
            transition={{ duration: 4 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 5 }}
          />
        ))}
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Title Reveal */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-[0.2em] font-light luxury-gradient-text mb-6">
              Counting Down
            </h2>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#C0C0C0]/50"></div>
              <div className="w-1.5 h-1.5 rotate-45 border border-[#C0C0C0]/80"></div>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#C0C0C0]/50"></div>
            </div>
            <p className="text-[#C0C0C0]/80 font-sans text-xs md:text-sm tracking-[0.4em] uppercase font-light">
              Until the beginning of forever
            </p>
          </motion.div>
        </div>

        {/* Countdown Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
          <TimeUnit value={timeLeft.days} label="Days" delay={0.2} />
          <TimeUnit value={timeLeft.hours} label="Hours" delay={0.4} />
          <TimeUnit value={timeLeft.minutes} label="Minutes" delay={0.6} />
          <TimeUnit value={timeLeft.seconds} label="Seconds" delay={0.8} />
        </div>
      </div>
    </section>
  );
}