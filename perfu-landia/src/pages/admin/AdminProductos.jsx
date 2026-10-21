import React, { useState } from 'react';

const AdminProductos = () => {
  const [productos, setProductos] = useState([
    { id: 1, nombre: 'Perfume Árabe Lattafa', precio: '$45.000', stock: 12, categoria: 'Árabes' },
    { id: 2, nombre: 'Dior Sauvage', precio: '$110.000', stock: 5, categoria: 'Diseñador' },
  ]);

  const [nuevoNombre, setNuevoNombre] = useState('');
  const [nuevoPrecio, setNuevoPrecio] = useState('');
  const [nuevaCategoria, setNuevaCategoria] = useState('Árabes');

  const agregarProducto = (e) => {
    e.preventDefault();
    if (!nuevoNombre || !nuevoPrecio) return;

    const nuevo = {
      id: Date.now(),
      nombre: nuevoNombre,
      precio: `$${nuevoPrecio}`,
      stock: 10,
      categoria: nuevaCategoria
    };

    setProductos([...productos, nuevo]);
    setNuevoNombre('');
    setNuevoPrecio('');
  };

  const eliminarProducto = (id) => {
    setProductos(productos.filter((p) => p.id !== id));
  };

  return (
    <div>
      <h2 style={{ marginBottom: '1.5rem' }}>Gestión de Perfumes</h2>

      <div className="admin-card">
        <h3>Agregar Nuevo Perfume</h3>
        <form onSubmit={agregarProducto} className="admin-form">
          <input
            type="text"
            placeholder="Nombre del perfume"
            value={nuevoNombre}
            onChange={(e) => setNuevoNombre(e.target.value)}
          />
          <input
            type="number"
            placeholder="Precio (Ej: 35000)"
            value={nuevoPrecio}
            onChange={(e) => setNuevoPrecio(e.target.value)}
          />
          <select value={nuevaCategoria} onChange={(e) => setNuevaCategoria(e.target.value)}>
            <option value="Árabes">Árabes</option>
            <option value="Ofertas">Ofertas</option>
            <option value="Diseñador">Diseñador</option>
          </select>
          <button type="submit" className="btn-primary-custom">Guardar</button>
        </form>
      </div>

      <div className="admin-card">
        <table className="admin-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Categoría</th>
              <th>Precio</th>
              <th>Stock</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((prod) => (
              <tr key={prod.id}>
                <td>{prod.id}</td>
                <td>{prod.nombre}</td>
                <td>{prod.categoria}</td>
                <td>{prod.precio}</td>
                <td>{prod.stock}</td>
                <td>
                  <button className="btn-danger-custom" onClick={() => eliminarProducto(prod.id)}>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminProductos;