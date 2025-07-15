import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { register, getAll } from './registry.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Service Registry is running 🚀');
});

app.post('/register', (req, res) => {
  const { name, url } = req.body;
  if (!name || !url) return res.status(400).json({ error: 'name and url required' });

  register(name, url);
  res.json({ message: 'Service registered successfully' });
});

app.get('/services', (req, res) => {
  res.json(getAll());
});

app.listen(PORT, () => {
  console.log(`[Registry] Service running on http://localhost:${PORT}`);
});