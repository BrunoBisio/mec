const raceService = require('../services/raceService');
const Pagination = require('../utils/paginationResponse');

exports.getRaces = function (_, res, next) {
    raceService.getRaces().then((values) => {
        res.send(values);
    }).catch((error) => {
        next(error);
    });
}