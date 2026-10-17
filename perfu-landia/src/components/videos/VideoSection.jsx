import React from 'react';
import './VideoSection.css';

// Importamos el video local que está en esta misma carpeta
import videoLocal from './YTDown.com_YouTube_Media_SArhNkOsLpg_Can-AI-Create-Luxury-Perfume-Ads-4k-60fps_001_1080p.mp4';

function VideoSection() {
  return (
    <section className="video-section-container">
      <h2 className="video-section-heading"></h2>
      
      <div className="video-wrapper">
        <video 
          className="featured-video"
          autoPlay 
          muted 
          loop 
          playsInline
          controls
        >
          <source src={videoLocal} type="video/mp4" />
          Tu navegador no soporta el reproductor de video.
        </video>
      </div>
    </section>
  );
}

export default VideoSection;