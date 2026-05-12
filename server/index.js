const express = require('express');
const cors = require('cors'); // Linie nouă
const app = express();
const mongoose = require('mongoose');
const Project = require('./models/Project');

app.use(cors()); 
app.use(express.json());

// Conectare la MongoDB
mongoose.connect('mongodb://localhost:27017/dashboard')
  .then(function() {
    console.log('Conectat la MongoDB!');
  })
  .catch(function(err) {
    console.error('Eroare conectare MongoDB:', err);
  });

const PORT = 3000;

app.use(express.json());

// Rutele API
app.get('/', function(req, res) {
  res.json({ message: 'Serverul functioneaza!' });
});

// GET /api/projects - Returnează toate proiectele
app.get('/api/projects', async function(req, res) {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: 'Eroare: ' + err.message });
  }
});

// GET /api/projects/:id - Returnează un singur proiect după ID
app.get('/api/projects/:id', async function(req, res) {
  try {
    const project = await Project.findById(req.params.id);
    if (project) {
      res.json(project);
    } else {
      res.status(404).json({ error: 'Proiectul nu a fost gasit' });
    }
  } catch (err) {
    res.status(500).json({ error: 'ID invalid sau eroare server' });
  }
});

// GET /api/stats - Returnează statistici folosind MongoDB
app.get('/api/stats', async function(req, res) {
  try {
    const total = await Project.countDocuments();
    const completed = await Project.countDocuments({ done: true });
    
    res.json({
      totalProiecte: total,
      finalizate: completed,
      inLucru: total - completed
    });
  } catch (err) {
    res.status(500).json({ error: 'Eroare stats: ' + err.message });
  }
});

// POST /api/projects - Adăugare proiect nou
app.post('/api/projects', async function(req, res) {
  try {
    const newProject = new Project({
      title: req.body.title,
      tech: req.body.tech,
      done: req.body.done || false,
    });
    const saved = await newProject.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE /api/projects/:id - Ștergere proiect
app.delete('/api/projects/:id', async function(req, res) {
  try {
    const deleted = await Project.findByIdAndDelete(req.params.id);
    if (deleted) {
      res.json({ message: 'Deleted' });
    } else {
      res.status(404).json({ error: 'Proiectul nu exista' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Eroare la stergere: ' + err.message });
  }
});

app.listen(PORT, function() {
  console.log('Server pornit pe http://localhost:' + PORT);
});