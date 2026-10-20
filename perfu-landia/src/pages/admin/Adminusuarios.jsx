import React, { useState, useEffect } from 'react';

export default function AdminUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [filtro, setFiltro] = useState('');

  // Cargar usuarios desde localStorage al montar el componente
  useEffect(() => {
    const usuariosGuardados = JSON.parse(localStorage.getItem('usuarios_perfulandia')) || [];
    setUsuarios(usuariosGuardados);
  }, []);

  // Eliminar usuario
  const handleEliminarUsuario = (id) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este usuario registrado?')) {
      const nuevosUsuarios = usuarios.filter((u) => u.id !== id && u.email !== id);
      setUsuarios(nuevosUsuarios);
      localStorage.setItem('usuarios_perfulandia', JSON.stringify(nuevosUsuarios));
    }
  };

  // Filtrar por nombre o correo
  const usuariosFiltrados = usuarios.filter((u) =>
    (u.nombre || '').toLowerCase().includes(filtro.toLowerCase()) ||
    (u.email || '').toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="admin-page" style={{ padding: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <div>
          <h1 style={{ fontSize: '1.8rem', color: '#1e293b', margin: 0 }}>Usuarios Registrados</h1>
          <p style={{ color: '#64748b', margin: '0.25rem 0 0 0' }}>
            Lista completa de clientes registrados en PerfuLandia ({usuarios.length} registrados)
          </p>
        </div>

        {/* Buscador de usuarios */}
        <input
          type="text"
          placeholder="Buscar por nombre o email..."
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
          style={{
            padding: '0.6rem 1rem',
            borderRadius: '6px',
            border: '1px solid #cbd5e1',
            width: '280px',
            fontSize: '0.9rem'
          }}
        />
      </div>

      <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
              <th style={{ padding: '1rem', color: '#475569', fontSize: '0.85rem', textTransform: 'uppercase' }}>Nombre</th>
              <th style={{ padding: '1rem', color: '#475569', fontSize: '0.85rem', textTransform: 'uppercase' }}>Correo Electrónico</th>
              <th style={{ padding: '1rem', color: '#475569', fontSize: '0.85rem', textTransform: 'uppercase' }}>Rol</th>
              <th style={{ padding: '1rem', color: '#475569', fontSize: '0.85rem', textTransform: 'uppercase' }}>Fecha de Registro</th>
              <th style={{ padding: '1rem', color: '#475569', fontSize: '0.85rem', textTransform: 'uppercase', textAlign: 'center' }}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuariosFiltrados.length > 0 ? (
              usuariosFiltrados.map((u, idx) => (
                <tr key={u.id || idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '1rem', fontWeight: '500', color: '#0f172a' }}>{u.nombre}</td>
                  <td style={{ padding: '1rem', color: '#334155' }}>{u.email}</td>
                  <td style={{ padding: '1rem' }}>
                    <span style={{
                      backgroundColor: u.rol === 'Admin' ? '#fef3c7' : '#e0f2fe',
                      color: u.rol === 'Admin' ? '#92400e' : '#0369a1',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '12px',
                      fontSize: '0.8rem',
                      fontWeight: '600'
                    }}>
                      {u.rol || 'Cliente'}
                    </span>
                  </td>
                  <td style={{ padding: '1rem', color: '#64748b', fontSize: '0.85rem' }}>
                    {u.fechaRegistro || 'N/A'}
                  </td>
                  <td style={{ padding: '1rem', textAlign: 'center' }}>
                    <button
                      onClick={() => handleEliminarUsuario(u.id || u.email)}
                      style={{
                        backgroundColor: '#ef4444',
                        color: '#fff',
                        border: 'none',
                        padding: '0.4rem 0.8rem',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '0.8rem'
                      }}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" style={{ padding: '2rem', textAlign: 'center', color: '#94a3b8' }}>
                  {filtro ? 'No se encontraron usuarios con ese término.' : 'Aún no hay usuarios registrados en la plataforma.'}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}