const SpecialtyService = require('../services/specialtyService');

exports.getSpecialties = function(_, res, next) {
    SpecialtyService.getSpecialties().then((values) => {
        return res.status(200).json({status: 200, data: values});
    }).catch((error) => {
        next(error);
    });
}