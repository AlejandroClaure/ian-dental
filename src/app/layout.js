'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import '../globals.css';
import { CartProvider } from './context/CartContext';
import CartSidebar from './components/CartSidebar';
import Image from 'next/image';

export default function RootLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isRotatoriosOpen, setIsRotatoriosOpen] = useState(false);
  const [isEsterilizacionOpen, setIsEsterilizacionOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Cerrar submenús al cerrar el menú principal
    setIsProductsOpen(false);
    setIsRotatoriosOpen(false);
    setIsEsterilizacionOpen(false);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsProductsOpen(false);
    setIsRotatoriosOpen(false);
    setIsEsterilizacionOpen(false);
  };

  const toggleProducts = () => {
    setIsProductsOpen(!isProductsOpen);
    // Cerrar submenús al cerrar Productos
    setIsRotatoriosOpen(false);
    setIsEsterilizacionOpen(false);
  };

  const toggleRotatorios = () => {
    setIsRotatoriosOpen(!isRotatoriosOpen);
  };

  const toggleEsterilizacion = () => {
    setIsEsterilizacionOpen(!isEsterilizacionOpen);
  };

  // Bloquear/desbloquear el scroll del body cuando el menú está abierto/cerrado
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Limpiar el estilo al desmontar el componente
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Ian Dental - Equipamiento Odontológico</title>
      </head>
      <body>
        <CartProvider>
          <header>
            <h1>Ian Dental</h1>
            <p>Equipamiento Odontológico</p>
          </header>
          <nav>
            <button
              className="menu-toggle"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              ☰
            </button>
            <ul className={`navbar ${isMenuOpen ? 'active' : ''}`}>
              <li>
                <Link href="/" onClick={closeMenu}>
                  Inicio
                </Link>
              </li>
              <li className="dropdown">
                <span
                  onClick={toggleProducts}
                  className={isProductsOpen ? 'menu-open' : ''}
                >
                  Productos
                </span>
                <ul className={`dropdown-menu ${isProductsOpen ? 'active' : ''}`}>
                  <li>
                    <Link href="/sillones" onClick={closeMenu}>
                      Sillones
                    </Link>
                  </li>
                  <li>
                    <Link href="/compresores" onClick={closeMenu}>
                      Compresores
                    </Link>
                  </li>
                  <li>
                    <Link href="/cavitadores" onClick={closeMenu}>
                      Cavitadores
                    </Link>
                  </li>
                  <li className="dropdown-submenu">
                    <span
                      onClick={toggleRotatorios}
                      className={isRotatoriosOpen ? 'menu-open' : ''}
                    >
                      Rotatorios
                    </span>
                    <ul className={`sidebar-menu ${isRotatoriosOpen ? 'active' : ''}`}>
                      <li>
                        <Link href="/contraangulos" onClick={closeMenu}>
                          Contra Ángulos
                        </Link>
                      </li>
                      <li>
                        <Link href="/piezademano" onClick={closeMenu}>
                          Pieza de Mano
                        </Link>
                      </li>
                      <li>
                        <Link href="/micromotor" onClick={closeMenu}>
                          Micromotor
                        </Link>
                      </li>
                      <li>
                        <Link href="/turbinas" onClick={closeMenu}>
                          Turbinas
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/ducha_bucal" onClick={closeMenu}>
                      Ducha Bucal
                    </Link>
                  </li>
                  <li className="dropdown-submenu">
                    <span
                      onClick={toggleEsterilizacion}
                      className={isEsterilizacionOpen ? 'menu-open' : ''}
                    >
                      Esterilización
                    </span>
                    <ul className={`sidebar-menu ${isEsterilizacionOpen ? 'active' : ''}`}>
                      <li>
                        <Link href="/estufas" onClick={closeMenu}>
                          Estufas
                        </Link>
                      </li>
                      <li>
                        <Link href="/autoclaves" onClick={closeMenu}>
                          Autoclaves
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/lamparas" onClick={closeMenu}>
                      Lámparas
                    </Link>
                  </li>
                  <li>
                    <Link href="/sistema_de_aspiracion" onClick={closeMenu}>
                      Sistema de Aspiración
                    </Link>
                  </li>
                  <li>
                    <Link href="/lavadoras" onClick={closeMenu}>
                      Lavadoras
                    </Link>
                  </li>
                  <li>
                    <Link href="/radiologia" onClick={closeMenu}>
                      Radiología
                    </Link>
                  </li>
                  <li>
                    <Link href="/impresoras_y_fresadoras" onClick={closeMenu}>
                      Impresoras y Fresadoras
                    </Link>
                  </li>
                  <li>
                    <Link href="/insertos_de_ultrasonido" onClick={closeMenu}>
                      Insertos de Ultrasonido
                    </Link>
                  </li>
                  <li>
                    <Link href="/lubricacion" onClick={closeMenu}>
                      Lubricación
                    </Link>
                  </li>
                  <li>
                    <Link href="/motores_de_implante_y_cirugia" onClick={closeMenu}>
                      Motores de Implante y Cirugía
                    </Link>
                  </li>
                  <li>
                    <Link href="/mecanicadental" onClick={closeMenu}>
                      Mecánica Dental
                    </Link>
                  </li>
                  <li>
                    <Link href="/podologia" onClick={closeMenu}>
                      Podología
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/servicios" onClick={closeMenu}>
                  Servicio Técnico
                </Link>
              </li>
              <li>
                <Link href="/nosotros" onClick={closeMenu}>
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/contacto" onClick={closeMenu}>
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>
          {children}
          <CartSidebar />
          <footer>
            <div className="footer-content">
              <div className="footer-item">
                <a
                  href="https://www.google.com/maps/place/Ian+Dental+-+Equipamientos+Odontol%C3%B3gicos/@-38.9382692,-67.993167,17z/data=!4m15!1m8!3m7!1s0x960a30fb77d4c6f9:0xb8746c77f8709b28!2sSarmiento+336,+R8324+Cipolletti,+R%C3%ADo+Negro!3b1!8m2!3d-38.9382692!4d-67.993167!16s%2Fg%2F11q2nj_qy1!3m5!1s0x960a31e8162b670d:0xd8168366d6eb06ce!8m2!3d-38.9382692!4d-67.993167!16s%2Fg%2F11j8lyzwrr?entry=ttu&g_ep=EgoyMDI1MDMyNS4xIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="footer-icon">
                    <Image
                      src="/icons/google-maps-icon.png"
                      alt="Google Maps"
                      width={20}
                      height={20}
                    />
                  </span>
                  <span>
                    Sarmiento 336
                  </span>
                  <span>
                    Cipolletti, Río Negro, Argentina.
                  </span>
                </a>
              </div>
              <div className="footer-item">
                <a href="mailto:roman.boghossian@gmail.com">
                  <span className="footer-icon">
                    <Image
                      src="/icons/email-icon.png"
                      alt="Email"
                      width={20}
                      height={20}
                    />
                  </span>
                  <span>roman.boghossian@gmail.com</span>
                </a>
              </div>
              <div className="footer-item">
                <a href="tel:+549295522990">
                  <span className="footer-icon">
                    <Image
                      src="/icons/phone-icon.png"
                      alt="Teléfono"
                      width={20}
                      height={20}
                    />
                  </span>
                  <span>Info. Ventas:</span>
                  <span>2995522990</span>
                </a>
              </div>
              <div className="footer-item">
                <a href="tel:+5492996228018">
                  <span className="footer-icon">
                    <Image
                      src="/icons/phone-icon.png"
                      alt="Teléfono"
                      width={20}
                      height={20}
                    />
                  </span>
                  <span>Servicio Técnico:</span>
                  <span>2995522990</span>
                </a>
              </div>
              <div className="footer-item">
                <a
                  href="https://www.instagram.com/iandentalarg/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="footer-icon">
                    <Image
                      src="/icons/instagram-icon.png"
                      alt="Instagram"
                      width={20}
                      height={20}
                    />
                  </span>
                  <span>¡Seguinos en Instagram!</span>
                </a>
              </div>
            </div>
            <p>© 2025 Ian Dental - Todos los derechos reservados</p>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}