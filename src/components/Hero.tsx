import React from 'react';
import { Calendar, Phone, Star, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-50"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'soft-light'
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-40" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-serif font-semibold text-gray-800 mb-6 leading-tight">
            <span className="italic text-purple-700">Timeless Beauty,</span>
            <br />
            <span className="text-gray-700">Modern Touch.</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 italic font-light leading-relaxed">
            Helping women feel confident — from generation to generation.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-yellow-200 hover:bg-yellow-300 text-gray-800 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center space-x-2">
              <Calendar size={20} />
              <span>Book Now</span>
              <ArrowRight size={20} />
            </button>
            
            <a 
              href="tel:+1234567890" 
              className="bg-purple-200 hover:bg-purple-300 text-gray-800 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center space-x-2"
            >
              <Phone size={20} />
              <span>Call Now</span>
            </a>
          </div>
          
          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div className="bg-white bg-opacity-70 rounded-2xl p-6 shadow-lg backdrop-blur-sm">
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-sm text-gray-600">5.0 Star Rating</p>
              <p className="text-xs text-gray-500">200+ Happy Clients</p>
            </div>
            
            <div className="bg-white bg-opacity-70 rounded-2xl p-6 shadow-lg backdrop-blur-sm">
              <p className="text-2xl font-serif font-semibold text-purple-700 mb-1">25+</p>
              <p className="text-sm text-gray-600">Years Experience</p>
            </div>
            
            <div className="bg-white bg-opacity-70 rounded-2xl p-6 shadow-lg backdrop-blur-sm">
              <p className="text-2xl font-serif font-semibold text-purple-700 mb-1">Senior</p>
              <p className="text-sm text-gray-600">Discounts Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;