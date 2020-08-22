const MedicalRecord = require('../models/MedicalRecord');

exports.getMedicalRecordByPatient = function(patientId){
    return MedicalRecord.findOne({ 
        where: { UserId: patientId },
        attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] }
    });
}

exports.createMedicalRecord = function(medicalRecord) {
    return MedicalRecord.create(medicalRecord);
}

exports.updateMedicalRecord = function(medicalRecordId, medicalRecord) {
    return MedicalRecord.update(medicalRecord, {where: {id: medicalRecordId}});
}