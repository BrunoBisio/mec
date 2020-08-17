const { Sequelize, DataTypes } = require('sequelize');
const db = require('../database');
const user = require('./User');
const clinic = require('./Clinic');
const specialty = require('./Specialty');

const MedicDetail = db.define('MedicDetail', {
    medicDetailId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    }
}, {
    tableName: 'medic_detail'
});

MedicDetail.belongsTo(user);
MedicDetail.belongsTo(clinic);
MedicDetail.belongsTo(specialty);

module.exports = MedicDetail;