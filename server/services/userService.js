const User = require('../models/User');

exports.getById = function (id) {
    return User.findByPk(id);
}

exports.getUsers = function (condition) {
    return User.findAll(condition);
}

exports.getUserByRoleId = function (roleId, condition) {
    condition.where = { RoleId: roleId }
    return User.findAll(condition);
}

exports.createUser = function (user) {
    return User.create(user);
}

exports.updateUser = function (userId, userUpdated) {
    return User.update(userUpdated, { where: { id: userId } });
}