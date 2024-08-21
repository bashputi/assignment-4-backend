import { productService } from "./product.service";
import { NextFunction, Request, Response} from 'express';
import { productSchema, updateProductSchema } from "./joi.validator";

const createProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        //joi validation
        const { error, value } = productSchema.validate(req.body, { abortEarly: false});
        if(error) {
            return res.json({
                success: false,
                message: "validation Error",
                details: error.details.map((details: { message: any; }) => details.message)
            });
        }

        // create product after validation
        const result = await productService.createProduct(value);
        return res.json({
            success: false,
            message: "Product created successfully!",
            data: result,
        });

    } catch (error: any) {
        next(error)
    }
};

export const productControlller = {
    createProduct,
    
}