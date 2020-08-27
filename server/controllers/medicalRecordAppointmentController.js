const MedicalRecordService = require('../services/medicalRecordService');

/* GET MedicalRecord By User */
exports.getMedicalRecordAppointment = function (req, res, next) {
    MedicalRecordService.getMedicalRecordAppointment(req.params.roleId).then((result) => {
        return res.status(200).json({ status: 200, data: result });
    }).catch((error) => {
        next(error);
    });
}

/* POST MedicalRecord. */
exports.createMedicalRecordAppointment = function (req, res, next) {
    MedicalRecordService.createMedicalRecordAppointment(req.body).then((medicalRecord) => {
        return res.status(200).json({ status: 200, data: medicalRecord });
    }).catch((error) => {
        next(error);
    });
}

/* PUT MedicalRecord. */
exports.updateMedicalRecordAppointment = function (req, res, next) {
    MedicalRecordService.updateMedicalRecordAppointment(req.params.id, req.body).then((updated) => {
        if (updated === 1) {
            return res.status(200).json({ status: 200, data: req.body });
        } else {
            next("No se encontro ningun historial medico con ese ID");
        }
    }).catch((error) => {
        next(error);
    });
}