// components/DroneVideo.jsx
import React, { useRef, useEffect } from 'react';

const DroneVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    video.addEventListener('ended', handleVideoEnded);

    return () => {
      video.removeEventListener('ended', handleVideoEnded);
    };
  }, []);

  const handleVideoEnded = () => {
    videoRef.current.classList.add('ended');
    videoRef.current.pause();
  };

  return (
    <div className="video-content">
      <video
        ref={videoRef}
        className="w-[150%] md:w-5/6 h-auto mx-auto mix-blend-difference"
        muted
        playsInline
        poster="drone_poster.jpg"
      >
        <source type="video/mp4" src="drone_video.mp4" />
      </video>
    </div>
  );
};

export default DroneVideo;