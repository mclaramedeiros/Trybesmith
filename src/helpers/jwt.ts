import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { User } from '../types';

dotenv.config();

const createToken = (data: Omit<User, 'password'>) => {
  const token = jwt.sign(data, process.env.JWT_SECRET as string);
  return token;
};

export default createToken;
