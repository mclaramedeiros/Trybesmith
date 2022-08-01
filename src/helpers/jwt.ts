import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { User } from '../types';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

const createToken = (data: Omit<User, 'password'>) => {
  const token = jwt.sign(data, JWT_SECRET as string);
  return token;
};

export default createToken;
