import { productControlller } from "./product.controller";
import express from 'express';
const router = express.Router()

router.post('/create-products', productControlller.createProduct);
router.get('/product/:productId', productControlller.getSpecificProduct);
router.put('/product/:productId', productControlller.updateProduct);
router.delete('/product/:productId', productControlller.deleteProduct);
router.get('/all_products', productControlller.getAllProducts);

export const productRoutes = router;