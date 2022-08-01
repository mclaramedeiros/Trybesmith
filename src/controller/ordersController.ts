import { Request, Response } from 'express';
import getOrders from '../service/ordersServices';

const getAll = async (req: Request, res: Response) => {
  const orders = await getOrders();
  return res.status(200).json(orders);
};

export default getAll;
