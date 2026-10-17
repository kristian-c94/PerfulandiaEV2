import React from 'react';
import '../components/main/Main.css';

const perfumesArabes = [
  { id: 101, nombre: 'Yara Tous EDP', marca: 'Lattafa', precio: '$32.990', imagen: 'https://cdnx.jumpseller.com/parisperfumes/image/41223244/resize/600/600?1697900913s' },
  { id: 102, nombre: 'Khamrah', marca: 'Lattafa', precio: '$38.990', imagen: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSyVic7Sl67sD7P13MrHJVM4c4TsEm09_tbqX9xr9_ycFULaQQ2zzxYc063qbWILpa5stRZrbUX2yIsC2tSBmf3Og2f9oPT5uT1ew1rNnH0E19GLGhf6NZdNIXmyFNN0ab2NwPAyF0Rqwc&usqp=CAc' },
  { id: 103, nombre: 'Club De Nuit Untold', marca: 'Armaf', precio: '$52.990', imagen: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQE49NZ13rULYn2Cn89nBLSzv5DDvEzRYdv1oafSkkpDVVHHawV3wrUrQaf73tJ4Gu39swLTVxCedsM--tW_SPOqer_xh4P7qdT9Mn7we_a9fHZyiEPHcLgn1ZPMgsnZcgGM89Cid4&usqp=CAc' },
];

export default function Arabes() {
  return (
    <main className="site-main">
      <div className="widget-product">
        <h2 className="section-title">PERFUMERÍA ÁRABE EXCLUSIVA</h2>
        <p style={{ textAlign: 'center', color: '#7d6e63', marginBottom: '2rem' }}>
          Fragancias orientales intensas, especiadas y de larga duración.
        </p>
        <div className="products-grid" style={{ flexWrap: 'wrap', justifyContent: 'center' }}>
          {perfumesArabes.map((producto) => (
            <div key={producto.id} className="grid-item">
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