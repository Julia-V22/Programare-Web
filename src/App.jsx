import { useState } from 'react';
import Card from './Card';
import QuickNote from './QuickNote';
import TodoList from './TodoList'; // Importul TodoList

function App() {
  // --- STATE (Starea aplicației) ---
  const [count, setCount] = useState(0);

  // --- DATE (Array-ul de proiecte) ---
  const projects = [
    { title: "Proiect 1", description: "Pagina personala cu HTML si CSS" },
    { title: "Proiect 2", description: "Pagina interactiva cu JavaScript" },
    { title: "Proiect 3", description: "Dashboard cu React" },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Programare Web - Laboratoare</h1>

      {/* Exercițiul 1: Nota Rapida (Input Controlat) */}
      <QuickNote />

      <hr />

      {/* Exercițiul 2: Todo List (Array State) */}
      <TodoList />

      <hr />

      {/* Exercițiul 5: Contor (Number State) */}
      <div style={{ margin: '20px 0' }}>
        <p>Ai apăsat butonul de <strong>{count}</strong> ori</p>
        <button onClick={() => setCount(count + 1)}>Click pentru incrementare</button>
      </div>

      <hr />

      {/* Exercițiul 4: Lista de Proiecte (Map) */}
      <h2>Proiectele mele:</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {projects.map(function(item, index) {
          return (
            <Card 
              key={index} 
              title={item.title} 
              description={item.description} 
            />
          );
        })}
      </div>
    </div>
  );
}

export default App; 