import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './db.js';
import orderRoutes from './routes/orderRoutes.js';
import { registerWithRegistry } from './register.js';
import { connectRabbit } from './rabbit/publisher.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3003;

app.use('/orders', orderRoutes);

app.listen(PORT, async () => {
  await connectDB();
  await connectRabbit();
  registerWithRegistry();
  console.log(`[Order] Service running on http://localhost:${PORT}`);
});