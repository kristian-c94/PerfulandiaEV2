# PerfuLandia - E-Commerce Frontend

Plataforma e-commerce de perfumería exclusiva desarrollada con React.js y CSS personalizado, basada en una paleta cromática "Cream & Organic" (#fdfbf7, #8c6d53, #3d3229). Incluye autenticación de usuarios, catálogo interactivo con carrito de compras deslizable, panel de administración para gestión de productos y suite de pruebas unitarias con Jasmine y Karma.

---

## Tecnologías Utilizadas

- **Frontend**: React.js y React Router DOM
- **Estilos**: Custom CSS (diseño responsivo con Flexbox, Grid y Media Queries)
- **Persistencia de Datos**: localStorage (autenticación, carrito de compras e inventario)
- **Testing**: Jasmine y Karma Test Runner

---

## Funcionalidades Principales

1. **Autenticación**: Inicio de sesión y registro de usuarios con almacenamiento en localStorage.
2. **Navegación y Catálogo**: Vistas separadas para Productos, Perfumes Árabes, Ofertas y Contacto.
3. **Sección Multimedia**: Banner deslizable con transiciones automáticas y reproductor de video promocional horizontal.
4. **Carrito Desplegable (Cart Drawer)**: Control de cantidades, eliminación de ítems, cálculo automático del total en CLP y actualización en tiempo real.
5. **Panel de Administración**: Vistas privadas en `pages/admin` y componentes dedicados en `components/admin` para gestión del catálogo.
6. **Pruebas Unitarias**: Suite de pruebas para autenticación, carrito y componentes en la carpeta `utils/` y archivos `.test.js` / `.test.jsx`.

---

## Requisitos Previos

- Node.js (versión 14 o superior)
- npm (gestor de paquetes de Node)

---

## Instalación y Ejecución Local

1. **Clonar el repositorio e instalar dependencias:**
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd perfu-landia
   npm install

## Iniciar el servidor de desarrollo:

    npm start
    La aplicación se abrirá en el navegador en http://localhost:3000

## Ejecución de Pruebas Unitarias
  El proyecto cuenta con pruebas configuradas para ejecutar tanto en entorno de desarrollo como con ejecutor Karma + Jasmine.

  Ejecutar pruebas en entorno de desarrollo:

  Bash
  npm test
  Ejecutar pruebas unitarias con Jasmine y Karma:
  
  Bash
  npm run test:karma

```text
perfulandia/
├── public/
├── src/
│   ├── components/
│   │   ├── admin/
│   │   ├── banner/
│   │   ├── cart/
│   │   ├── footer/
│   │   ├── header/
│   │   ├── main/
│   │   └── videos/
│   ├── imagenes/
│   ├── pages/
│   │   ├── admin/
│   │   ├── Arabes.jsx
│   │   ├── Contacto.jsx
│   │   ├── Login.css
│   │   ├── Login.jsx
│   │   ├── Ofertas.jsx
│   │   ├── Productos.jsx
│   │   ├── Registro.css
│   │   └── Registro.jsx
│   ├── utils/
│   │   ├── auth.test.js
│   │   ├── carrito.test.js
│   │   ├── Contacto.test.jsx
│   │   └── Productos.test.jsx
│   ├── App.jsx
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── main.jsx
│   ├── reportWebVitals.js
│   └── setupTests.js
├── .gitignore
├── karma.conf.js
├── package.json
├── package-lock.json
└── README.md
```
