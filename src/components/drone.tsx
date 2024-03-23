// components/Drone.tsx
import React, { useEffect } from 'react';
import DroneVideo from './DroneVideo.jsx';
import FeatureCards from './FeatureCards';
import { handleScroll } from '../utils/scrollUtils'

const Drone = () => {
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="drone-section h-full rounded-2xl pt-32 md:pt-48 lg:pt-60 mt-10 md:mt-16 relative flex-grow">
      <div className="z-10 flex items-center justify-center">
        <div className="text-center w-full">
          <p id="drone-section" className="text-lg md:text-xl font-bold text-white">
            Trusted by many thousand-acre farms in Northern Nevada
          </p>
          <div className="py-8 md:py-12 lg:p-20">
            <DroneVideo />
          </div>
          <div className="m-4 md:m-6 lg:m-8">
            <FeatureCards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drone;