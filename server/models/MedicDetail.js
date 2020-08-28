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
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    },
    updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    }
}, {
    tableName: 'medic_detail',
    paranoid: true
});

MedicDetail.belongsTo(user);
user.hasMany(MedicDetail);
user.belongsToMany(clinic,  {through: {model:MedicDetail, unique: false}})
user.belongsToMany(specialty,  {through: {model:MedicDetail, unique: false}})
MedicDetail.belongsTo(clinic);
clinic.hasMany(MedicDetail);
clinic.belongsToMany(user,  {through: {model:MedicDetail, unique: false}})
clinic.belongsToMany(specialty,  {through: {model:MedicDetail, unique: false}})
MedicDetail.belongsTo(specialty);
specialty.hasMany(MedicDetail);
specialty.belongsToMany(user,  {through: {model:MedicDetail, unique: false}})
specialty.belongsToMany(clinic,  {through: {model:MedicDetail, unique: false}})

module.exports = MedicDetail;