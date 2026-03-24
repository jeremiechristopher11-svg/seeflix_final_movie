import React, { useState, useMemo } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MediaList from "../components/MediaList";
import { trending_movies } from "../data/trending_movies";
import { top_shows } from "../data/top_shows";

const Media = () => {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  
  // Fusionner les deux tableaux
  const allMedia = [...trending_movies, ...top_shows];
  
  // Filtrer et rechercher
  const filteredMedia = useMemo(() => {
    let filtered = allMedia;
    
    // Filtrer par type
    if (filter !== "all") {
      filtered = filtered.filter(item => item.type === filter);
    }
    
    // Filtrer par recherche
    if (search) {
      filtered = filtered.filter(item => 
        item.title.toLowerCase().includes(search.toLowerCase())
      );
    }
    
    // Trier par titre
    return filtered.sort((a, b) => a.title.localeCompare(b.title));
  }, [filter, search]);
  
  const moviesCount = trending_movies.length;
  const showsCount = top_shows.length;
  
  return (
    <div>
      <Header />
      <main className="media-page" style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '2rem 2rem 4rem 2rem',
        minHeight: 'calc(100vh - 200px)'
      }}>
        {/* Header Section */}
        <div style={{
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: '900',
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            lineHeight: '1.2'
          }}>
            Catalogue complet
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: '#b8b8b8',
            marginBottom: '2rem',
            maxWidth: '600px',
            margin: '0 auto 2rem auto'
          }}>
            Explorez notre collection de {moviesCount} films et {showsCount} séries exceptionnelles
          </p>
        </div>

        {/* Filters and Search */}
        <div style={{
          background: 'linear-gradient(145deg, #1a1a2e, #16213e)',
          padding: '2rem',
          borderRadius: '20px',
          marginBottom: '3rem',
          border: '1px solid rgba(255,255,255,0.1)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
        }}>
          {/* Search Bar */}
          <div style={{
            marginBottom: '1.5rem'
          }}>
            <input
              type="text"
              placeholder="Rechercher un film ou une série..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{
                width: '100%',
                padding: '1rem 1.5rem',
                borderRadius: '15px',
                border: '1px solid rgba(255,255,255,0.2)',
                background: 'rgba(255,255,255,0.05)',
                color: '#fff',
                fontSize: '1.1rem',
                outline: 'none',
                transition: 'all 0.3s ease'
              }}
            />
          </div>

          {/* Filter Buttons */}
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <button
              onClick={() => setFilter("all")}
              style={{
                padding: '0.8rem 2rem',
                borderRadius: '25px',
                border: filter === "all" ? 'none' : '1px solid rgba(255,255,255,0.3)',
                background: filter === "all" 
                  ? 'linear-gradient(135deg, #667eea, #764ba2)' 
                  : 'rgba(255,255,255,0.1)',
                color: '#fff',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                minWidth: '120px'
              }}
            >
              Tous ({allMedia.length})
            </button>
            <button
              onClick={() => setFilter("movie")}
              style={{
                padding: '0.8rem 2rem',
                borderRadius: '25px',
                border: filter === "movie" ? 'none' : '1px solid rgba(255,255,255,0.3)',
                background: filter === "movie" 
                  ? 'linear-gradient(135deg, #667eea, #764ba2)' 
                  : 'rgba(255,255,255,0.1)',
                color: '#fff',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                minWidth: '120px'
              }}
            >
              Films ({moviesCount})
            </button>
            <button
              onClick={() => setFilter("tvshow")}
              style={{
                padding: '0.8rem 2rem',
                borderRadius: '25px',
                border: filter === "tvshow" ? 'none' : '1px solid rgba(255,255,255,0.3)',
                background: filter === "tvshow" 
                  ? 'linear-gradient(135deg, #f093fb, #f5576c)' 
                  : 'rgba(255,255,255,0.1)',
                color: '#fff',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                minWidth: '120px'
              }}
            >
              Séries ({showsCount})
            </button>
          </div>
        </div>

        {/* Results Count */}
        <div style={{
          textAlign: 'center',
          marginBottom: '2rem'
        }}>
          <p style={{
            fontSize: '1.1rem',
            color: '#b8b8b8',
            fontWeight: '500'
          }}>
            {filteredMedia.length} résultat{filteredMedia.length > 1 ? 's' : ''} trouvé{filteredMedia.length > 1 ? 's' : ''}
          </p>
        </div>

        {/* Media List */}
        <MediaList title="" items={filteredMedia} />
      </main>
      <Footer />
    </div>
  );
};

export default Media;
