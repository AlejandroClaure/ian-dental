import Link from 'next/link';
import './nosotros.css';

export default function Nosotros() {
  return (
    <main>
      {/* Sección Hero */}
      <section className="nosotros-hero">
        <h1>Tu aliado en equipamiento odontológico</h1>
        <p>
          En Ian Dental, transformamos sonrisas con tecnología de vanguardia y un compromiso inquebrantable con la calidad.
        </p>
      </section>

      {/* Sección Sobre Nosotros */}
      <section className="nosotros-about">
        <h2>¿Quiénes somos?</h2>
        <p>
          Somos Ian Dental, una empresa apasionada por el mundo odontológico, con más de 10 años de experiencia equipando a
          profesionales de la salud dental con las herramientas más avanzadas del mercado. Desde nuestros inicios, hemos tenido un
          objetivo claro: ser el socio de confianza de los odontólogos, ofreciendo productos de alta calidad que garanticen resultados
          excepcionales para sus pacientes.
        </p>
        <p>
          En Ian Dental, entendemos las necesidades de los profesionales modernos. Por eso, trabajamos con las mejores marcas y
          ofrecemos un servicio personalizado que va más allá de la venta: estamos aquí para apoyarte en cada paso de tu camino,
          asegurándonos de que tengas el equipamiento perfecto para tu práctica.
        </p>
      </section>

      {/* Sección Valores */}
      <section className="nosotros-values">
        <h2>Nuestros valores</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>Calidad</h3>
            <p>Seleccionamos cuidadosamente cada producto para garantizar durabilidad y precisión en cada detalle.</p>
          </div>
          <div className="value-card">
            <h3>Innovación</h3>
            <p>Nos mantenemos a la vanguardia, trayendo las últimas tecnologías al mundo odontológico.</p>
          </div>
          <div className="value-card">
            <h3>Confianza</h3>
            <p>Construimos relaciones sólidas con nuestros clientes, basadas en transparencia y compromiso.</p>
          </div>
          <div className="value-card">
            <h3>Atención personalizada</h3>
            <p>Estamos aquí para escucharte y ofrecerte soluciones que se adapten a tus necesidades.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="nosotros-cta">
        <h2>¿Listo para transformar tu práctica odontológica?</h2>
        <Link href="/contacto">
          <button>Contáctanos hoy</button>
        </Link>
      </section>
    </main>
  );
}