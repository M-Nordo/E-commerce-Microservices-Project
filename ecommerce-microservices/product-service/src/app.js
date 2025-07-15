import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import productRoutes from './routes/productRoutes.js';
import { registerWithRegistry } from './register.js';
import { createProductTable } from './models/Product.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3002;

createProductTable()
  .then(() => console.log('[Product] Table ensured'))
  .catch(console.error);

app.use('/products', productRoutes);

app.listen(PORT, () => {
  console.log(`[Product] Service running on http://localhost:${PORT}`);
  registerWithRegistry();
});