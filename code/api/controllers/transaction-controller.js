const TransactionService = require('../services/transaction-service');

class TransactionController {
  static async add(req, res, next) {
    const transactionData = { ...req.body };

    const transactionDataNew = await TransactionService.create(transactionData);

    res.status(201).send(transactionDataNew);
  }
  static async findAll(req, res, next) {
    const {
      offset,
      limit,
      startday,
      endday
    } = req.query;
    const transactionDataNew = await TransactionService.findAll({
      startday,
      endday
    });

    res.status(201).send(transactionDataNew);
  }
  
}

module.exports = TransactionController;
