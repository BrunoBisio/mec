const roleService = require('../services/roleService');

exports.getRoles = function (_, res, next) {
    roleService.getRoles().then((values) => {
        return res.status(200).json({ status: 200, data: values });
    }).catch((error) => {
        next(error);
    });
}