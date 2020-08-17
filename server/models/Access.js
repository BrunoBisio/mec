const { Sequelize, DataTypes } = require('sequelize');
const db = require('../database');

const Access = db.define('Access', {
    accessId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    nameAccess: {
        type: DataTypes.STRING
    },
    createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    }
}, {
    tableName: 'access'
});

module.exports = Access;