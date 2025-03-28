'use client';

import { useCart } from '../context/CartContext';
import Link from 'next/link';

export default function CartSidebar() {
  const {
    cart,
    showCart,
    toggleCart,
    alertMessage,
    removeFromCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const headerHeight = 120; // Ajustado según la altura del header (5rem) + nav (2.5rem) + margen

  return (
    <>
      {/* Alerta en la esquina superior derecha */}
      {alertMessage && (
        <div className="cart-alert">
          {alertMessage}
        </div>
      )}

      {/* Carrito desplegable */}
      <div
        className={`cart-sidebar ${showCart ? 'open' : ''}`}
        style={{
          top: `${headerHeight}px`,
          height: `calc(100vh - ${headerHeight}px)`,
        }}
      >
        <div className="cart-header">
          <h2>Carrito</h2>
          <button onClick={toggleCart} className="cart-close-button">
            ✕
          </button>
        </div>
        {cart.length === 0 ? (
          <p className="cart-empty">El carrito está vacío.</p>
        ) : (
          <>
            <ul className="cart-items">
              {cart.map((item, index) => (
                <li key={index} className="cart-item">
                  <div className="cart-item-details">
                    <span>{item.title}</span>
                    <div className="cart-item-quantity">
                      <button onClick={() => decreaseQuantity(index)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => increaseQuantity(index)}>+</button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(index)}
                    className="cart-item-remove"
                  >
                    Eliminar
                  </button>
                </li>
              ))}
            </ul>
            <div className="cart-footer">
              <button onClick={clearCart} className="cart-clear-button">
                Vaciar carrito
              </button>
              <Link href="/carrito">
                <button className="cart-view-full">Ver carrito completo</button>
              </Link>
            </div>
          </>
        )}
      </div>

      {/* Botón para abrir el carrito en el header */}
      <button onClick={toggleCart} className="cart-toggle-button">
        🛒 ({cart.length})
      </button>
    </>
  );
}