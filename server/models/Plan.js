const { Sequelize, DataTypes } = require('sequelize');
const db = require('../database');

const Plan = db.define('Plan', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    planCode: {
        type: DataTypes.STRING
    },
    planName: {
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
    tableName: 'plan'
});

module.exports = Plan;