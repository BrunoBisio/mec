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
        defaultValue: Sequelize.NOW
    },
    updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    }
},{
    tableName: 'roleXaccess',
    paranoid: true
});

module.exports = RoleXAccess;