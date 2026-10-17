import React, { useState, useEffect } from 'react';
import './BannerSlider.css';

import banner1 from '../../imagenes/main_img/2505.jpg';
import banner2 from '../../imagenes/main_img/2052.jpg';

const banners = [
  {
    id: 1,
    imagen: banner1,
    titulo: 'Descubre la Elegancia Árabe',
    subtitulo: 'Fragancias exclusivas con hasta 20% OFF'
  },
  {
    id: 2,
    imagen: banner2,
    titulo: 'Nuevos Ingresos 2026',
    subtitulo: 'Las marcas más codiciadas en PerfuLandia'
  }
];

export default function BannerSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Autoplay cada 4 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? banners.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  return (
    <div className="banner-slider-container">
      <div className="banner-slide-wrapper">
        {banners.map((item, index) => (
          <div 
            key={item.id} 
            className={`slide-content ${index === currentIndex ? 'active' : ''}`}
          >
            <img src={item.imagen} alt={item.titulo} className="banner-image" />
            <div className="banner-text-overlay">
              <h2>{item.titulo}</h2>
              <p>{item.subtitulo}</p>
              <a href="#perfumes" className="banner-btn">Ver Colección</a>
            </div>
          </div>
        ))}
      </div>

      {/* Flechas de Navegación */}
      <button className="slider-arrow prev" onClick={handlePrev} aria-label="Anterior">❮</button>
      <button className="slider-arrow next" onClick={handleNext} aria-label="Siguiente">❯</button>

      {/* Paginación (Puntos) */}
      <div className="slider-dots">
        {banners.map((_, index) => (
          <span 
            key={index} 
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}