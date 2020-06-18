const express = require('express');

const router = new express.Router();
const TransactionController = require('../controllers/transaction-controller');

router.post('/', TransactionController.add);
router.get('/', TransactionController.findAll);

module.exports = router;
