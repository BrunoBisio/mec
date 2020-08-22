const PrescriptionService = require('../services/prescriptionService');

/* Create prescription */
exports.createPrescription = function (req, res, next) {
    PrescriptionService.createPrescription(req.body).then((prescription) => {
        return res.status(200).json({ status: 200, data: prescription });
    }).catch((error) => { 
        next(error); 
    });
}

/* update prescription */
exports.updatePrescription = function (req, res, next) {
    PrescriptionService.updatePrescription(req.params.id, req.body).then((prescriptionsUpdated) => {
        if (prescriptionsUpdated > 0) {
            return res.status(200).json({ status: 200, data: prescription });
        }
        next("No exciste una receta con ese ID");
    }).catch((error) => { 
        next(error);
    });
}

/* GET prescriptions that are yet to be approved */
exports.getPrescriptionsNotApproved = function (req, res, next) {
    PrescriptionService.getPrescriptionsNotApproved(req.pagination).then(function (results) {
        return res.status(200).json({ status: 200, data: pagination.generateResponse(results, req.pagination) });
    }).catch(function (error) {
        next(error);
    });
}

/* GET prescriptions by user. */
exports.getPrescriptionsByUser = function (req, res, next) {
    PrescriptionService.getPrescriptionByUserId(req.params.userId, req.pagination).then(function (results) {
        return res.status(200).json({ status: 200, data: pagination.generateResponse(results, req.pagination) });
    }).catch(function (error) {
        next(error);
    });
}

/* GET prescriptions by medic. */
exports.getPrescriptionByMedic = function (req, res, next) {
    PrescriptionService.getPrescriptionByMedicId(req.params.medicId, req.pagination).then(function (results) {
        return res.status(200).json({ status: 200, data: pagination.generateResponse(results, req.pagination) });
    }).catch(function (error) {
        next(error);
    });
}