# 📦 MFE Template Project

![https://img.shields.io/badge/build-passing-brightgreen.svg](https://img.shields.io/badge/build-passing-brightgreen.svg)

![https://img.shields.io/badge/License-MIT-blue.svg](https://img.shields.io/badge/License-MIT-blue.svg)

Este es un proyecto de plantilla para la arquitectura de microfrontends utilizando **React**, **Module Federation** y otras tecnologías modernas. Está configurado para soportar un flujo de trabajo eficiente y escalable.

## 📚 Tabla de Contenidos

- [Requisitos Previos](https://www.notion.so/5574ee15e59e436a9692d0da3d786811?pvs=21)
- [Instalación](https://www.notion.so/5574ee15e59e436a9692d0da3d786811?pvs=21)
- [Uso](https://www.notion.so/5574ee15e59e436a9692d0da3d786811?pvs=21)
- [Librerías Principales](https://www.notion.so/5574ee15e59e436a9692d0da3d786811?pvs=21)
    - [React](https://www.notion.so/5574ee15e59e436a9692d0da3d786811?pvs=21)
    - [Module Federation](https://www.notion.so/5574ee15e59e436a9692d0da3d786811?pvs=21)
    - [Webpack](https://www.notion.so/5574ee15e59e436a9692d0da3d786811?pvs=21)
    - [Tailwind CSS](https://www.notion.so/5574ee15e59e436a9692d0da3d786811?pvs=21)
    - [TypeScript](https://www.notion.so/5574ee15e59e436a9692d0da3d786811?pvs=21)
    - [Workbox para PWA](https://www.notion.so/5574ee15e59e436a9692d0da3d786811?pvs=21)
    - [CleanWebpackPlugin](https://www.notion.so/5574ee15e59e436a9692d0da3d786811?pvs=21)
    - [HtmlWebpackPlugin](https://www.notion.so/5574ee15e59e436a9692d0da3d786811?pvs=21)
- [Estructura del Proyecto](https://www.notion.so/5574ee15e59e436a9692d0da3d786811?pvs=21)
- [Scripts Disponibles](https://www.notion.so/5574ee15e59e436a9692d0da3d786811?pvs=21)
- [Contribuciones](https://www.notion.so/5574ee15e59e436a9692d0da3d786811?pvs=21)
- [Licencia](https://www.notion.so/5574ee15e59e436a9692d0da3d786811?pvs=21)

## 🚀 Requisitos Previos

- **Node.js**: >= 14.x
- **npm**: >= 6.x o **yarn**

## ⚙️ Instalación

Clona el repositorio e instala las dependencias:

```bash
git clone <repositorio-url>
cd mfe-template
npm install
```

## 🛠️ Uso

### Desarrollo

Para iniciar el servidor de desarrollo:

```bash
npm start
```

El servidor se ejecutará en `http://localhost:3000` (o en el puerto configurado en `.env`).

### Construcción para Producción

Para compilar el proyecto para producción:

```bash
npm run build
```

Los archivos compilados se encontrarán en la carpeta `dist/`.

### Service Worker

El service worker se genera automáticamente en modo de producción.

## 📦 Librerías Principales

### 1. React

**Descripción**: Biblioteca principal para construir interfaces de usuario. Se usa junto con TypeScript para proporcionar una experiencia de desarrollo tipada.

**Instalación**: Ya incluida en `package.json` como dependencia.

**Uso**: Los componentes se encuentran en la carpeta `src`.

### 2. Module Federation

**Descripción**: Proporciona una forma de compartir módulos entre aplicaciones en tiempo de ejecución, permitiendo la arquitectura de microfrontends.

**Configuración**: Se configura en `webpack.config.js` utilizando el plugin `ModuleFederationPlugin`.

```jsx
new ModuleFederationPlugin({
  name: 'host',
  remotes: {
    remote: `remote@${process.env.REMOTE_URL}/remoteEntry.js`,
  },
  shared: {
    react: {
      singleton: true,
      requiredVersion: require('./package.json').dependencies.react,
    },
    'react-dom': {
      singleton: true,
      requiredVersion: require('./package.json').dependencies['react-dom'],
    },
  },
});
```

### 3. Webpack

**Descripción**: Empaquetador de módulos que permite la construcción de aplicaciones modernas.

**Configuración**: El archivo `webpack.config.js` está configurado para manejar TypeScript, Babel, estilos (SASS/SCSS) y optimizaciones para producción.

```bash
npm run build
```

### 4. Tailwind CSS

**Descripción**: Un framework CSS para crear rápidamente diseños modernos y responsivos.

**Instalación**: Tailwind CSS ya está configurado en el proyecto y se incluye en los archivos de estilo.

**Uso**: Los estilos de Tailwind se pueden utilizar directamente en los componentes.

```html
<div className="bg-blue-500 text-white">
  Tailwind Button
</div>
```

### 5. TypeScript

**Descripción**: Superset de JavaScript que añade tipos estáticos, mejorando la robustez del código.

**Configuración**: Configurado en el archivo `tsconfig.json`. Se utiliza en todo el proyecto para asegurar un tipado estático.

### 6. Workbox para PWA

**Descripción**: Utilizado para generar y manejar service workers, facilitando la creación de aplicaciones progresivas web (PWA).

**Configuración**: Configurado en `webpack.config.js` usando `InjectManifest` para inyectar el manifiesto de precache.

```jsx
if (isProduction) {
  plugins.push(
    new InjectManifest({
      swSrc: './src/service-worker.js', // Archivo fuente del service worker
      swDest: 'service-worker.js', // Nombre del archivo destino del service worker
    })
  );
}
```

### 7. CleanWebpackPlugin

**Descripción**: Limpia el directorio de `dist` antes de generar nuevos archivos de compilación.

**Configuración**: Configurado en `webpack.config.js`.

```jsx
new CleanWebpackPlugin(),
```

### 8. HtmlWebpackPlugin

**Descripción**: Genera un archivo HTML en el que se inyectan automáticamente todos los bundles generados por Webpack.

**Configuración**: Configurado en `webpack.config.js`.

```jsx
new HtmlWebpackPlugin({
  template: './public/index.html',
});
```

## 📂 Estructura del Proyecto

```
public/
├── index.html
src/
├── core/
│   └── data/
│       ├── repositories/
│       └── sources/
├── domain/
│   ├── models/
│   ├── repositories/
│   └── hooks/
├── presentation/
│   ├── components/
│   │   ├── atoms/
│   │   ├── molecules/
│   │   ├── organisms/
│   │   └── templates/
│   ├── pages/
│   ├── routes/
│   └── styles/
├── services/
│   ├── api/
│   └── utils/
├── store/
├── App.tsx
├── index.tsx
└── service-worker.js
test/
```

## 📜 Scripts Disponibles

- `npm run build`: Compila el proyecto para producción.
- `npm start`: Inicia el servidor de desarrollo.
- `npm run test`: Ejecuta las pruebas unitarias.

## 🤝 Contribuciones

Si deseas contribuir a este proyecto, por favor sigue los pasos habituales de fork, feature branch y pull request.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.