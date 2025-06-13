import React from 'react';
import { Heart, Scissors, Users } from 'lucide-react';

const OurStory = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-gray-800 mb-6">
              <span className="italic text-purple-700">Our Story</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Story Content */}
            <div className="space-y-6">
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <Heart size={40} className="text-purple-600 mb-4" />
                <p className="text-lg text-gray-700 leading-relaxed mb-6 font-light">
                  For over 25 years, I've had the privilege of making women feel beautiful and confident. 
                  What started as a passion for helping my neighbors and friends has grown into a warm, 
                  welcoming salon where every woman is treated like family.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6 font-light">
                  I understand that as we mature, our hair needs change. That's why I specialize in gentle, 
                  caring treatments that enhance your natural beauty while respecting your hair's unique needs. 
                  Whether you're looking for a classic style or something fresh and modern, I'm here to listen 
                  and create the perfect look for you.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed font-light italic">
                  "Every woman deserves to feel beautiful, confident, and cared for. That's not just our motto — 
                  it's our promise to you."
                </p>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-purple-700 font-serif font-semibold">— Maria Rodriguez, Owner & Master Stylist</p>
                </div>
              </div>
            </div>

            {/* Visual Elements */}
            <div className="space-y-8">
              {/* Salon Image */}
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.pexels.com/photos/3993456/pexels-photo-3993456.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
                    alt="Ruffles Beauty salon interior with styling chairs and warm lighting"
                    className="w-full h-80 object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-yellow-200 rounded-2xl p-6 shadow-lg">
                  <Scissors size={32} className="text-gray-700" />
                </div>
              </div>

              {/* Values Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl p-6 shadow-md text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Heart size={24} className="text-purple-600" />
                  </div>
                  <h4 className="font-serif font-semibold text-gray-800 mb-2">Gentle Care</h4>
                  <p className="text-gray-600 text-sm">Specialized techniques for mature hair</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-md text-center">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users size={24} className="text-yellow-600" />
                  </div>
                  <h4 className="font-serif font-semibold text-gray-800 mb-2">Personal Touch</h4>
                  <p className="text-gray-600 text-sm">One-on-one attention for every client</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;