import React from 'react';

function Home() {
  return (
    <div className="fade-in">
      <h1 style={{ fontSize: '4rem', marginBottom: '10px' }}>
        Salut, sunt <span className="highlight">Julia</span>
      </h1>
      
      <h2 style={{ 
        color: '#FF7733', 
        fontWeight: '500',
        fontSize: '2rem',
        margin: '0'
      }}>
        Studentă @ IESC Calculatoare, UniTBV
      </h2>
    </div>
  );
}

export default Home;