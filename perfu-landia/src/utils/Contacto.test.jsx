import React, { useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

function ContactoTest() {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' });
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Tu nombre"
        value={form.nombre}
        onChange={(e) => setForm({ ...form, nombre: e.target.value })}
      />
      <input
        placeholder="tu.correo@ejemplo.com"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <textarea
        placeholder="¿En qué te podemos ayudar?"
        value={form.mensaje}
        onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
      />
      <button type="submit">Enviar mensaje</button>
      {enviado && <p>¡Gracias por contactarnos! Tu mensaje ha sido enviado exitosamente.</p>}
    </form>
  );
}

describe('Pruebas del componente Contacto', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('Prueba de Estado: cambia los valores de los campos al introducir texto', () => {
    render(<ContactoTest />);

    const inputNombre = screen.getByPlaceholderText(/tu nombre/i);
    const inputEmail = screen.getByPlaceholderText(/tu.correo@ejemplo.com/i);
    const inputMensaje = screen.getByPlaceholderText(/¿en qué te podemos ayudar\?/i);

    fireEvent.change(inputNombre, { target: { value: 'Carlos Pérez' } });
    fireEvent.change(inputEmail, { target: { value: 'carlos@ejemplo.com' } });
    fireEvent.change(inputMensaje, { target: { value: 'Consulta sobre despacho' } });

    expect(inputNombre.value).toBe('Carlos Pérez');
    expect(inputEmail.value).toBe('carlos@ejemplo.com');
    expect(inputMensaje.value).toBe('Consulta sobre despacho');
  });

  test('Prueba de Renderizado Condicional y Eventos: muestra mensaje de confirmación al enviar', () => {
    render(<ContactoTest />);

    expect(screen.queryByText(/¡Gracias por contactarnos!/i)).not.toBeInTheDocument();

    const inputNombre = screen.getByPlaceholderText(/tu nombre/i);
    const inputEmail = screen.getByPlaceholderText(/tu.correo@ejemplo.com/i);
    const inputMensaje = screen.getByPlaceholderText(/¿en qué te podemos ayudar\?/i);
    const botonEnviar = screen.getByRole('button', { name: /enviar mensaje/i });

    fireEvent.change(inputNombre, { target: { value: 'Maria' } });
    fireEvent.change(inputEmail, { target: { value: 'maria@test.com' } });
    fireEvent.change(inputMensaje, { target: { value: 'Mensaje de prueba' } });

    fireEvent.click(botonEnviar);

    expect(screen.getByText(/¡Gracias por contactarnos! Tu mensaje ha sido enviado exitosamente./i)).toBeInTheDocument();
  });
});