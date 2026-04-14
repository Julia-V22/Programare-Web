import { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [feedback, setFeedback] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      setFeedback('⚠️ Oops! Julia, te rugăm să completezi toate câmpurile.');
    } else {
      setFeedback(`🚀 Succes! Mesajul de la "${name}" a fost procesat de sistem.`);
      setName('');
      setEmail('');
      setMessage('');
    }
  }

  // Obiecte de stil pentru a păstra JSX-ul curat
  const inputStyle = {
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #d1d5db',
    fontSize: '14px',
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  const buttonStyle = {
    padding: '12px',
    backgroundColor: '#4f46e5',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '10px',
    transition: 'background-color 0.3s'
  };

  return (
    <div style={{ padding: '10px' }}>
      <h3 style={{ color: '#1f2937', marginBottom: '15px' }}>📩 Contactează Dezvoltatorul</h3>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <label style={labelStyle}>Nume Complet</label>
          <input 
            type="text" 
            placeholder="Ex: Julia Vacaru" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            style={inputStyle}
            onFocus={(e) => e.target.style.borderColor = '#6366f1'}
            onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <label style={labelStyle}>Email Studențesc</label>
          <input 
            type="email" 
            placeholder="prenume.nume@student.unitbv.ro" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            style={inputStyle}
            onFocus={(e) => e.target.style.borderColor = '#6366f1'}
            onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <label style={labelStyle}>Mesaj / Feedback Laborator</label>
          <textarea 
            placeholder="Scrie aici observațiile tale..." 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            style={{ ...inputStyle, minHeight: '100px', resize: 'vertical' }}
            onFocus={(e) => e.target.style.borderColor = '#6366f1'}
            onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
          />
        </div>

        <button 
          type="submit" 
          style={buttonStyle}
          onMouseOver={(e) => e.target.style.backgroundColor = '#4338ca'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#4f46e5'}
        >
          Trimite Mesaj
        </button>
      </form>

      {/* Mesaj de feedback animat vizual prin culori */}
      {feedback && (
        <div style={{ 
          marginTop: '20px', 
          padding: '10px', 
          borderRadius: '6px', 
          backgroundColor: feedback.includes('⚠️') ? '#fef2f2' : '#f0fdf4',
          color: feedback.includes('⚠️') ? '#dc2626' : '#16a34a',
          fontSize: '0.9rem',
          fontWeight: '600',
          textAlign: 'center',
          border: `1px solid ${feedback.includes('⚠️') ? '#fecaca' : '#bbf7d0'}`
        }}>
          {feedback}
        </div>
      )}
    </div>
  );
}

const labelStyle = {
  fontSize: '0.85rem',
  fontWeight: '600',
  color: '#374151'
};

export default ContactForm;