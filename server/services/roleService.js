const Role = require('../models/Role');

exports.getRoles = function () {
    return Role.findAll({ attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] } });
}

exports.getRolesList = function () {
    condition.attributes = { exclude: ['createdAt', 'updatedAt', 'deletedAt'] };
    return Role.findAndCountAll(condition);
}

exports.getRolesById = function (id) {
    return Role.findByPk(id, {include: [access]});
}

exports.createRole = function (role) {
    return Role.create(role);
}

exports.updateRole = function (roleId, roleUpdated) {
    return Role.update(roleUpdated, { where: { id: roleId } });
}