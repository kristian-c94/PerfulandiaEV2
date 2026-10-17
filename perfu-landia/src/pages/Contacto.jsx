import React from 'react';

export default function Contacto() {
  return (
    <main className="site-main" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ maxWidth: '500px', width: '100%', backgroundColor: '#f8f4ee', padding: '2rem', borderRadius: '8px', border: '1px solid #e2d7c7' }}>
        <h2 className="section-title" style={{ textAlign: 'center' }}>CONTÁCTANOS</h2>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.4rem', color: '#3d3229', fontWeight: 'bold' }}>Nombre</label>
            <input type="text" placeholder="Tu nombre" style={{ width: '100%', padding: '0.6rem', borderRadius: '4px', border: '1px solid #d9ccbc', boxSizing: 'border-box' }} required />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.4rem', color: '#3d3229', fontWeight: 'bold' }}>Correo</label>
            <input type="email" placeholder="tu.correo@ejemplo.com" style={{ width: '100%', padding: '0.6rem', borderRadius: '4px', border: '1px solid #d9ccbc', boxSizing: 'border-box' }} required />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.4rem', color: '#3d3229', fontWeight: 'bold' }}>Mensaje</label>
            <textarea rows="4" placeholder="¿En qué te podemos ayudar?" style={{ width: '100%', padding: '0.6rem', borderRadius: '4px', border: '1px solid #d9ccbc', boxSizing: 'border-box' }} required></textarea>
          </div>
          <button type="submit" className="add-to-cart-btn" style={{ padding: '0.8rem' }}>Enviar Mensaje</button>
        </form>
      </div>
    </main>
  );
}