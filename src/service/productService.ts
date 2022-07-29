import { AddProducts } from '../types';
import { createProduct, getById } from '../models/productModel';

const create = async (product: AddProducts) => {
  const id = await createProduct(product);
  const result = await getById(id);
  const { orderId, ...newObj } = result;
  return newObj;
};

export default create;
