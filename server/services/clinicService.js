const Clinic = require('../models/Clinic');

exports.getClinics = function () {
    return Clinic.findAll({
        attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] }
    });
}