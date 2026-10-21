import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="admin-sidebar">
      <h4>Perfulandia Admin</h4>
      <nav className="admin-nav">
        <Link to="/admin"> Resumen</Link>
        <Link to="/admin/productos"> Gestión de Perfumes</Link>
        <Link to="/admin/usuarios"> Usuarios Registrados</Link>
        <Link to="/admin/logins"> Historial de Logins</Link>
        <Link to="/admin/mensajes"> Mensajes de Contacto</Link>
      </nav>
      <div style={{ paddingTop: '1rem', borderTop: '1px solid #333' }}>
        <Link to="/" className="btn-back"> Volver a la Tienda</Link>
      </div>
    </aside>
  );
};

export default Sidebar;