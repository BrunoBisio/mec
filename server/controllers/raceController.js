const raceService = require('../services/raceService');

exports.getRaces = function (_, res, next) {
    raceService.getRaces().then((values) => {
        return res.status(200).json({ status: 200, data: values });
    }).catch((error) => {
        next(error);
    });
}