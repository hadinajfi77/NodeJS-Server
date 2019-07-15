const path = require('path');

const express = require('express');

const shopController = require('../controller/shop');

const router = express.Router();

router.get('/', shopController.getIndex);
router.get('/cart', shopController.getCart);
router.post('/cart', shopController.postCart);
router.get('/orders', shopController.getOrders);
router.get('/products', shopController.getProducts);
router.get('/checkout', shopController.getCheckout);
router.get('/products/delete');
router.get('/products/:productId', shopController.getProduct);

module.exports = router;
