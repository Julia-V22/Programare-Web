import { useState, useEffect } from 'react';
import Card from './Card';

function ProjectList() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    // Simulăm o întârziere de rețea de 800ms
    setTimeout(() => {
      fetch('/data/projects.json')
        .then(res => {
          if (!res.ok) throw new Error('Fișierul nu a fost găsit!');
          return res.json();
        })
        .then(data => {
          setProjects(data.projects);
          setLoading(false);
        })
        .catch(err => {
          setError(err.message);
          setLoading(false);
        });
    }, 800);
  }, []);

  // Ex 3: Filtrare inteligentă
  const filtered = projects.filter(p => 
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    p.tech.toLowerCase().includes(search.toLowerCase())
  );

  // Ex 4: Statistici calculate din mers
  const total = projects.length;
  const finished = projects.filter(p => p.done).length;
  const inProgress = total - finished;

  if (loading) return <div style={msgStyle}>⏳ Se conectează la baza de date...</div>;
  if (error) return <div style={{...msgStyle, color: '#ef4444'}}>❌ Eroare: {error}</div>;

  return (
    <div style={containerStyle}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2 style={{ color: '#1e293b', margin: 0 }}>📂 Portofoliu Proiecte</h2>
        <div style={badgeStyle}>{total} Total</div>
      </header>

      {/* Ex 3: Search Bar Modern */}
      <div style={{ position: 'relative', marginBottom: '25px' }}>
        <input 
          type="text"
          placeholder="Caută după titlu sau tehnologie (ex: React)..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={searchStyle}
        />
      </div>

      {/* Grid de Carduri */}
      <div style={gridStyle}>
        {filtered.map(p => (
          <Card 
            key={p.id}
            title={p.title}
            description={p.tech}
            status={p.done ? "Finalizat" : "În lucru"}
            // Putem trimite culori diferite pentru status direct în props dacă Card le suportă
          />
        ))}
      </div>

      {/* Ex 4: Panou Statistici Stilizat */}
      <div style={statsPanelStyle}>
        <div style={statItem}><strong>Total:</strong> {total}</div>
        <div style={{...statItem, color: '#16a34a'}}><strong>✅ Finalizate:</strong> {finished}</div>
        <div style={{...statItem, color: '#ca8a04'}}><strong>⏳ În lucru:</strong> {inProgress}</div>
      </div>
    </div>
  );
}

// --- Stiluri pentru aspect profesional ---
const containerStyle = { padding: '25px', backgroundColor: '#ffffff', borderRadius: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' };
const searchStyle = { width: '100%', padding: '12px 15px', borderRadius: '12px', border: '2px solid #e2e8f0', outline: 'none', fontSize: '1rem', transition: 'border-color 0.3s' };
const gridStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' };
const statsPanelStyle = { marginTop: '30px', padding: '15px', backgroundColor: '#f8fafc', borderRadius: '12px', display: 'flex', justifyContent: 'space-around', border: '1px solid #e2e8f0' };
const statItem = { fontSize: '0.95rem', fontWeight: '600', color: '#475569' };
const badgeStyle = { backgroundColor: '#4f46e5', color: 'white', padding: '5px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold' };
const msgStyle = { textAlign: 'center', padding: '50px', fontSize: '1.2rem', fontWeight: 'bold', color: '#64748b' };

export default ProjectList;