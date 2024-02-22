import asyncHandler from "../middleware/asyncHandler";
import Product from '../models/productModel.js';

const getProducts = asyncHandler(async () => {
    const products = await Product.find({});
    res.json(products);

});

const getProductById = asyncHandler(async () => {
 m

});