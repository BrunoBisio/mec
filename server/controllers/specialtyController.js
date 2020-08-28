const SpecialtyService = require('../services/specialtyService');

exports.getSpecialties = function (_, res, next) {
    SpecialtyService.getSpecialties().then((values) => {
        res.send(values);
    }).catch((error) => {
        next(error);
    });
}


exports.getSpecialtiesWithClinicsWithMedics = function (_, res, next) {
    SpecialtyService.getSpecialtiesWithClinicsWithMedics().then((values) => {
        res.send(values);
    }).catch((error) => {
        next(error);
    });
}