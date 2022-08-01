import { Request, Response } from 'express';
import productService from '../service/productService';

const createProduct = async (req: Request, res: Response) => {
  const product = await productService.createProduct(req.body);
  return res.status(201).json(product);
};

const getAll = async (req: Request, res: Response) => {
  const products = await productService.getAll();
  return res.status(200).json(products);
};

export default { createProduct, getAll };
