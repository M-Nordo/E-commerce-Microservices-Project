import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

export const registerWithRegistry = async () => {
  try {
    await axios.post(`${process.env.REGISTRY_URL}/register`, {
      name: 'product-service',
      url: `http://localhost:${process.env.PORT}`
    });
    console.log('[Product] Registered with service-registry');
  } catch (err) {
    console.error('[Product] Registry registration failed', err.message);
  }
};