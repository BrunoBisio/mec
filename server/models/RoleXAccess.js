const { Sequelize, DataTypes } = require('sequelize');
const db = require('../database');
const role = require('./Role');
const access = require('./Access');

const RoleXAccess = db.define('RoleXAccess', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    }
},{
    tableName: 'roleXaccess'
});

module.exports = RoleXAccess;