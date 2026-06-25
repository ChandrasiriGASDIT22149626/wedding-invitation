import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { EnvelopeOpening } from './components/EnvelopeOpening';
import { CoupleHero } from './components/CoupleHero';
import { WeddingDetails } from './components/WeddingDetails';
import { CountdownTimer } from './components/CountdownTimer';
import { Timeline } from './components/Timeline';
import { BrideAndGroom } from './components/BrideAndGroom';
import { VenueLocation } from './components/VenueLocation';
import { RSVPForm } from './components/RSVPForm';

export function App() {
  const [showEnvelope, setShowEnvelope] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  const handleEnvelopeComplete = () => {
    setShowEnvelope(false);
    setTimeout(() => {
      setShowContent(true);
    }, 500);
  };

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'INVITATION', href: '#invitation' },
    { name: 'COUNTDOWN', href: '#countdown' },
    { name: 'TIMELINE', href: '#timeline' },
    { name: 'COUPLE', href: '#couple' },
    { name: 'VENUE', href: '#venue' },
    { name: 'RSVP', href: '#rsvp' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-transparent">
      {/* Envelope opening experience */}
      <AnimatePresence>
        {showEnvelope && (
          <EnvelopeOpening onComplete={handleEnvelopeComplete} />
        )}
      </AnimatePresence>

      {/* Main content */}
      <AnimatePresence>
        {showContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative flex flex-col md:flex-row min-h-screen bg-transparent text-white"
          >
            {/* Scrollable Content Container */}
            <main className="flex-1 w-full overflow-x-hidden min-h-screen bg-transparent">
              {/* Note: I removed the sidebar layout completely to focus on the premium vertical scroll experience requested in the redesign */}
              <div id="home" className="bg-transparent">
                <CoupleHero />
              </div>
              <div id="invitation" className="bg-transparent">
                <WeddingDetails />
              </div>
              <div id="countdown" className="bg-transparent">
                <CountdownTimer />
              </div>
              <div id="timeline" className="bg-transparent">
                <Timeline />
              </div>
              <div id="couple" className="bg-transparent">
                <BrideAndGroom />
              </div>
              <div id="venue" className="bg-transparent">
                <VenueLocation />
              </div>
              <div id="rsvp" className="bg-transparent">
                <RSVPForm />
              </div>
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}