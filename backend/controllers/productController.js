const asyncHandler = require('express-async-handler');

const Product = require('../models/productModel');
const User = require('../models/userModel');

// @desc    Get products
// @route   GET /api/products
// @access  Private

const getProducts = asyncHandler (async (req, res) => {
    const products = await Product.find({});
    res.status(200).json(products);
})

// set products CREATE
const setProduct = asyncHandler (async (req, res) => {
    if(!req.body.name) {
        res.status(400);
        throw new Error ("Please add a product name");        
    }
    const product = await Product.create({
        name: req.body.name,
        price: req.body.price
    })
    res.status(200).json(product);
})


// @desc    Update Product
// @route   PUT /api/products/:id
// @access  Private
const updateProduct = asyncHandler (async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
        res.status(400);
        throw new Error('Product not found');
    }

    const updateProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(updateProduct);
})

// @desc    Delete products
// @route   DELETE /api/products/:id
// @access  Private
const deleteProduct = asyncHandler (async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
        res.status(400);
        throw new Error('Goal not found');
    }
    
    const deleteProduct = await Product.findByIdAndDelete(req.params.id);
    // res.status(200).json(deleteProduct);
    res.status(200).json({ id: req.params.id})
})

module.exports = {
    getProducts,
    setProduct,
    updateProduct,
    deleteProduct
}