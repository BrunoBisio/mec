const roleService = require('../services/roleService');
const Pagination = require('../utils/paginationResponse');

exports.getRoles = function (_, res, next) {
    roleService.getRoles().then((values) => {
        return res.status(200).json({ status: 200, data: Pagination.generateResponse(values, req.pagination) });
    }).catch((error) => {
        next(error);
    });
}


exports.getRolesById = function (req, res, next) {
    roleService.getRolesById(req.params.id).then((values) => {
        return res.status(200).json({ status: 200, data: values });
    }).catch((error) => {
        next(error);
    });
}


exports.postRole = function (req, res, next) {
    roleService.createRole(req.body).then((values) => {
        return res.status(200).json({ status: 200, data: values });
    }).catch((error) => {
        next(error);
    });
}


exports.updateRole = function (req, res, next) {
    roleService.updateRole(req.params.id, req.body).then((values) => {
        return res.status(200).json({ status: 200, data: values });
    }).catch((error) => {
        next(error);
    });
}