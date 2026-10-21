import React, { useState, useEffect } from 'react';

export default function AdminLogins() {
  const [logins, setLogins] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const cargados = JSON.parse(localStorage.getItem('logins_perfulandia')) || [];
    setLogins(cargados);
  }, []);

  const handleClearHistory = () => {
    if (window.confirm('¿Deseas borrar todo el historial de inicios de sesión?')) {
      localStorage.removeItem('logins_perfulandia');
      setLogins([]);
    }
  };

  const filteredLogins = logins.filter(
    (item) =>
      item.nombre?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.email?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="admin-page-container">
      <div className="admin-header-actions" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <div>
          <h2>Historial de Inicios de Sesión</h2>
          <p style={{ color: '#666', fontSize: '0.9rem' }}>
            Lista de accesos recientes a la plataforma ({filteredLogins.length} registrados)
          </p>
        </div>

        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <input
            type="text"
            placeholder="Buscar por nombre o email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '6px',
              border: '1px solid #ccc',
              width: '260px'
            }}
          />
          {logins.length > 0 && (
            <button
              onClick={handleClearHistory}
              style={{
                backgroundColor: '#dc3545',
                color: 'white',
                border: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              🗑️ Limpiar
            </button>
          )}
        </div>
      </div>

      <div className="admin-table-container" style={{ backgroundColor: '#fff', borderRadius: '8px', padding: '1rem', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #eee', color: '#555', fontSize: '0.85rem', textTransform: 'uppercase' }}>
              <th style={{ padding: '0.75rem' }}>Fecha y Hora</th>
              <th style={{ padding: '0.75rem' }}>Usuario</th>
              <th style={{ padding: '0.75rem' }}>Correo Electrónico</th>
              <th style={{ padding: '0.75rem' }}>Rol</th>
            </tr>
          </thead>
          <tbody>
            {filteredLogins.length > 0 ? (
              filteredLogins.map((entry) => (
                <tr key={entry.id} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '0.75rem', fontSize: '0.9rem' }}>{entry.fechaAcceso}</td>
                  <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>{entry.nombre}</td>
                  <td style={{ padding: '0.75rem' }}>{entry.email}</td>
                  <td style={{ padding: '0.75rem' }}>
                    <span
                      style={{
                        padding: '0.2rem 0.6rem',
                        borderRadius: '12px',
                        fontSize: '0.75rem',
                        fontWeight: 'bold',
                        backgroundColor: entry.rol === 'Admin' ? '#e2e3e5' : '#d1ecf1',
                        color: entry.rol === 'Admin' ? '#383d41' : '#0c5460'
                      }}
                    >
                      {entry.rol}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" style={{ padding: '2rem', textAlign: 'center', color: '#888' }}>
                  No hay inicios de sesión registrados aún.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}