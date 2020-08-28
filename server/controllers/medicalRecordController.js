const MedicalRecordService = require('../services/medicalRecordService');
const Pagination = require('../utils/paginationResponse');

/* GET MedicalRecord By User */
exports.getMedicalRecords = function (req, res, next) {
    MedicalRecordService.getMedicalRecord(req.pagination).then((result) => {
        res.send(Pagination.generateResponse(result, req.pagination));
    }).catch((error) => {
        next(error);
    });
}


/* GET MedicalRecord By User */
exports.getMedicalRecordsByPatientId = function (req, res, next) {
    MedicalRecordService.getMedicalRecordByPatient(req.params.id).then((result) => {
        res.send(result);
    }).catch((error) => {
        next(error);
    });
}

/* POST MedicalRecord. */
exports.createMedicalRecord = function (req, res, next) {
    MedicalRecordService.createMedicalRecord(req.body).then((medicalRecord) => {
        res.send(medicalRecord);
    }).catch((error) => {
        next(error);
    });
}

/* PUT MedicalRecord. */
exports.updateMedicalRecord = function (req, res, next) {
    MedicalRecordService.updateMedicalRecord(req.params.id, req.body).then((updated) => {
        if (updated === 1) {
            res.send(updated);
        } else {
            next("No se encontro ningun historial medico con ese ID");
        }
    }).catch((error) => {
        next(error);
    });
}