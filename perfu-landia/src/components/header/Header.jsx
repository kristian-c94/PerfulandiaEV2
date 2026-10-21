import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

import logoImg from '../../imagenes/header_img/logo.png';
import cuentaIcono from '../../imagenes/header_img/cuenta_logo.png';
import carritoIcono from '../../imagenes/header_img/3144456.png';

export default function Header({ 
  carritoCount = 0, 
  onOpenCart, 
  searchTerm = '', 
  onSearchChange 
}) {
  return (
    <header className="main-header">
      <div className="header-container">
        
        {/* Logo */}
        <div className="logo-container">
          <Link to="/" className="logo-link">
            <img src={logoImg} alt="PerfuLandia Logo" className="header-logo-img" />
            <h1 className="logo-text">Perfu<span className="logo-accent">Landia</span></h1>
          </Link>
        </div>

        {/* Buscador Conectado */}
        <div className="header-search">
          <input 
            type="text" 
            placeholder="Buscar perfumes, marcas, árabes..." 
            className="search-input"
            value={searchTerm}
            onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
          />
          <button className="search-btn" aria-label="Buscar"></button>
        </div>

        {/* Menú de Navegación */}
        <nav className="navigation">
          <ul className="nav-list">
            <li><Link to="/" className="nav-link">Inicio</Link></li>
            <li><Link to="/productos" className="nav-link">Productos</Link></li>
            <li><Link to="/perfumes-arabes" className="nav-link highlight-link">Árabes</Link></li>
            <li><Link to="/ofertas" className="nav-link">Ofertas</Link></li>
            <li><Link to="/contacto" className="nav-link">Contacto</Link></li>
            {/* Enlace directo al Admin */}
            <li><Link to="/admin" className="nav-link" style={{ fontWeight: 'bold', color: '#e5b869' }}>Admin</Link></li>
          </ul>
        </nav>

        {/* Acciones del usuario */}
        <div className="header-actions">
          <Link to="/login" className="action-btn" title="Mi Cuenta">
            <img src={cuentaIcono} alt="Mi cuenta" className="icon-img" />
          </Link>
          
          <button 
            className="action-btn cart-btn" 
            title="Carrito de Compras"
            onClick={onOpenCart}
          >
            <img src={carritoIcono} alt="Carrito de compras" className="icon-img" />
            <span className="cart-badge">{carritoCount}</span>
          </button>
        </div>

      </div>
    </header>
  );
}