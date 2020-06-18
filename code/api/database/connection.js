const Sequelize = require('sequelize');
const uuid = require('uuid').v4;
const {
  DB: { DB_CONNECTION },
} = require('../config');

const sequelize = new Sequelize(DB_CONNECTION, {
  dialect: 'postgres',
  logging: false, // console.log,
  native: false, // Enable SSL
  // To enable Locking rows for longer than default
  pool: {
    max: process.env.NODE_ENV === 'production' ? 100 : 50,
    min: 0,
    acquire: 100 * 1000,
  },
  define: {
    underscored: false,
    freezeTableName: false,
    charset: 'utf8',
    dialectOptions: {
      collate: 'utf8_general_ci',
    },
    timestamps: false,
    hooks: {
      beforeCreate: (model, options) => {
        model.publicId = uuid(); // id represents the public_id
      },
      beforeUpdate: (model, options) => {
        model.updatedOn = Sequelize.literal('CURRENT_TIMESTAMP');
      },
    },
  },
});

module.exports = sequelize;
