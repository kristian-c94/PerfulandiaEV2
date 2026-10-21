import React from 'react';
import './Main.css';

// IDs unicos para la portada (ej: 1001, 1002, 1003) para evitar duplicados con Productos.jsx
const productosDestacados = [
  {
    id: 1001,
    nombre: 'Club de Nuit Intense EDT',
    marca: 'Armaf',
    precio: '$45.990',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbC03K1EbVdM1wzAqtzvPi7NQojcFx7cfIXoN7rJMGFA&s=10'
  },
  {
    id: 1002,
    nombre: 'Sauvage Eau de Parfum',
    marca: 'Dior',
    precio: '$120.990',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpFj_4lhv9biKCZB5KN0SVFbBPpOJN8Yp3qHTEER4TSA&s=10'
  },
  {
    id: 1003,
    nombre: 'Khamrah',
    marca: 'Lattafa',
    precio: '$38.990',
    imagen: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSyVic7Sl67sD7P13MrHJVM4c4TsEm09_tbqX9xr9_ycFULaQQ2zzxYc063qbWILpa5stRZrbUX2yIsC2tSBmf3Og2f9oPT5uT1ew1rNnH0E19GLGhf6NZdNIXmyFNN0ab2NwPAyF0Rqwc&usqp=CAc'
  }
];

export default function Main({ onAddToCart, searchTerm = '' }) {
  // Filtrar las recomendaciones del inicio según la búsqueda
  const productosFiltrados = productosDestacados.filter((prod) =>
    prod.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    prod.marca.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Función para procesar la adición al carrito
  const handleAgregar = (producto) => {
    if (!onAddToCart) {
      console.warn("onAddToCart no está definido en las props de Main");
      return;
    }

    // Convertir el formato "$45.990" a número entero (45990)
    const precioNumerico = typeof producto.precio === 'string'
      ? Number(producto.precio.replace(/[^0-9]/g, ''))
      : producto.precio;

    onAddToCart({
      id: producto.id,
      nombre: producto.nombre,
      marca: producto.marca,
      precio: precioNumerico,
      imagen: producto.imagen
    });
  };

  return (
    <main className="site-main">
      <section className="widget-product">
        <h2 className="section-title">DESTACADOS Y RECOMENDACIONES</h2>
        
        <div className="products-grid" style={{ flexWrap: 'wrap', justifyContent: 'center' }}>
          {productosFiltrados.length > 0 ? (
            productosFiltrados.map((producto) => (
              <div key={producto.id} className="grid-item">
                <div className="product-card">
                  <div className="product-image-container">
                    <img src={producto.imagen} alt={producto.nombre} className="product-image" />
                  </div>
                  <div className="product-info">
                    <span className="product-brand">{producto.marca}</span>
                    <h3 className="product-name">{producto.nombre}</h3>
                    <p className="product-price">{producto.precio}</p>

                    <button 
                      type="button"
                      className="add-to-cart-btn"
                      onClick={() => handleAgregar(producto)}
                    >
                      Añadir al carrito
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p style={{ textAlign: 'center', width: '100%', margin: '2rem 0' }}>
              No se encontraron perfumes destacados para "{searchTerm}".
            </p>
          )}
        </div>
      </section>
    </main>
  );
}