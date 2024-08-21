import { productControlller } from "./product.controller";
import express from 'express';
const router = express.Router()

router.post('/create-products', productControlller.createProduct);
router.get('/product/:productId', productControlller.getSpecificProduct);
router.put('/product/:productId', productControlller.updateProduct);

export const productRoutes = router;