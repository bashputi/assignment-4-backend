import { TProduct } from './product.interface';
import { Product } from './product.model';

const createProduct = async(payload: TProduct) => {
    const result = await Product.create(payload);
    return result;
};

const getProduct = async(id: string) => {
    const result = await Product.findOne({ _id: id });
    return result;
};

const updateProduct = async(id: string, updateData: object) => {
    await Product.updateOne({ _id: id}, {$set: updateData});
    const updateProduct = await Product.findOne({ _id: id });
    return updateProduct;
};



export const productService = {
    createProduct,
    getProduct,
    updateProduct,

}