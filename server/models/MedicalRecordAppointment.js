const { Sequelize, DataTypes } = require('sequelize');
const db = require('../database');
const medicDetail = require('./MedicDetail');

const MedicalRecordAppointment = db.define('MedicalRecordAppointment', {
    mraId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    date: {
        type: DataTypes.DATE
    },
    comment: {
        type: DataTypes.STRING
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
}, {
    tableName: 'medical_record_appointment'
});

MedicalRecordAppointment.belongsTo(medicDetail);

module.exports = MedicalRecordAppointment;