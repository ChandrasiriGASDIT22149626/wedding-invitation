import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function BrideAndGroom() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const rotateRing = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 px-6 bg-transparent text-white relative flex flex-col items-center overflow-hidden border-t border-[#C0C0C0]/10">
      {/* Cutwork Background */}
      <div className="absolute inset-0 z-0 bg-spotlight opacity-[0.05] pointer-events-none mix-blend-screen"></div>

      {/* Background elegant gradient mesh & Silver Aura */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#C0C0C0]/10 rounded-full blur-[100px] animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#C0C0C0]/10 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-center mb-12 relative z-10"
      >
        <h2 className="font-serif text-3xl md:text-4xl text-white uppercase tracking-[0.2em] font-light luxury-gradient-text">
          Bride & Groom
        </h2>
        <div className="w-12 h-px bg-[#C0C0C0]/50 mx-auto mt-6"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, filter: "blur(20px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="mb-16 relative z-10"
      >
        {/* Parallax Circular Frame */}
        <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center group">
          {/* Rotating Decorative Outer Ring */}
          <motion.div 
            style={{ rotate: rotateRing }}
            className="absolute inset-0 border-[1.5px] border-[#C0C0C0]/40 rounded-full border-dashed opacity-70"
          ></motion.div>
          <motion.div 
            style={{ rotate: useTransform(scrollYProgress, [0, 1], [0, -90]) }}
            className="absolute inset-2 border-[0.5px] border-[#C0C0C0]/30 rounded-full"
          ></motion.div>

          <div className="w-[88%] h-[88%] rounded-full overflow-hidden border border-[#C0C0C0]/50 p-1 relative z-10 bg-transparent shadow-[0_0_60px_rgba(192,192,192,0.15)]">
            <div className="w-full h-full rounded-full overflow-hidden relative">
              {/* Overlay shadow for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none"></div>
              
              <motion.img 
                style={{ y: imageY, scale: 1.15 }}
                src="/ridimi.jpeg" 
                alt="Bride and Groom" 
                className="w-full h-full object-cover object-center group-hover:scale-125 transition-transform duration-[2s] ease-out"
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Names Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="flex flex-col md:flex-row items-center gap-8 md:gap-12 relative z-10 w-full max-w-4xl px-4"
      >
        {/* Bride Name Box */}
        <div className="flex-1 w-full relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C0C0C0]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="border border-[#C0C0C0]/30 px-6 py-8 text-center glass-dark luxury-border-glow rounded-xl transform transition-all duration-500 group-hover:-translate-y-1 h-full flex flex-col justify-center items-center shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
            <span className="font-serif text-2xl md:text-3xl tracking-[0.3em] uppercase luxury-gradient-text">Ridmi</span>
            <div className="h-px w-0 bg-[#C0C0C0]/50 mx-auto my-4 group-hover:w-16 transition-all duration-700"></div>
            <p className="font-sans text-[10px] md:text-xs text-[#C0C0C0]/70 tracking-widest uppercase leading-relaxed max-w-[200px] font-medium">
              Loving Daughter of Mr. & Mrs. Chandrasiri
            </p>
          </div>
        </div>

        {/* Ampersand */}
        <motion.div 
          className="font-script text-5xl md:text-6xl text-[#C0C0C0]/60 italic px-4 py-4 md:py-0 drop-shadow-[0_0_10px_rgba(192,192,192,0.2)]"
          whileHover={{ scale: 1.1, color: "rgba(192,192,192,1)" }}
          transition={{ duration: 0.5 }}
        >
          &
        </motion.div>

        {/* Groom Name Box */}
        <div className="flex-1 w-full relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C0C0C0]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="border border-[#C0C0C0]/30 px-6 py-8 text-center glass-dark luxury-border-glow rounded-xl transform transition-all duration-500 group-hover:-translate-y-1 h-full flex flex-col justify-center items-center shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
            <span className="font-serif text-2xl md:text-3xl tracking-[0.3em] uppercase luxury-gradient-text">Nalin</span>
            <div className="h-px w-0 bg-[#C0C0C0]/50 mx-auto my-4 group-hover:w-16 transition-all duration-700"></div>
            <p className="font-sans text-[10px] md:text-xs text-[#C0C0C0]/70 tracking-widest uppercase leading-relaxed max-w-[200px] font-medium">
              Beloved Son of Mr. & Mrs. Priyawansha
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
