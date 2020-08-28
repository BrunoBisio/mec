const DocTypeService = require('../services/docTypeService');

exports.getDocTypes = function (_, res, next) {
    DocTypeService.getDocTypes().then((values) => {
        res.send(values);
    }).catch((error) => {
        next(error);
    });
}
exports.getDocTypesWithPatient = function (_, res, next) {
    DocTypeService.getDocTypesWithPatient().then((values) => {
        res.send(values);
    }).catch((error) => {
        next(error);
    });
}
