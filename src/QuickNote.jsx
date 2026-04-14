import { useState } from 'react';

function ContactForm() {
  // 1. Declari cele 3 state-uri pentru datele introduse
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  // 2. State-ul pentru mesajul de feedback
  const [feedback, setFeedback] = useState('');

  // 3. Funcția care se execută la Submit
  const handleSubmit = (e) => {
    e.preventDefault(); // Foarte important: previne reîncărcarea paginii!

    if (name === '' || email === '' || message === '') {
      setFeedback('Completeaza toate campurile!');
    } else {
      setFeedback('Multumim, ' + name + '!');
      // Opțional: resetăm câmpurile după succes
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div style={{ border: '2px solid #ccc', padding: '20px', borderRadius: '10px', margin: '20px 0' }}>
      <h3>Formular de Contact</h3>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
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
          placeholder="Mesajul tau" 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
        />
        
        <button type="submit">Trimite</button>
      </form>

      {/* Afișăm feedback-ul doar dacă există */}
      {feedback && <p style={{ marginTop: '15px', color: 'blue' }}>{feedback}</p>}
    </div>
  );
}

export default ContactForm;