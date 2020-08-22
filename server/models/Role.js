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
        defaultValue: Sequelize.NOW
    },
    updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    }
}, {
    tableName: 'roles'
});

Role.belongsToMany(access, { through: roleXaccess });

module.exports = Role;