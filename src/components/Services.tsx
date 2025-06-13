import React from 'react';
import { Scissors, Palette, Wind, Percent, Crown, Sparkles } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Scissors,
      title: "Hair Styling & Cuts",
      description: "Classic cuts, modern styles, and everything in between. We listen to your needs and create the perfect look.",
      price: "Starting at $45",
      features: ["Consultation included", "Wash & style included", "Touch-up tips provided"]
    },
    {
      icon: Palette,
      title: "Hair Coloring",
      description: "Gentle coloring techniques including highlights, lowlights, and root touch-ups using ammonia-free products.",
      price: "Starting at $65",
      features: ["Color consultation", "Gentle formulas", "Gray coverage specialists"]
    },
    {
      icon: Wind,
      title: "Wash & Blowout",
      description: "Relaxing shampoo with scalp massage followed by a professional blowout that lasts for days.",
      price: "Starting at $35",
      features: ["Scalp massage", "Volume boost", "Humidity protection"]
    },
    {
      icon: Crown,
      title: "Special Occasion Styling",
      description: "Beautiful updos and elegant styles for weddings, parties, and special events.",
      price: "Starting at $55",
      features: ["Trial run available", "Hair accessories", "Long-lasting hold"]
    },
    {
      icon: Sparkles,
      title: "Deep Conditioning Treatments",
      description: "Intensive moisture treatments to restore shine and softness to mature hair.",
      price: "Starting at $25",
      features: ["Protein treatments", "Moisture therapy", "Scalp treatments"]
    },
    {
      icon: Percent,
      title: "Senior Discounts",
      description: "We're proud to offer special pricing for our valued senior clients aged 65 and above.",
      price: "10% Off All Services",
      features: ["Available Monday-Friday", "Cannot combine with other offers", "Valid ID required"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-gray-800 mb-6">
              <span className="italic text-purple-700">Our Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We offer a full range of hair services designed specifically with mature women in mind. 
              Every service includes a personal consultation to ensure you get exactly what you're looking for.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full mt-6"></div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  {/* Icon */}
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-md">
                    <IconComponent size={32} className="text-purple-600" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-serif font-semibold text-gray-800 mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  
                  {/* Price */}
                  <div className="text-lg font-semibold text-purple-700 mb-4">
                    {service.price}
                  </div>
                  
                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-4">
                Ready to feel beautiful?
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Book your appointment today and let us help you look and feel your absolute best.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-md">
                  Book Appointment
                </button>
                <a 
                  href="tel:+1234567890"
                  className="bg-white hover:bg-gray-50 text-purple-600 border border-purple-600 px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-md"
                >
                  Call to Schedule
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;