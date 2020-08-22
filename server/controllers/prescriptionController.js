const PrescriptionService = require('../services/prescriptionService');

exports.createPrescription = function (req, res, next) {
    PrescriptionService.createPrescription(req.body).then((prescription) => {
        return res.status(200).json({ status: 200, data: prescription });
    }).catch((error) => { 
        next(error); 
    });
}