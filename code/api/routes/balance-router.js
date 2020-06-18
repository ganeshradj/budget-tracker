const express = require('express');

const router = new express.Router();
const BalanceController = require('../controllers/balance-controller');

router.get('/', BalanceController.GetAll);

module.exports = router;
