import React, { useState } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm relative z-50">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src="/logo-3.png" alt="Ruffles Beauty Hair Salon Logo" className="h-16 w-auto" />
            <div>
              <h1 className="text-2xl font-serif font-semibold text-gray-800">Ruffles Beauty</h1>
              <p className="text-sm text-gray-600 italic">Hair Salon</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-purple-600 transition-colors">Home</a>
            <a href="#services" className="text-gray-700 hover:text-purple-600 transition-colors">Services</a>
            <a href="#gallery" className="text-gray-700 hover:text-purple-600 transition-colors">Gallery</a>
            <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors">About</a>
            <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">Contact</a>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+1234567890" className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors">
              <Phone size={16} />
              <span className="text-sm">(123) 456-7890</span>
            </a>
            <div className="flex items-center space-x-2 text-gray-700">
              <MapPin size={16} />
              <span className="text-sm">123 Beauty Lane</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
            <nav className="px-4 py-6 space-y-4">
              <a href="#home" className="block text-gray-700 hover:text-purple-600 transition-colors">Home</a>
              <a href="#services" className="block text-gray-700 hover:text-purple-600 transition-colors">Services</a>
              <a href="#gallery" className="block text-gray-700 hover:text-purple-600 transition-colors">Gallery</a>
              <a href="#about" className="block text-gray-700 hover:text-purple-600 transition-colors">About</a>
              <a href="#contact" className="block text-gray-700 hover:text-purple-600 transition-colors">Contact</a>
              <div className="pt-4 border-t">
                <a href="tel:+1234567890" className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors mb-2">
                  <Phone size={16} />
                  <span>(123) 456-7890</span>
                </a>
                <div className="flex items-center space-x-2 text-gray-700">
                  <MapPin size={16} />
                  <span>123 Beauty Lane</span>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;