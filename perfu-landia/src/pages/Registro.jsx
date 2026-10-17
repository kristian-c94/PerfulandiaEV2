import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Registro.css';

function Registro() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState('');
  const [exito, setExito] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setExito('');

    if (formData.password !== formData.confirmPassword) {
      setError('Las contraseñas no coinciden. Inténtalo de nuevo.');
      return;
    }

    if (formData.password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    const usuarios = JSON.parse(localStorage.getItem('usuarios_perfulandia')) || [];

    const existe = usuarios.some(
      (u) => u.email.toLowerCase() === formData.email.toLowerCase()
    );

    if (existe) {
      setError('Este correo electrónico ya se encuentra registrado.');
      return;
    }

    const nuevoUsuario = {
      nombre: formData.nombre,
      email: formData.email,
      password: formData.password
    };

    usuarios.push(nuevoUsuario);
    localStorage.setItem('usuarios_perfulandia', JSON.stringify(usuarios));

    setExito('¡Cuenta creada con éxito! Redirigiendo al inicio de sesión...');

    setTimeout(() => {
      navigate('/login');
    }, 2000);
  };

  return (
    <main className="registro-page-container">
      <div className="registro-card">
        <div className="registro-header">
          <h2 className="registro-title">Crear Cuenta</h2>
          <p className="registro-subtitle">
            Únete a PerfuLandia y descubre tus fragancias ideales
          </p>
        </div>

        {error && <div className="registro-alert registro-alert-error">{error}</div>}
        {exito && <div className="registro-alert registro-alert-success">{exito}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="nombre">
              Nombre Completo
            </label>
            <input
              id="nombre"
              type="text"
              name="nombre"
              className="form-input"
              placeholder="Tu nombre y apellido"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="email">
              Correo Electrónico
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="form-input"
              placeholder="ejemplo@correo.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="password">
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              name="password"
              className="form-input"
              placeholder="Mínimo 6 caracteres"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="confirmPassword">
              Confirmar Contraseña
            </label>
            <input
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              className="form-input"
              placeholder="Repite tu contraseña"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="registro-btn">
            REGISTRARME
          </button>
        </form>

        <div className="registro-footer">
          ¿Ya tienes cuenta?{' '}
          <Link to="/login" className="registro-login-link">
            Inicia sesión aquí
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Registro;