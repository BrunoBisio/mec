const Role = require('../models/Role');

exports.getRoles = function () {
    return Role.findAll({
        attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] }
    });
}