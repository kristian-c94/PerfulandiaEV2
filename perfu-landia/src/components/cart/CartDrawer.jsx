import React from 'react';
import './CartDrawer.css';

export default function CartDrawer({ 
  isOpen, 
  onClose, 
  carrito, 
  onUpdateQuantity, 
  onRemoveItem 
}) {

  // Convertir precio string en número
  const parsePrecio = (precio) => {
    if (typeof precio === 'number') return precio;
    return Number(String(precio).replace(/[^0-9]/g, '')) || 0;
  };

  const totalCalculado = carrito.reduce(
    (acc, item) => acc + parsePrecio(item.precio) * item.cantidad, 
    0
  );

  const formatoCLP = (num) => '$' + num.toLocaleString('es-CL');

  return (
    <div className={`cart-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <div className="cart-header">
          <h3 className="cart-title">Tu Carrito</h3>
          <button className="close-btn" onClick={onClose} aria-label="Cerrar carrito">
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="cart-body">
          {carrito.length === 0 ? (
            <p className="cart-empty-msg">Tu carrito está vacío actualmente.</p>
          ) : (
            carrito.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.imagen} alt={item.nombre} className="cart-item-img" />
                
                <div className="cart-item-details">
                  <span className="cart-item-brand">{item.marca}</span>
                  <h4 className="cart-item-title">{item.nombre}</h4>
                  <span className="cart-item-price">{item.precio}</span>

                  <div className="quantity-controls">
                    <button 
                      className="qty-btn" 
                      onClick={() => onUpdateQuantity(item.id, -1)}
                    >
                      -
                    </button>
                    <span className="qty-count">{item.cantidad}</span>
                    <button 
                      className="qty-btn" 
                      onClick={() => onUpdateQuantity(item.id, 1)}
                    >
                      +
                    </button>
                  </div>
                </div>

                <button 
                  className="remove-btn" 
                  onClick={() => onRemoveItem(item.id)}
                  title="Eliminar producto"
                >
                  🗑️
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {carrito.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total-row">
              <span>Total:</span>
              <span>{formatoCLP(totalCalculado)}</span>
            </div>
            <button 
              className="checkout-btn" 
              onClick={() => alert('¡Procesando pedido!')}
            >
              FINALIZAR COMPRA
            </button>
          </div>
        )}

      </div>
    </div>
  );
}