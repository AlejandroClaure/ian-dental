'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '../context/CartContext';
import { getCategoryData } from '../lib/data';
import React from 'react';

export default function Category({ params: paramsPromise }) {
  const { addToCart } = useCart();
  const params = React.use(paramsPromise);
  const products = getCategoryData(params.category);

  if (products.length === 0) {
    return <div>Categoría no encontrada</div>;
  }
// Función para formatear el nombre de la categoría
const formatCategoryName = (category) => {
  return category
    .replace(/_/g, ' ') // Reemplaza todos los "_" por espacios
    .split(' ') // Divide en palabras
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitaliza cada palabra
    .join(' '); // Une las palabras con espacios
};
  return (
    <div className="category-page">
      <h1>{formatCategoryName(params.category)}</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image-container">
              <Image
                src={product.image}
                alt={product.title}
                width={180}
                height={180}
                style={{ objectFit: 'cover', width: 'auto', height: 'auto' }}
              />
            </div>
            <div className="product-card-content">
              <h2>{product.title}</h2>
              <div className="product-buttons">
                <Link href={`/${params.category}/${product.id}`}>
                  <button className="view-more">Ver más</button>
                </Link>
                <button
                  className="add-to-cart"
                  onClick={() => addToCart(product)}
                >
                  Añadir al carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}