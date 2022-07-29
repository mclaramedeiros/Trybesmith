import { Request, Response } from 'express';
import create from '../service/productService';

const createProduct = async (req: Request, res: Response) => {
  const product = await create(req.body);
  return res.status(201).json(product);
};

export default createProduct;
