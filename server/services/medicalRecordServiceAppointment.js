const MedicalRecordAppointment = require('../models/MedicalRecordAppointment');

exports.getMedicalRecordAppointment = function (patientId) {
    const condition = {};
    condition.where = { UserId: patientId};
    condition.attributes = { exclude: ['createdAt', 'updatedAt', 'deletedAt'] };
    return MedicalRecordAppointment.findAndCountAll(condition);
}

exports.createMedicalRecordAppointment = function (medicalRecord) {
    return MedicalRecordAppointment.create(medicalRecord);
}

exports.updateMedicalRecordAppointment = function (medicalRecordId, medicalRecord) {
    return MedicalRecord.update(medicalRecord, { where: { id: medicalRecordId } });
}