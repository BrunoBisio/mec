const appointment = require('../models/Appointment');

exports.getAppointmentsByUser = function(userId) {
    return appointment.findAll({where:{UserId: userId}});
}