'use client';

import Link from 'next/link';

export default function Servicios() {
  return (
    <main className="servicios-page">
      {/* Sección principal de Servicios */}
      <div className="servicios-section">
        <h1>Servicio Técnico</h1>
        <p>
          Aplicamos nuestra experiencia en el ramo dental, para garantizar que nuestros clientes reciban los mejores productos y servicios, esforzándonos por servirles en todo momento con honestidad, transparencia y confianza.
        </p>
        <ul>
          <li>
            <strong>Visita, asesoría técnica y pre instalación:</strong> tiene un costo de u$s55 (*) en un radio de 35 km a la redonda.
          </li>
          <li>
            <strong>Venta e instalación de equipos:</strong> la instalación de los equipos nuevos tiene un costo del 10% del valor del equipo al momento de instalarlo.
          </li>
          <li>
            <strong>Reparación, mudanza y desinstalación de equipo:</strong> pedir presupuesto.
          </li>
          <li>
            <strong>Viáticos:</strong> u$s 1,50 (*) por km recorrido fuera del radio de cobertura.
          </li>
          <li>
            <em>(*) Cotización dólar Banco Nación (Venta).</em>
          </li>
        </ul>
      </div>

      {/* Sección Llamado a la Acción */}
      <div className="call-to-action">
        <h2>¿Necesitas soporte técnico?</h2>
        <Link href="/contacto">
          <button>Contáctanos</button>
        </Link>
      </div>
    </main>
  );
}