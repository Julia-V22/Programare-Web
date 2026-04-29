import React from 'react';

function About() {
  return (
    <div className="about-page" style={{
      maxWidth: '1000px',
      margin: '20px auto',
      padding: '40px',
      backgroundColor: '#1a252f', 
      borderRadius: '24px',
      color: '#ffffff',
      textAlign: 'left',
      boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
    }}>
      
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '40px',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        
        {/* SECȚIUNE POZĂ */}
        <div style={{ flex: '1', minWidth: '280px', display: 'flex', justifyContent: 'center' }}>
          <div style={{
            width: '250px',
            height: '320px',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
            border: '3px solid #FF7733',
            backgroundColor: '#2c3e50' 
          }}>
            <img 
              src="/poza.jpeg" // Asigură-te că ai poza în folderul 'public'
              alt="Julia" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={(e) => e.target.style.display = 'none'} // Ascunde imaginea dacă lipsește link-ul
            />
          </div>
        </div>

        {/* SECȚIUNE TEXT */}
        <div style={{ flex: '2', minWidth: '300px' }}>
          <h1 style={{ color: '#FF7733', fontSize: '2.8rem', marginBottom: '10px', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
            Bună, sunt Julia! 
          </h1>
          <h3 style={{ color: '#FF7733', opacity: '0.9', fontWeight: '500', marginBottom: '20px' }}>
            Studentă în anul II @ IESC Calculatoare, UniTBV
          </h3>
          
          <p style={{ lineHeight: '1.7', fontSize: '1.15rem', color: '#ecf0f1', marginBottom: '15px' }}>
            Sunt o persoană deschisă, sociabilă și mereu dornică să leg prietenii noi. 
            Îmi place să explorez lumea din jurul meu, fie că este vorba de oameni, 
            tehnologie sau natură.
          </p>
          
          <p style={{ lineHeight: '1.7', fontSize: '1.15rem', color: '#ecf0f1' }}>
            Pasiunea mea pentru <strong>programare</strong> crește cu fiecare rând de cod scris 
            și îmi doresc cu entuziasm să îmi construiesc un viitor solid în acest domeniu fascinant.
          </p>
        </div>
      </div>

      <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid rgba(255,119,51,0.2)' }} />

      {/* SECȚIUNE HOBBY-URI */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
        gap: '20px' 
      }}>
        <div style={hobbyCardStyle}>
          <h4 style={{ color: '#FF7733', marginBottom: '10px' }}>⛰️ Drumeții</h4>
          <p style={{ color: '#bdc3c7' }}>Ador muntele și timpul petrecut în natură pentru a-mi reîncărca bateriile.</p>
        </div>
        <div style={hobbyCardStyle}>
          <h4 style={{ color: '#FF7733', marginBottom: '10px' }}>🍰 Gastronomie</h4>
          <p style={{ color: '#bdc3c7' }}>Mă relaxez gătind pentru cei dragi, mai ales când vine vorba de dulciuri.</p>
        </div>
        <div style={hobbyCardStyle}>
          <h4 style={{ color: '#FF7733', marginBottom: '10px' }}>✨ Socializare</h4>
          <p style={{ color: '#bdc3c7' }}>Timpul de calitate cu persoanele apropiate este esențial pentru mine.</p>
        </div>
        <div style={hobbyCardStyle}>
          <h4 style={{ color: '#FF7733', marginBottom: '10px' }}>🧠 Evoluție</h4>
          <p style={{ color: '#bdc3c7' }}>Învățarea continuă este motorul meu, fie că e vorba de cod sau curiozități.</p>
        </div>
      </div>
    </div>
  );
}

const hobbyCardStyle = {
  background: '#2c3e50', // Carduri mai închise pentru contrast
  padding: '25px',
  borderRadius: '18px',
  textAlign: 'center',
  border: '1px solid rgba(255, 119, 51, 0.3)',
  boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
};

export default About;