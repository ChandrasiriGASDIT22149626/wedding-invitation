import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
export function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  // Placeholder images - in production, these would be actual couple photos
  const images = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=1000&fit=crop',
    aspect: 'tall'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&h=600&fit=crop',
    aspect: 'wide'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&h=800&fit=crop',
    aspect: 'tall'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&h=800&fit=crop',
    aspect: 'square'
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=600&fit=crop',
    aspect: 'wide'
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=600&h=900&fit=crop',
    aspect: 'tall'
  }];

  return (
    <section className="relative py-20 md:py-32 px-4 bg-gradient-to-b from-ivory to-emerald/5 overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{
            opacity: 0,
            y: 50
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true,
            margin: '-100px'
          }}
          transition={{
            duration: 0.8
          }}
          className="text-center mb-16">
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-emerald mb-4">
            Captured Moments
          </h2>
          <p className="text-emerald-dark font-light text-lg">
            Memories we cherish together
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((image, index) =>
          <motion.div
            key={image.id}
            initial={{
              opacity: 0,
              y: 50
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true,
              margin: '-50px'
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.1
            }}
            className={`relative cursor-pointer group overflow-hidden rounded-2xl ${image.aspect === 'tall' ? 'row-span-2' : image.aspect === 'wide' ? 'col-span-2 md:col-span-1' : ''}`}
            onClick={() => setSelectedImage(index)}>
            
              <motion.div
              whileHover={{
                scale: 1.05
              }}
              transition={{
                duration: 0.4
              }}
              className="relative w-full h-full">
              
                <img
                src={image.url}
                alt={`Gallery ${image.id}`}
                className="w-full h-full object-cover" />
              

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Border glow on hover */}
                <motion.div
                initial={{
                  opacity: 0
                }}
                whileHover={{
                  opacity: 1
                }}
                className="absolute inset-0 border-2 border-gold rounded-2xl" />
              
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null &&
        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          exit={{
            opacity: 0
          }}
          className="fixed inset-0 z-50 bg-transparent/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}>
          
            <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10">
            
              <X className="w-6 h-6" />
            </button>

            <motion.img
            initial={{
              scale: 0.8,
              opacity: 0
            }}
            animate={{
              scale: 1,
              opacity: 1
            }}
            exit={{
              scale: 0.8,
              opacity: 0
            }}
            transition={{
              duration: 0.3
            }}
            src={images[selectedImage].url}
            alt={`Gallery ${images[selectedImage].id}`}
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()} />
          

            {/* Navigation */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) =>
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(index);
              }}
              className={`w-2 h-2 rounded-full transition-all ${index === selectedImage ? 'bg-gold w-8' : 'bg-white/30 hover:bg-white/50'}`} />

            )}
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </section>);

}