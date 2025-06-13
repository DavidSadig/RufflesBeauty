import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const transformations = [
    {
      before: "https://images.pexels.com/photos/3993461/pexels-photo-3993461.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
      after: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
      title: "Classic Bob Transformation",
      description: "Modern take on a timeless style"
    },
    {
      before: "https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
      after: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
      title: "Elegant Updo",
      description: "Perfect for special occasions"
    },
    {
      before: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
      after: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
      title: "Color & Style Refresh",
      description: "Gentle highlights and modern cut"
    },
    {
      before: "https://images.pexels.com/photos/3065171/pexels-photo-3065171.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
      after: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
      title: "Sophisticated Layers",
      description: "Adding volume and movement"
    }
  ];

  const galleryImages = [
    "https://images.pexels.com/photos/3993456/pexels-photo-3993456.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    "https://images.pexels.com/photos/3993451/pexels-photo-3993451.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    "https://images.pexels.com/photos/3065171/pexels-photo-3065171.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-gray-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-gray-800 mb-6">
              <span className="italic text-purple-700">Transformations</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              See the beautiful transformations we've created for our clients. Every before and after 
              tells a story of confidence and renewed beauty.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full mt-6"></div>
          </div>

          {/* Before & After Gallery */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {transformations.map((transformation, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-lg overflow-hidden">
                <div className="grid grid-cols-2">
                  {/* Before */}
                  <div className="relative">
                    <img 
                      src={transformation.before} 
                      alt={`Before ${transformation.title}`}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Before
                    </div>
                  </div>
                  
                  {/* After */}
                  <div className="relative">
                    <img 
                      src={transformation.after} 
                      alt={`After ${transformation.title}`}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      After
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-gray-800 mb-2">
                    {transformation.title}
                  </h3>
                  <p className="text-gray-600 italic">
                    {transformation.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Salon Gallery */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-serif font-semibold text-gray-800 mb-4">
              <span className="italic text-purple-700">Our Salon</span>
            </h3>
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Step into our warm, welcoming space designed for comfort and relaxation.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
                onClick={() => setSelectedImage(index)}
              >
                <img 
                  src={image} 
                  alt={`Salon interior ${index + 1}`}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-medium">View Larger</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox Modal */}
          {selectedImage !== null && (
            <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
              <div className="relative max-w-4xl max-h-full">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
                  aria-label="Close"
                >
                  <X size={32} />
                </button>
                
                <img 
                  src={galleryImages[selectedImage]} 
                  alt={`Salon interior ${selectedImage + 1}`}
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
                
                {/* Navigation */}
                <button
                  onClick={() => setSelectedImage(selectedImage > 0 ? selectedImage - 1 : galleryImages.length - 1)}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={32} />
                </button>
                
                <button
                  onClick={() => setSelectedImage(selectedImage < galleryImages.length - 1 ? selectedImage + 1 : 0)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight size={32} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Gallery;