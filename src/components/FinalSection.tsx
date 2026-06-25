import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Copy, Check, ChevronDown } from 'lucide-react';

export function FinalSection() {
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const registryItems = [
    {
      bank: 'Bank of Ceylon (BOC)',
      name: 'A. B. Ridmi Anderson',
      account: '87654321',
      branch: 'Homagama Branch'
    },
    {
      bank: 'Commercial Bank',
      name: 'K. L. Nalin James',
      account: '1234567890',
      branch: 'Homagama Branch'
    }
  ];

  const faqs = [
    {
      q: 'What is the dress code?',
      a: 'The dress code is elegant formal. We suggest clean classic tones, white, cream, or dark green to match our theme!'
    },
    {
      q: 'Can I bring a plus one?',
      a: 'Due to capacity limits at our venue, we are only able to accommodate the guests specifically named on the invitation.'
    },
    {
      q: 'Is there parking available at the venue?',
      a: 'Yes, Hotel Grand Minaro offers ample complimentary parking for all our guests.'
    }
  ];

  const handleCopy = (account: string, idx: number) => {
    navigator.clipboard.writeText(account);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  return (
    <section className="relative min-h-screen py-20 px-6 bg-gradient-to-b from-[#0b1a30] via-[#081426] to-[#040a14] overflow-hidden text-center text-[#faf7f2]">
      {/* Animated stars */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(60)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              opacity: [0.1, 0.8, 0.1],
              scale: [1, 1.3, 1]
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      {/* Fireflies (restyled white/silver) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`firefly-${i}`}
            className="absolute w-1.5 h-1.5 bg-white rounded-full shadow-lg"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: '0 0 15px rgba(255, 255, 255, 0.6)'
            }}
            animate={{
              x: [0, Math.random() * 80 - 40, 0],
              y: [0, Math.random() * 80 - 40, 0],
              opacity: [0.2, 0.9, 0.2],
              scale: [1, 1.4, 1]
            }}
            transition={{
              duration: 5 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto space-y-28">
        
        {/* Gift Registry Section */}
        <div className="space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-4">
              Gift Registry
            </h2>
            <p className="text-[#faf7f2]/70 font-light text-lg max-w-2xl mx-auto leading-relaxed">
              Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, we have set up a registry for convenience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {registryItems.map((item, idx) => (
              <motion.div
                key={item.account}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="glass-sand rounded-xl p-6 text-left flex flex-col justify-between space-y-4 shadow-lg hover:border-white/30 transition-all duration-300"
              >
                <div>
                  <h4 className="font-serif text-xl text-white mb-2">{item.bank}</h4>
                  <p className="text-sm text-[#faf7f2]/60 font-sans tracking-wide">Account Name:</p>
                  <p className="text-base text-[#faf7f2] font-medium font-serif mb-2">{item.name}</p>
                  <p className="text-sm text-[#faf7f2]/60 font-sans tracking-wide">Account Number:</p>
                  <p className="text-lg text-white font-bold tracking-wider font-mono">{item.account}</p>
                  <p className="text-xs text-[#faf7f2]/40 font-sans tracking-wide mt-1">Branch: {item.branch}</p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleCopy(item.account, idx)}
                  className="w-full bg-white/10 hover:bg-white border border-white/20 text-white hover:text-[#0b1a30] py-2 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all"
                >
                  {copiedIdx === idx ? (
                    <>
                      <Check className="w-4 h-4" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy Account
                    </>
                  )}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="space-y-10" id="faq">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-[#faf7f2]/70 font-light text-lg">
              Details to help you plan your day
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-sand rounded-xl overflow-hidden text-left shadow-md"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-white/5 transition-colors"
                  >
                    <span className="font-serif text-lg md:text-xl text-white font-medium">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-white transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-6"
                      >
                        <p className="text-sm md:text-base text-[#faf7f2]/80 leading-relaxed pt-2 border-t border-white/10">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Final Message */}
        <div className="space-y-10 pt-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-12"
          >
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-relaxed drop-shadow-md">
              We Can't Wait To
              <br />
              Celebrate With You
            </h2>

            {/* Decorative divider */}
            <div className="w-48 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto" />

            {/* Names with Heart */}
            <div className="flex items-center justify-center gap-6 flex-wrap">
              <span className="font-script text-5xl md:text-7xl text-white">
                Ridmi
              </span>
              <motion.div
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Heart className="w-10 h-10 md:w-12 md:h-12 text-white fill-white" />
              </motion.div>
              <span className="font-script text-5xl md:text-7xl text-white">
                Nalin
              </span>
            </div>

            {/* Date Reminder */}
            <p className="text-[#faf7f2]/60 font-light text-lg md:text-xl tracking-[0.2em] font-serif">
              24 • 07 • 2026
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}