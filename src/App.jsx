import { useState } from 'react';
import Card from './Card';
import QuickNote from './QuickNote';
import TodoList from './TodoList';
import ContactForm from './ContactForm';
import ProjectList from './ProjectList'; // Importăm componenta nouă de la Lab 6

function App() {
  const [count, setCount] = useState(0);

  const projects = [
    { 
      title: "🌐 Aplicație Web", 
      description: "Aplicație web interactivă realizată cu React, folosind componente funcționale.",
      tech: "React, JSX",
      status: "Finalizat"
    },
    { 
      title: "💻 Sisteme de Operare", 
      description: "Implementarea și analiza unor algoritmi de bază pentru gestionarea proceselor.",
      tech: "C++, Linux",
      status: "În lucru"
    },
    { 
      title: "⚡ Electronică Digitală", 
      description: "Proiectarea și simularea circuitelor logice fundamentale.",
      tech: "Verilog",
      status: "Planificat"
    },
  ];

  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <h1 style={{ color: '#4f46e5', margin: 0 }}>Dashboard Julia Vacaru</h1>
        <p style={{ color: '#6b7280' }}>Studentă IESC - Calculatoare | Anul 2</p>
      </header>

      {/* Grid pentru widget-uri (QuickNote & Todo) */}
      <div style={gridStyle}>
        <section style={sectionStyle}><QuickNote /></section>
        <section style={sectionStyle}><TodoList /></section>
      </div>

      <section style={{ ...sectionStyle, marginTop: '20px' }}><ContactForm /></section>

      {/* Exercițiul 5: Contor Stilizat */}
      <div style={counterBoxStyle}>
        <p>Interacțiuni Dashboard: <strong>{count}</strong></p>
        <button onClick={() => setCount(count + 1)} style={buttonStyle}>
          🚀 Incrementare
        </button>
      </div>

      {/* --- LABORATORUL 4: Portofoliu Static --- */}
      <h2 style={titleStyle}>📚 Portofoliu Proiecte (Date Statice - Lab 4)</h2>
      <div style={projectsGridStyle}>
        {projects.map((item, index) => (
          <Card 
            key={index} 
            title={item.title} 
            description={item.description}
            status={item.status}
          />
        ))}
      </div>

      {/* --- LABORATORUL 6: Portofoliu Dinamic --- */}
      <div style={{ marginTop: '50px' }}>
        <ProjectList /> 
      </div>

      <footer style={{ textAlign: 'center', marginTop: '50px', color: '#94a3b8', fontSize: '0.8rem' }}>
        &copy; 2024 Julia Vacaru - Proiect Laborator React
      </footer>
    </div>
  );
}

// Stiluri Inline (Obiecte JS) - Păstrate și optimizate
const containerStyle = { padding: '40px 20px', maxWidth: '900px', margin: '0 auto', fontFamily: 'sans-serif', backgroundColor: '#f0f2f5', minHeight: '100vh' };
const headerStyle = { textAlign: 'center', marginBottom: '40px' };
const gridStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' };
const sectionStyle = { backgroundColor: 'white', padding: '20px', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' };
const counterBoxStyle = { textAlign: 'center', padding: '20px', background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)', borderRadius: '15px', color: 'white', margin: '30px 0' };
const buttonStyle = { padding: '10px 20px', fontWeight: 'bold', border: 'none', borderRadius: '8px', cursor: 'pointer', backgroundColor: 'white', color: '#6366f1' };
const titleStyle = { borderBottom: '2px solid #6366f1', paddingBottom: '10px', color: '#1f2937', marginBottom: '20px' };
const projectsGridStyle = { display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', marginBottom: '40px' };

export default App;