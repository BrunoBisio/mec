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
    allowNull: false,
    unique: 'compositeIndex'
  },
  DocTypeId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: 'compositeIndex'
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
      defaultValue: Sequelize.NOW
  },
  updatedAt: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.NOW
  },
  deleteRequest: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
}, {
  tableName: 'users',
  paranoid: true
});

User.belongsTo(role);
User.belongsTo(city);
User.belongsTo(docType, {foreignkey: User.rawAttributes.DocTypeId});
User.belongsTo(race);
User.belongsTo(plan);
docType.hasMany(User, {foreignkey: User.rawAttributes.DocTypeId});

module.exports = User;