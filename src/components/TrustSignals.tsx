import React from 'react';
import { MapPin, Clock, Phone, Star, Award, Users } from 'lucide-react';

const TrustSignals = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Contact Information */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center group">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
              <MapPin size={32} className="text-purple-600" />
            </div>
            <h3 className="text-xl font-serif font-semibold text-gray-800 mb-2">Visit Us</h3>
            <p className="text-gray-600 leading-relaxed">
              123 Beauty Lane<br />
              Elegant City, EC 12345<br />
              <span className="text-sm text-purple-600">Easy parking available</span>
            </p>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-200 transition-colors">
              <Phone size={32} className="text-yellow-600" />
            </div>
            <h3 className="text-xl font-serif font-semibold text-gray-800 mb-2">Call Us</h3>
            <p className="text-gray-600 leading-relaxed">
              <a href="tel:+1234567890" className="text-lg font-medium hover:text-purple-600 transition-colors">
                (123) 456-7890
              </a><br />
              <span className="text-sm text-gray-500">Text messages welcome</span>
            </p>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-pink-200 transition-colors">
              <Clock size={32} className="text-pink-600" />
            </div>
            <h3 className="text-xl font-serif font-semibold text-gray-800 mb-2">Hours</h3>
            <p className="text-gray-600 leading-relaxed">
              Mon-Fri: 9am-7pm<br />
              Saturday: 9am-5pm<br />
              <span className="text-sm text-gray-500">Closed Sundays</span>
            </p>
          </div>
        </div>
        
        {/* Trust Indicators */}
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="flex justify-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={24} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <h4 className="text-2xl font-serif font-semibold text-purple-700 mb-1">5.0</h4>
              <p className="text-gray-600 text-sm">Google Reviews</p>
              <p className="text-gray-500 text-xs">Based on 200+ reviews</p>
            </div>
            
            <div className="group">
              <Award size={32} className="text-purple-600 mx-auto mb-3" />
              <h4 className="text-2xl font-serif font-semibold text-purple-700 mb-1">Licensed</h4>
              <p className="text-gray-600 text-sm">Professional Stylists</p>
              <p className="text-gray-500 text-xs">State certified & insured</p>
            </div>
            
            <div className="group">
              <Users size={32} className="text-purple-600 mx-auto mb-3" />
              <h4 className="text-2xl font-serif font-semibold text-purple-700 mb-1">500+</h4>
              <p className="text-gray-600 text-sm">Happy Clients</p>
              <p className="text-gray-500 text-xs">Since 1998</p>
            </div>
            
            <div className="group">
              <div className="w-8 h-8 bg-purple-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-white font-bold text-sm">%</span>
              </div>
              <h4 className="text-2xl font-serif font-semibold text-purple-700 mb-1">Senior</h4>
              <p className="text-gray-600 text-sm">Discounts</p>
              <p className="text-gray-500 text-xs">10% off for 65+</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;