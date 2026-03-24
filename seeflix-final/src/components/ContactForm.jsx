import React, { useState } from "react";

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    
    // Soumettre le formulaire via Formspree
    fetch("https://formspree.io/f/maqpzelb", {
      method: "POST",
      body: new FormData(form),
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
        // Masquer le message après 5 secondes
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    }).catch(error => {
      console.error('Erreur:', error);
    });
  };

  if (isSubmitted) {
    return (
      <div style={{
        textAlign: 'center',
        padding: '3rem',
        background: 'linear-gradient(145deg, #1a1a2e, #16213e)',
        borderRadius: '20px',
        border: '1px solid rgba(255,255,255,0.1)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
        marginTop: '2rem'
      }}>
        <div style={{
          fontSize: '3rem',
          marginBottom: '1rem'
        }}>✅</div>
        <h3 style={{
          fontSize: '1.5rem',
          fontWeight: '700',
          color: '#fff',
          marginBottom: '0.5rem'
        }}>
          Message bien reçu !
        </h3>
        <p style={{
          fontSize: '1.1rem',
          color: '#b8b8b8',
          lineHeight: '1.6'
        }}>
          Merci pour votre message. Nous vous répondrons dans les plus brefs délais.
        </p>
      </div>
    );
  }

  return (
    <form 
      className="contact-form" 
      style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginTop: '2rem' }}
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="name">Nom</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={5} required />
      </div>
      <button type="submit">
        Envoyer
      </button>
    </form>
  );
};

export default ContactForm;
