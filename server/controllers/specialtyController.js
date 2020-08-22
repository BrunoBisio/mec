const SpecialtyService = require('../services/specialtyService');

exports.getSpecialties = function(_, res, next) {
    SpecialtyService.getSpecialties().then((values) => {
        return res.status(200).json({status: 200, data: values});
    }).catch((error) => {
        return res.status(400).json({status: 400, message: error.message });
    });
}