const appointment = require('../models/Appointment');

exports.getAppointmentsByUser = function(userId) {
    return appointment.findAll({where:{UserId: userId}});
}

exports.getAppointmentsWithoutUser = function() {
    return appointment.findAll({where:{UserId: null}});
}