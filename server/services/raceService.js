const Race = require('../models/Race');

exports.getRaces = function () {
    return Race.findAll({
        attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] }
    });
}