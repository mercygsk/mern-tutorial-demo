const express = require('express');
const router = express.Router();
const { 
    getProducts, 
    setProduct, 
    updateProduct, 
    deleteProduct 
} = require('../controllers/productController.js')

const { protect } = require('../middleware/authMiddleware');

router.get('/', protect, getProducts);

router.post('/', protect, setProduct);

router.put('/:id', protect, updateProduct);

router.delete('/:id', protect, deleteProduct);

module.exports = router;