// components/FeatureCards.tsx
import React from 'react';

const FeatureCards = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 pb-4 px-4">
      <div className="flex flex-col items-center gap-4 p-6 rounded-xl w-64 h-48">
        <div className="relative text-white text-6xl font-bolf">50%</div>
        <div className="text-center text-white text-opacity-60 text-lg font-medium">Less chemical applied on crops</div>
      </div>
      <div className="flex flex-col items-center gap-4 p-6 rounded-xl w-64 h-48">
        <div className="relative">
          <img className="w-16 h-16 filter invert" src="target.png" alt="Target" />
        </div>
        <div className="text-center text-white text-opacity-60 text-lg font-medium">Access to difficult terrain</div>
      </div>
      <div className="flex flex-col items-center gap-4 p-6 rounded-xl w-64 h-48">
        <div className="relative">
          <img className="w-16 h-16 filter invert" src="data.png" alt="Data" />
        </div>
        <div className="text-center text-white text-opacity-60 text-lg font-medium">Data collection and analysis</div>
      </div>
      <div className="flex flex-col items-center gap-4 p-6 rounded-xl w-64 h-48">
        <div className="relative">
          <img className="w-16 h-16 filter invert" src="feather.png" alt="Feather" />
        </div>
        <div className="text-center text-white text-opacity-60 text-lg font-medium">Minimized compaction and damage</div>
      </div>
    </div>
  );
};

export default FeatureCards;