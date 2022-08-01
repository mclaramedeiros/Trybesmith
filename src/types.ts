export type Products = {
  id: number
  name: string
  amount: string
  orderId: number
};

export type User = {
  username: string
  classe: string
  level: number
  password: string
}; 

export type Order = {
  id: number;
  userId: number;
  productsIds: number;
};

export type AddProducts = Omit<Products, 'id' | 'orderId'>;