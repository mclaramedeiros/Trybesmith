// const express = require('express');

import { Router } from 'express';
import createProduct from '../controller/productsController';

const router = Router();

router.post('/', createProduct);

export default router;
