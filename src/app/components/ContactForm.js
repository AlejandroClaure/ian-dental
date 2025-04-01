'use client';

import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Inicializar EmailJS con el Public Key (User_ID)
  useEffect(() => {
    emailjs.init('gfIrkrTZ7cRQviENk'); // Public Key proporcionado
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  //funcion para agregar el mail al final del mensaje
  const fullMessage = `${formData.email}\n${formData.inquiry}\n${cartItems}\n\nAgradezco de antemano su respuesta.\nSaludos cordiales,\n${formData.name}`;

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    // Validación simple
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setIsSubmitting(false);
      return;
    }


    // Enviar el correo usando EmailJS
    try {
      await emailjs.send(
        'service_iandental', // Service_ID proporcionado
        'template_11q7y4n', // Template_ID proporcionado
        {
          message: fullMessage,
        }
      );
    

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error al enviar el correo:', error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section">
      <h2>Contáctanos</h2>
      <p>Envíanos un mensaje y te responderemos lo antes posible.</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Tu nombre"
            required
            disabled={isSubmitting}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Tu email"
            required
            disabled={isSubmitting}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Escribe tu mensaje aquí..."
            required
            disabled={isSubmitting}
          />
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Enviando...' : 'Enviar'}
        </button>
        {status === 'success' && (
          <p className="form-message success">
            ¡Mensaje enviado con éxito! Te contactaremos pronto.
          </p>
        )}
        {status === 'error' && (
          <p className="form-message error">
            Hubo un error al enviar el mensaje. Por favor, completa todos los campos.
          </p>
        )}
      </form>
    </section>
  );
}