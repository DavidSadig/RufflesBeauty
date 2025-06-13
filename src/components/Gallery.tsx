import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const galleryImages = [
  {
    src: 'https://images.pexels.com/photos/3065171/pexels-photo-3065171.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'Tension / Release',
    size: 'large'
  },
  {
    src: 'https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=600',
    caption: 'Razor Light',
    size: 'medium'
  },
  {
    src: 'https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'She Walked In.',
    size: 'large'
  },
  {
    src: 'https://images.pexels.com/photos/3762667/pexels-photo-3762667.jpeg?auto=compress&cs=tinysrgb&w=600',
    caption: 'Hot Wax, Cold Heart.',
    size: 'small'
  },
  {
    src: 'https://images.pexels.com/photos/4004374/pexels-photo-4004374.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'Chrome Dreams',
    size: 'medium'
  },
  {
    src: 'https://images.pexels.com/photos/3573382/pexels-photo-3573382.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'Golden Hour',
    size: 'large'
  },
  {
    src: 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=600',
    caption: 'Heat Wave',
    size: 'medium'
  },
  {
    src: 'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=600',
    caption: 'Sharp Lines',
    size: 'small'
  },
  {
    src: 'https://images.pexels.com/photos/3065264/pexels-photo-3065264.jpeg?auto=compress&cs=tinysrgb&w=800',
    caption: 'Crown Work',
    size: 'large'
  },
  {
    src: 'https://images.pexels.com/photos/4004372/pexels-photo-4004372.jpeg?auto=compress&cs=tinysrgb&w=600',
    caption: 'Artistry',
    size: 'small'
  },
  {
    src: 'https://images.pexels.com/photos/3065203/pexels-photo-3065203.jpeg?auto=compress&cs=tinysrgb&w=600',
    caption: 'Volume Queen',
    size: 'medium'
  },
  {
    src: 'https://images.pexels.com/photos/5069431/pexels-photo-5069431.jpeg?auto=compress&cs=tinysrgb&w=600',
    caption: 'French Precision',
    size: 'small'
  },
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'large': return 'w-80 h-96';
      case 'medium': return 'w-64 h-80';
      case 'small': return 'w-48 h-64';
      default: return 'w-64 h-80';
    }
  };

  // Define specific positions for true collage layout
  const collagePositions = [
    { left: '5%', top: '10%', rotation: -7, zIndex: 15 },      // Large anchor - top left
    { left: '25%', top: '5%', rotation: 3, zIndex: 12 },       // Medium - overlapping
    { left: '45%', top: '15%', rotation: -4, zIndex: 20 },     // Large anchor - center
    { left: '35%', top: '8%', rotation: 8, zIndex: 8 },        // Small - behind center
    { left: '65%', top: '25%', rotation: -2, zIndex: 14 },     // Medium - right side
    { left: '75%', top: '5%', rotation: 6, zIndex: 18 },       // Large anchor - top right
    { left: '15%', top: '45%', rotation: -5, zIndex: 16 },     // Medium - left bottom
    { left: '8%', top: '35%', rotation: 4, zIndex: 10 },       // Small - overlapping left
    { left: '55%', top: '50%', rotation: -8, zIndex: 22 },     // Large - bottom center
    { left: '70%', top: '45%', rotation: 2, zIndex: 9 },       // Small - right bottom
    { left: '30%', top: '60%', rotation: -3, zIndex: 13 },     // Medium - bottom
    { left: '80%', top: '60%', rotation: 5, zIndex: 11 },      // Small - far right
  ];

  return (
    <section className="min-h-screen bg-pure-white py-32 px-8 relative overflow-hidden">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="mb-24"
      >
        <h2 className="text-editorial font-semibold text-6xl md:text-7xl text-editorial-black gold-underline ml-8 md:ml-16">
          GALLERY
        </h2>
      </motion.div>

      {/* Editorial Collage Wall */}
      <div className="relative max-w-7xl mx-auto min-h-[800px]">
        {galleryImages.map((image, index) => {
          const position = collagePositions[index];
          
          return (
            <motion.div
              key={index}
              initial={{ 
                opacity: 0, 
                scale: 0.8, 
                rotate: position.rotation,
                y: -100
              }}
              whileInView={{ 
                opacity: 1, 
                scale: 1, 
                rotate: position.rotation,
                y: 0
              }}
              whileHover={{ 
                scale: 1.05, 
                rotate: 0,
                zIndex: 50,
                y: -5
              }}
              transition={{ 
                duration: 0.8,
                delay: index * 0.1,
                hover: { duration: 0.3 }
              }}
              viewport={{ once: true }}
              className={`absolute cursor-pointer ${getSizeClasses(image.size)} group`}
              style={{
                left: position.left,
                top: position.top,
                zIndex: position.zIndex
              }}
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative w-full h-full">
                <img
                  src={image.src}
                  alt={image.caption}
                  className="w-full h-full object-cover shadow-2xl transition-all duration-500 group-hover:shadow-3xl"
                />
                
                {/* Caption overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-editorial-black bg-opacity-20 flex items-end justify-start p-4"
                >
                  <span className="text-pure-white text-script italic text-lg font-medium">
                    {image.caption}
                  </span>
                </motion.div>

                {/* Subtle corner accent */}
                <div className="absolute top-2 right-2 w-4 h-4 bg-gold opacity-30 transform rotate-45" />
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
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl max-h-[80vh] relative"
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.caption}
              className="w-full h-full object-contain shadow-2xl"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-pure-white">
              <h3 className="text-editorial text-2xl font-medium text-editorial-black">
                {selectedImage.caption}
              </h3>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Bottom fold transition */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-pure-white transform rotate-1 origin-bottom-left border-t border-gold opacity-30" />
    </section>
  );
};

export default Gallery;