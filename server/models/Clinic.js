const { Sequelize, DataTypes } = require('sequelize');
const db = require('../database');
const city = require('./City');

const Clinic = db.define('Clinic', {
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
    tableName: 'clinics'
});

Clinic.belongsTo(city);

module.exports = Clinic;