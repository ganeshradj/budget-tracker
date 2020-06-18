const BalanceService = require('../services/balance-service');

class BalanceController {
  static async GetAll(req, res, next) {

    const balanceData = await BalanceService.GetAll();

    if (!balanceData) return res.notFound();

    res.status(200).send(balanceData);
  }
}

module.exports = BalanceController;
