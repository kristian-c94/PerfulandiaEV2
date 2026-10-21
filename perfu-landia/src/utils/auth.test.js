describe('Pruebas unitarias del sistema de Autenticación de PerfuLandia', function() {

  beforeEach(function() {
    localStorage.clear();
  });

  it('debe reconocer los correos de administración', function() {
    const emailAdmin = 'usuario@admin.com';
    const esAdmin = emailAdmin.endsWith('@admin.com') || emailAdmin.endsWith('@perfulandia.cl');
    expect(esAdmin).toBe(true);
  });

  it('debe rechazar correos de clientes como administradores', function() {
    const emailCliente = 'cliente@gmail.com';
    const esAdmin = emailCliente.endsWith('@admin.com') || emailCliente.endsWith('@perfulandia.cl');
    expect(esAdmin).toBe(false);
  });

  it('debe registrar y recuperar los inicios de sesión en localStorage', function() {
    const nuevoLogin = {
      id: 12345,
      nombre: 'Diego',
      email: 'mancilladiego2028@gmail.com',
      rol: 'Cliente'
    };

    localStorage.setItem('logins_perfulandia', JSON.stringify([nuevoLogin]));

    const loginsGuardados = JSON.parse(localStorage.getItem('logins_perfulandia'));
    expect(loginsGuardados.length).toBe(1);
    expect(loginsGuardados[0].email).toBe('mancilladiego2028@gmail.com');
  });

});