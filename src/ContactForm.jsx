import { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificare pentru câmpuri goale (folosind .trim() pentru siguranță)
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      setFeedback('⚠️ Completează toate câmpurile!');
    } else {
      setFeedback('🚀 Mulțumim, ' + name + '! Mesajul a fost trimis.');
      // Resetăm câmpurile
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  // Stiluri inline pentru un aspect unitar
  const inputStyle = {
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #d1d5db',
    fontSize: '14px',
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box'
  };

  const buttonStyle = {
    padding: '12px',
    backgroundColor: '#4f46e5',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background 0.3s'
  };

  return (
    <div style={{ padding: '10px' }}>
      <h3 style={{ color: '#1f2937', marginBottom: '15px' }}>📩 Contactează Dezvoltatorul</h3>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <input 
          type="text" 
          placeholder="Nume" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          style={inputStyle}
        />
        
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          style={inputStyle}
        />
        
        <textarea 
          placeholder="Mesajul tău" 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          style={{ ...inputStyle, minHeight: '100px', resize: 'vertical' }}
        />
        
        <button type="submit" style={buttonStyle}>Trimite</button>
      </form>

      {/* Mesaj de feedback colorat dinamic */}
      {feedback && (
        <div style={{ 
          marginTop: '15px', 
          padding: '10px', 
          borderRadius: '6px', 
          backgroundColor: feedback.includes('⚠️') ? '#fef2f2' : '#f0fdf4',
          color: feedback.includes('⚠️') ? '#dc2626' : '#16a34a',
          textAlign: 'center',
          fontWeight: 'bold',
          border: `1px solid ${feedback.includes('⚠️') ? '#fecaca' : '#bbf7d0'}`
        }}>
          {feedback}
        </div>
      )}
    </div>
  );
}

export default ContactForm;