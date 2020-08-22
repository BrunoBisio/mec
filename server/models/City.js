const { Sequelize, DataTypes } = require('sequelize');
const db = require('../database');

const City = db.define('City', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    },
    updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    }
}, {
    tableName: 'city',
    paranoid: true
});

module.exports = City;