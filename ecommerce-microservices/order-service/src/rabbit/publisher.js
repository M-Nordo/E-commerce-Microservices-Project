import amqp from 'amqplib';
import dotenv from 'dotenv';
dotenv.config();

let channel;

export const connectRabbit = async () => {
  const conn = await amqp.connect(process.env.RABBIT_URL);
  channel = await conn.createChannel();
  await channel.assertQueue('order_notifications');
  console.log('[Order] Connected to RabbitMQ');
};

export const publishOrder = async (data) => {
  if (!channel) return;
  channel.sendToQueue('order_notifications', Buffer.from(JSON.stringify(data)));
  console.log('[Order] Notification sent to queue');
};