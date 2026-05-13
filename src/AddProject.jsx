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
const formStyle = { display: 'flex', gap: '10px', marginBottom: '25px', padding: '15px', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' };
const inputStyle = { flex: 1, padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1' };
const buttonStyle = { padding: '10px 20px', backgroundColor: '#4f46e5', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' };

export default AddProject;