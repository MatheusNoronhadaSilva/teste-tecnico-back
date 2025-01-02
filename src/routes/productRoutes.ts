import { Router } from 'express';
import { getProduct } from '../controllers/productController';
import { authenticate } from '../middlewares/authMiddleware';

const router = Router();

router.get('/product/:id', authenticate, getProduct); // Rota autenticada

export default router;
