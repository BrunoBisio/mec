const Appointment = require('../models/Appointment');
const MedicDetail = require('../models/MedicDetail');
const User = require('../models/User');
const { Op } = require("sequelize");

exports.getAppointmentsByUser = function(userId) {
    return Appointment.findAll({where:{UserId: userId}, include: [User]});
}

exports.getAppointmentsWithoutUser = function() {
    return Appointment.findAll({where:{UserId: null}});
}

exports.getAppointmentsWithUser = function() {
    return Appointment.findAll({where:{UserId: {[Op.not]: null}}});
}

exports.getAppointmentsWithMedicAndUser = function() {
    return Appointment.findAll({where:{UserId: {[Op.not]: null}, MedicDetailId: {[Op.not]: null}}, include: [User]});
}

exports.getAppointmentsByMedicAndWithUser = function(medic) {
    return Appointment.findAll({where:{UserId: {[Op.not]: null}, MedicDetailId: {[Op.not]: null}}, include: [User, {model: MedicDetail, where: {medicId: medic}}]});
}

exports.getAppointmentsByMedic = function(medic) {
    return Appointment.findAll({include: [User, {model: MedicDetail, where: {medicId: medic}}]});
}