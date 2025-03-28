'use client';

import Link from 'next/link';
import Image from 'next/image';
import { getCategoryData } from './lib/data';

export default function Home() {
  // Obtener el primer producto de cada categoría
  const categories = [
    'sillones',
    'compresores',
    'cavitadores',
    'contraangulos',
    'piezademano',
    'micromotor',
    'turbinas',
    'duchabucal',
    'estufas',
    'autoclaves',
    'impresoras_fresadoras',
    'insertos_de_ultrasonido',
    'lamparas',
    'lavadoras',
    'lubricacion',
    'motores_de_implante_y_cirugia',
    'radiologia',
    'sistema_de_aspiracion',
    'mecanicadental',
    'podologia', 
  ];

  const featuredProducts = categories.map((category) => {
    const products = getCategoryData(category);
    return products.length > 0 ? { ...products[0], category } : null;
  }).filter(product => product !== null); // Filtrar categorías sin productos

  // Función para formatear el nombre de la categoría
  const formatCategoryName = (category) => {
    return category
      .replace(/_/g, ' ') // Reemplaza todos los "_" por espacios
      .split(' ') // Divide en palabras
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitaliza cada palabra
      .join(' '); // Une las palabras con espacios
  };

  return (
    <main className="home-page">
      {/* Sección Hero */}
      <div className="hero">
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
          Equipamiento Odontológico de Calidad
        </h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
          Todo lo que necesitas para tu consultorio en un solo lugar.
        </p>
        <Link href="#productos">
          <button
            style={{
              backgroundColor: '#2ecc71',
              color: 'white',
              border: 'none',
              padding: '0.75rem 2rem',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '1rem',
            }}
          >
            Explorar Productos
          </button>
        </Link>
      </div>

      {/* Sección Nuestros Productos con Ancla */}
      <div id="productos" className="products-section">
        <h2 style={{ fontSize: '2rem', color: '#2c3e50', marginBottom: '2rem', textAlign: 'center' }}>
          Nuestros Productos
        </h2>
        <div className="product-grid">
          {featuredProducts.map((product) => (
            <div key={product.category} className="product-card">
              <div className="product-circle">
                <Image
                  src={product.image}
                  alt={product.category}
                  width={200}
                  height={200}
                  style={{ objectFit: 'cover', borderRadius: '50%' }}
                />
                <div className="product-overlay">
                  <Link href={`/${product.category}`}>
                    <button className="view-more">Ver más</button>
                  </Link>
                </div>
              </div>
              <h3 style={{ fontSize: '1.1rem', color: '#2c3e50', marginTop: '1rem', textAlign: 'center' }}>
                {formatCategoryName(product.category)} {/* Aplicamos la función aquí */}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Sección Testimonios */}
      <div className="testimonials">
        <h2 style={{ fontSize: '2rem', color: '#2c3e50', marginBottom: '2rem' }}>
          Lo que dicen nuestros clientes
        </h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          <div className="testimonial-card">
            <p>&quotExcelente calidad en los sillones y un servicio técnico impecable.&quot</p>
            <p style={{ fontStyle: 'italic', marginTop: '0.5rem' }}>- Dr. Juan Pérez</p>
          </div>
          <div className="testimonial-card">
            <p>&quotLos equipos de esterilización son confiables y fáciles de usar.&quot</p>
            <p style={{ fontStyle: 'italic', marginTop: '0.5rem' }}>- Dra. María Gómez</p>
          </div>
          <div className="testimonial-card">
            <p>&quotGran variedad de productos y entrega rápida, recomendado!&quot</p>
            <p style={{ fontStyle: 'italic', marginTop: '0.5rem' }}>- Dr. Carlos López</p>
          </div>
        </div>
      </div>

      {/* Sección Llamado a la Acción */}
      <div className="call-to-action">
        <h2 style={{ fontSize: '2rem', color: '#2c3e50', marginBottom: '1rem' }}>
          ¿Listo para equipar tu consultorio?
        </h2>
        <Link href="/contacto">
          <button
            style={{
              backgroundColor: '#2ecc71',
              color: 'white',
              border: 'none',
              padding: '0.75rem 2rem',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '1rem',
            }}
          >
            Contáctanos
          </button>
        </Link>
      </div>
    </main>
  );
}