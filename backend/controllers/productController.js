import asyncHandler from "../middleware/asyncHandler.js";
import Product from '../models/productModel.js';

//@desc fetch all products
//@route get/api/products
//@access public
const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);

});


//@desc fetch all product by id
//@route get/api/products/:id
//@access public
const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
        return res.json(product);
    } else {
        //res.status(404).json({message: "Product not found."});
        res.status(404);
        throw new Error('Resource not found.');
    }

});

export {getProducts, getProductById};