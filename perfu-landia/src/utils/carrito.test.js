describe('Pruebas unitarias del Carrito de Compras de PerfuLandia', function() {

  beforeEach(function() {
    localStorage.clear();
  });

  it('debe agregar un producto al carrito vacio', function() {
    const carritoInicial = [];
    const producto = { id: 1, nombre: 'Club De Nuit', precio: 45990, cantidad: 1 };
    
    const nuevoCarrito = [...carritoInicial, producto];
    expect(nuevoCarrito.length).toBe(1);
    expect(nuevoCarrito[0].nombre).toBe('Club De Nuit');
  });

  it('debe calcular el total de items en el carrito correctamente', function() {
    const carrito = [
      { id: 1, cantidad: 2 },
      { id: 2, cantidad: 3 }
    ];

    const totalItems = carrito.reduce((sum, item) => sum + item.cantidad, 0);
    expect(totalItems).toBe(5);
  });

});