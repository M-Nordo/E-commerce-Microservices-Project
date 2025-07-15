import express from 'express';
import dotenv from 'dotenv';
import { dynamicProxy } from './proxy.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

app.use('/api/auth', dynamicProxy('auth-service'));
app.use('/api/product', dynamicProxy('product-service'));
app.use('/api/order', dynamicProxy('order-service'));

app.get('/', (req, res) => {
  res.send('Gateway is running 🚀');
});

app.listen(PORT, () => {
  console.log(`[Gateway] Listening on http://localhost:${PORT}`);
});