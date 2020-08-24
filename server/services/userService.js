const User = require('../models/User');
const { Op } = require("sequelize");

exports.getById = function (id) {
    return User.findByPk(id, {
        include: [
            { model: Role },
            { model: City },
            { model: DocType },
            { model: Race },
            { model: Plan }
        ]
    });
}

exports.getUsers = function (condition) {
    return User.findAndCountAll(condition);
}

exports.getUserByRoleId = function (roleId, condition) {
    condition.where = { RoleId: roleId }
    return User.findAndCountAll(condition);
}

exports.createUser = function (user) {
    return User.create(user);
}

exports.updateUser = function (userId, userUpdated) {
    return User.update(userUpdated, { where: { id: userId } });
}

exports.getUserForDelete = function(condition) {
    condition.where = { [Op.and]: [
        { deleteRequest: true },
        { deletedAt: null }
      ]}
    return User.findAndCountAll(condition);
}

exports.deleteUser = function(userId) {
    return User.destroy({ where: { id: userId } });
}