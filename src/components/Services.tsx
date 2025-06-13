import React from 'react';
import HairServices from './services/HairServices';
import NailServices from './services/NailServices';
import LaserServices from './services/LaserServices';

const Services: React.FC = () => {
  return (
    <div className="bg-pure-white">
      <HairServices />
      <NailServices />
      <LaserServices />
    </div>
  );
};

export default Services;