import { User } from '../types';
import userModel from '../models/userModel';

const createUser = async (user: User) => {
  const users = await userModel.createUser(user);
  return users;
};

export default { createUser };
