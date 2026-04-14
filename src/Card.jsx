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

  return (
    <div style={cardStyle}>
      <h3 style={{ color: '#4f46e5', margin: 0 }}>{props.title}</h3>
      <p style={{ fontSize: '0.85rem', color: '#6b7280', margin: 0 }}>
        <strong>Status:</strong> {props.status}
      </p>
      <p style={{ color: '#374151', fontSize: '0.95rem' }}>
        {props.description}
      </p>
    </div>
  );
}

export default Card;