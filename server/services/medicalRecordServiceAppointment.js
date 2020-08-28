const MedicalRecordAppointment = require('../models/MedicalRecordAppointment');

exports.getMedicalRecordAppointment = function (patientId) {
    return MedicalRecordAppointment.findAndCountAll({
        attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] }
    });
}

exports.createMedicalRecordAppointment = function (medicalRecord) {
    return MedicalRecordAppointment.create(medicalRecord);
}

exports.updateMedicalRecordAppointment = function (medicalRecordId, medicalRecord) {
    return MedicalRecord.update(medicalRecord, { where: { id: medicalRecordId } });
}