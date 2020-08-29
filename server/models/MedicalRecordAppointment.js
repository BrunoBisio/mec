const { Sequelize, DataTypes } = require('sequelize');
const db = require('../database');
const medicDetail = require('./MedicDetail');
const medicalRecord = require('./MedicalRecord');

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
        defaultValue: Sequelize.NOW
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    }
}, {
    tableName: 'medical_record_appointment',
    paranoid: true
});

MedicalRecordAppointment.belongsTo(medicalRecord);
medicalRecord.hasMany(MedicalRecordAppointment);
MedicalRecordAppointment.belongsTo(medicDetail);
medicDetail.hasMany(MedicalRecordAppointment);

module.exports = MedicalRecordAppointment;