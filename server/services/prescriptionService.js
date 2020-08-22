const Prescription = require('../models/Prescription');
const MedicDetail = require('../models/MedicDetail');
const User = require('../models/User');
const { Op } = require("sequelize");

exports.updatePrescription = function (prescriptionId, prescription) {
    return Prescription.update(prescription, { where: { id: prescriptionId } });
}

exports.getById = function (id) {
    return Prescription.findByPk(id);
}

exports.createPrescription = function (prescription) {
    return Prescription.create(prescription);
}

exports.getPrescriptionsNotApproved = function (condition) {
    condition.where = { approved: false }
    return Prescription.findAndCountAll(condition);
}

exports.getPrescriptionByUserId = function (userId, condition) {
    condition.where = { UserId: userId }
    return Prescription.findAndCountAll(condition);
}

exports.getPrescriptionByMedicId = function (medicId, condition) {
    condition.include = [{ model: MedicDetail, where: { UserId: medicId } }]
    return Prescription.findAndCountAll(condition);
}