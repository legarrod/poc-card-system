# Proyecto POC

Este es un proyecto desarrollado con Next.js 15.2.3 y React 19.0.0. Incluye soporte para Tailwind CSS y ESLint para garantizar una buena calidad de código.

## Requisitos

Para ejecutar este proyecto correctamente, es necesario tener instalado:

- **Node.js 22** (se recomienda usar [nvm](https://github.com/nvm-sh/nvm) para gestionar versiones de Node.js)
- **npm** o **yarn** como gestor de paquetes

## Instalación y configuración

### 1. Clonar el repositorio
```sh
  git clone https://github.com/legarrod/poc-card-system
  cd poc
```

### 2. Instalar dependencias
Ejecuta el siguiente comando para instalar las dependencias del proyecto:
```sh
  npm install
  # o si prefieres usar yarn
  yarn install
```

### 3. Ejecutar el entorno de desarrollo
Para iniciar el servidor de desarrollo, usa:
```sh
  npm run dev
  # o con yarn
  yarn dev
```
El servidor se iniciará en `http://localhost:3000/` por defecto.

## Comandos disponibles

- `npm run dev` – Inicia el servidor en modo desarrollo
- `npm run build` – Construye el proyecto para producción
- `npm run start` – Inicia el servidor en modo producción después de construir
- `npm run lint` – Ejecuta el linter de código

## Estructura del proyecto

El proyecto sigue la estructura estándar de Next.js:
```
/poc
├── public/          # Archivos estáticos
├── src/app/pages/   # Páginas de la aplicación
├── src/app/components/ # Componentes reutilizables
├── styles/         # Estilos globales y de Tailwind
├── .eslintrc.json   # Configuración de ESLint
├── tailwind.config.js # Configuración de Tailwind CSS
├── tsconfig.json    # Configuración de TypeScript
├── package.json     # Dependencias y scripts
└── README.md        # Documentación del proyecto
```

## Tecnologías utilizadas

- **Next.js 15.2.3** – Framework de React para aplicaciones web modernas
- **React 19.0.0** – Biblioteca para interfaces de usuario
- **Tailwind CSS 4** – Framework de utilidades para estilos
- **ESLint 9** – Herramienta de análisis estático de código
- **TypeScript 5** – Lenguaje con tipado estático para JavaScript


