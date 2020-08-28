const medicDetailService = require('../services/medicDetailService');

exports.createMedicDetail = function(req, res, next){
    medicDetailService.createMedic(req.body).then((medicDetail) => {
        res.send(medicDetail);
    }).catch((error) => {
        next(error);
    });
}