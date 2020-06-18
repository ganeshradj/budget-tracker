const _ = require('lodash');
const { Op } = require('sequelize');
const moment = require('moment');
const {
 Transaction,TotalAmount
} = require('../database/tables');

const TRNSACTIONTYPE={
  INCOME:1,
  EXPENSE:2,
  RUCCURING:3
};
class TransactionService {
  // GETALL /Amount
  static async create(TransactionData) {
    await Transaction.create(TransactionData);
    if(TransactionData.transactionType===TRNSACTIONTYPE.RUCCURING) {
      return true;
    }
    let query = {
      order: [
        ['id', 'ASC'],
      ]
    };
    let where =  { amountType: { [Op.in]: ['BALANCE','INCOME','EXPENSE'] }, deleted: false };
    query = { ...query, where };
    const TotalAmountModel = await TotalAmount.findAll(query);
    if(TransactionData.transactionType == TRNSACTIONTYPE.INCOME){
      TotalAmountModel[1].amount = TotalAmountModel[1].amount+Number.parseInt(TransactionData.amount);
      await TotalAmount.update({amount:TotalAmountModel[1].amount},{where:{ amountType: 'INCOME' }});
    } else if(TransactionData.transactionType == TRNSACTIONTYPE.EXPENSE){
      TotalAmountModel[2].amount = TotalAmountModel[2].amount+Number.parseInt(TransactionData.amount);
      await TotalAmount.update({amount:TotalAmountModel[2].amount},{where:{ amountType: 'EXPENSE' }});
    }
    const amount=TotalAmountModel[1].amount - TotalAmountModel[2].amount;
    await TotalAmount.update({amount},{where:{ amountType: 'BALANCE' }});
    return true;
  }

  static async findAll({ offset = 0, limit, startday, endday }) {
    const whereClause = {};

    if (startday!="undefined" && endday!="undefined") {
      const startOfDay = moment(startday)
        .startOf('day')
        .format();
      const endOfDay = moment(endday)
        .endOf('day')
        .format();
      whereClause.createdOn = {
        [Op.between]: [startOfDay, endOfDay],
      };
    }
    const {
      count: totalCount,
      rows: TransactionModel,
    } = await Transaction.findAndCountAll({
      where: whereClause,
      offset,
      limit,
    });

    return { totalCount, TransactionModel };
  }
}

module.exports = TransactionService;
