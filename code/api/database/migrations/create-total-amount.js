module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable(
        'total_amount',
        {
            id: {
              type: Sequelize.Sequelize.DataTypes.BIGINT,
              primaryKey: true,
              autoIncrement: true,
              unique: true,
            },
            publicId: {
              type: Sequelize.UUID,
              unique: false,
              field: 'public_id',
            },
            amountType: {
              type: Sequelize.DataTypes.STRING,
              field: 'amount_type',
            },
            amount: {
              type: Sequelize.DataTypes.FLOAT,
              field: 'amount',
            },
            deleted: {
              type: Sequelize.DataTypes.BOOLEAN,
              defaultValue: false,
            },
            createdOn: {
              type: Sequelize.DataTypes.DATE,
              allowNull: false,
              defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
              field: 'created_at',
            },
            createdBy: {
              type: Sequelize.DataTypes.UUID,
              field: 'created_by',
            },
            updatedOn: {
              type: Sequelize.DataTypes.DATE,
              allowNull: true,
              field: 'updated_at',
            },
            updatedBy: {
              type: Sequelize.DataTypes.UUID,
              field: 'updated_by',
            },
          },
          {
            underscored: true,
          }
      );
      return queryInterface.addIndex('total_amount', ['public_id']);
    },
  
    down: (queryInterface, Sequelize) => queryInterface.dropTable('total_amount'),
  };
  