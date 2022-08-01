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

export type AddProducts = Omit<Products, 'id' | 'orderId'>;