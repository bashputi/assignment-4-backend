import { productControlller } from "./product.controller";
import express from 'express';
const router = express.Router()

router.post('/create-products', productControlller.createProduct);

export const productRoutes = router;