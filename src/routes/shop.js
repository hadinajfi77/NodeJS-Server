const path = require('path');

const express = require('express');

const shopController = require('../controller/shop');

const router = express.Router();

router.get('/', shopController.getIndex);
router.get('/cart', shopController.getCart);
router.get('/products', shopController.getProducts);
router.get('/checkout', shopController.getCheckout);

module.exports = router;
