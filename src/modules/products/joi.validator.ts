import Joi from "joi";

export const productSchema = Joi.object({
    title: Joi.string().required(),
    image: Joi.string().required(),
    price: Joi.number().required(),
    category: Joi.string().required(),
    brand: Joi.string().required(),
    quantity: Joi.number().required(),
    rating: Joi.number().required(),
    description: Joi.string().required()
  })

export const updateProductSchema = Joi.object({
    title: Joi.string(),
    image: Joi.string(),
    price: Joi.number(),
    category: Joi.string(),
    brand: Joi.string(),
    quantity: Joi.number(),
    rating: Joi.number(),
    description: Joi.string()
  }).min(1);