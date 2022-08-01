import getAll from '../models/ordersModel';

const getOrders = async () => {
  const orders = await getAll();
  return orders;
};

export default getOrders;
