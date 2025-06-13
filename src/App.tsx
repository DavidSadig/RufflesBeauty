import React from 'react';
import { motion } from 'framer-motion';
import LandingPage from './components/LandingPage';
import Gallery from './components/Gallery';
import Services from './components/Services';
import Confessions from './components/Confessions';
import GalleryWall from './components/GalleryWall';
import CallToService from './components/CallToService';

function App() {
  return (
    <div className="min-h-screen bg-pure-white">
      <LandingPage />
      <Gallery />
      <Services />
      <Confessions />
      <GalleryWall />
      <CallToService />
    </div>
  );
}

export default App;
