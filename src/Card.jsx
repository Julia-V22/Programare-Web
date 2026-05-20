
function Card(props) {
  const cardStyle = {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    borderLeft: '5px solid #646cff',
    width: '280px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  };
  // Stil pentru butonul de ștergere (DELETE)
  const deleteButtonStyle = {
    backgroundColor: '#ef4444', // Un roșu de alertă
    color: 'white',
    border: 'none',
    padding: '8px 12px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '0.8rem',
    marginTop: 'auto', // Împinge butonul jos dacă descrierea e scurtă
    transition: 'background-color 0.2s',
    alignSelf: 'flex-start' // Nu lasă butonul să se întindă pe toată lățimea
  };

  const editButtonStyle = {
    backgroundColor: '#f59e0b',
    color: 'white',
    border: 'none',
    padding: '8px 12px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '0.8rem',
    transition: 'background-color 0.2s',
    alignSelf: 'flex-start'
  };

  return (
    <div style={cardStyle}>
      <h3 style={{ color: '#4f46e5', margin: 0 }}>{props.title}</h3>
      <p style={{ fontSize: '0.85rem', color: '#6b7280', margin: 0 }}>
        <strong>Status:</strong> {props.status}
      </p>
      <p style={{ color: '#374151', fontSize: '0.95rem' }}>
        {props.description}
      </p>

      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {/* Buton pentru a comuta statusul proiectului între finalizat și în lucru */}
        <button
          onClick={() => props.onToggle && props.onToggle()}
          style={{
            backgroundColor: '#2563eb',
            color: 'white',
            border: 'none',
            padding: '8px 12px',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '0.8rem',
            transition: 'background-color 0.2s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#1d4ed8'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#2563eb'}
        >
          {props.status === 'Finalizat' ? 'Marchează ca În lucru' : 'Marchează ca Finalizat'}
        </button>

        {/* Buton pentru a deschide formularul de editare al proiectului */}
        <button
          onClick={() => props.onEdit && props.onEdit()}
          style={editButtonStyle}
          onMouseOver={(e) => e.target.style.backgroundColor = '#d97706'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#f59e0b'}
        >
          ✏️ Editează
        </button>

        {/* Butonul de Ștergere care apelează funcția primită prin props */}
        <button 
           onClick={() => props.onDelete(props.id)}
          style={deleteButtonStyle}
          onMouseOver={(e) => e.target.style.backgroundColor = '#dc2626'} // Efect de hover
          onMouseOut={(e) => e.target.style.backgroundColor = '#ef4444'}
        >
          🗑️ Șterge
        </button>
      </div>
    </div>
  );
}

export default Card;