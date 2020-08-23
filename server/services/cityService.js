const City = require('../models/City');

exports.getCity = function () {
    return City.findAll({
        attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] }
    });
}