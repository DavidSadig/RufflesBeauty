import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Diane M.",
      text: "I always leave Ruffles feeling like a new woman. Maria really listens to what I want and never makes me feel rushed. At my age, that personal touch means everything.",
      rating: 5,
      service: "Regular styling client for 8 years"
    },
    {
      name: "Barbara K.",
      text: "The senior discount is wonderful, but honestly, I'd pay full price for this level of care. My hair has never looked better, and the gentle products don't irritate my scalp.",
      rating: 5,
      service: "Color and cut specialist"
    },
    {
      name: "Eleanor R.",
      text: "I was nervous about trying a new salon after 20 years with my previous stylist, but Maria made me feel so comfortable. She understands mature hair and what works best.",
      rating: 5,
      service: "New client transformation"
    },
    {
      name: "Margaret L.",
      text: "The atmosphere is so relaxing, and I love that it's never too busy or noisy. Maria takes her time and really cares about how you look and feel when you leave.",
      rating: 5,
      service: "Monthly wash and style"
    },
    {
      name: "Joyce T.",
      text: "I've been coming here for my special occasion styling for years. Maria did my hair for my daughter's wedding and I felt absolutely beautiful. She's truly an artist.",
      rating: 5,
      service: "Special occasion styling"
    },
    {
      name: "Helen S.",
      text: "Finding a stylist who understands the needs of mature women is so important. Maria never tries to make me look like someone I'm not - she enhances my natural beauty.",
      rating: 5,
      service: "Cut and color maintenance"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-gray-800 mb-6">
              <span className="italic text-purple-700">What Our Clients Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it. Here's what our wonderful clients have to say about 
              their experience at Ruffles Beauty.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full mt-6"></div>
          </div>

          {/* Overall Rating */}
          <div className="text-center mb-16">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-8 shadow-lg max-w-2xl mx-auto">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={32} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <h3 className="text-3xl font-serif font-semibold text-purple-700 mb-2">5.0 out of 5</h3>
              <p className="text-gray-600 mb-2">Based on 200+ Google Reviews</p>
              <p className="text-gray-500 text-sm italic">"Consistently excellent service and care"</p>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Quote Icon */}
                <div className="flex justify-between items-start mb-4">
                  <Quote size={32} className="text-purple-300 opacity-60" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                {/* Testimonial Text */}
                <blockquote className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </blockquote>
                
                {/* Client Info */}
                <div className="border-t border-white pt-4">
                  <p className="font-serif font-semibold text-purple-700 mb-1">
                    — {testimonial.name}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {testimonial.service}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Google Reviews CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl p-8 shadow-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-4">
                Ready to join our happy clients?
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Experience the personalized care and attention that our clients rave about.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-md">
                  Book Your Appointment
                </button>
                <a 
                  href="https://g.page/r/ruffles-beauty-salon/review" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-gray-50 text-purple-600 border border-purple-600 px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-md"
                >
                  Read More Reviews
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;