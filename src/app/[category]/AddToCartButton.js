'use client';

export default function AddToCartButton({ product }) {
    return (
        <button
            className="add-to-cart"
            onClick={() => alert(`Producto "${product.title}" agregado al carrito`)}
        >
            Agregar al Carrito
        </button>
    );
}