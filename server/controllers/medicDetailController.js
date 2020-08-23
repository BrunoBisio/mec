const medicDetailService = require('../services/medicDetailService');

exports.createMedicDetail = function(req, res, next){
    medicDetailService.createMedic(req.body).then((medicDetail) => {
        return res.status(200).json({ status: 200, data: medicDetail });
    }).catch((error) => {
        next(error);
    });
}