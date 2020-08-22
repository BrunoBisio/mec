const Prescription = require('../models/Prescription');

exports.createPrescription = function (prescription) {
    return Prescription.create(prescription);
}

exports.updatePrescription = function (prescriptionId, prescription) {
    return Prescription.update(prescription, { where: { id: prescriptionId } });
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