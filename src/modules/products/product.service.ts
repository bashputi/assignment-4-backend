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

const deleteProduct = async(id: string) => {
    const deleteProduct = await Product.deleteOne({ _id: id });
    return deleteProduct;
};

const getAllProducts = async(search: string, category: string, sortByPrice: 'asc' | 'desc' = 'asc', page: number = 1, limit: number = 10) => {
   const query: any = {};

    if(search) {
        query.$or = [
            { title: { $regex: search, $options: 'i'} },
            { description: { $regex: search, $options: 'i'} }
        ];
    }

    if(category) {
        query.category = category;
    }

    const sortOption = sortByPrice === 'asc' ? 'price' : '-price';

    const skip = (page -1) * limit;

    const products = await Product.find(query)
        .sort(sortOption)
        .select('id title image price category')
        .skip(skip)
        .limit(limit);

        const total = await Product.countDocuments(query);

        return {
            products,
            total,
            page,
            pages: Math.ceil(total / limit),
        };
};


export const productService = {
    createProduct,
    getProduct,
    updateProduct,
    deleteProduct,
    getAllProducts,

}