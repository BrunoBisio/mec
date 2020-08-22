const { Sequelize, DataTypes } = require('sequelize');
const db = require('../database');
const user = require('./User');
const medicDetail = require('./MedicDetail');

const Appointment = db.define('Appointment', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    startHour: {
        type: DataTypes.TIME
    },
    endHour: {
        type: DataTypes.TIME
    },
    completed: {
        type: DataTypes.BOOLEAN
    },
    createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    },
    updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    }
}, {
    tableName: 'appointment'
});

Appointment.belongsTo(user);
Appointment.belongsTo(medicDetail);

module.exports = Appointment;