import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const events = [
  { time: '09:00 AM', title: 'Guest Arrival', description: 'Welcome guests as they gather to celebrate.' },
  { time: '09:40 AM', title: 'Bride & Groom Arrival', description: 'The couple arrives at the venue.' },
  { time: '10:05 AM', title: 'Poruwa Ceremony', description: 'Traditional Sri Lankan wedding customs and rituals.' },
  { time: '11:00 AM', title: 'Lighting the Oil Lamp', description: 'Lighting the traditional oil lamp for prosperity.' },
  { time: '11:10 AM', title: 'Cake Cutting', description: 'The couple cuts the wedding cake.' },
  { time: '11:20 AM', title: 'Toast & Bar Opening', description: 'A toast to the newlyweds and opening of the bar.' },
  { time: '11:40 AM', title: 'Group Photo', description: 'Capturing memories with family and friends.' },
  { time: '01:05 PM', title: 'Lunch', description: 'Enjoy a grand feast together.' },
  { time: '03:29 PM', title: 'Departure of the Couple', description: 'A joyful farewell to the newlyweds.' }
];

export function Timeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "100%"]), {
    stiffness: 50,
    damping: 20
  });

  return (
    <section className="py-16 md:py-24 px-6 bg-transparent text-white relative border-t border-[#C0C0C0]/10 overflow-hidden" ref={containerRef}>
      {/* Cutwork Background */}
      <div className="absolute inset-0 z-0 bg-spotlight opacity-[0.05] pointer-events-none mix-blend-screen"></div>

      {/* Background Decor */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#C0C0C0]/[0.03] via-transparent to-transparent"></div>
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        {/* Subtle silver floral abstract outline */}
        <svg className="absolute -left-32 top-10 w-96 h-96 stroke-[#C0C0C0] fill-none opacity-30 blur-[1px] transform rotate-12" viewBox="0 0 100 100">
          <path d="M 50,10 C 20,40 20,60 50,90 C 80,60 80,40 50,10" strokeWidth="0.5"/>
          <path d="M 50,20 C 30,40 30,60 50,80 C 70,60 70,40 50,20" strokeWidth="0.5"/>
        </svg>
      </div>
      
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="font-script text-3xl md:text-4xl text-[#C0C0C0]/80 block mb-4">Our Wedding Day</span>
          <h2 className="font-serif text-4xl md:text-5xl text-white uppercase tracking-[0.2em] luxury-gradient-text mb-6">
            Timeline
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#C0C0C0]/40"></div>
            <div className="w-2 h-2 rotate-45 bg-[#C0C0C0]/80"></div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#C0C0C0]/40"></div>
          </div>
        </motion.div>

        <div className="relative pl-6 md:pl-12 space-y-20">
          {/* Static background line */}
          <div className="absolute left-[7px] md:left-[19px] top-2 bottom-2 w-px bg-[#C0C0C0]/10"></div>
          
          {/* Animated scroll progress silver line */}
          <motion.div 
            className="absolute left-[7px] md:left-[19px] top-2 w-px bg-gradient-to-b from-[#E8E8E8] via-[#C0C0C0] to-transparent shadow-[0_0_12px_rgba(192,192,192,1)]"
            style={{ height: lineHeight }}
          ></motion.div>

          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40, filter: "blur(5px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-150px" }}
              transition={{ duration: 1, delay: 0.1 }}
              className="relative pl-8 md:pl-16 group"
            >
              {/* Timeline Dot container */}
              <div className="absolute -left-[30px] md:-left-[18px] top-1.5 flex items-center justify-center w-8 h-8">
                {/* Outer pulsing ring */}
                <div className="absolute inset-0 rounded-full border border-[#C0C0C0]/40 scale-100 group-hover:scale-150 group-hover:opacity-0 transition-all duration-1000"></div>
                {/* Inner solid dot */}
                <div className="w-2.5 h-2.5 bg-transparent border border-[#C0C0C0] rounded-full relative z-10 shadow-[0_0_10px_rgba(192,192,192,0.5)] group-hover:bg-[#C0C0C0] transition-colors duration-500"></div>
              </div>
              
              <div className="flex flex-col space-y-3 glass-dark p-6 md:p-8 rounded-2xl luxury-border-glow hover:bg-[#C0C0C0]/[0.03] transition-colors duration-500 relative overflow-hidden">
                {/* Subtle highlight sweep on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C0C0C0]/[0.05] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>

                <span className="font-sans text-xs md:text-xs tracking-[0.3em] text-[#C0C0C0]/70 uppercase relative z-10 group-hover:text-[#C0C0C0] transition-colors">
                  {event.time}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl text-white/90 relative z-10 luxury-gradient-text group-hover:text-white transition-colors">
                  {event.title}
                </h3>
                <p className="font-sans text-sm text-white/60 font-light leading-relaxed relative z-10 group-hover:text-white/80">
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
