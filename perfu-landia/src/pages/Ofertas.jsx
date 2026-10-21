import React from 'react';
import '../components/main/Main.css';

const ofertas = [
  { id: 201, nombre: '1 Million Elixir', marca: 'Paco Rabanne', precio: '$69.990', antes: '$89.990', imagen: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQbKzKE4kuHJzeJqq1UpxnMJEXbWXIXNPBR8s4JfzjKGPzWqIDVGVce3tAPxQCwp2YqT98oLfm3Z_FTcEvVXTigc3s36oxpozp3-zdPSTniJcWMBkffgLHDD7zrc2a41BhpFGy9I8E&usqp=CAc' },
  { id: 202, nombre: 'Club de Nuit Intense', marca: 'Armaf', precio: '$39.990', antes: '$45.990', imagen: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT265Yf8jy4klhTDH9k-PvNClaRseBkUZkVpdUkDLcjhgrTDdIcxdZNVe9EXewegJE-jt-owSRVhydnNzDEZ-_WnGRPsqUjDuTWRdbNMZueteA5o8ZtfpGwvKVOvGSY_jQQktSPXA&usqp=CAc' },
];

export default function Ofertas({ onAddToCart, searchTerm = '' }) {
  // Filtrar ofertas por nombre o marca segun el termino de busqueda
  const productosFiltrados = ofertas.filter((prod) =>
    prod.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    prod.marca.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Manejador para agregar al carrito con precio formateado a numero
  const handleAgregar = (producto) => {
    if (!onAddToCart) return;

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
      <div className="widget-product">
        <h2 className="section-title">OFERTAS Y PROMOCIONES</h2>
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
                    <p className="product-price">
                      <span style={{ textDecoration: 'line-through', color: '#a1a1aa', fontSize: '0.9rem', marginRight: '8px' }}>
                        {producto.antes}
                      </span>
                      {producto.precio}
                    </p>
                    <button 
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
              No se encontraron ofertas que coincidan con "{searchTerm}".
            </p>
          )}
        </div>
      </div>
    </main>
  );
}