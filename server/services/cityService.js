const City = require('../models/City');

exports.getCities = function () {
    return City.findAll({
        attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] }
    });
}