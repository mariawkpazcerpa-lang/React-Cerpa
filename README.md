# Oniric

![Oniric logo](src/assets/Oniric-logo.png)

Proyecto de sitio web de una marca de ropa llamada Oniric, desarrollado con React + Vite. La aplicación presenta una landing page con navegación, presentación de la marca y una estructura pensada para una tienda de moda con estilo premium.

## Descripción

Oniric es una propuesta visual de una boutique de moda enfocada en ofrecer ropa de ensueño, combinando estética elegante, colores suaves y una experiencia moderna para el usuario. El proyecto está construido como una SPA (Single Page Application) con React y routing básico.

## Tecnologías utilizadas

- React 19
- Vite
- React Router DOM
- JavaScript
- CSS
- HTML

## Características

- Header con logo y navegación
- Sección "Sobre Nosotros"
- Diseño responsive para diferentes pantallas
- Estructura modular por componentes
- Uso de assets gráficos y branding propio
- Configuración base para desarrollo y producción con Vite

## Estructura del proyecto

```text
React-Cerpa/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   │   ├── Home-bg.png
│   │   ├── Oniric-logo.png
│   │   ├── cart.png
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── Components/
│   │   ├── About/
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── Item/
│   │   ├── ItemDetail/
│   │   ├── ItemDetailContainer/
│   │   ├── ItemList/
│   │   └── Nav/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── ...
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── README.md
└── ...
```

## Requisitos

- Node.js 18 o superior
- npm

## Instalación

```bash
npm install
```

## Ejecución en modo desarrollo

```bash
npm run dev
```

Abre la URL indicada por Vite en tu navegador.

## Construcción para producción

```bash
npm run build
```

## Vista previa del proyecto

```bash
npm run preview
```

## Scripts disponibles

- `npm run dev` — inicia el servidor de desarrollo
- `npm run build` — genera la versión de producción
- `npm run preview` — sirve la build localmente
- `npm run lint` — ejecuta ESLint

## Estado del proyecto

Este repositorio representa una primera versión de una tienda/landing page de moda con arquitectura React modular y estilo visual propio de la marca Oniric.

## Autor

Proyecto desarrollado por Maria Cerpa.
