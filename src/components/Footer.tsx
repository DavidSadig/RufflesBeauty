import React from 'react';
import { MapPin, Phone, Clock, Mail, Facebook, Instagram, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gradient-to-b from-purple-100 to-purple-200 pt-20 pb-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-16">
            {/* Business Information */}
            <div className="lg:col-span-2">
              {/* Logo */}
              <img src="/logo-3.png" alt="Ruffles Beauty Hair Salon Logo" className="h-24 w-auto mb-2" />
              
              {/* Newsletter Signup */}
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <h4 className="text-xl font-serif font-semibold text-gray-800 mb-3">
                  Never Miss a Style Update
                </h4>
                <p className="text-gray-600 mb-4 text-sm">
                  Get beauty tips, special offers, and appointment reminders.
                </p>
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="Your email address"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            
            {/* Contact Information */}
            <div>
              <h4 className="text-xl font-serif font-semibold text-gray-800 mb-6">
                Contact Us
              </h4>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin size={20} className="text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 font-medium">Visit Our Salon</p>
                    <p className="text-gray-600 text-sm">
                      123 Beauty Lane<br />
                      Elegant City, EC 12345
                    </p>
                    <p className="text-purple-600 text-sm">Easy parking available</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone size={20} className="text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 font-medium">Call or Text</p>
                    <a href="tel:+1234567890" className="text-purple-600 font-semibold hover:text-purple-700 transition-colors">
                      (123) 456-7890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock size={20} className="text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 font-medium">Hours</p>
                    <p className="text-gray-600 text-sm">
                      Mon-Fri: 9am-7pm<br />
                      Saturday: 9am-5pm<br />
                      Closed Sundays
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Mail size={20} className="text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 font-medium">Email</p>
                    <a href="mailto:hello@rufflesbeauty.com" className="text-purple-600 hover:text-purple-700 transition-colors text-sm">
                      hello@rufflesbeauty.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Quick Links & Social */}
            <div>
              <h4 className="text-xl font-serif font-semibold text-gray-800 mb-6">
                Connect With Us
              </h4>
              
              {/* Social Links */}
              <div className="flex space-x-4 mb-8">
                <a 
                  href="https://facebook.com/rufflesbeauty" 
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook size={24} className="text-purple-600" />
                </a>
                <a 
                  href="https://instagram.com/rufflesbeauty" 
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram size={24} className="text-purple-600" />
                </a>
              </div>
              
              {/* Quick Links */}
              <div className="space-y-3">
                <h5 className="font-semibold text-gray-800 mb-3">Quick Links</h5>
                <a href="#services" className="block text-gray-600 hover:text-purple-600 transition-colors text-sm">
                  Our Services
                </a>
                <a href="#gallery" className="block text-gray-600 hover:text-purple-600 transition-colors text-sm">
                  Gallery
                </a>
                <a href="#about" className="block text-gray-600 hover:text-purple-600 transition-colors text-sm">
                  About Us
                </a>
                <a href="tel:+1234567890" className="block text-gray-600 hover:text-purple-600 transition-colors text-sm">
                  Book Appointment
                </a>
              </div>
              
              {/* Special Offers */}
              <div className="bg-yellow-100 rounded-2xl p-4 mt-6">
                <h5 className="font-serif font-semibold text-gray-800 mb-2">Senior Special</h5>
                <p className="text-gray-700 text-sm">
                  10% off all services for clients 65+<br />
                  <span className="text-xs text-gray-600">Monday-Friday only</span>
                </p>
              </div>
            </div>
          </div>
          
          {/* Embedded Map */}
          <div className="mb-12">
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
              <div className="h-64 bg-gradient-to-r from-purple-100 to-pink-100 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={48} className="text-purple-600 mx-auto mb-4" />
                  <h4 className="text-xl font-serif font-semibold text-gray-800 mb-2">
                    Find Us Easily
                  </h4>
                  <p className="text-gray-600">
                    123 Beauty Lane, Elegant City, EC 12345
                  </p>
                  <a 
                    href="https://maps.google.com/?q=123+Beauty+Lane+Elegant+City" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block mt-4 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-purple-300 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
              <div className="mb-4 md:mb-0">
                <p className="text-gray-600 text-sm">
                  © 2024 Ruffles Beauty Hair Salon. All rights reserved.
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Proudly serving the community since 1998
                </p>
              </div>
              
              <div className="flex items-center space-x-2 text-gray-600">
                <span className="text-sm">Made with</span>
                <Heart size={16} className="text-red-400 fill-current" />
                <span className="text-sm">for beautiful women everywhere</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;