import React, { useState, useEffect } from 'react';

function Home() {
  const [stats, setStats] = useState({ totalProiecte: 0, finalizate: 0, inLucru: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Exercițiul 4: încărcăm statistici live de la backend
    fetch('http://localhost:3000/api/stats')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Eroare la încărcarea statisticilor');
        }
        return res.json();
      })
      .then((data) => {
        setStats(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="page-container fade-in" style={homeContainerStyle}>
      <h1 style={{ fontSize: '4rem', marginBottom: '10px' }}>
        Salut, sunt <span className="highlight">Julia</span>
      </h1>

      <h2 style={{ 
        color: '#FF7733', 
        fontWeight: '500',
        fontSize: '2rem',
        margin: '0 0 30px 0'
      }}>
        Studentă @ IESC Calculatoare, UniTBV
      </h2>

      {/* Afișăm statisticile live încărcate de la server */}
      {loading ? (
        <p>Încărcare statistici...</p>
      ) : error ? (
        <p style={{ color: 'red' }}>Eroare: {error}</p>
      ) : (
        <div style={statsContainerStyle}>
          <div style={statsCardStyle}>
            <h3 style={statsTitleStyle}>Total proiecte</h3>
            <p style={statsValueStyle}>{stats.totalProiecte}</p>
          </div>
          <div style={statsCardStyle}>
            <h3 style={statsTitleStyle}>Finalizate</h3>
            <p style={statsValueStyle}>{stats.finalizate}</p>
          </div>
          <div style={statsCardStyle}>
            <h3 style={statsTitleStyle}>În lucru</h3>
            <p style={statsValueStyle}>{stats.inLucru}</p>
          </div>
        </div>
      )}
    </div>
  );
}

const homeContainerStyle = {
  width: '100%',
  maxWidth: '1000px',
  padding: '40px',
  borderRadius: '32px',
  backgroundColor: 'rgba(15, 23, 42, 0.95)',
  border: '1px solid rgba(255, 255, 255, 0.08)',
  boxShadow: '0 24px 60px rgba(0, 0, 0, 0.35)'
};

const statsContainerStyle = {
  display: 'flex',
  gap: '20px',
  flexWrap: 'wrap',
  marginTop: '20px'
};

const statsCardStyle = {
  flex: '1 1 220px',
  backgroundColor: '#111827',
  color: 'white',
  padding: '24px',
  borderRadius: '22px',
  border: '1px solid rgba(255, 255, 255, 0.12)',
  boxShadow: '0 18px 45px rgba(0, 0, 0, 0.25)'
};

const statsTitleStyle = {
  margin: 0,
  fontSize: '1.05rem',
  color: '#f8fafc',
  opacity: 0.8
};

const statsValueStyle = {
  margin: '20px 0 0 0',
  fontSize: '2.7rem',
  fontWeight: '800',
  color: '#f8fafc'
};

export default Home;