import React, { useState, useEffect } from 'react';

export default function AdminMensajes() {
  const [mensajes, setMensajes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const cargados = JSON.parse(localStorage.getItem('mensajes_perfulandia')) || [];
    setMensajes(cargados);
  }, []);

  const handleDelete = (id) => {
    if (window.confirm('¿Deseas eliminar este mensaje?')) {
      const actualizados = mensajes.filter((item) => item.id !== id);
      setMensajes(actualizados);
      localStorage.setItem('mensajes_perfulandia', JSON.stringify(actualizados));
    }
  };

  const filteredMensajes = mensajes.filter(
    (item) =>
      item.nombre?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.mensaje?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="admin-page-container">
      <div className="admin-header-actions" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <div>
          <h2>Casilla de Reportes y Mensajes</h2>
          <p style={{ color: '#666', fontSize: '0.9rem' }}>
            Consultas recibidas desde la sección de contacto ({filteredMensajes.length} mensajes)
          </p>
        </div>

        <input
          type="text"
          placeholder="Buscar por nombre, email o mensaje..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '6px',
            border: '1px solid #ccc',
            width: '300px'
          }}
        />
      </div>

      <div className="admin-table-container" style={{ backgroundColor: '#fff', borderRadius: '8px', padding: '1rem', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #eee', color: '#555', fontSize: '0.85rem', textTransform: 'uppercase' }}>
              <th style={{ padding: '0.75rem' }}>Fecha</th>
              <th style={{ padding: '0.75rem' }}>Nombre</th>
              <th style={{ padding: '0.75rem' }}>Correo</th>
              <th style={{ padding: '0.75rem', width: '40%' }}>Mensaje</th>
              <th style={{ padding: '0.75rem', textAlign: 'center' }}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredMensajes.length > 0 ? (
              filteredMensajes.map((msg) => (
                <tr key={msg.id} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '0.75rem', fontSize: '0.85rem', whiteSpace: 'nowrap' }}>{msg.fecha}</td>
                  <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>{msg.nombre}</td>
                  <td style={{ padding: '0.75rem' }}>{msg.email}</td>
                  <td style={{ padding: '0.75rem', color: '#333' }}>{msg.mensaje}</td>
                  <td style={{ padding: '0.75rem', textAlign: 'center' }}>
                    <button
                      onClick={() => handleDelete(msg.id)}
                      style={{
                        backgroundColor: '#dc3545',
                        color: '#fff',
                        border: 'none',
                        padding: '0.4rem 0.8rem',
                        borderRadius: '4px',
                        cursor: 'pointer'
                      }}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" style={{ padding: '2rem', textAlign: 'center', color: '#888' }}>
                  No hay mensajes recibidos aún.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}