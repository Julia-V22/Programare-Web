import { useState } from 'react';

function Card(props) {
  const [hover, setHover] = useState(false);
  
  // Verificăm corect dacă este finalizat
  const isDone = props.done === true || props.status === 'Finalizat';

  // --- MODIFICARE CULORI: Roz pentru În lucru, Verde pentru Finalizat ---
  const cardStyle = {
    backgroundColor: isDone ? '#13a83e' : '#f02543', // Verde deschis vs Roz pal
    borderRadius: '20px',
    padding: '24px',
    boxShadow: hover ? '0 18px 40px rgba(15, 23, 42, 0.16)' : '0 8px 24px rgba(15, 23, 42, 0.1)',
    border: '1px solid ' + (isDone ? '#a7f3d0' : '#fca5a5'),
    borderLeft: '8px solid ' + (isDone ? '#16a34a' : '#ef4444'), // Margine verde vs Margine roșie
    width: '100%',
    maxWidth: '320px',
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
    transform: hover ? 'translateY(-3px)' : 'translateY(0)',
    transition: 'all 0.25s ease-out',
    cursor: 'default'
  };

  const deleteButtonStyle = {
    backgroundColor: '#ef4444',
    color: 'white',
    border: 'none',
    padding: '8px 12px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '0.8rem',
    marginTop: 'auto',
    transition: 'background-color 0.2s',
    alignSelf: 'flex-start'
  };

  const statusLabelColor = isDone ? '#166534' : '#991b1b';
  const statusBadgeStyle = {
    color: statusLabelColor,
    fontWeight: '700',
    backgroundColor: isDone ? 'rgba(22, 101, 52, 0.12)' : 'rgba(239, 68, 68, 0.12)',
    borderRadius: '999px',
    padding: '4px 10px',
    display: 'inline-block',
    marginTop: '4px',
    marginLeft: '5px'
  };

  const toggleButtonStyle = {
    backgroundColor: isDone ? '#ef4444' : '#16a34a', // Butonul își schimbă culoarea
    color: 'white',
    border: 'none',
    padding: '10px 14px',
    borderRadius: '10px',
    cursor: 'pointer',
    fontWeight: '700',
    fontSize: '0.85rem',
    transition: 'background-color 0.2s',
    minWidth: '160px'
  };

  const editButtonStyle = {
    backgroundColor: '#2563eb',
    color: 'white',
    border: 'none',
    padding: '10px 14px',
    borderRadius: '10px',
    cursor: 'pointer',
    fontWeight: '700',
    fontSize: '0.85rem',
    transition: 'background-color 0.2s',
    minWidth: '140px'
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <h3 style={{ color: '#4f46e5', margin: 0 }}>{props.title}</h3>
      <div>
        <strong style={{ fontSize: '0.85rem', color: '#6b7280' }}>Status: </strong> 
        <span style={statusBadgeStyle}>{isDone ? 'Finalizat' : 'În lucru'}</span>
      </div>
      <p style={{ color: '#374151', fontSize: '0.95rem', margin: 0 }}>
        {props.description}
      </p>

      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: 'auto' }}>
        
        {/* REPARAT: Trimitem id-ul și starea booleană curentă (isDone) în funcție */}
        <button
          onClick={() => props.onToggle && props.onToggle(props.id, isDone)}
          style={toggleButtonStyle}
          onMouseOver={(e) => e.target.style.backgroundColor = isDone ? '#dc2626' : '#15803d'}
          onMouseOut={(e) => e.target.style.backgroundColor = isDone ? '#ef4444' : '#16a34a'}
        >
          {isDone ? 'Marchează ca În lucru' : 'Marchează ca Finalizat'}
        </button>

        <button
          onClick={() => props.onEdit && props.onEdit()}
          style={editButtonStyle}
          onMouseOver={(e) => e.target.style.backgroundColor = '#1d4ed8'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#2563eb'}
        >
          ✏️ Editează
        </button>

        <button 
          onClick={() => props.onDelete(props.id)}
          style={deleteButtonStyle}
          onMouseOver={(e) => e.target.style.backgroundColor = '#dc2626'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#ef4444'}
        >
          🗑️ Șterge
        </button>
      </div>
    </div>
  );
}

export default Card;