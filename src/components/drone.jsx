/* // components/DroneVideo.jsx
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
    const video = videoRef.current;
    video.classList.add('ended');
  };

  const handleReplayClick = () => {
    const video = videoRef.current;
    video.classList.remove('ended');
    video.play();
  };

  const handlePauseClick = () => {
    const video = videoRef.current;
    video.pause();
  };

  const handlePlayClick = () => {
    const video = videoRef.current;
    video.play();
  };

  return (
    <div className="section-content" style={{ backgroundColor: 'black' }}>
      <div className="hero-vertical-component">
        <div className="hero-vertical-wrapper" style={{ width: '80%' }}>
          <div className="vertical-card-list vertical-top-align">
            <div className="vertical-card-col">
              <div className="hero-vertical-card">
                <div className="card-wrapper vertical-center-align horizontal-center-align">
                  <div className="card-container size-xl">
                    <div className="image-content">
                      <div className="video-player-box">
                        <div className="video-content">
                          <video
                            ref={videoRef}
                            poster="public/drone_poster.jpg"
                          >
                            <source
                              type="video/mp4"
                              src="public/drone_video.mp4"
                            />
                          </video>
                          <div
                            className="replay-button video-button"
                            onClick={handleReplayClick}
                          ></div>
                          <div
                            className="pause-button video-button"
                            onClick={handlePauseClick}
                          ></div>
                          <div
                            className="play-button video-button"
                            onClick={handlePlayClick}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="text-content-container"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DroneVideo; */