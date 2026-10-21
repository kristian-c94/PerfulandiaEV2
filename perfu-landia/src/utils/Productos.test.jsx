import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

// Lista simulada del catálogo de productos
const listaProductos = [
  { id: 1, nombre: 'Producto 1', precio: 10000 },
  { id: 2, nombre: 'Producto 2', precio: 20000 },
  { id: 3, nombre: 'Producto 3', precio: 30000 },
  { id: 4, nombre: 'Producto 4', precio: 40000 },
  { id: 5, nombre: 'Producto 5', precio: 50000 },
  { id: 6, nombre: 'Producto 6', precio: 60000 },
  { id: 7, nombre: 'Producto 7', precio: 70000 },
  { id: 8, nombre: 'Producto 8', precio: 80000 }
];

function ProductosTest({ onAddToCart }) {
  return (
    <div>
      {listaProductos.map((prod) => (
        <div key={prod.id}>
          <span>{prod.nombre}</span>
          <button onClick={() => onAddToCart(prod)}>Añadir al carrito</button>
        </div>
      ))}
    </div>
  );
}

describe('Pruebas del componente Productos', () => {
  test('Prueba de Renderizado: renderiza todos los elementos de la lista del catálogo', () => {
    render(<ProductosTest onAddToCart={jest.fn()} />);

    const botonesAgregar = screen.getAllByRole('button', { name: /añadir al carrito/i });
    
    expect(botonesAgregar.length).toBeGreaterThanOrEqual(8);
  });

  test('Prueba de Props: recibe la función onAddToCart y la ejecuta al hacer clic', () => {
    const mockOnAddToCart = jest.fn();

    render(<ProductosTest onAddToCart={mockOnAddToCart} />);

    const botonesAgregar = screen.getAllByRole('button', { name: /añadir al carrito/i });

    fireEvent.click(botonesAgregar[0]);

    expect(mockOnAddToCart).toHaveBeenCalledTimes(1);
    expect(mockOnAddToCart).toHaveBeenCalledWith(
      expect.objectContaining({
        id: expect.any(Number),
        nombre: expect.any(String),
        precio: expect.any(Number)
      })
    );
  });
});