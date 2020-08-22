const UserService = require('../services/userService');

/* GET users by id. */
exports.getUserById = function(req, res, next) {
    UserService.getById(req.params.id).then((user) => {
        return res.status(200).json({status: 200, data: user});
    }).catch((error) => {
        return res.status(400).json({status: 400, message: error.message });
    });
}

exports.getUsers = function(_, res, next) {
    UserService.getUsers().then((users) => {
        return res.status(200).json({status: 200, data: users });
    }).catch((error) => {
        return res.status(400).json({status: 400, message: error.message });
    });
}

exports.getUserByRoleId = function(req, res, next) {
    UserService.getUserByRoleId(req.params.id).then((user) => {
        return res.status(200).json({status: 200, data: user});
    }).catch((error) => {
        return res.status(400).json({status: 400, message: error.message });
    });
}