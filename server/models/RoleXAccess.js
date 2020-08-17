const { Sequelize, DataTypes } = require('sequelize');
const db = require('../database');
const role = require('./Role');
const access = require('./Access');

const RoleXAccess = db.define('RoleXAccess', {
    roleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    createdAt: {
        type: Sequelize.DATE,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
        type: Sequelize.DATE,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
},{
    tableName: 'roleXaccess'
});

RoleXAccess.belongsTo(role);
RoleXAccess.belongsTo(access);

module.exports = RoleXAccess;