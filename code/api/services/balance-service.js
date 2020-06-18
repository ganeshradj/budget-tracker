const _ = require('lodash');
const { Op } = require('sequelize');
const {
 TotalAmount
} = require('../database/tables');

const initialAttributes = [['public_id', 'id'], 'amountType','amount'];

class BalanceService {
  // GETALL /Amount
  static async GetAll() {
    let query = {
      attributes: initialAttributes,
      order: [
        ['id', 'ASC'],
      ]
    };
    let where =  { amountType: { [Op.in]: ['BALANCE','EXPENSE','INCOME'] }, deleted: false };
    query = { ...query, where };
    const allAmount = await TotalAmount.findAll(query);
    return allAmount;
  }

}

module.exports = BalanceService;
