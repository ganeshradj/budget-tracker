const Sequelize = require('sequelize');

module.exports = (db, DataTypes) => {
  const TotalAmount = db.define(
    'total_amount',
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
      amountType: {
        type: DataTypes.STRING,
        field: 'amount_type',
      },
      amount: {
        type: DataTypes.FLOAT,
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
      tableName: 'total_amount',
      underscored: true,
    }
  );

  return TotalAmount;
};
