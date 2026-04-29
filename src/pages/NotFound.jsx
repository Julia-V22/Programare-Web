import { Link } from 'react-router';

function NotFound() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 style={{ fontSize: '72px', color: '#E74C3C' }}>404</h1>
      <h2>Atentie! Pagina nu există.</h2>
      <p>Se pare că ai ajuns într-un loc necunoscut.</p>
      
      <Link 
        to="/" 
        style={{ 
          display: 'inline-block', 
          marginTop: '20px', 
          padding: '10px 20px', 
          backgroundColor: '#3498DB', 
          color: 'white', 
          textDecoration: 'none', 
          borderRadius: '5px' 
        }}
      >
        Înapoi la pagina principală
      </Link>
    </div>
  );
}

export default NotFound;