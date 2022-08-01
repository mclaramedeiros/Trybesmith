import { Router } from 'express';
import getAll from '../controller/ordersController';

const router = Router();

router.get('/', getAll);

export default router;
