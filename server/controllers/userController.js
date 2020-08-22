const UserService = require('../services/userService');

/* GET users by id. */
exports.getUserById = function(req, res, next) {
    UserService.getById(req.params.id).then((user) => {
        return res.status(200).json({status: 200, data: user});
    }).catch((error) => {
        return res.status(400).json({status: 400, message: error.message });
    });
}

/* GET users */
exports.getUsers = function(_, res, next) {
    UserService.getUsers().then((users) => {
        return res.status(200).json({status: 200, data: users });
    }).catch((error) => {
        return res.status(500).json({status: 500, message: error.message });
    });
}

/* GET users by role id. */
exports.getUserByRoleId = function(req, res, next) {
    UserService.getUserByRoleId(req.params.roleId).then((user) => {
        return res.status(200).json({status: 200, data: user});
    }).catch((error) => {
        return res.status(400).json({status: 400, message: error.message });
    });
}

/* CREATE user. */
exports.createUser = function(req, res, next) {
    UserService.createUser(req.body).then((user) => {
        return res.status(200).json({status: 200, data: user});
    }).catch((error) => {
        return res.status(500).json({status: 500, message: error.message });
    });
}

/* UPDATE user */
exports.updateUser = function(req, res, next) {
    UserService.updateUser(req.params.id, req.body).then((user) => {
        return res.status(200).json({status: 200, data: user});
    }).catch((error) => {
        return res.status(500).json({status: 500, message: error.message });
    });
}