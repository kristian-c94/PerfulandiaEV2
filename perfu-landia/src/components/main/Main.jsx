import React from 'react';
import BannerSlider from '../banner/BannerSlider';
import VideoSection from '../videos/VideoSection'; // 👈 Importas el nuevo componente
import './Main.css';

const productos = [
  {
    id: 1,
    nombre: 'Club de Nuit Intense EDT',
    marca: 'Armaf',
    precio: '$45.990',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbC03K1EbVdM1wzAqtzvPi7NQojcFx7cfIXoN7rJMGFA&s=10'
  },
  {
    id: 2,
    nombre: 'Sauvage Eau de Parfum',
    marca: 'Dior',
    precio: '$120.990',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpFj_4lhv9biKCZB5KN0SVFbBPpOJN8Yp3qHTEER4TSA&s=10'
  },
  {
    id: 3,
    nombre: 'Bleu de Chanel Parfum',
    marca: 'Chanel',
    precio: '$135.000',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnm3VSMMt2qK3VqOR4XuOK_EAvCPABa_k2hmURRGQVHQ&s=10'
  },
  {
    id: 4,
    nombre: 'Acqua Di Giò Profondo',
    marca: 'Giorgio Armani',
    precio: '$98.990',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQY-vueUsl9-o2ekTvFMRWhCZOO2u582kuFz0ZBqfJag&s=10'
  },
  {
    id: 5,
    nombre: '1 Million Elixir',
    marca: 'Paco Rabanne',
    precio: '$89.990',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_M0KHW0a3L09ImTtnxCGU1awplrlP0uPeBczCaqY7xA&s=10'
  }
];

export default function Main() {
  return (
    <main className="site-main">
      {/* Banner deslizable */}
      <BannerSlider />

      {/* Sección de Video Viral (Sin Carrusel) */}
      <VideoSection />

      {/* Sección de Destacados */}
      <div className="widget-product">
        <h2 className="section-title">DESTACADOS</h2>

        <div className="products-grid">
          {productos.map((producto) => (
            <div key={producto.id} className="grid-item grid-item-border">
              <div className="product-card">
                <div className="product-image-container">
                  <img src={producto.imagen} alt={producto.nombre} className="product-image" />
                </div>
                <div className="product-info">
                  <span className="product-brand">{producto.marca}</span>
                  <h3 className="product-name">{producto.nombre}</h3>
                  <p className="product-price">{producto.precio}</p>
                  <button className="add-to-cart-btn">Añadir al carrito</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}