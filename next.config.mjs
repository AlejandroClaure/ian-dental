/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Mantener el modo estricto de React (compatible y útil)
  };
  module.exports = {
    experimental: {
      // Desactivar la precarga automática de recursos
      optimizeCss: false,
      // Opcional: Desactivar la precarga de scripts si no es necesaria
      // Esto puede variar según la versión de Next.js
    },
    // Asegurar que los scripts se carguen de manera diferida
    scripts: {
      strategy: 'lazyOnload', // Cargar scripts de manera diferida
    },
  };
  
  export default nextConfig;