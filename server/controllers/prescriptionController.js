const PrescriptionService = require('../services/prescriptionService');
const stream = require('stream')

exports.uploadPrescription = function(req, res, next) {
    PrescriptionService.updatePrescription(req.params.id, {file: req.file.buffer, filename: req.file.originalname}).then((values) => {
        return res.status(200).json({status: 200, data: values});
    }).catch((error) => {
        next(error);
    });
}

exports.downloadPrescription = function(req, res, next) {
    PrescriptionService.getById(parseInt(req.params.id)).then((prescription) => {
        const readable = new stream.Readable()
        readable._read = () => {}
        readable.push(prescription.file)
        res.writeHead(200, {
            'Content-Type': 'application/octet-stream',
            'Content-Length': prescription.file.length,
        'Content-Disposition': `attachment; filename="${prescription.filename}"`});
        readable.pipe(res)
    }).catch((error) => {
        next(error);
    });
}

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