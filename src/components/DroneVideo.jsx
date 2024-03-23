// components/DroneVideo.jsx
import React, { useRef, useEffect } from 'react';

const DroneVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
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
        className="w-5/6 h-auto mx-auto mix-blend-difference"
        muted
        poster="/drone_poster.jpg"
      >
        <source type="video/mp4" src="/drone_video.mp4" />
      </video>
    </div>
  );
};

export default DroneVideo;