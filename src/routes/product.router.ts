// const express = require('express');

import { Router } from 'express';
import productsController from '../controller/productsController';

const router = Router();

router.post('/', productsController.createProduct);
router.get('/', productsController.getAll);

export default router;
