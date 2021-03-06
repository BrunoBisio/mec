const DocTypes = require('../models/DocType');
const User = require('../models/User');

exports.getDocTypes = function () {
    return DocTypes.findAll({
        attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] }
    });
}

exports.getDocTypesWithPatient = function () {
    return DocTypes.findAll({
        attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
        include: [{
            model:User,
            where: {RoleId: 4}
        }]
    });
}