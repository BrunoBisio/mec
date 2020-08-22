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
  alergiaActive: {
    type: DataTypes.BOOLEAN
  },
  alergiaMedicamento: {
    type: DataTypes.STRING
  },
  cardioActive: {
    type: DataTypes.BOOLEAN
  },
  cardioComment: {
    type: DataTypes.STRING
  },
  pulmonarActivo: {
    type: DataTypes.BOOLEAN
  },
  pulmonarComment: {
    type: DataTypes.STRING
  },
  digestivaActivo: {
    type: DataTypes.BOOLEAN
  },
  digestivaComment: {
    type: DataTypes.STRING
  },
  renalesActivo: {
    type: DataTypes.BOOLEAN
  },
  renalesComment: {
    type: DataTypes.STRING
  },
  neuronalesActivo: {
    type: DataTypes.BOOLEAN
  },
  neuronalesComment: {
    type: DataTypes.STRING
  },
  diabetesActivo: {
    type: DataTypes.BOOLEAN
  },
  diabetesComment: {
    type: DataTypes.STRING
  },
  quirurjicosActivo: {
    type: DataTypes.BOOLEAN
  },
  quirurjicosComment: {
    type: DataTypes.STRING
  },
  medicamentosActivo: {
    type: DataTypes.BOOLEAN
  },
  medicamentosComment: {
    type: DataTypes.STRING
  },
  embarazosActivo: {
    type: DataTypes.BOOLEAN
  },
  embarazosComment: {
    type: DataTypes.STRING
  },
  alcoholFreq: {
    type: DataTypes.TINYINT
  },
  alcoholComment: {
    type: DataTypes.STRING
  },
  tabacoFreq: {
    type: DataTypes.TINYINT
  },
  tabacoComment: {
    type: DataTypes.STRING
  },
  drogaFreq: {
    type: DataTypes.TINYINT
  },
  drogaComment: {
    type: DataTypes.STRING
  },
  otroFreq: {
    type: DataTypes.TINYINT
  },
  otroComment: {
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
});

MedicalRecord.belongsTo(user);
MedicalRecord.belongsTo(mra);

module.exports = MedicalRecord;