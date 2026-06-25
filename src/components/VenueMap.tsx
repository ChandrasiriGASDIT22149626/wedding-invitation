import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';

export function VenueMap() {
  const venueLocation = {
    lat: 6.8649,
    lng: 79.9738,
    name: 'Hotel Grand Minaro',
    address: 'Welipillewa, Panagoda, Homagama, Sri Lanka'
  };

  const handleGetDirections = () => {
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${venueLocation.lat},${venueLocation.lng}`,
      '_blank'
    );
  };

  return (
    <section className="relative py-20 md:py-32 px-4 bg-[#0b1a30] overflow-hidden text-[#faf7f2]">
      <div className="relative max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            Find Us Here
          </h2>
          <p className="text-white/70 font-light text-lg">
            Join us at this beautiful venue
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl h-96 md:h-[500px]"
          >
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.0!2d${venueLocation.lng}!3d${venueLocation.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTEnNTMuNiJOIDc5wrA1OCcyNS43IkU!5e0!3m2!1sen!2s!4v1234567890`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />

            {/* Animated pin drop */}
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: 0.5,
                type: 'spring',
                bounce: 0.5
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full pointer-events-none"
            >
              <MapPin
                className="w-12 h-12 text-white drop-shadow-lg"
                fill="currentColor"
              />
            </motion.div>
          </motion.div>

          {/* Venue card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="glass-sand rounded-2xl p-8 md:p-10 shadow-xl text-left"
          >
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4 text-[#0b1a30]">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-3xl md:text-4xl text-white mb-2 font-semibold">
                {venueLocation.name}
              </h3>
              <p className="text-white/80 font-light text-lg leading-relaxed">
                {venueLocation.address}
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3 text-white/80">
                <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0" />
                <p className="font-light">
                  A stunning venue surrounded by natural beauty
                </p>
              </div>
              <div className="flex items-start gap-3 text-white/80">
                <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0" />
                <p className="font-light">
                  Ample parking available for all guests
                </p>
              </div>
              <div className="flex items-start gap-3 text-white/80">
                <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0" />
                <p className="font-light">Easily accessible from Colombo</p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleGetDirections}
              className="w-full bg-white hover:bg-gray-100 text-[#0b1a30] py-4 px-6 rounded-xl font-semibold flex items-center justify-center gap-3 shadow-lg transition-all"
            >
              <Navigation className="w-5 h-5" />
              Get Directions
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}