import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Clock } from 'lucide-react';

const CallToService: React.FC = () => {
  const handleCallClick = () => {
    window.location.href = 'tel:+14162263205';
  };

  return (
    <section className="min-h-screen bg-pure-white flex items-center justify-center px-8 py-32 relative">
      {/* Minimalist Business Card Layout */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto space-y-12"
      >
        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-editorial font-black text-6xl md:text-7xl lg:text-8xl text-editorial-black tracking-wide"
        >
          RUFFLES BEAUTY
        </motion.h1>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Phone */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center justify-center space-x-3 cursor-pointer group"
            onClick={handleCallClick}
          >
            <Phone size={20} className="text-gold group-hover:text-editorial-black transition-colors" />
            <span className="text-editorial font-medium text-xl md:text-2xl text-editorial-black group-hover:text-gold transition-colors gold-underline">
              (416) 226-3205
            </span>
          </motion.div>

          {/* Address */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center justify-center space-x-3 group cursor-pointer"
            onClick={() => window.open('https://maps.google.com/?q=5997+Bathurst+St,+North+York,+ON+M2R+1Z3', '_blank')}
          >
            <MapPin size={20} className="text-gold group-hover:text-editorial-black transition-colors" />
            <span className="text-editorial font-medium text-xl md:text-2xl text-editorial-black group-hover:text-gold transition-colors">
              5997 Bathurst St, North York, ON M2R 1Z3
            </span>
          </motion.div>

          {/* Hours */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center justify-center space-x-3 group"
          >
            <Clock size={20} className="text-gold group-hover:text-editorial-black transition-colors" />
            <div className="text-center">
              <div className="text-editorial font-medium text-xl md:text-2xl text-editorial-black group-hover:text-gold transition-colors">
                TUES–SUN: 9AM–6PM
              </div>
              <div className="text-script italic text-lg text-editorial-black opacity-70">
                CLOSED MONDAYS
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          viewport={{ once: true }}
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              backgroundColor: '#FFD700',
              color: '#FFFFFF'
            }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 border-2 border-gold bg-pure-white text-editorial-black text-editorial font-bold text-xl md:text-2xl tracking-wider transition-all duration-300 hover:shadow-2xl"
            onClick={handleCallClick}
            style={{
              animation: 'goldPulse 4s ease-in-out infinite'
            }}
          >
            TAKE THE THRONE
          </motion.button>
        </motion.div>

        {/* Subtle tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          transition={{ duration: 2, delay: 1.2 }}
          viewport={{ once: true }}
          className="text-script italic text-lg text-editorial-black mt-8"
        >
          Where legends are made, one appointment at a time.
        </motion.p>
      </motion.div>

      {/* Background accent elements */}
      <div className="absolute top-20 left-20 w-1 h-32 bg-gold opacity-20" />
      <div className="absolute bottom-20 right-20 w-32 h-1 bg-gold opacity-20" />
      <div className="absolute top-1/2 left-8 w-2 h-2 bg-gold rounded-full opacity-30 animate-pulse" />
      <div className="absolute top-1/3 right-12 w-2 h-2 bg-gold rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
    </section>
  );
};

export default CallToService;