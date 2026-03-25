import { useState } from 'react';

function ContactForm() {
  // 1. Cele 3 state-uri pentru datele din formular
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  // 2. State-ul pentru mesajul de succes sau eroare
  const [feedback, setFeedback] = useState('');

  function handleSubmit(e) {
    e.preventDefault(); // Previne reîncărcarea paginii (comportament HTML implicit)

    // Validare simplă: verificăm dacă vreun câmp este gol
    if (name === '' || email === '' || message === '') {
      setFeedback('⚠️ Completează toate câmpurile!');
    } else {
      setFeedback(`✅ Mulțumim, ${name}! Mesajul tău a fost trimis.`);
      // Opțional: Putem goli câmpurile după trimitere
      setName('');
      setEmail('');
      setMessage('');
    }
  }

  return (
    <div style={{ padding: '20px', border: '2px solid #646cff', borderRadius: '10px', margin: '20px 0' }}>
      <h3>Contactează-ne</h3>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
        
        <input 
          type="text" 
          placeholder="Nume" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />

        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />

        <textarea 
          placeholder="Mesajul tău..." 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
        />

        <button type="submit">Trimite</button>
      </form>

      {/* Afișarea feedback-ului sub formular */}
      {feedback && <p style={{ marginTop: '10px', fontWeight: 'bold' }}>{feedback}</p>}
    </div>
  );
}

export default ContactForm;