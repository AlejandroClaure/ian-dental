'use client';

import { useCart } from '../context/CartContext';
import Link from 'next/link';

export default function Carrito() {
  const { cart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity } = useCart();

  const sendCartByEmail = () => {
    if (cart.length === 0) {
      alert('El carrito está vacío.');
      return;
    }

    const cartItems = cart.map((item) => `${item.title} - ${item.description} (Cantidad: ${item.quantity})`).join('\n');
    const subject = encodeURIComponent('Mi Carrito - Ian Dental');
    const body = encodeURIComponent(`Productos en mi carrito:\n\n${cartItems}\n\nGracias por su atención.`);
    window.location.href = `mailto:contacto@iandental.com?subject=${subject}&body=${body}`;
  };

  return (
    <div
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '40px 20px',
        minHeight: 'calc(100vh - 200px)', // Ajustar altura para footer
      }}
    >
      <h2
        style={{
          fontSize: '2rem',
          color: '#2c3e50',
          textAlign: 'center',
          marginBottom: '40px',
          fontWeight: 'bold',
        }}
      >
        Tu Carrito
      </h2>

      {cart.length === 0 ? (
        <div
          style={{
            textAlign: 'center',
            padding: '40px',
            backgroundColor: '#f9f9f9',
            borderRadius: '10px',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
          }}
        >
          <p style={{ fontSize: '1.2rem', color: '#7f8c8d', marginBottom: '20px' }}>
            El carrito está vacío.
          </p>
          <Link href="/sillones">
            <button
              style={{
                backgroundColor: '#3498db',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '1rem',
                transition: 'background-color 0.3s ease',
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = '#2980b9')}
              onMouseLeave={(e) => (e.target.style.backgroundColor = '#3498db')}
            >
              Volver a productos
            </button>
          </Link>
        </div>
      ) : (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '30px',
          }}
        >
          {/* Lista de productos */}
          <div
            style={{
              backgroundColor: '#fff',
              borderRadius: '10px',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
              padding: '20px',
            }}
          >
            {cart.map((item, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '15px 0',
                  borderBottom: index < cart.length - 1 ? '1px solid #ddd' : 'none',
                }}
              >
                <div style={{ flex: '1' }}>
                  <h3 style={{ fontSize: '1.1rem', color: '#2c3e50', margin: '0 0 10px 0' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#7f8c8d', margin: '0 0 10px 0' }}>
                    {item.description}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <button
                      onClick={() => decreaseQuantity(index)}
                      style={{
                        backgroundColor: '#e74c3c',
                        color: 'white',
                        border: 'none',
                        padding: '5px 10px',
                        borderRadius: '3px',
                        cursor: 'pointer',
                        fontSize: '0.9rem',
                        transition: 'background-color 0.3s ease',
                      }}
                      onMouseEnter={(e) => (e.target.style.backgroundColor = '#c0392b')}
                      onMouseLeave={(e) => (e.target.style.backgroundColor = '#e74c3c')}
                    >
                      -
                    </button>
                    <span style={{ fontSize: '1rem', color: '#2c3e50' }}>{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(index)}
                      style={{
                        backgroundColor: '#2ecc71',
                        color: 'white',
                        border: 'none',
                        padding: '5px 10px',
                        borderRadius: '3px',
                        cursor: 'pointer',
                        fontSize: '0.9rem',
                        transition: 'background-color 0.3s ease',
                      }}
                      onMouseEnter={(e) => (e.target.style.backgroundColor = '#27ae60')}
                      onMouseLeave={(e) => (e.target.style.backgroundColor = '#2ecc71')}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(index)}
                  style={{
                    backgroundColor: '#e74c3c',
                    color: 'white',
                    border: 'none',
                    padding: '8px 15px',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    transition: 'background-color 0.3s ease',
                  }}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = '#c0392b')}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = '#e74c3c')}
                >
                  Eliminar
                </button>
              </div>
            ))}
          </div>

          {/* Botones de acción */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: '20px',
              flexWrap: 'wrap',
              marginTop: '20px',
            }}
          >
            <button
              onClick={clearCart}
              style={{
                backgroundColor: '#e74c3c',
                color: 'white',
                border: 'none',
                padding: '12px 25px',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '1rem',
                flex: '1',
                transition: 'background-color 0.3s ease',
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = '#c0392b')}
              onMouseLeave={(e) => (e.target.style.backgroundColor = '#e74c3c')}
            >
              Vaciar carrito
            </button>
            <button
              onClick={sendCartByEmail}
              style={{
                backgroundColor: '#3498db',
                color: 'white',
                border: 'none',
                padding: '12px 25px',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '1rem',
                flex: '1',
                transition: 'background-color 0.3s ease',
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = '#2980b9')}
              onMouseLeave={(e) => (e.target.style.backgroundColor = '#3498db')}
            >
              Enviar por correo
            </button>
            <Link href="/sillones" style={{ flex: '1' }}>
              <button
                style={{
                  backgroundColor: '#7f8c8d',
                  color: 'white',
                  border: 'none',
                  padding: '12px 25px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  width: '100%',
                  transition: 'background-color 0.3s ease',
                }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = '#6c757d')}
                onMouseLeave={(e) => (e.target.style.backgroundColor = '#7f8c8d')}
              >
                Volver a productos
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}