import { OkPacket, RowDataPacket } from 'mysql2';
import connection from './connection';
import { AddProducts, Products } from '../types';

const createProduct = async (product: AddProducts): Promise<number> => {
  const { name, amount } = product;
  const query = `INSERT INTO Trybesmith.Products
    (name, amount)
    VALUES
    (?,?);`;
  const [{ insertId }] = await connection.query<OkPacket>(query, [
    name,
    amount,
  ]);
  return insertId;
};

const getById = async (id: Products['id']) => {
  const query = `SELECT 
    Products.id,
    Products.name,
    Products.amount,
    Products.orderId
    FROM Trybesmith.Products
    WHERE Products.id = ?;`;
  const [[result]] = await connection.query<RowDataPacket[]>(query, [id]);
  return result as Products;
};

const getAll = async () => {
  const [query] = await connection.execute('SELECT * from Trybesmith.Products');
  return query;
};

export default { createProduct, getById, getAll };
