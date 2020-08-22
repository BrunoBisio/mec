const DocTypeService = require('../services/docTypeService');

exports.getDocTypes = function (_, res, next) {
    DocTypeService.getDocTypes().then((values) => {
        return res.status(200).json({ status: 200, data: values });
    }).catch((error) => {
        next(error);
    });
}