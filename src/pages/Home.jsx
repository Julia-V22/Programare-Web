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
    <div className="fade-in">
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
            <h3>Total proiecte</h3>
            <p>{stats.totalProiecte}</p>
          </div>
          <div style={statsCardStyle}>
            <h3>Finalizate</h3>
            <p>{stats.finalizate}</p>
          </div>
          <div style={statsCardStyle}>
            <h3>În lucru</h3>
            <p>{stats.inLucru}</p>
          </div>
        </div>
      )}
    </div>
  );
}

const statsContainerStyle = {
  display: 'flex',
  gap: '20px',
  flexWrap: 'wrap',
  marginTop: '20px'
};

const statsCardStyle = {
  flex: '1 1 220px',
  backgroundColor: '#f8fafc',
  padding: '20px',
  borderRadius: '16px',
  border: '1px solid #e2e8f0',
  boxShadow: '0 4px 12px rgba(15, 23, 42, 0.08)'
};

export default Home;