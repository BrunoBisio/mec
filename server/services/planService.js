const Plan = require('../models/Plan');

exports.getPlans = function () {
    return Plan.findAll({
        attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] }
    });
}