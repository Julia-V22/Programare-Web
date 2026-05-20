import { useState } from 'react';

function AddProject({ onProjectAdded }) {
  const [title, setTitle] = useState('');
  const [tech, setTech] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !tech) return alert("Completează ambele câmpuri!");

    try {
        // Fetch cu method: 'POST' către API
      const response = await fetch('http://localhost:3000/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, tech, done: false }),
      });

      if (!response.ok) throw new Error('Eroare la salvare!');

      const newProject = await response.json();
      
      // Trimitem proiectul nou înapoi la lista din ProjectList
      onProjectAdded(newProject);
      
      // Resetăm câmpurile formularului
      setTitle('');
      setTech('');
    } catch (err) {
      console.error('Eroare:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <input 
        placeholder="Titlu proiect ..." 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        style={inputStyle}
      />
      <input 
        placeholder="Tehnologii (ex: React)..." 
        value={tech} 
        onChange={(e) => setTech(e.target.value)} 
        style={inputStyle}
      />
      <button type="submit" style={buttonStyle}>Adaugă</button>
    </form>
  );
}

// Stiluri 
const formStyle = { display: 'flex', gap: '10px', marginBottom: '25px', padding: '20px', backgroundColor: '#111827', borderRadius: '18px', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 14px 35px rgba(0,0,0,0.12)' };
const inputStyle = { flex: 1, padding: '14px 16px', borderRadius: '14px', border: '1px solid rgba(148,163,184,0.4)', backgroundColor: '#f8fafc', color: '#0f172a', outline: 'none', boxShadow: 'inset 0 1px 2px rgba(15,23,42,0.08)', transition: 'border-color 0.2s, box-shadow 0.2s' };
const buttonStyle = { padding: '14px 22px', backgroundColor: '#16a34a', color: 'white', border: 'none', borderRadius: '14px', cursor: 'pointer', fontWeight: '700', boxShadow: '0 10px 24px rgba(22, 163, 74, 0.24)', transition: 'background-color 0.2s, transform 0.2s' };

export default AddProject;