// components/DroneVideo.jsx
import React, { useRef, useEffect, useState } from 'react';

const DroneVideo = () => {
  const videoRef = useRef(null);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    const handleScroll = () => {
      if (!hasPlayed) {
        const videoTop = video.getBoundingClientRect().top;
        const videoHeight = video.offsetHeight;
        const windowHeight = window.innerHeight;

        if (videoTop < windowHeight - videoHeight / 2) {
          if (video.paused) {
            video.play().then(() => {
              setHasPlayed(true);
            }).catch((error) => {
              console.error('Error playing video:', error);
            });
          }
        } else {
          if (!video.paused) {
            video.pause();
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    video.addEventListener('ended', handleVideoEnded);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      video.removeEventListener('ended', handleVideoEnded);
    };
  }, [hasPlayed]);

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
        preload="auto"
        poster="drone_poster.jpg"
      >
        <source type="video/mp4" src="drone_video.mp4" />
      </video>
    </div>
  );
};

export default DroneVideo;