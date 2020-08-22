const MedicalRecordService = require('../services/medicalRecordService');

/* GET MedicalRecord By User */
exports.getMedicalRecordsByPatientId = function (req, res, next) {
    MedicalRecordService.getMedicalRecordByPatient(req.params.roleId).then(function (result) {
        return res.status(200).json({ status: 200, data: result });
    }, function (error) {
        next(error);
    });
}

/* POST MedicalRecord. */
exports.createMedicalRecord = function (req, res, next) {
    MedicalRecordService.createMedicalRecord(req.body).then(function (medicalRecord) {
        return res.status(200).json({ status: 200, data: medicalRecord });
    }).catch(function (error) {
        next(error);
    });
}

/* PUT MedicalRecord. */
exports.updateMedicalRecord = function (req, res, next) {
    MedicalRecordService.updateMedicalRecord(req.params.id, req.body).then(function (updated) {
        if (updated === 1) {
            return res.status(200).json({ status: 200, data: medicalRecord });
        } else {
            next("No se encontro ningun historial medico con ese ID");
        }
    }).catch(function (error) {
        next(error);
    });
}