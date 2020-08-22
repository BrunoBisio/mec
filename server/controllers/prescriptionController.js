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
