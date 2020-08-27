const Specialty = require('../models/Specialty');
const Clinic = require('../models/Clinic');
const User = require('../models/User');
const MedicDetail = require('../models/MedicDetail');
const { Op } = require("sequelize");

exports.getSpecialties = function () {
    return Specialty.findAll({
        attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] }
    });
}

exports.getSpecialtiesWithClinicsWithMedics = function () {
    return Specialty.findAll({
        attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
        include: {
            model: Clinic,
            exclude: ['MedicDetail'],
            through: {
                model:MedicDetail,
                attributes:[]},
            include: {
                model:User,
            where: { roleId: { [Op.not]: 4 }},
            exclude: ['MedicDetail'],
            through: {model:MedicDetail,
                attributes:[]},
            }
        }
    });
}