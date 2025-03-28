'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isRotatoriosOpen, setIsRotatoriosOpen] = useState(false);
  const [isEsterilizacionOpen, setIsEsterilizacionOpen] = useState(false);

  return (
    <nav>
      <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
      <ul className={`navbar ${isOpen ? 'active' : ''}`}>
        <li><Link href="/">Inicio</Link></li>
        <li className="dropdown">
          <span>Productos</span>
          <ul className="dropdown-menu">
            <li><Link href="/sillones">Sillones</Link></li>
            <li><Link href="/compresores">Compresores</Link></li>
            <li><Link href="/cavitadores">Cavitadores</Link></li>
            <li className="dropdown side-dropdown">
              <span
                className={isRotatoriosOpen ? 'active' : ''}
                onClick={() => setIsRotatoriosOpen(!isRotatoriosOpen)}
              >
                Rotatorios
              </span>
              <ul className={`dropdown-menu ${isRotatoriosOpen ? 'active' : ''}`}>
                <li><Link href="/contraangulos">Contra Ángulos</Link></li>
                <li><Link href="/piezademano">Pieza de Mano</Link></li>
                <li><Link href="/micromotor">Micromotor</Link></li>
                <li><Link href="/turbinas">Turbinas</Link></li>
              </ul>
            </li>
            <li><Link href="/lamparas">Lámparas</Link></li>
            <li className="dropdown side-dropdown">
              <span
                className={isEsterilizacionOpen ? 'active' : ''}
                onClick={() => setIsEsterilizacionOpen(!isEsterilizacionOpen)}
              >
                Esterilización
              </span>
              <ul className={`dropdown-menu ${isEsterilizacionOpen ? 'active' : ''}`}>
                <li><Link href="/autoclaves">Autoclaves</Link></li>
                <li><Link href="/estufas">Estufas</Link></li>
              </ul>
            </li>
            <li><Link href="/radiologia">Radiología</Link></li>
            <li><Link href="/sistemadeaspiracion">Sistema de Aspiración</Link></li>
            <li><Link href="/lavadoras">Lavadoras</Link></li>
            <li><Link href="/duchabucal">Ducha Bucal</Link></li>
            <li><Link href="/motoresdeimplanteycirugia">Motores de Implante y Cirugía</Link></li>
            <li><Link href="/impresorasfresadoras">Impresoras y Fresadoras</Link></li>
            <li><Link href="/insertosdeultrasonido">Insertos de Ultrasonido</Link></li>
            <li><Link href="/lubricacion">Lubricación</Link></li>
          </ul>
        </li>
        <li><Link href="/marcas">Marcas</Link></li>
        <li><Link href="/servicios">Servicios</Link></li>
        <li><Link href="/nosotros">Nosotros</Link></li>
        <li><Link href="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  );
}