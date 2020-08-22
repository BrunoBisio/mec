const Prescription = require('../models/Prescription');
const MedicDetail = require('../models/MedicDetail');
const User = require('../models/User');
const { Op } = require("sequelize");

exports.updatePrescription = function(prescriptionId, prescription) {
    return Prescription.update(prescription, {where: {id: prescriptionId}});
}


exports.getById = function(id) {
    return Prescription.findByPk(id);
}

exports.createPrescription = function (prescription) {
    return Prescription.create(prescription);
}