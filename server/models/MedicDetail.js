const { Sequelize, DataTypes } = require('sequelize');
const db = require('../database');
const user = require('./User');
const clinic = require('./Clinic');
const specialty = require('./Specialty');

const MedicDetail = db.define('MedicDetail', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
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
    tableName: 'medic_detail',
    paranoid: true
});

MedicDetail.belongsTo(user);
MedicDetail.belongsTo(clinic);
MedicDetail.belongsTo(specialty);

module.exports = MedicDetail;