const { Sequelize, DataTypes } = require('sequelize');
const db = require('../database');
const role = require('./Role');
const city = require('./City');
const docType = require('./DocType');
const race = require('./Race');
const plan = require('./Plan');

const User = db.define('User', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  docNumber: {
    type: DataTypes.STRING,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING
  },
  lastName: {
    type: DataTypes.STRING
  },
  gender: {
    type: DataTypes.CHAR
  },
  birthdate: {
    type: DataTypes.DATE
  },
  address: {
    type: DataTypes.STRING
  },
  phone: {
    type: DataTypes.STRING
  },
  cellphone: {
    type: DataTypes.STRING
  },
  mail: {
    type: DataTypes.STRING
  },
  createdAt: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
  },
  updatedAt: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
  }
}, {
  tableName: 'users'
});

User.belongsTo(role);
User.belongsTo(city);
User.belongsTo(docType);
User.belongsTo(race);
User.belongsTo(plan);

module.exports = User;