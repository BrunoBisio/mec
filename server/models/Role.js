const { Sequelize, DataTypes } = require('sequelize');
const db = require('../database');
const roleXaccess = require('./RoleXAccess');
const access = require('./Access');

const Role = db.define('Role', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nameRole: {
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
    tableName: 'roles'
});

Role.belongsToMany(access, { through: roleXaccess });

module.exports = Role;