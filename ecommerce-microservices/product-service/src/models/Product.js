import db from '../db.js';

export async function createProductTable() {
  await db.query(`
    CREATE TABLE IF NOT EXISTS products (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      price NUMERIC NOT NULL
    )
  `);
}

export async function getAllProducts() {
  const { rows } = await db.query('SELECT * FROM products');
  return rows;
}

export async function addProduct({ name, price }) {
  const { rows } = await db.query(
    'INSERT INTO products (name, price) VALUES ($1, $2) RETURNING *',
    [name, price]
  );
  return rows[0];
}