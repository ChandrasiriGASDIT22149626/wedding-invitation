import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Heart, Sparkles, Calendar, Church } from 'lucide-react';

interface TimelineEvent {
  icon: React.ReactNode;
  title: string;
  description: string;
  date: string;
}

export function LoveStory() {
  const events: TimelineEvent[] = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'First Meeting',
      description: 'Our paths crossed and something magical began.',
      date: '2020'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Falling In Love',
      description: 'Every moment together made our bond stronger.',
      date: '2021'
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: 'The Proposal',
      description: 'A perfect moment that changed everything.',
      date: '2024'
    },
    {
      icon: <Church className="w-6 h-6" />,
      title: 'Wedding Day',
      description: 'The beginning of our forever.',
      date: 'July 24, 2026'
    }
  ];

  const friends = [
    {
      name: 'Sarah Jenkins',
      role: 'Maid of Honor',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop'
    },
    {
      name: 'Michael Miller',
      role: 'Best Man',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop'
    },
    {
      name: 'Emma Watson',
      role: 'Bridesmaid',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop'
    },
    {
      name: 'David Smith',
      role: 'Groomsman',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop'
    },
    {
      name: 'Jessica Taylor',
      role: 'Bridesmaid',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop'
    },
    {
      name: 'Chris Evans',
      role: 'Groomsman',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop'
    }
  ];

  return (
    <section className="relative py-20 px-6 md:px-12 bg-[#0b1a30] overflow-hidden text-center text-[#faf7f2]">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto space-y-20">
        {/* Love Story Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            Our Love Story
          </h2>
          <p className="text-[#faf7f2]/70 font-light text-lg">
            A journey of two hearts becoming one
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white via-white/40 to-white transform md:-translate-x-1/2" />

          {/* Events */}
          <div className="space-y-12">
            {events.map((event, index) => (
              <TimelineItem
                key={index}
                event={event}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>

        {/* Friends & Family Section */}
        <div className="pt-28 space-y-12" id="friends">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-4">
              Friends &amp; Family
            </h2>
            <p className="text-[#faf7f2]/70 font-light text-lg">
              The ones who stand by our side
            </p>
          </motion.div>

          {/* Friends Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 max-w-3xl mx-auto pt-6">
            {friends.map((friend, idx) => (
              <motion.div
                key={friend.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex flex-col items-center space-y-4"
              >
                {/* Avatar with white border */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-white/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <img
                    src={friend.image}
                    alt={friend.name}
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-2 border-white/40 group-hover:border-white transition-colors duration-300 shadow-lg relative z-10"
                  />
                </div>
                <div>
                  <h4 className="font-serif text-lg md:text-xl text-white">
                    {friend.name}
                  </h4>
                  <p className="font-sans text-xs md:text-sm text-[#faf7f2]/60 tracking-wider uppercase mt-1">
                    {friend.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({
  event,
  index,
  isLeft
}: {
  event: TimelineEvent;
  index: number;
  isLeft: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`relative flex items-center ${
        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      } flex-row`}
    >
      {/* Content card */}
      <div className={`flex-1 ${isLeft ? 'md:pr-12 pl-16 md:pl-0' : 'md:pl-12 pl-16'}`}>
        <motion.div
          whileHover={{ scale: 1.02, y: -2 }}
          transition={{ duration: 0.3 }}
          className="glass-sand rounded-2xl p-6 text-left"
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-white to-white/60 rounded-full flex items-center justify-center text-[#0b1a30] shadow-md font-bold">
              {event.icon}
            </div>
            <div className="flex-1">
              <h3 className="font-serif text-xl md:text-2xl text-white mb-1">
                {event.title}
              </h3>
              <p className="text-[#faf7f2]/80 font-light text-sm md:text-base mb-2">
                {event.description}
              </p>
              <p className="text-white/80 font-medium text-xs tracking-wider uppercase">
                {event.date}
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Center dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
        className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-white rounded-full border-4 border-[#0b1a30] shadow-lg z-10"
      >
        <motion.div
          animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-0 bg-white rounded-full"
        />
      </motion.div>

      {/* Spacer for desktop */}
      <div className="hidden md:block flex-1" />
    </motion.div>
  );
}