// components/Hero.tsx
import React from 'react';
import { SparklesCore } from './sparkles';

const Hero = () => {
  const handleLearnMoreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const droneSection = document.getElementById('drone-section');
    if (droneSection) {
      droneSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="hero-section" className="-mt-12 flex items-center justify-center min-h-screen relative flex-grow">
      <div style={{ position: 'absolute', top: -10, left: 0, width: '100%', height: '100%', background: 'radial-gradient(rgba(39, 221, 48, 0.2), rgba(20, 32, 23, 0.0) 68%)', zIndex: 0, }} />
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
    <div className="text-center z-10">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
          Spray Smarter <br /> With Drone Application
        </h1>
        <div className="text-white font-medium text-xl md:text-2xl opacity-90 mt-6 md:mt-8">
          <p>
            Take better care of your crops and increase efficiency <br /> with precise aerial spraying
          </p>
          <a
            href="#drone-section"
            className="mt-8 text-sm text-white cursor-pointer opacity-90 inline-block"
            onClick={handleLearnMoreClick}
          >
            <p>Learn More</p>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mx-auto mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;