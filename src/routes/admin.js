const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminController = require('../controller/admin');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);
// /admin/product-list => GET
router.get('/products', adminController.getProducts);

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

module.exports = router;
