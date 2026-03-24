import React from "react";
import "../index.css";

const MediaCard = ({ title, cover, rating, type }) => {
  return (
    <div className="media-card" style={{
      background: 'linear-gradient(145deg, #1a1a2e, #16213e)',
      borderRadius: '16px',
      boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      minWidth: '200px',
      maxWidth: '220px',
      transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      position: 'relative',
      border: '1px solid rgba(255,255,255,0.1)'
    }}>
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <img 
          className="media-card-cover" 
          src={cover} 
          alt={title}
          style={{
            width: '100%',
            height: '280px',
            objectFit: 'cover',
            transition: 'transform 0.6s ease',
            display: 'block'
          }}
        />
        <div style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          background: 'rgba(0,0,0,0.8)',
          backdropFilter: 'blur(10px)',
          padding: '4px 8px',
          borderRadius: '20px',
          display: 'flex',
          alignItems: 'center',
          gap: '4px'
        }}>
          <span style={{ color: '#ffb400', fontSize: '0.9rem', fontWeight: 'bold' }}>⭐</span>
          <span style={{ color: '#fff', fontSize: '0.85rem', fontWeight: '600' }}>{rating}</span>
        </div>
      </div>
      
      <div className="media-card-info" style={{
        padding: '1.2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.8rem',
        flex: 1
      }}>
        <h3 className="media-card-title" style={{
          fontSize: '1rem',
          fontWeight: '700',
          margin: 0,
          color: '#fff',
          lineHeight: '1.3',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden'
        }}>
          {title}
        </h3>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span className={`media-card-type media-card-type-${type}`} style={{
            fontSize: '0.75rem',
            fontWeight: '700',
            padding: '0.3rem 0.8rem',
            borderRadius: '20px',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            background: type === 'movie' 
              ? 'linear-gradient(135deg, #667eea, #764ba2)' 
              : 'linear-gradient(135deg, #f093fb, #f5576c)',
            color: '#fff',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
          }}>
            {type === 'movie' ? 'Film' : 'Série'}
          </span>
          
          <button style={{
            background: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '50%',
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            color: '#fff'
          }}>
            ▶
          </button>
        </div>
      </div>
    </div>
  );
};

export default MediaCard;
