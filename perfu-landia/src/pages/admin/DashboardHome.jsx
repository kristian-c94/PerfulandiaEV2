import React from 'react';

const DashboardHome = () => {
  return (
    <div>
      <h2 style={{ marginBottom: '1.5rem' }}>Resumen del Panel</h2>
      
      <div className="kpi-grid">
        <div className="kpi-card blue">
          <h5>Total Perfumes</h5>
          <h2>24</h2>
        </div>
        <div className="kpi-card green">
          <h5>Mensajes Recibidos</h5>
          <h2>5</h2>
        </div>
        <div className="kpi-card amber">
          <h5>Perfumes sin Stock</h5>
          <h2>2</h2>
        </div>
      </div>

      <div className="admin-card">
        <h3>Bienvenido al sistema de administración de Perfulandia</h3>
        <p style={{ color: '#666', marginTop: '0.5rem' }}>
        </p>
      </div>
    </div>
  );
};

export default DashboardHome;