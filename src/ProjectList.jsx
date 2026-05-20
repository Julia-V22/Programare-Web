import { useState, useEffect } from 'react';
import AddProject from './AddProject';
import Card from './Card';

function ProjectList() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  // State care reține ID-ul proiectului aflat în editare (sau null dacă nu este niciunul)
  const [editingId, setEditingId] = useState(null);
  // State pentru titlul din formularul de editare
  const [editTitle, setEditTitle] = useState('');
  // State pentru tehnologia din formularul de editare
  const [editTech, setEditTech] = useState('');

  useEffect(() => {
fetch('http://localhost:3000/api/projects')
      .then(res => {
        if (!res.ok) throw new Error('Eroare la conectarea cu serverul!');
        return res.json();
      })
      .then(data => {
        setProjects(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleProjectAdded = (newProject) => {
    setProjects([...projects, newProject]);
  };

  // Exercițiul 3: Confirmare înainte de ștergere
  const handleDelete = async (id) => {
    if (window.confirm('Sigur doriti sa stergeti acest proiect?')) {
      try {
        const response = await fetch(`http://localhost:3000/api/projects/${id}`, {
          method: 'DELETE',
        });

        if (!response.ok) throw new Error('Eroare la ștergere!');

        // Actualizăm starea locală
        setProjects(projects.filter(p => p._id !== id));
      } catch (err) {
        console.error('Eroare la ștergere:', err);
        alert("Nu s-a putut șterge proiectul!");
      }
    }
  };

  // Trimite fetch PUT pentru a inversa valoarea campului `done` și actualizează proiectul în state
  const handleToggle = async (id, currentDone) => {
    try {
      const response = await fetch('http://localhost:3000/api/projects/' + id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ done: !currentDone })
      });

      if (!response.ok) {
        throw new Error('Eroare la actualizarea proiectului');
      }

      const updatedProject = await response.json();
      setProjects(projects.map(p => p._id === id ? updatedProject : p));
    } catch (err) {
      console.error('Error toggling project status:', err);
    }
  };

  // Setează proiectul curent pentru editare și populează input-urile cu valorile existente
  const handleEdit = (project) => {
    setEditingId(project._id);
    setEditTitle(project.title);
    setEditTech(project.tech);
  };

  // Resetează starea de editare când utilizatorul apasă Anulează
  const handleCancelEdit = () => {
    setEditingId(null);
    setEditTitle('');
    setEditTech('');
  };

  // Salvează modificările proiectului printr-un fetch PUT și actualizează state-ul local
  const handleSaveEdit = async () => {
    if (!editingId) return;

    try {
      const response = await fetch('http://localhost:3000/api/projects/' + editingId, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title: editTitle, tech: editTech })
      });

      if (!response.ok) {
        throw new Error('Eroare la actualizarea proiectului');
      }

      const updatedProject = await response.json();
      setProjects(projects.map(p => p._id === editingId ? updatedProject : p));
      handleCancelEdit();
    } catch (err) {
      console.error('Error saving edited project:', err);
      alert('Nu s-a putut salva proiectul.');
    }
  };

  // Filtrare inteligentă 
  const filtered = projects.filter(p => 
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    p.tech.toLowerCase().includes(search.toLowerCase())
  );

  // Statistici calculate 
  const total = projects.length;
  const finished = projects.filter(p => p.done).length;
  const inProgress = total - finished;

  if (loading) return <div style={msgStyle}>⏳ Se încarcă datele din MongoDB...</div>;
  if (error) return <div style={{...msgStyle, color: '#ef4444'}}>❌ Eroare: {error}</div>;

  return (
    <div style={containerStyle}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2 style={{ color: '#1e293b', margin: 0 }}>📂 Portofoliu Proiecte (Full Stack)</h2>
        <div style={badgeStyle}>{total} Total</div>
      </header>

      {/* Formularul de adăugare */}
             <AddProject onProjectAdded={handleProjectAdded} />
      {/*Search Bar */}
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
          p._id === editingId ? (
            // Afișăm formularul de editare în locul cardului când acest proiect este în editare
            <div key={p._id} style={editCardStyle}>
              <h3 style={{ color: '#1d4ed8', margin: 0 }}>✏️ Editare Proiect</h3>
              <label style={editLabelStyle}>
                Titlu
                <input
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  style={editInputStyle}
                />
              </label>
              <label style={editLabelStyle}>
                Tehnologie
                <input
                  value={editTech}
                  onChange={(e) => setEditTech(e.target.value)}
                  style={editInputStyle}
                />
              </label>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '10px' }}>
                <button
                  onClick={handleSaveEdit}
                  style={saveButtonStyle}
                >
                  Salvează
                </button>
                <button
                  onClick={handleCancelEdit}
                  style={cancelButtonStyle}
                >
                  Anulează
                </button>
              </div>
            </div>
          ) : (
            <Card 
              key={p._id} 
              id={p._id}
              title={p.title}
              description={p.tech}
              status={p.done ? "Finalizat" : "În lucru"}
              onDelete={handleDelete}
              onToggle={() => handleToggle(p._id, p.done)}
              onEdit={() => handleEdit(p)}
            />
          )
        ))}
      </div>

      {/* Panou Statistici */}
      <div style={statsPanelStyle}>
        <div style={statItem}><strong>Total:</strong> {total}</div>
        <div style={{...statItem, color: '#16a34a'}}><strong>✅ Finalizate:</strong> {finished}</div>
        <div style={{...statItem, color: '#ca8a04'}}><strong>⏳ În lucru:</strong> {inProgress}</div>
      </div>
    </div>
  );
}

// --- Stiluri ---
const containerStyle = { padding: '25px', backgroundColor: '#ffffff', borderRadius: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' };
const searchStyle = { width: '100%', padding: '12px 15px', borderRadius: '12px', border: '2px solid #e2e8f0', outline: 'none', fontSize: '1rem', transition: 'border-color 0.3s' };
const gridStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' };
const statsPanelStyle = { marginTop: '30px', padding: '15px', backgroundColor: '#f8fafc', borderRadius: '12px', display: 'flex', justifyContent: 'space-around', border: '1px solid #e2e8f0' };
const statItem = { fontSize: '0.95rem', fontWeight: '600', color: '#475569' };
const badgeStyle = { backgroundColor: '#4f46e5', color: 'white', padding: '5px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold' };
const editCardStyle = { backgroundColor: '#f8fafc', borderRadius: '16px', padding: '20px', width: '100%', boxShadow: '0 4px 12px rgba(15, 23, 42, 0.08)', border: '1px solid #cbd5e1' };
const editLabelStyle = { display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '15px', color: '#334155', fontWeight: '600', fontSize: '0.95rem' };
const editInputStyle = { width: '100%', padding: '10px 12px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '0.95rem', outline: 'none' };
const saveButtonStyle = { backgroundColor: '#16a34a', color: 'white', border: 'none', padding: '10px 15px', borderRadius: '10px', cursor: 'pointer', fontWeight: '700' };
const cancelButtonStyle = { backgroundColor: '#e2e8f0', color: '#0f172a', border: 'none', padding: '10px 15px', borderRadius: '10px', cursor: 'pointer', fontWeight: '700' };
const msgStyle = { textAlign: 'center', padding: '50px', fontSize: '1.2rem', fontWeight: 'bold', color: '#64748b' };

export default ProjectList;