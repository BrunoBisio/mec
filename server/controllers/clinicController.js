const ClinicService = require('../services/clinicService');

exports.getClinics = function (_, res, next) {
    ClinicService.getClinics().then((values) => {
        return res.status(200).json({ status: 200, data: values });
    }).catch((error) => {
        next(error);
    });
}