import amqp from 'amqplib';
import dotenv from 'dotenv';
dotenv.config();

export const startConsumer = async () => {
  try {
    const conn = await amqp.connect(process.env.RABBIT_URL);
    const channel = await conn.createChannel();
    await channel.assertQueue('order_notifications');

    console.log('[Notification] Waiting for messages...');

    channel.consume('order_notifications', (msg) => {
      if (msg !== null) {
        const data = JSON.parse(msg.content.toString());
        console.log(`[Notification] 🔔 Message for ${data.userEmail}: ${data.message}`);
        channel.ack(msg);
      }
    });
  } catch (err) {
    console.error('[Notification] Error:', err.message);
  }
};