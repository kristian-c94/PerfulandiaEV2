import React from 'react';
import '../components/main/Main.css'; // Reutilizamos estilos de tarjetas

const catalogProductos = [
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
  },
{ id: 101, nombre: 'Yara Tous EDP', marca: 'Lattafa', precio: '$32.990', imagen: 'https://cdnx.jumpseller.com/parisperfumes/image/41223244/resize/600/600?1697900913' },
  { id: 102, nombre: 'Khamrah', marca: 'Lattafa', precio: '$38.990', imagen: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSyVic7Sl67sD7P13MrHJVM4c4TsEm09_tbqX9xr9_ycFULaQQ2zzxYc063qbWILpa5stRZrbUX2yIsC2tSBmf3Og2f9oPT5uT1ew1rNnH0E19GLGhf6NZdNIXmyFNN0ab2NwPAyF0Rqwc&usqp=CAc' },
  { id: 103, nombre: 'Club De Nuit Untold', marca: 'Armaf', precio: '$52.990', imagen: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQE49NZ13rULYn2Cn89nBLSzv5DDvEzRYdv1oafSkkpDVVHHawV3wrUrQaf73tJ4Gu39swLTVxCedsM--tW_SPOqer_xh4P7qdT9Mn7we_a9fHZyiEPHcLgn1ZPMgsnZcgGM89Cid4&usqp=CAc' },
{ id: 201, nombre: '1 Million Elixir', marca: 'Paco Rabanne', precio: '$69.990', antes: '$89.990', imagen: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQbKzKE4kuHJzeJqq1UpxnMJEXbWXIXNPBR8s4JfzjKGPzWqIDVGVce3tAPxQCwp2YqT98oLfm3Z_FTcEvVXTigc3s36oxpozp3-zdPSTniJcWMBkffgLHDD7zrc2a41BhpFGy9I8E&usqp=CAc' },
  { id: 202, nombre: 'Club de Nuit Intense', marca: 'Armaf', precio: '$39.990', antes: '$45.990', imagen: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT265Yf8jy4klhTDH9k-PvNClaRseBkUZkVpdUkDLcjhgrTDdIcxdZNVe9EXewegJE-jt-owSRVhydnNzDEZ-_WnGRPsqUjDuTWRdbNMZueteA5o8ZtfpGwvKVOvGSY_jQQktSPXA&usqp=CAc' },

];

export default function Productos() {
  return (
    <main className="site-main">
      <div className="widget-product">
        <h2 className="section-title">CATÁLOGO COMPLETO DE PERFUMES</h2>
        <div className="products-grid" style={{ flexWrap: 'wrap', justifyContent: 'center' }}>
          {catalogProductos.map((producto) => (
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
