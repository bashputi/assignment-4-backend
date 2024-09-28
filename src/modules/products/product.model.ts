
import { model, Schema } from "mongoose";
import { TProduct } from "./product.interface";


const productSchema = new Schema<TProduct>({
    title: {
        type: String,
        required: [true, "Product Title is required"]
    },
    image: {
        type: String,
        required: [true, "Product Image is required"]
    },
    price: {
        type: Number,
        required: [true, "Product Price is required"]
    },
    category: {
        type: String,
        required: [true, "Product Category is required"]
    },
    brand: {
        type: String,
        required: [true, "Product Brand is required"]
    },
    quantity: {
        type: Number,
        required: [true, "Product quantity is required"]
    },
    rating: {
        type: Number,
        required: [true, "Product Rating is required"]
    },
    description: {
        type: String,
        required: [true, "Product Description is required"]
    }
});

export const Product = model<TProduct>('Product', productSchema);