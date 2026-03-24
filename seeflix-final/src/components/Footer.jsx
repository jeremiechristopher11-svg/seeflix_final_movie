import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="footer" style={{
    background: '#181828',
    padding: '2rem 0',
    marginTop: '3rem',
    color: '#fff'
  }}>
    <div className="footer-content" style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
      <div style={{ fontWeight: 'bold', fontSize: '1.3rem', marginBottom: '1rem', letterSpacing: '0.04em' }}>Seeflix</div>
      <nav className="footer-nav" style={{ display: 'flex', justifyContent: 'center', gap: '2.5rem', margin: '1rem 0 0 0' }}>
        <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Home</Link>
        <Link to="/media" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Media</Link>
        <Link to="/about" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>About</Link>
        <Link to="/contact" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Contact</Link>
      </nav>
      <div className="footer-copy" style={{ textAlign: 'center', width: '100%', marginTop: '1rem', color: '#fff' }}>© 2025 Seeflix. All rights reserved.</div>
    </div>
  </footer>
);

export default Footer;
