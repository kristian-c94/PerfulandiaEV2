import React from 'react';
import '../components/main/Main.css';

const ofertas = [
  { id: 201, nombre: '1 Million Elixir', marca: 'Paco Rabanne', precio: '$69.990', antes: '$89.990', imagen: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQbKzKE4kuHJzeJqq1UpxnMJEXbWXIXNPBR8s4JfzjKGPzWqIDVGVce3tAPxQCwp2YqT98oLfm3Z_FTcEvVXTigc3s36oxpozp3-zdPSTniJcWMBkffgLHDD7zrc2a41BhpFGy9I8E&usqp=CAc' },
  { id: 202, nombre: 'Club de Nuit Intense', marca: 'Armaf', precio: '$39.990', antes: '$45.990', imagen: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT265Yf8jy4klhTDH9k-PvNClaRseBkUZkVpdUkDLcjhgrTDdIcxdZNVe9EXewegJE-jt-owSRVhydnNzDEZ-_WnGRPsqUjDuTWRdbNMZueteA5o8ZtfpGwvKVOvGSY_jQQktSPXA&usqp=CAc' },
];

export default function Ofertas() {
  return (
    <main className="site-main">
      <div className="widget-product">
        <h2 className="section-title">OFERTAS Y PROMOCIONES</h2>
        <div className="products-grid" style={{ flexWrap: 'wrap', justifyContent: 'center' }}>
          {ofertas.map((producto) => (
            <div key={producto.id} className="grid-item">
              <div className="product-card">
                <div className="product-image-container">
                  <img src={producto.imagen} alt={producto.nombre} className="product-image" />
                </div>
                <div className="product-info">
                  <span className="product-brand">{producto.marca}</span>
                  <h3 className="product-name">{producto.nombre}</h3>
                  <p className="product-price">
                    <span style={{ textDecoration: 'line-through', color: '#a1a1aa', fontSize: '0.9rem', marginRight: '8px' }}>
                      {producto.antes}
                    </span>
                    {producto.precio}
                  </p>
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