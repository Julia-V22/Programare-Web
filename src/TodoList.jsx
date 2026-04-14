import { useState } from 'react';

function TodoList() {
  // 1. State pentru lista de task-uri (array) și pentru input-ul curent (string)
  const [todos, setTodos] = useState([
    "Pregătire Laborator Web",
    "Revizuire Curs Sisteme de Operare"
  ]);
  const [input, setInput] = useState('');

  // 2. Funcția de adăugare
  function handleAdd() {
    if (input.trim() === '') return; // Evităm task-urile goale
    
    // Folosim spread operator (...) pentru a crea un array NOU
    // React observă schimbarea doar dacă referința array-ului este nouă
    setTodos([...todos, input]);
    setInput(''); // Resetăm câmpul de scris
  }

  // 3. Funcția de ștergere (Exercițiul 3)
  function handleDelete(index) {
    // .filter creează un array nou eliminând elementul de la indexul respectiv
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  }

  // Stiluri pentru design
  const listContainerStyle = {
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '15px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
    border: '1px solid #e2e8f0'
  };

  const itemStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    borderBottom: '1px solid #f1f5f9',
    color: '#334155'
  };

  return (
    <div style={listContainerStyle}>
      <h3 style={{ color: '#4f46e5', marginTop: 0 }}>✅ Planificator Task-uri</h3>
      
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Ce ai de făcut azi?"
          style={{ 
            flex: 1, 
            padding: '10px', 
            borderRadius: '8px', 
            border: '1px solid #cbd5e1',
            outline: 'none'
          }}
        />
        <button 
          onClick={handleAdd}
          style={{ 
            padding: '10px 15px', 
            backgroundColor: '#4f46e5', 
            color: 'white', 
            border: 'none', 
            borderRadius: '8px', 
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Adaugă
        </button>
      </div>

      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {todos.map((todo, index) => (
          <li key={index} style={itemStyle}>
            <span>{todo}</span>
            <button 
              onClick={() => handleDelete(index)}
              style={{ 
                backgroundColor: '#fee2e2', 
                color: '#ef4444', 
                border: 'none', 
                padding: '5px 10px', 
                borderRadius: '6px', 
                cursor: 'pointer',
                fontSize: '0.8rem'
              }}
            >
              Șterge
            </button>
          </li>
        ))}
      </ul>

      {todos.length === 0 && (
        <p style={{ textAlign: 'center', color: '#94a3b8', fontSize: '0.9rem' }}>
          Nu mai ai task-uri. Bravo! ☕
        </p>
      )}
    </div>
  );
}

export default TodoList;