import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustSignals from './components/TrustSignals';
import OurStory from './components/OurStory';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <TrustSignals />
      <OurStory />
      <Services />
      <Gallery />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;