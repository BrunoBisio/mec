const cityService = require('../services/cityService');

exports.getCities = function (_, res, next) {
    cityService.getCities().then((values) => {
        res.send(values);
    }).catch((error) => {
        next(error);
    });
}