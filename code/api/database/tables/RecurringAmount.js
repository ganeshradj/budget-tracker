const Sequelize = require('sequelize');

module.exports = (db, DataTypes) => {
  const RecurringAmount = db.define(
    'recurring_amount',
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
      },
      publicId: {
        type: Sequelize.UUID,
        unique: false,
        field: 'public_id',
      },
      amount: {
        type: DataTypes.BIGINT,
        field: 'amount',
      },
      deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      createdOn: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        field: 'created_at',
      },
      createdBy: {
        type: DataTypes.UUID,
        field: 'created_by',
      },
      updatedOn: {
        type: DataTypes.DATE,
        allowNull: true,
        field: 'updated_at',
      },
      updatedBy: {
        type: DataTypes.UUID,
        field: 'updated_by',
      },
    },
    {
      tableName: 'recurring_amount',
      underscored: true,
    }
  );

  return RecurringAmount;
};
