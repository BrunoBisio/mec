const MedicalRecordService = require('../services/medicalRecordServiceAppointment');

/* GET MedicalRecord By User */
exports.getMedicalRecordAppointment = function (req, res, next) {
    MedicalRecordService.getMedicalRecordAppointment(req.params.roleId).then((result) => {
        res.send(result);
    }).catch((error) => {
        next(error);
    });
}

/* POST MedicalRecord. */
exports.createMedicalRecordAppointment = function (req, res, next) {
    MedicalRecordService.createMedicalRecordAppointment(req.body).then((medicalRecord) => {
        res.send(medicalRecord);
    }).catch((error) => {
        next(error);
    });
}

/* PUT MedicalRecord. */
exports.updateMedicalRecordAppointment = function (req, res, next) {
    MedicalRecordService.updateMedicalRecordAppointment(req.params.id, req.body).then((updated) => {
        if (updated === 1) {
            res.send(req.body);
        } else {
            next("No se encontro ningun historial medico con ese ID");
        }
    }).catch((error) => {
        next(error);
    });
}