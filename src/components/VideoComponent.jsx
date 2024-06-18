import React from 'react';
import teslaVideo from '../assets/modelZ .mp4'; 

const VideoComponent = () => {
  return (
    <div className="video-container">
      <h2>Model Z</h2>
      <div className="video-wrapper">
        <video controls>
          <source src={teslaVideo} type="video/mp4" />
          Tu navegador no soporta la reproducción de videos.
        </video>
      </div>
    </div>
  );
}

export default VideoComponent;
