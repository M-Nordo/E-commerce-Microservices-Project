import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  productId: String,
  userEmail: String,
  quantity: Number,
  status: { type: String, default: 'pending' }
});

const Order = mongoose.model('Order', orderSchema);
export default Order;