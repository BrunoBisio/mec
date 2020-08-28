const ClinicService = require('../services/clinicService');

exports.getClinics = function (_, res, next) {
    ClinicService.getClinics().then((values) => {
        res.send(values);
    }).catch((error) => {
        next(error);
    });
}