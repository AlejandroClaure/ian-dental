'use client';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import Link from 'next/link';
import emailjs from '@emailjs/browser';

export default function Carrito() {
  const { cart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity } = useCart();
  
  // State for form visibility and form data
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    inquiry: 'Estimado equipo de Ian Dental,\n\nMe pongo en contacto para consultar sobre los precios de los siguientes productos en mi carrito. A continuación, detallo los ítems:\n\n',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission with Email.js
  const sendCartByEmail = (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      alert('El carrito está vacío.');
      return;
    }

    if (!formData.email) {
      alert('Por favor, ingrese su correo electrónico.');
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    // Format cart items
    const cartItems = cart
      .map((item) => `${item.title} - ${item.description} (Cantidad: ${item.quantity})`)
      .join('\n');
    
    // Combine inquiry with cart items
    const fullMessage = `${formData.inquiry}\n${cartItems}\n\nAgradezco de antemano su respuesta.\nSaludos cordiales,\n[Su Nombre]`;

    // Email.js parameters
    const emailParams = {
      from_email: formData.email,
      to_email: 'contacto@iandental.com',
      subject: 'Consulta de Precios - Ian Dental',
      message: fullMessage,
    };

    // Replace with your Email.js service ID, template ID, and public key
    emailjs
      .send('service_iandental', 'template_11q7y4n', emailParams, 'gfIrkrTZ7cRQviENk')
      .then(
        (result) => {
          setSubmitMessage('¡Correo enviado exitosamente! Nos pondremos en contacto pronto.');
          setShowForm(false);
          setFormData({
            email: '',
            inquiry: 'Estimado equipo de Ian Dental,\n\nMe pongo en contacto para consultar sobre los precios de los siguientes productos en mi carrito. A continuación, detallo los ítems:\n\n',
          });
        },
        (error) => {
          setSubmitMessage('Error al enviar el correo. Por favor, intente de nuevo.');
          console.error('Email.js error:', error);
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '40px 20px',
        minHeight: 'calc(100vh - 200px)',
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
              onClick={() => setShowForm(true)}
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
                Volver a inicio
              </button>
            </Link>
          </div>

          {/* Formulario para enviar correo */}
          {showForm && (
            <div
              style={{
                position: 'fixed',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: '1000',
              }}
            >
              <div
                style={{
                  backgroundColor: '#fff',
                  padding: '30px',
                  borderRadius: '10px',
                  width: '90%',
                  maxWidth: '500px',
                  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
                  position: 'relative',
                }}
              >
                <button
                  onClick={() => setShowForm(false)}
                  style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    background: 'none',
                    border: 'none',
                    fontSize: '1.2rem',
                    cursor: 'pointer',
                    color: '#e74c3c',
                  }}
                >
                  ✕
                </button>
                <h3 style={{ fontSize: '1.5rem', color: '#2c3e50', marginBottom: '20px' }}>
                  Consulta de Precios
                </h3>
                <form onSubmit={sendCartByEmail}>
                  <div style={{ marginBottom: '20px' }}>
                    <label
                      htmlFor="email"
                      style={{ display: 'block', fontSize: '1rem', color: '#2c3e50', marginBottom: '5px' }}
                    >
                      Correo Electrónico (obligatorio)
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: '10px',
                        borderRadius: '5px',
                        border: '1px solid #ddd',
                        fontSize: '1rem',
                      }}
                    />
                  </div>
                  <div style={{ marginBottom: '20px' }}>
                    <label
                      htmlFor="inquiry"
                      style={{ display: 'block', fontSize: '1rem', color: '#2c3e50', marginBottom: '5px' }}
                    >
                      Consulta
                    </label>
                    <textarea
                      id="inquiry"
                      name="inquiry"
                      value={formData.inquiry}
                      onChange={handleInputChange}
                      rows="6"
                      style={{
                        width: '100%',
                        padding: '10px',
                        borderRadius: '5px',
                        border: '1px solid #ddd',
                        fontSize: '1rem',
                        resize: 'none',
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      backgroundColor: isSubmitting ? '#7f8c8d' : '#3498db',
                      color: 'white',
                      border: 'none',
                      padding: '12px 25px',
                      borderRadius: '5px',
                      cursor: isSubmitting ? 'not-allowed' : 'pointer',
                      fontSize: '1rem',
                      width: '100%',
                      transition: 'background-color 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      if (!isSubmitting) e.target.style.backgroundColor = '#2980b9';
                    }}
                    onMouseLeave={(e) => {
                      if (!isSubmitting) e.target.style.backgroundColor = '#3498db';
                    }}
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar Consulta'}
                  </button>
                </form>
                {submitMessage && (
                  <p
                    style={{
                      marginTop: '15px',
                      color: submitMessage.includes('Error') ? '#e74c3c' : '#2ecc71',
                      textAlign: 'center',
                    }}
                  >
                    {submitMessage}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}