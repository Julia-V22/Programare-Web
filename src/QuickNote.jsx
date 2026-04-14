import { useState } from 'react';

function QuickNote() {
  const [note, setNote] = useState('');

  const containerStyle = {
    padding: '25px',
    backgroundColor: '#fffbeb', 
    borderLeft: '6px solid #fbbf24', 
    borderRadius: '15px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    margin: '20px 0'
  };

  const textareaStyle = {
    width: '100%',
    height: '100px',
    padding: '12px',
    marginTop: '10px',
    borderRadius: '8px',
    border: '1px solid #fde68a',
    fontSize: '1rem',
    fontFamily: 'inherit',
    boxSizing: 'border-box',
    outline: 'none',
    transition: 'border-color 0.3s ease'
  };

  return (
    <div style={containerStyle}>
      <h3 style={{ margin: 0, color: '#92400e', display: 'flex', alignItems: 'center', gap: '10px' }}>
        📒 Notițe Rapide
      </h3>
      
      <textarea
        style={textareaStyle}
        value={note}
        placeholder="Scrie ceva aici..."
        onChange={(e) => setNote(e.target.value)}
        onFocus={(e) => e.target.style.borderColor = '#fbbf24'}
        onBlur={(e) => e.target.style.borderColor = '#fde68a'}
      />

      {/* Secțiunea de Previzualizare Live */}
      <div style={{ marginTop: '20px' }}>
        <h4 style={{ 
          margin: '0 0 8px 0', 
          color: '#b45309', 
          fontSize: '0.85rem', 
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}>
          🕵️ Previzualizare Live:
        </h4>
        
        <div style={{ 
          padding: '12px', 
          backgroundColor: 'rgba(255,255,255,0.6)', 
          borderRadius: '8px',
          color: '#1f2937',
          minHeight: '20px',
          border: '1px dashed #fcd34d',
          lineHeight: '1.5'
        }}>
          {note || "Aștept date..."}
        </div>
      </div>
    </div>
  );
}

export default QuickNote;