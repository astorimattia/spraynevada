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
    <div className="drone-section h-full rounded-2xl pt-72 mt-20 relative">
      <div className="z-10 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl font-bold text-white">
            Trusted by many thousand-acre farms in Northern Nevada
          </p>
          <div className="p-20">
            <DroneVideo />
          </div>
          <div className="m-8">
            <FeatureCards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drone;