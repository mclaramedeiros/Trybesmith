import { Router } from 'express';
import userController from '../controller/userController';

const router = Router();

router.post('/', userController.createUser);
// router.get('/', userController.getAll);

export default router;
