const roleService = require('../services/roleService');
const Pagination = require('../utils/paginationResponse');

exports.getRoles = function (_, res, next) {
    roleService.getRoles().then((values) => {
        res.send(Pagination.generateResponse(values, req.pagination));
    }).catch((error) => {
        next(error);
    });
}


exports.getRolesById = function (req, res, next) {
    roleService.getRolesById(req.params.id).then((values) => {
        res.send(Pagination.generateResponse(values, req.pagination));
    }).catch((error) => {
        next(error);
    });
}


exports.postRole = function (req, res, next) {
    roleService.createRole(req.body).then((values) => {
        res.send(Pagination.generateResponse(values, req.pagination));
    }).catch((error) => {
        next(error);
    });
}


exports.updateRole = function (req, res, next) {
    roleService.updateRole(req.params.id, req.body).then((values) => {
        res.send(Pagination.generateResponse(values, req.pagination));
    }).catch((error) => {
        next(error);
    });
}