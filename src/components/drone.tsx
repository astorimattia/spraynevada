// components/Drone.jsx
import React from 'react';

const Drone = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <video
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src="https://github.com/astorimattia/spraynevada/blob/main/public/drone_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center">
          <p className="text-3xl font-bold text-white">
            Trusted by many thousand-acre farms in Northern Nevada and
          </p>
        </div>
      </div>
    </div>
  );
};

export default Drone;