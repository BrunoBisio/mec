const { Sequelize, DataTypes } = require('sequelize');
const db = require('../database');

const User = db.define('User', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
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
      type: Sequelize.DATE,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
  },
  updatedAt: {
      type: Sequelize.DATE,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
  }
}, {
  tableName: 'users',
  timestamps: false
});

// TODO: associate with rol, city, docType, race and plan
module.exports = User;