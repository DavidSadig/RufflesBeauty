import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const masterpieces = [
  {
    src: 'https://images.pexels.com/photos/3065264/pexels-photo-3065264.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: '13th Strand',
    type: 'Braid Crown'
  },
  {
    src: 'https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Moonstrike',
    type: 'Silver Chrome Nails'
  },
  {
    src: 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Heatwave',
    type: 'Hot Comb Action'
  },
  {
    src: 'https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Let Go',
    type: 'Mid-Wax Strip'
  },
  {
    src: 'https://images.pexels.com/photos/4004374/pexels-photo-4004374.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Golden Touch',
    type: 'Manicure Art'
  },
  {
    src: 'https://images.pexels.com/photos/3573382/pexels-photo-3573382.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Silk Press',
    type: 'Hair Transformation'
  },
  {
    src: 'https://images.pexels.com/photos/3762667/pexels-photo-3762667.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Chrome Dreams',
    type: 'Nail Extensions'
  },
  {
    src: 'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Sharp Lines',
    type: 'Men\'s Cut'
  },
  {
    src: 'https://images.pexels.com/photos/3065203/pexels-photo-3065203.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Volume Queen',
    type: 'Blow Dry'
  },
  {
    src: 'https://images.pexels.com/photos/4004372/pexels-photo-4004372.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Artistry',
    type: 'Nail Design'
  },
];

const GalleryWall: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<typeof masterpieces[0] | null>(null);

  return (
    <section className="min-h-screen bg-pure-white py-32 px-8 relative overflow-hidden">
      {/* Diagonal entrance */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="absolute top-0 left-0 w-full h-8 bg-gold opacity-20 transform -skew-y-1 origin-left"
      />

      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center mb-24"
      >
        <h2 className="text-editorial font-black text-7xl md:text-8xl text-editorial-black relative">
          THE WALL
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gold shadow-lg" />
        </h2>
        <p className="text-script italic text-lg md:text-xl text-editorial-black mt-6 opacity-60">
          Museum of Masterpieces
        </p>
      </motion.div>

      {/* Floating Glitter Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-br from-transparent via-gold to-transparent opacity-5 animate-pulse" />
      </div>

      {/* Falling/Floating Gallery Collage */}
      <div className="relative max-w-6xl mx-auto min-h-[800px]">
        {masterpieces.map((piece, index) => {
          const sizes = ['w-48 h-64', 'w-56 h-72', 'w-40 h-56', 'w-64 h-80'];
          const size = sizes[index % sizes.length];
          const rotation = [-7, 5, -3, 8, -2, 6, -4, 3, -6, 4][index];
          
          // Create a layered, overlapping layout
          const positions = [
            { left: '5%', top: '10%' },
            { left: '25%', top: '5%' },
            { left: '45%', top: '15%' },
            { left: '65%', top: '8%' },
            { left: '80%', top: '20%' },
            { left: '10%', top: '40%' },
            { left: '30%', top: '45%' },
            { left: '55%', top: '50%' },
            { left: '75%', top: '55%' },
            { left: '20%', top: '70%' },
          ];

          return (
            <motion.div
              key={index}
              initial={{ 
                opacity: 0, 
                y: -200, 
                rotate: rotation,
                scale: 0.8
              }}
              whileInView={{ 
                opacity: 1, 
                y: 0, 
                rotate: rotation,
                scale: 1
              }}
              whileHover={{ 
                scale: 1.1, 
                rotate: 0,
                y: -10,
                zIndex: 50
              }}
              transition={{ 
                duration: 1.2,
                delay: index * 0.15,
                hover: { duration: 0.3 }
              }}
              viewport={{ once: true }}
              className={`absolute ${size} cursor-pointer group`}
              style={{
                left: positions[index]?.left || '50%',
                top: positions[index]?.top || '50%',
                zIndex: 10 + index
              }}
              onClick={() => setSelectedImage(piece)}
            >
              <div className="relative w-full h-full">
                <img
                  src={piece.src}
                  alt={piece.title}
                  className="w-full h-full object-cover shadow-2xl group-hover:shadow-3xl transition-all duration-500"
                />
                
                {/* Hover overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-editorial-black bg-opacity-30 flex flex-col justify-end p-4"
                >
                  <h3 className="text-pure-white text-editorial font-semibold text-lg mb-1">
                    {piece.title}
                  </h3>
                  <p className="text-pure-white text-script italic text-sm opacity-90">
                    {piece.type}
                  </p>
                </motion.div>

                {/* Floating tag */}
                <div className="absolute -top-2 -right-2 bg-gold text-editorial-black text-xs px-2 py-1 font-medium">
                  #{index + 1}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-pure-white z-50 flex items-center justify-center p-8"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-8 right-8 z-60 p-2 text-editorial-black hover:text-gold transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          
          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl max-h-[80vh] relative"
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-full object-contain shadow-2xl"
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-pure-white via-pure-white to-transparent">
              <h3 className="text-editorial font-bold text-3xl text-editorial-black mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-script italic text-xl text-editorial-black opacity-80">
                {selectedImage.type}
              </p>
              <div className="mt-4 text-typewriter text-sm text-editorial-black opacity-60">
                Archive • {new Date().getFullYear()} • Ruffles Beauty
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default GalleryWall;