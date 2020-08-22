const { Sequelize, DataTypes } = require('sequelize');
const db = require('../database');
const medicDetail = require('./MedicDetail');

const MedicalRecordAppointment = db.define('MedicalRecordAppointment', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    date: {
        type: DataTypes.DATE
    },
    comment: {
        type: DataTypes.STRING
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    }
}, {
    tableName: 'medical_record_appointment'
});

MedicalRecordAppointment.belongsTo(medicDetail);

module.exports = MedicalRecordAppointment;