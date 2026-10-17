import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import CartDrawer from './components/cart/CartDrawer';

import Main from './components/main/Main';
import Productos from './pages/Productos';
import Arabes from './pages/Arabes';
import Ofertas from './pages/Ofertas';
import Contacto from './pages/Contacto';
import Login from './pages/Login';
import Registro from './pages/Registro';

export default function App() {
  const [usuario, setUsuario] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  // Estado del Carrito inicializado desde LocalStorage
  const [carrito, setCarrito] = useState(() => {
    const saved = localStorage.getItem('carrito_perfulandia');
    return saved ? JSON.parse(saved) : [];
  });

  // Guardar en LocalStorage ante cada cambio
  useEffect(() => {
    localStorage.setItem('carrito_perfulandia', JSON.stringify(carrito));
  }, [carrito]);

  // Agregar producto al carrito
  const handleAddToCart = (producto) => {
    setCarrito((prev) => {
      const existe = prev.find((item) => item.id === producto.id);
      if (existe) {
        return prev.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      }
      return [...prev, { ...producto, cantidad: 1 }];
    });
    setIsCartOpen(true); // Abre el carrito automáticamente
  };

  // Cambiar cantidad (+1 o -1)
  const handleUpdateQuantity = (id, delta) => {
    setCarrito((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const nuevaCantidad = item.cantidad + delta;
            return nuevaCantidad > 0 ? { ...item, cantidad: nuevaCantidad } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  // Eliminar elemento
  const handleRemoveItem = (id) => {
    setCarrito((prev) => prev.filter((item) => item.id !== id));
  };

  // Total de items para el contador de la insignia
  const totalItems = carrito.reduce((sum, item) => sum + item.cantidad, 0);

  return (
    <BrowserRouter>
      <Header 
        carritoCount={totalItems} 
        onOpenCart={() => setIsCartOpen(true)} 
      />

      <Routes>
        <Route path="/" element={<Main onAddToCart={handleAddToCart} />} />
        <Route path="/productos" element={<Productos onAddToCart={handleAddToCart} />} />
        <Route path="/perfumes-arabes" element={<Arabes onAddToCart={handleAddToCart} />} />
        <Route path="/ofertas" element={<Ofertas onAddToCart={handleAddToCart} />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/login" element={<Login onLogin={(u) => setUsuario(u)} />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        carrito={carrito} 
        onUpdateQuantity={handleUpdateQuantity} 
        onRemoveItem={handleRemoveItem} 
      />

      <Footer />
    </BrowserRouter>
  );
}