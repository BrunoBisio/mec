const UserService = require('../services/userService');
const Pagination = require('../utils/paginationResponse');

/* GET users by id. */
exports.getUserById = function (req, res, next) {
    UserService.getById(req.params.id).then((user) => {
        return res.status(200).json({ status: 200, data: user });
    }).catch((error) => {
        next(error);
    });
}

/* GET users */
exports.getUsers = function (req, res, next) {
    UserService.getUsers(req.pagination).then((users) => {
        return res.status(200).json({ status: 200, data: Pagination.generateResponse(users, req.pagination) });
    }).catch((error) => {
        next(error);
    });
}

/* GET users by role id. */
exports.getUserByRoleId = function (req, res, next) {
    UserService.getUserByRoleId(req.params.roleId, req.pagination).then((users) => {
        return res.status(200).json({ status: 200, data: Pagination.generateResponse(users, req.pagination) });
    }).catch((error) => {
        next(error);
    });
}

/* CREATE user. */
exports.createUser = function (req, res, next) {
    UserService.createUser(req.body).then((user) => {
        return res.status(200).json({ status: 200, data: user });
    }).catch((error) => {
        next(error);
    });
}

/* UPDATE user */
exports.updateUser = function (req, res, next) {
    UserService.updateUser(req.params.id, req.body).then((user) => {
        return res.status(200).json({ status: 200, data: user });
    }).catch((error) => {
        next(error);
    });
}