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
            success: true,
            message: "Product created successfully!",
            data: result,
        });

    } catch (error: any) {
        next(error)
    }
};

const getSpecificProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {productId} = req.params;
        const result = await productService.getProduct(productId);
     if (result) {
        return res.json({
            success: true,
            message: "Product fetched successfully!",
            data: result,
        });
     }else {
        return res.json({
            success: false,
            message: "Product not found!",
        });
     }

    } catch (error: any) {
        next(error)
    }
};

const updateProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {productId} = req.params;
        const updateData = req.body;

        //joi valitation
        const { error, value } = updateProductSchema.validate(updateData, { abortEarly: false});
        if(error) {
            return res.json({
                success: false,
                message: "validation Error",
                details: error.details.map((details: { message: any; }) => details.message)
            });
        }

        // update product after validation
        const updateProduct = await productService.updateProduct(productId, value);
     if (updateProduct) {
        return res.json({
            success: true,
            message: "Product updated successfully!",
            data: updateProduct,
        });
     }else {
        return res.json({
            success: false,
            message: "Product not found!",
        });
     }

    } catch (error: any) {
        next(error)
    }
};

export const productControlller = {
    createProduct,
    getSpecificProduct,
    updateProduct,

}