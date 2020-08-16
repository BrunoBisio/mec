const { Sequelize, DataTypes } = require('sequelize');
const db = require('../database');
const sequelize = new Sequelize('mysql::memory:');

const User = db.define('User', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
  }
}, {
  tableName: 'User',
  timestamps: false
});

module.exports = User;