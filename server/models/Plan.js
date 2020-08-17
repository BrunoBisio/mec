const { Sequelize, DataTypes } = require('sequelize');
const db = require('../database');

const Plan = db.define('Plan', {
    planId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    planCode: {
        type: DataTypes.STRING
    },
    planName: {
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
    tableName: 'plan'
});

module.exports = Plan;