import { getAllProducts, addProduct } from '../models/Product.js';

export const listProducts = async (req, res) => {
  try {
    const products = await getAllProducts();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Could not fetch products' });
  }
};

export const createProduct = async (req, res) => {
  const { name, price } = req.body;
  try {
    const product = await addProduct({ name, price });
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ error: 'Could not add product' });
  }
};