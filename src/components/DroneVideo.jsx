// components/DroneVideo.jsx
import React, { useRef, useEffect, useState } from 'react';

const DroneVideo = () => {
  const videoRef = useRef(null);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    let animationFrameId = null;

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!hasPlayed) {
            animationFrameId = requestAnimationFrame(() => {
              video.play().then(() => {
                setHasPlayed(true);
              }).catch((error) => {
                console.error('Error playing video:', error);
              });
            });
          }
        } else {
          if (!video.paused) {
            video.pause();
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // Adjust the threshold as needed
    });

    observer.observe(video);

    video.addEventListener('ended', handleVideoEnded);

    return () => {
      observer.unobserve(video);
      video.removeEventListener('ended', handleVideoEnded);
      cancelAnimationFrame(animationFrameId);
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