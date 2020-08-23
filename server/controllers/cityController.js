const cityService = require('../services/cityService');

exports.getCities = function (_, res, next) {
    cityService.getCities().then((values) => {
        return res.status(200).json({ status: 200, data: values });
    }).catch((error) => {
        next(error);
    });
}