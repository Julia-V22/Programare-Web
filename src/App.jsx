import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './pages/Home';
import Navbar from './Navbar';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        
        <Route path="/despre" element={<About />} />
        
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;