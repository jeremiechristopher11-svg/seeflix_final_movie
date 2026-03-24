import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div>
      <Header />
      <div style={{ color: '#fff', padding: '2rem', maxWidth: 600, margin: '0 auto' }}>
        <h1>Contact</h1>
        <p>Pour toute question, suggestion ou demande de partenariat, veuillez remplir le formulaire ci-dessous :</p>
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
