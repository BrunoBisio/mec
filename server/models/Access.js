const { Sequelize, DataTypes } = require('sequelize');
const db = require('../database');

const Access = db.define('Access', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nameAccess: {
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
    tableName: 'access',
    paranoid: true
});

module.exports = Access;