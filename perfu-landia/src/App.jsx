import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

// Componentes de la Tienda
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import CartDrawer from './components/cart/CartDrawer';

// Páginas de la Tienda
import Main from './components/main/Main';
import Productos from './pages/Productos';
import Arabes from './pages/Arabes';
import Ofertas from './pages/Ofertas';
import Contacto from './pages/Contacto';
import Login from './pages/Login';
import Registro from './pages/Registro';

// Componentes y Páginas del Admin Dashboard
import AdminLayout from './components/admin/AdminLayout';
import DashboardHome from './pages/admin/DashboardHome';
import AdminProductos from './pages/admin/AdminProductos';
import AdminUsuarios from './pages/admin/Adminusuarios';
import AdminLogins from './pages/admin/AdminLogins';
import AdminMensajes from './pages/admin/AdminMensajes'; 

export default function App() {
  const [usuario, setUsuario] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const [carrito, setCarrito] = useState(() => {
    const saved = localStorage.getItem('carrito_perfulandia');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('carrito_perfulandia', JSON.stringify(carrito));
  }, [carrito]);

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
    setIsCartOpen(true);
  };

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

  const handleRemoveItem = (id) => {
    setCarrito((prev) => prev.filter((item) => item.id !== id));
  };

  const totalItems = carrito.reduce((sum, item) => sum + item.cantidad, 0);

  return (
    <BrowserRouter>
      <Routes>
        {/* ==================== RUTAS PÚBLICAS DE LA TIENDA ==================== */}
        <Route
          element={
            <>
              <Header 
                carritoCount={totalItems} 
                onOpenCart={() => setIsCartOpen(true)}
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
              />
              <Outlet />
              <CartDrawer 
                isOpen={isCartOpen} 
                onClose={() => setIsCartOpen(false)} 
                carrito={carrito} 
                onUpdateQuantity={handleUpdateQuantity} 
                onRemoveItem={handleRemoveItem} 
              />
              <Footer />
            </>
          }
        >
          <Route path="/" element={<Main onAddToCart={handleAddToCart} searchTerm={searchTerm} />} />
          <Route path="/productos" element={<Productos onAddToCart={handleAddToCart} searchTerm={searchTerm} />} />
          <Route path="/perfumes-arabes" element={<Arabes onAddToCart={handleAddToCart} searchTerm={searchTerm} />} />
          <Route path="/ofertas" element={<Ofertas onAddToCart={handleAddToCart} searchTerm={searchTerm} />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<Login onLogin={(u) => setUsuario(u)} />} />
          <Route path="/registro" element={<Registro />} />
        </Route>

        {/* ==================== RUTAS DEL ADMIN DASHBOARD ==================== */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="productos" element={<AdminProductos />} />
          <Route path="usuarios" element={<AdminUsuarios />} />
          <Route path="logins" element={<AdminLogins />} />
          <Route path="mensajes" element={<AdminMensajes />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}