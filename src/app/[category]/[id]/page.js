'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '../../context/CartContext';
import { getProductById } from '../../lib/data';
import React from 'react';

export default function ProductDetail({ params: paramsPromise }) {
  const { addToCart } = useCart();
  const params = React.use(paramsPromise);
  const product = getProductById(params.category, params.id);

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="product-detail">
      <div className="product-container">
        <div className="product-image">
          <Image
            src={product.image}
            alt={product.title}
            width={300}
            height={300}
            layout="responsive"
            priority
          />
        </div>
        <div className="product-info">
          <h2>{product.title}</h2>
          <h3>Características:</h3>
          <p>{product.description || 'Descripción no disponible.'}</p>
          <div className="product-buttons">
            <Link href={`/${params.category}`}>
              <button className="back-btn">Volver</button>
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
    </div>
  );
}