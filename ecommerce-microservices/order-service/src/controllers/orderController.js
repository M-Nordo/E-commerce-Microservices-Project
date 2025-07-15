import Order from '../models/Order.js';
import { publishOrder } from '../rabbit/publisher.js';

export const createOrder = async (req, res) => {
  const { productId, userEmail, quantity } = req.body;
  try {
    const order = await Order.create({ productId, userEmail, quantity });
    await publishOrder({ userEmail, message: 'Your order has been created!' });
    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ error: 'Order creation failed' });
  }
};

export const listOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: 'Could not fetch orders' });
  }
};