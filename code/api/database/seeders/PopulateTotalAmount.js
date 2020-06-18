const uuid = require('uuid').v4;
const _ = require('lodash');
const { TotalAmount } = require('../tables');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const totalAmount = await TotalAmount.findAll({ plain: true });
    // checker to run seed only once
    if (_.isEmpty(totalAmount))
      await queryInterface.bulkInsert(
        'total_amount',
        [
          {
            public_id: '57605591-4fa1-4171-b6b4-12296c7bd98c',
            amount_type: 'BALANCE',
            amount:0.1,
            deleted: false,
          },
          {
            public_id: '0eba8052-1f6a-4606-b534-5eeadc6e4abe',
            amount_type: 'INCOME',
            amount:0.0,
            deleted: false,
          },
          {
            public_id: '29842c35-3dbf-4c07-8a70-8cf70f37e469',
            amount_type: 'EXPENSE',
            amount:0.0,
            deleted: false,
          }
        ],
        {}
      );
  },

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('total_amount', null, {}),
};
