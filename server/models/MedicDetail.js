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
user.hasMany(MedicDetail);
user.belongsToMany(clinic,  {through: MedicDetail})
user.belongsToMany(specialty,  {through: MedicDetail})
MedicDetail.belongsTo(clinic);
clinic.hasMany(MedicDetail);
clinic.belongsToMany(user,  {through: MedicDetail})
clinic.belongsToMany(specialty,  {through: MedicDetail})
MedicDetail.belongsTo(specialty);
specialty.hasMany(MedicDetail);
specialty.belongsToMany(user,  {through: MedicDetail})
specialty.belongsToMany(clinic,  {through: MedicDetail})

module.exports = MedicDetail;