import React, { useState } from 'react';

export default function Contacto() {
  const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. Obtener mensajes existentes de localStorage
    const mensajesGuardados = JSON.parse(localStorage.getItem('mensajes_perfulandia')) || [];

    // 2. Crear el nuevo objeto de mensaje
    const nuevoMensaje = {
      id: Date.now(),
      nombre: formData.nombre,
      email: formData.email,
      mensaje: formData.mensaje,
      fecha: new Date().toLocaleString('es-ES', {
        dateStyle: 'short',
        timeStyle: 'medium'
      })
    };

    // 3. Guardar en localStorage con la clave 'mensajes_perfulandia'
    localStorage.setItem('mensajes_perfulandia', JSON.stringify([nuevoMensaje, ...mensajesGuardados]));

    // 4. Mostrar confirmación y limpiar campos
    setEnviado(true);
    setFormData({ nombre: '', email: '', mensaje: '' });

    setTimeout(() => setEnviado(false), 4000);
  };

  return (
    <main className="site-main" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ maxWidth: '500px', width: '100%', backgroundColor: '#f8f4ee', padding: '2rem', borderRadius: '8px', border: '1px solid #e2d7c7' }}>
        <h2 className="section-title" style={{ textAlign: 'center' }}>CONTÁCTANOS</h2>

        {enviado && (
          <div style={{ backgroundColor: '#d4edda', color: '#155724', padding: '0.75rem', borderRadius: '4px', marginBottom: '1rem', textAlign: 'center', fontWeight: 'bold' }}>
            ¡Gracias por contactarnos! Tu mensaje ha sido enviado exitosamente.
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.4rem', color: '#3d3229', fontWeight: 'bold' }}>Nombre</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Tu nombre"
              style={{ width: '100%', padding: '0.6rem', borderRadius: '4px', border: '1px solid #d9ccbc', boxSizing: 'border-box' }}
              required
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.4rem', color: '#3d3229', fontWeight: 'bold' }}>Correo</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="tu.correo@ejemplo.com"
              style={{ width: '100%', padding: '0.6rem', borderRadius: '4px', border: '1px solid #d9ccbc', boxSizing: 'border-box' }}
              required
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.4rem', color: '#3d3229', fontWeight: 'bold' }}>Mensaje</label>
            <textarea
              rows="4"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              placeholder="¿En qué te podemos ayudar?"
              style={{ width: '100%', padding: '0.6rem', borderRadius: '4px', border: '1px solid #d9ccbc', boxSizing: 'border-box' }}
              required
            ></textarea>
          </div>
          <button type="submit" className="add-to-cart-btn" style={{ padding: '0.8rem', cursor: 'pointer' }}>Enviar Mensaje</button>
        </form>
      </div>
    </main>
  );
}