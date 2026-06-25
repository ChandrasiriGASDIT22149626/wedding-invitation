import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Phone } from 'lucide-react';

export function RSVPForm() {
  const [formData, setFormData] = useState({ name: '', attending: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const text = `RSVP for Ridmi & Nalin's Wedding:\nName: ${formData.name}\nAttending: ${formData.attending}\nMessage: ${formData.message || 'None'}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/94767441039?text=${encodedText}`;

    // Brief artificial delay for UI feedback
    await new Promise((resolve) => setTimeout(resolve, 800));
    window.open(whatsappUrl, '_blank');

    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', attending: '', message: '' });
      setIsSubmitted(false);
    }, 4000);
  };

  return (
    <section className="relative py-16 md:py-24 px-6 bg-transparent overflow-hidden text-center text-white border-t border-[#C0C0C0]/10">
      {/* Background cinematic silver mesh */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#C0C0C0]/[0.05] via-transparent to-transparent"></div>
      <div className="absolute inset-0 z-0 bg-silver-dust opacity-10 pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto space-y-20">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center"
        >
          <span className="font-script text-3xl md:text-4xl text-[#C0C0C0]/80 block mb-4">Be our Guest</span>
          <h2 className="font-serif text-4xl md:text-5xl text-white uppercase tracking-[0.2em] luxury-gradient-text mb-6">
            RSVP
          </h2>
          <div className="w-16 h-px bg-[#C0C0C0]/30 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-16 text-left">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="md:col-span-2 space-y-12"
          >
            <div>
              <h3 className="font-serif text-3xl text-white/90 mb-6 luxury-gradient-text">Get in Touch</h3>
              <p className="font-sans text-sm text-[#C0C0C0]/70 mb-10 font-light leading-relaxed">
                We kindly request you to RSVP by July 1st, 2026. For any urgent inquiries, please contact us directly.
              </p>
              
              <div className="space-y-8">
                {[
                  { name: 'Ridmi', phone: '076 744 1039' },
                  { name: 'Nalin', phone: '077 653 1334' }
                ].map((contact, idx) => (
                  <div key={idx} className="flex items-center gap-6 group">
                    <div className="w-12 h-12 border border-[#C0C0C0]/20 rounded-full flex items-center justify-center bg-[#C0C0C0]/[0.02] group-hover:bg-[#C0C0C0]/10 group-hover:border-[#C0C0C0] transition-all duration-500 relative shadow-[0_0_15px_rgba(192,192,192,0)] group-hover:shadow-[0_0_15px_rgba(192,192,192,0.3)]">
                      <div className="absolute inset-0 rounded-full bg-[#C0C0C0]/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <Phone className="w-4 h-4 text-[#C0C0C0]/60 group-hover:text-[#C0C0C0] relative z-10 transition-colors" />
                    </div>
                    <div>
                      <p className="font-sans text-xs text-[#C0C0C0]/50 uppercase tracking-[0.2em] mb-1 font-medium">{contact.name}</p>
                      <p className="font-serif text-xl text-white/90 luxury-gradient-text group-hover:drop-shadow-[0_0_8px_rgba(192,192,192,0.5)] transition-all">{contact.phone}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form Container */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            className="md:col-span-3 glass-dark luxury-border-glow rounded-2xl p-8 md:p-12 shadow-[0_0_40px_rgba(0,0,0,0.8)] border border-[#C0C0C0]/20"
          >
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.98, filter: "blur(5px)" }}
                  onSubmit={handleSubmit}
                  className="space-y-8"
                >
                  {/* Floating Label Input: Name */}
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="block w-full px-0 py-4 text-white bg-transparent border-0 border-b-2 border-[#C0C0C0]/20 appearance-none focus:outline-none focus:ring-0 focus:border-[#C0C0C0] transition-colors duration-300 font-serif text-xl peer"
                      placeholder=" "
                    />
                    <label 
                      htmlFor="name" 
                      className="absolute text-[#C0C0C0]/50 font-sans text-xs uppercase tracking-[0.2em] duration-300 transform -translate-y-6 scale-75 top-4 z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#C0C0C0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-medium"
                    >
                      Your Full Name
                    </label>
                  </div>

                  {/* Attending Selection */}
                  <div className="pt-4">
                    <label className="block text-[#C0C0C0]/50 font-sans text-xs uppercase tracking-[0.2em] mb-6 font-medium">
                      Will you attend?
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      {['Joyfully Accept', 'Regretfully Decline'].map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => setFormData({ ...formData, attending: option })}
                          className={`relative py-4 px-4 border transition-all duration-500 font-serif text-sm tracking-widest uppercase overflow-hidden group ${
                            formData.attending === option
                              ? 'bg-[#C0C0C0] text-black border-[#C0C0C0] font-semibold shadow-[0_0_15px_rgba(192,192,192,0.4)]'
                              : 'bg-transparent border-[#C0C0C0]/20 text-[#C0C0C0]/60 hover:border-[#C0C0C0]/50 hover:text-[#C0C0C0]'
                          }`}
                        >
                          <span className="relative z-10">{option}</span>
                          {formData.attending !== option && (
                            <span className="absolute inset-0 bg-[#C0C0C0]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Floating Label Textarea: Message */}
                  <div className="relative pt-4">
                    <textarea
                      id="message"
                      rows={3}
                      value={formData.message}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="block w-full px-0 py-4 text-white bg-transparent border-0 border-b-2 border-[#C0C0C0]/20 appearance-none focus:outline-none focus:ring-0 focus:border-[#C0C0C0] transition-colors duration-300 font-serif text-xl peer resize-none"
                      placeholder=" "
                    />
                    <label 
                      htmlFor="message" 
                      className="absolute text-[#C0C0C0]/50 font-sans text-xs uppercase tracking-[0.2em] duration-300 transform -translate-y-6 scale-75 top-8 z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#C0C0C0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 font-medium"
                    >
                      Message (Optional)
                    </label>
                  </div>

                  {/* Submit button */}
                  <div className="pt-6">
                    <button
                      type="submit"
                      disabled={isSubmitting || !formData.name || !formData.attending}
                      className="w-full relative overflow-hidden border border-[#C0C0C0] bg-transparent text-[#C0C0C0] py-5 px-6 font-sans text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-4 transition-all duration-500 hover:bg-[#C0C0C0] hover:text-black disabled:opacity-30 disabled:border-[#C0C0C0]/30 disabled:text-[#C0C0C0]/50 disabled:hover:bg-transparent disabled:cursor-not-allowed group shadow-[0_0_20px_rgba(192,192,192,0.1)] hover:shadow-[0_0_25px_rgba(192,192,192,0.4)]"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-[2px] border-[#C0C0C0] border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <span className="relative z-10 group-hover:font-semibold">Send RSVP</span>
                          <Send className="w-4 h-4 relative z-10 transform group-hover:translate-x-1 transition-transform group-hover:text-black" />
                          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  className="text-center py-20 flex flex-col items-center justify-center h-full relative"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#C0C0C0]/20 via-transparent to-transparent opacity-50 blur-xl"></div>
                  
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 15, delay: 0.2 }}
                    className="w-20 h-20 bg-[#C0C0C0] rounded-full mb-8 flex items-center justify-center text-black shadow-[0_0_30px_rgba(192,192,192,0.5)] relative z-10"
                  >
                    <motion.svg
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      className="w-10 h-10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </motion.svg>
                  </motion.div>
                  
                  <h3 className="font-serif text-4xl text-white mb-4 relative z-10 luxury-gradient-text">
                    Thank You
                  </h3>
                  <p className="text-[#C0C0C0]/80 font-light font-sans tracking-wide relative z-10">
                    We've received your RSVP. We look forward to seeing you!
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}