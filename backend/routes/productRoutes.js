import express from 'express';
// import products from '../data/products.js';
import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../models/productModel.js';

const router = express.Router();

router.get('/', asyncHandler(async(req, res) => {
    const products = await Product.find({});
    res.json(products);

}));

router.get('/:id', asyncHandler(async(req, res) => {
    // const product = products.find((p) => p._id === req.params.id);
    const product = await Product.findById(req.params.id);

    if (product) {
        return res.json(product);
    } else {
        //res.status(404).json({message: "Product not found."});
        res.status(404);
        throw new Error('Resource not found.');
    }


   

}));

export default router;