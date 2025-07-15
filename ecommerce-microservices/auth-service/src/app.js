import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
import { registerWithRegistry } from './register.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;
const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL)
  .then(() => console.log('[Auth] MongoDB connected'))
  .catch(err => console.error('[Auth] Mongo error', err));

app.use('/users', userRoutes);

app.listen(PORT, () => {
  console.log(`[Auth] Service running on http://localhost:${PORT}`);
  registerWithRegistry();
});