import { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]); // Array-ul de task-uri
  const [input, setInput] = useState(''); // Textul din input

  function handleAdd() {
    if (input.trim() === '') return; // Prevenim adăugarea de spații goale
    
    // Creăm un array NOU care conține tot ce era înainte + noul input
    setTodos([...todos, input]); 
    
    setInput(''); // Resetăm câmpul de text după adăugare
  }

  return (
    <div style={{ padding: '20px', border: '1px solid #ff9800', margin: '10px 0', borderRadius: '8px' }}>
      <h3>Todo List</h3>
      
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Adauga un task..."
      />
      <button onClick={handleAdd}>Adauga</button>

      {/* Afișarea listei */}
      <ul style={{ marginTop: '15px' }}>
        {todos.map(function(todo, index) {
          return <li key={index}>{todo}</li>;
        })}
      </ul>
    </div>
  );
}

export default TodoList;