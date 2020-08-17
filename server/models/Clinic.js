const { Sequelize, DataTypes } = require('sequelize');
const db = require('../database');
const city = require('./City');

const Clinic = db.define('Clinic', {
    clinicId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
        type: DataTypes.STRING
    },
    createdAt: {
        type: Sequelize.DATE,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
        type: Sequelize.DATE,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
}, {
    tableName: 'clinics'
});

Clinic.belongsTo(city);
module.exports = Clinic;