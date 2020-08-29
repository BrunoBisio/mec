const Appointment = require('../models/Appointment');
const MedicDetail = require('../models/MedicDetail');
const User = require('../models/User');
const Specialty = require('../models/Specialty');
const { Op } = require("sequelize");

exports.getAppointmentsByUser = function (userId, condition) {
    condition.where = { UserId: userId }
    condition.include = [
        { model: User },
        { model: MedicDetail, include: [ {model: User}, {model: Specialty} ] }
    ]
    return Appointment.findAndCountAll(condition);
}

exports.getAppointments = function (condition) {
    condition.include = [User, MedicDetail]
    return Appointment.findAndCountAll(condition);
}

exports.getAppointmentsWithoutUser = function (condition) {
    condition.where = { UserId: null }
    return Appointment.findAndCountAll(condition);
}

exports.getAppointmentsWithUser = function (condition) {
    condition.where = { UserId: { [Op.not]: null } }
    return Appointment.findAndCountAll(condition);
}

exports.getAppointmentsWithMedicAndUser = function (condition) {
    condition.where = { UserId: { [Op.not]: null }, MedicDetailId: { [Op.not]: null } }
    condition.include = [User]
    return Appointment.findAndCountAll(condition);
}

exports.getAppointmentsByMedicAndWithUser = function (medic, condition) {
    condition.where = { UserId: { [Op.not]: null }, MedicDetailId: { [Op.not]: null } }
    condition.include = [User, { model: MedicDetail, where: { medicId: medic } }]
    return Appointment.findAndCountAll(condition);
}

exports.getAppointmentsByMedic = function (medic, condition) {
    condition.include = [User, { model: MedicDetail, where: { medicId: medic } }]
    return Appointment.findAndCountAll(condition);
}

exports.createAppointment = function (appointment) {
    return Appointment.create(appointment);
}
exports.updateAppointment = function (appointmentId, appointment) {
    return Appointment.update(appointment, { where: { id: appointmentId } });
}

exports.deleteAppointment = function (appointmentId) {
    return Appointment.destroy({ where: { id: appointmentId } });
}