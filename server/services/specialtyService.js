const Specialty = require('../models/Specialty');

exports.getSpecialties = function() {
    return Specialty.findAll();
}