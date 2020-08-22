const User = require('../models/User');

exports.getById = function(id) {
    return User.findByPk(id);
}

exports.getUsers = function() {
    return User.findAll();
}

exports.getUserByRoleId = function(roleId) {
    return User.findAll({ where: { RoleId: roleId } });
}