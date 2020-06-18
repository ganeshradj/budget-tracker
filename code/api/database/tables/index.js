const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const { camelCase } = require('lodash');

const basename = path.basename(__filename);
const sequelize = require('../connection');

const db = {};

fs.readdirSync(__dirname)
  .filter(
    file =>
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
  )
  .forEach(file => {
    // convert snake cased model names to camel case with first letters uppercased
    const model = sequelize.import(path.join(__dirname, file));
    const camelCased = camelCase(model.name);
    const upperFirstLetter = camelCased.charAt(0).toUpperCase();
    const modelName = upperFirstLetter + camelCased.slice(1);
    db[modelName] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
    if (db.loadScopes in db[modelName]) db[modelName].loadScopes(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
