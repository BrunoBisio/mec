const DocTypeService = require('../services/docTypeService');

exports.getDocTypes = function (_, res, next) {
    DocTypeService.getDocTypes().then((values) => {
        return res.status(200).json({ status: 200, data: values });
    }).catch((error) => {
        next(error);
    });
}
exports.getDocTypesWithPatient = function (_, res, next) {
    console.log("llego al metodo")
    DocTypeService.getDocTypesWithPatient().then((values) => {
        console.log("retorno al metodo")
        return res.status(200).json({ status: 200, data: values });
    }).catch((error) => {
        console.log("fallo al metodo")
        console.log(error)
        next(error);
    });
}
