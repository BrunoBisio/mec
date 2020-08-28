const PrescriptionService = require('../services/prescriptionService');
const Pagination = require('../utils/paginationResponse')
const stream = require('stream')

exports.uploadPrescription = function(req, res, next) {
    PrescriptionService.updatePrescription(req.params.id, {file: req.file.buffer, filename: req.file.originalname}).then((values) => {
        res.send(values);
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
        res.send(prescription);
    }).catch((error) => { 
        next(error); 
    });
}

/* update prescription */
exports.updatePrescription = function (req, res, next) {
    PrescriptionService.updatePrescription(req.params.id, req.body).then((prescriptionsUpdated) => {
        if (prescriptionsUpdated > 0) {
            res.send(prescriptionsUpdated);
        }
        next("No exciste una receta con ese ID");
    }).catch((error) => { 
        next(error);
    });
}

/* GET prescriptions that are yet to be approved */
exports.getPrescriptionsByState = function (req, res, next) {
    PrescriptionService.getPrescriptionsByState(req.params.state, req.pagination).then(function (results) {
        res.send(Pagination.generateResponse(results, req.pagination));
    }).catch(function (error) {
        next(error);
    });
}

/* GET prescriptions by user. */
exports.getPrescriptionsByUser = function (req, res, next) {
    PrescriptionService.getPrescriptionByUserId(req.params.userId, req.pagination).then(function (results) {
        res.send(Pagination.generateResponse(results, req.pagination));
    }).catch(function (error) {
        next(error);
    });
}

/* GET prescriptions by medic. */
exports.getPrescriptionByMedic = function (req, res, next) {
    PrescriptionService.getPrescriptionByMedicId(req.params.medicId, req.pagination).then(function (results) {
        res.send(Pagination.generateResponse(results, req.pagination));
    }).catch(function (error) {
        next(error);
    });
}



/* GET prescriptions by medic. */
exports.getPrescriptionBySpecialty = function (req, res, next) {
    PrescriptionService.getPrescriptionByMedicId(req.params.specialtyId, req.pagination).then(function (results) {
        res.send(Pagination.generateResponse(results, req.pagination));
    }).catch(function (error) {
        next(error);
    });
}


/* GET prescriptions by medic. */
exports.getPrescriptions = function (req, res, next) {
    PrescriptionService.getPrescriptions(req.pagination).then(function (results) {
        res.send(Pagination.generateResponse(results, req.pagination));
    }).catch(function (error) {
        next(error);
    });
}