import { Request, Response } from 'express';
import createToken from '../helpers/jwt';
import userService from '../service/userService';

const createUser = async (req: Request, res: Response) => {
  const product = await userService.createUser(req.body);
  const { password, ...newUser } = req.body;
  const token = createToken({ id: product, ...newUser });
  return res.status(201).json({ token });
};

export default { createUser };
