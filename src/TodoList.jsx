import { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // Funcția de adăugare (rămâne la fel)
  function handleAdd() {
    if (input.trim() === '') return;
    setTodos([...todos, input]);
    setInput('');
  }

  // EXERCIȚIUL 3: Funcția de ștergere
  function handleDelete(index) {
    // .filter() creează un array NOU care conține doar 
    // elementele al căror index NU este cel pe care vrem să-l ștergem
    const newTodos = todos.filter(function(_, i) {
      return i !== index;
    });
    
    setTodos(newTodos);
  }

  return (
    <div style={{ padding: '20px', border: '1px solid #ff9800', margin: '10px 0', borderRadius: '8px' }}>
      <h3>Todo List (cu Ștergere)</h3>
      
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Adauga un task..."
      />
      <button onClick={handleAdd}>Adauga</button>

      <ul style={{ marginTop: '15px' }}>
        {todos.map(function(todo, index) {
          return (
            <li key={index} style={{ marginBottom: '8px' }}>
              {todo} 
              <button 
                onClick={() => handleDelete(index)} 
                style={{ marginLeft: '10px', color: 'red', cursor: 'pointer' }}
              >
                Sterge
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;