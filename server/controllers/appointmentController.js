const appointmentService = require('../services/appointmentService');
const pagination = require('../utils/paginationResponse')

/* GET appointments by user. */
exports.getAppointmentsByUser = function(req, res, next) {
    appointmentService.getAppointmentsByUser(req.params.userId, req.pagination).then(function(results){
        res.send(pagination.generateResponse(results, req.pagination));
    }, function(error) {
       next(error);
    });
  }


/* GET appointments without user. */
exports.getAppointmentsWithoutUser = function(req, res, next) {
    appointmentService.getAppointmentsWithoutUser(req.pagination).then(function(results){
      res.send(pagination.generateResponse(results, req.pagination));
    }).catch(function(error) {
        next(error);
    });
  }



  /* GET appointments with any user. */
exports.getAppointmentsWithUser = function(req, res, next) {
    appointmentService.getAppointmentsWithUser(req.pagination).then(function(results){
        res.send(pagination.generateResponse(results, req.pagination));
    }, function(error) {
        next(error);
    });
  }
/* GET appointments with any medic and user. */
exports.getAppointmentsWithMedicAndUser = function(req, res, next) {
    appointmentService.getAppointmentsWithMedicAndUser(req.pagination).then(function(results){
        res.send(pagination.generateResponse(results, req.pagination));
    }, function(error) {
        next(error);
    });
  }
/* GET appointments by medic and with any user. */
exports.getAppointmentsByMedicAndWithUser = function(req, res, next) {
    appointmentService.getAppointmentsWithoutUser(req.params.medicId, req.pagination).then(function(results){
        res.send(pagination.generateResponse(results, req.pagination));
    }, function(error) {
        next(error);
    });
  }

  /* GET appointments by medic. */
exports.getAppointmentsByMedic = function(req, res, next) {
    appointmentService.getAppointmentsByMedic(req.params.medicId, req.pagination).then(function(results){
        res.send(pagination.generateResponse(results, req.pagination));
    }, function(error) {
        next(error);
    });
  }

    /* POST appointments. */
exports.postAppointments = function(req, res, next) {
    appointmentService.createAppointment(req.body).then(function(appointments){
      res.send(appointments);
    }, function(error) {
        next(error);
    });
  }


      /* PUT appointments. */
exports.putAppointments = function(req, res, next) {
    appointmentService.updateAppointment(req.params.appointmentId, req.body).then(function(appointments){
      res.send(appointments);
    }, function(error) {
        next(error);
    });
  }
