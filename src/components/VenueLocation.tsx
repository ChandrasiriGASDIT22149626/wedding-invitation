import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';

export function VenueLocation() {
  const handleDirections = () => {
    window.open('https://www.google.com/maps/search/?api=1&query=Hotel+Grand+Minaro+Homagama+Sri+Lanka', '_blank');
  };

  return (
    <section className="py-16 md:py-24 px-6 bg-transparent text-white relative border-t border-[#C0C0C0]/10 overflow-hidden">
      {/* Background slow floating elements & Abstract Decor */}
      <div className="absolute inset-0 z-0 bg-spotlight opacity-[0.06] pointer-events-none mix-blend-screen"></div>
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#C0C0C0]/10 rounded-full blur-[100px] animate-float-slow"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#C0C0C0]/10 rounded-full blur-[150px] animate-pulse-glow"></div>
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="glass-dark luxury-border-glow rounded-2xl p-10 md:p-16 text-center shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-[#C0C0C0]/30"
        >
          {/* Animated Map Pin */}
          <motion.div 
            className="flex justify-center mb-8 relative"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="absolute inset-0 bg-[#C0C0C0]/20 blur-xl rounded-full scale-150 z-0"></div>
            <MapPin className="w-10 h-10 text-[#C0C0C0] stroke-[1] relative z-10 drop-shadow-[0_0_8px_rgba(192,192,192,0.5)]" />
          </motion.div>
          
          <span className="font-script text-3xl md:text-4xl text-[#C0C0C0]/80 block mb-4">Join Us At</span>
          <h2 className="font-serif text-4xl md:text-5xl text-white uppercase tracking-[0.2em] luxury-gradient-text">
            The Venue
          </h2>
          
          <div className="w-16 h-px bg-[#C0C0C0]/30 mx-auto my-8 relative overflow-hidden">
            <motion.div 
              className="absolute inset-0 bg-[#C0C0C0]"
              initial={{ x: "-100%" }}
              whileInView={{ x: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 3 }}
            ></motion.div>
          </div>

          <div className="space-y-3 mb-8">
            <h3 className="font-serif text-3xl text-white/90">Hotel Grand Minaro</h3>
            <p className="font-sans text-xs md:text-sm tracking-[0.3em] text-[#C0C0C0]/70 uppercase font-medium">
              No. 660, Welipillewa, Panagoda, Homagama
            </p>
          </div>

          <p className="font-sans text-sm text-white/60 max-w-md mx-auto leading-relaxed font-light mb-12">
            Experience an unforgettable evening of celebration, dining, and dancing at our beautiful venue.
          </p>

          {/* Premium Silver Button */}
          <button
            onClick={handleDirections}
            className="group relative inline-flex items-center justify-center overflow-hidden border border-[#C0C0C0]/40 bg-transparent px-10 py-4 font-sans text-xs tracking-[0.2em] uppercase text-[#C0C0C0] transition-all duration-500 hover:bg-[#C0C0C0] hover:text-black hover:border-[#C0C0C0]"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C0C0C0]/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></span>
            <span className="relative z-10 flex items-center gap-3 font-semibold">
              <Navigation className="w-4 h-4 text-[#C0C0C0] group-hover:text-black transition-colors" />
              <span>Get Directions</span>
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
