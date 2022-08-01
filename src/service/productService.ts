import { AddProducts } from '../types';
import productModel from '../models/productModel';

const createProduct = async (product: AddProducts) => {
  const id = await productModel.createProduct(product);
  const result = await productModel.getById(id);
  const { orderId, ...newObj } = result;
  return newObj;
};

const getAll = async () => {
  const products = await productModel.getAll();
  return products;
};

export default { createProduct, getAll };
