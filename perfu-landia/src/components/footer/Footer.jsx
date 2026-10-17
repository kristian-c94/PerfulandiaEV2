import React, { useState } from 'react';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      console.log('Correo enviado:', email);
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <footer className="site-footer">
      <div className="footer-container">
        
        {/* Columna 1: Marca y Ubicación */}
        <div className="footer-section ubicaciones-info">
          <h3 className="footer-brand">PerfuLandia</h3>
          <p className="footer-tagline">Esencias exclusivas & alta perfumería.</p>
          
          <ul className="info-list">
            <li className="info-item">
            
              <div className="texto-inf">
                <span>Av. Providencia 1234, Piso 3, Local 023</span>
                <small>Metro Pedro de Valdivia (L1)</small>
              </div>
            </li>
            <li className="info-item">
              
              <div className="texto-inf">
                <span>ventas@negocio.cl</span>
              </div>
            </li>
          </ul>
        </div>

        {/* Columna 2: Newsletter / Ofertas */}
        <div className="footer-section footer-newsletter">
          <h3 className="newsletter-title">ÚNETE A NUESTRO CLUB</h3>
          <p className="newsletter-subtitle">
            Recibe promociones exclusivas, lanzamientos y catálogos de temporada en tu correo.
          </p>

          <section className="cuadro-correo">
            <div className="contenido-cuadro">
              {submitted ? (
                <div className="mensaje-exito">
                  ✨ ¡Gracias por suscribirte! Revisa tu bandeja de entrada.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="newsletter-form">
                  <input
                    type="email"
                    className="newsletter-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="perfulandia@negocio.cl"
                    required
                  />
                  <button type="submit" className="newsletter-button">
                    Suscribirme
                  </button>
                </form>
              )}
            </div>
          </section>
        </div>

      </div>

      {/* Franja Inferior: Copyright */}
      <div className="footer-bottom">
        <p>&copy; {currentYear} <span className="brand-highlight">PerfuLandia</span>. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}