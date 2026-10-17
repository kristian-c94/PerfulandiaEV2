import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

export default function Login({ onLogin }) {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const email = e.target.email.value;
    const password = e.target.password.value;

    const usuarios = JSON.parse(localStorage.getItem('usuarios_perfulandia')) || [];
    const usuarioValido = usuarios.find(user => user.email === email && user.password === password);

    if (usuarioValido) {
      const esAdministrador = usuarioValido.email.endsWith('@admin.com') || usuarioValido.email.endsWith('@perfulandia.cl');

      if (onLogin) {
        onLogin({ 
          nombre: usuarioValido.nombre, 
          email: usuarioValido.email, 
          isAdmin: esAdministrador 
        });
      }

      if (esAdministrador) {
        navigate('/admin');
      } else {
        navigate('/');
      }
    } else {
      setError('Correo o contraseña incorrectos. Verifica tus datos o regístrate.');
    }
  };

  return (
    <main className="login-page-container">
      <div className="login-card">
        
        <div className="login-header">
          <h2 className="login-title">Iniciar Sesión</h2>
          <p className="login-subtitle">Accede a tu cuenta exclusiva en PerfuLandia</p>
        </div>

        {error && <div className="login-alert">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="email">Correo Electrónico</label>
            <input 
              id="email"
              type="email" 
              name="email" 
              className="form-input"
              placeholder="ejemplo@correo.com" 
              required 
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="password">Contraseña</label>
            <input 
              id="password"
              type="password" 
              name="password" 
              className="form-input"
              placeholder="********" 
              required 
            />
          </div>

          <button type="submit" className="login-btn">
            ENTRAR
          </button>
        </form>

        <div className="login-footer">
          ¿No tienes cuenta? 
          <Link to="/registro" className="login-register-link">Regístrate aquí</Link>
        </div>

      </div>
    </main>
  );
}