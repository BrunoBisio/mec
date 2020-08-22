const Prescription = require('../models/Prescription');

exports.createPrescription = function (prescription) {
    return Prescription.create(prescription);
}