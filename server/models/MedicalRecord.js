const { Sequelize, DataTypes } = require('sequelize');
const db = require('../database');
const sequelize = new Sequelize('mysql::memory:');
const user = require('./User');
const mra = require('./MedicalRecordAppointment');

const MedicalRecord = db.define('MedicalRecord', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  allergyActive: {
    type: DataTypes.BOOLEAN
  },
  allergyDrug: {
    type: DataTypes.STRING
  },
  cardioActive: {
    type: DataTypes.BOOLEAN
  },
  cardioComment: {
    type: DataTypes.STRING
  },
  pulmonaryActive: {
    type: DataTypes.BOOLEAN
  },
  pulmonaryComment: {
    type: DataTypes.STRING
  },
  digestiveActive: {
    type: DataTypes.BOOLEAN
  },
  digestiveComment: {
    type: DataTypes.STRING
  },
  renalActive: {
    type: DataTypes.BOOLEAN
  },
  renalComment: {
    type: DataTypes.STRING
  },
  neurologicalActive: {
    type: DataTypes.BOOLEAN
  },
  neurologicalComment: {
    type: DataTypes.STRING
  },
  diabetesActive: {
    type: DataTypes.BOOLEAN
  },
  diabetesComment: {
    type: DataTypes.STRING
  },
  surgicalActive: {
    type: DataTypes.BOOLEAN
  },
  surgicalComment: {
    type: DataTypes.STRING
  },
  treatmentActive: {
    type: DataTypes.BOOLEAN
  },
  treatmentComment: {
    type: DataTypes.STRING
  },
  pregnancyActive: {
    type: DataTypes.BOOLEAN
  },
  pregnancyComment: {
    type: DataTypes.STRING
  },
  alcoholFreq: {
    type: DataTypes.TINYINT
  },
  alcoholComment: {
    type: DataTypes.STRING
  },
  tobaccoFreq: {
    type: DataTypes.TINYINT
  },
  tobacoComment: {
    type: DataTypes.STRING
  },
  drugsFreq: {
    type: DataTypes.TINYINT
  },
  drugsComment: {
    type: DataTypes.STRING
  },
  otherFreq: {
    type: DataTypes.TINYINT
  },
  otherComment: {
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
  tableName: 'medical_record',
  paranoid: true
});

MedicalRecord.belongsTo(user);

module.exports = MedicalRecord;