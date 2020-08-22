const { Sequelize, DataTypes } = require('sequelize');
const db = require('../database');
const user = require('./User');
const medicDetail = require('./MedicDetail');

const Prescription = db.define('Prescription', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    date: {
        type: DataTypes.STRING
    },
    drug: {
        type: DataTypes.STRING
    },
    comment: {
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
    tableName: 'prescription'
});

Appointment.belongsTo(user);
Appointment.belongsTo(medicDetail);

module.exports = Prescription;