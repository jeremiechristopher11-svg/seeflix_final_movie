

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const backgroundImages = [
  new URL("/src/assets/movie_covers/Avatar.jpg", import.meta.url).href,
  new URL("/src/assets/movie_covers/Avengers_Endgame.webp", import.meta.url).href,
  new URL("/src/assets/movie_covers/Inception.jpg", import.meta.url).href,
  new URL("/src/assets/movie_covers/Interstellar.webp", import.meta.url).href,
  new URL("/src/assets/movie_covers/The_Dark_Knight.webp", import.meta.url).href,
  new URL("/src/assets/movie_covers/BAD_BOYS.jpg", import.meta.url).href,
  new URL("/src/assets/movie_covers/BLOOD_AND_WATER.jpg", import.meta.url).href,
  new URL("/src/assets/movie_covers/SISTAS.jpg", import.meta.url).href,
  new URL("/src/assets/movie_covers/WICKEDCITY.jpg", import.meta.url).href,
  new URL("/src/assets/movie_covers/finding.jpg", import.meta.url).href
];

const Navbar = () => (
  <nav className="navbar" style={{
    width: '100%',
    background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
    padding: '1rem 0',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1000,
    boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid rgba(255,255,255,0.1)'
  }}>
    <div style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      width: '100%', 
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '0 2rem'
    }}>
      <div style={{ 
        fontWeight: 'bold', 
        fontSize: '1.5rem', 
        color: '#fff', 
        letterSpacing: '0.04em',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
      }}>
        <span style={{
          width: '8px',
          height: '8px',
          background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
          borderRadius: '50%',
          display: 'inline-block'
        }}></span>
        Seeflix
      </div>
      <ul className="navbar-list" style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '3rem',
        margin: 0,
        padding: 0,
        listStyle: 'none',
        fontWeight: '600',
        fontSize: '1rem',
        letterSpacing: '0.03em'
      }}>
        <li className="navbar-item">
          <Link to="/" style={{ 
            color: '#fff', 
            textDecoration: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '8px',
            transition: 'all 0.3s ease',
            position: 'relative'
          }}>Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/media" style={{ 
            color: '#fff', 
            textDecoration: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '8px',
            transition: 'all 0.3s ease',
            position: 'relative'
          }}>Media</Link>
        </li>
        <li className="navbar-item">
          <Link to="/about" style={{ 
            color: '#fff', 
            textDecoration: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '8px',
            transition: 'all 0.3s ease',
            position: 'relative'
          }}>About</Link>
        </li>
        <li className="navbar-item">
          <Link to="/contact" style={{ 
            color: '#fff', 
            textDecoration: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '8px',
            transition: 'all 0.3s ease',
            position: 'relative'
          }}>Contact</Link>
        </li>
      </ul>
      <div style={{
        width: '120px',
        display: 'flex',
        justifyContent: 'flex-end'
      }}>
        <button style={{
          background: 'rgba(255,255,255,0.1)',
          border: '1px solid rgba(255,255,255,0.2)',
          color: '#fff',
          padding: '0.5rem 1rem',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '0.9rem',
          transition: 'all 0.3s ease'
        }}>
          Sign In
        </button>
      </div>
    </div>
  </nav>
);

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!isHome) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isHome]);

  return (
    <header className="header" style={{ paddingTop: '5rem' }}>
      <Navbar />
      {isHome && (
        <section className="hero" style={{
          position: 'relative',
          height: '100vh',
          minHeight: '600px',
          overflow: 'hidden',
          marginTop: '0',
          marginBottom: '0'
        }}>
          {/* Background Image Carousel */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
              backgroundSize: '100% 100%',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              transition: 'opacity 1s ease-in-out',
              opacity: 1
            }}></div>
            {/* Dark Overlay */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'linear-gradient(135deg, rgba(15,12,41,0.3) 0%, rgba(48,43,99,0.2) 50%, rgba(36,36,62,0.3) 100%)',
              zIndex: 2
            }}></div>
          </div>
          
          {/* Content */}
          <div style={{
            position: 'relative',
            zIndex: 3,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: '0 2rem'
          }}>
            <h1 className="hero-title" style={{
              fontSize: '3.5rem',
              fontWeight: '900',
              marginBottom: '1.5rem',
              color: '#fff',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: '1.2'
            }}>
              Discover the best movies and series to stream
            </h1>
            <p className="hero-subtitle" style={{
              fontSize: '1.4rem',
              color: '#b8b8b8',
              marginBottom: '2.5rem',
              maxWidth: '600px',
              lineHeight: '1.6'
            }}>
              Explore the trends and find your next favorite
            </p>
            {/* Search Input */}
            <div style={{ marginBottom: '2.5rem', width: '100%', maxWidth: '400px' }}>
              <input
                type="text"
                placeholder="Search movies or shows..."
                style={{
                  padding: '0.9rem 1.5rem',
                  borderRadius: '50px',
                  border: 'none',
                  fontSize: '1.1rem',
                  width: '100%',
                  background: 'rgba(255,255,255,0.1)',
                  color: '#fff',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                  backdropFilter: 'blur(10px)',
                  textAlign: 'center'
                }}
              />
            </div>
            <button className="hero-cta" style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: '#fff',
              border: 'none',
              borderRadius: '50px',
              padding: '1rem 3rem',
              fontSize: '1.2rem',
              fontWeight: '700',
              cursor: 'pointer',
              boxShadow: '0 8px 30px rgba(102, 126, 234, 0.4)',
              transition: 'all 0.3s ease',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              Start Now
            </button>
          </div>
        </section>
      )}
    </header>
  );
};

export default Header;
