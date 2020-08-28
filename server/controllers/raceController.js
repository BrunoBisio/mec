const raceService = require('../services/raceService');
const Pagination = require('../utils/paginationResponse');

exports.getRaces = function (_, res, next) {
    raceService.getRaces().then((values) => {
        return res.status(200).json({ status: 200, data: Pagination.generateResponse(values, req.pagination) });
    }).catch((error) => {
        next(error);
    });
}