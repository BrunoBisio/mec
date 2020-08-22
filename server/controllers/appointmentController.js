const appointmentService = require('../services/appointmentService');
const pagination = require('../utils/paginationResponse')

/* GET appointments by user. */
exports.getAppointmentsByUser = function(req, res, next) {
    appointmentService.getAppointmentsByUser(req.params.userId, req.pagination).then(function(results){
        res.send(pagination.generateResponse(results, req.pagination));
    }, function(error) {
        res.status(500);
    });
  }


/* GET appointments without user. */
exports.getAppointmentsWithoutUser = function(req, res, next) {
    appointmentService.getAppointmentsWithoutUser(req.pagination).then(function(results){
      res.send(pagination.generateResponse(results, req.pagination));
    }).catch(function(error) {
        res.status(400).send({error: error});
    });
  }



  /* GET appointments without user. */
exports.getAppointmentsWithUser = function(req, res, next) {
    appointmentService.getAppointmentsWithUser(req.pagination).then(function(results){
        res.send(pagination.generateResponse(results, req.pagination));
    }, function(error) {
        res.status(500);
    });
  }
/* GET appointments without user. */
exports.getAppointmentsWithMedicAndUser = function(req, res, next) {
    appointmentService.getAppointmentsWithMedicAndUser(req.pagination).then(function(results){
        res.send(pagination.generateResponse(results, req.pagination));
    }, function(error) {
        res.status(500);
    });
  }
/* GET appointments without user. */
exports.getAppointmentsByMedicAndWithUser = function(req, res, next) {
    appointmentService.getAppointmentsWithoutUser(req.params.medicId, req.pagination).then(function(results){
        res.send(pagination.generateResponse(results, req.pagination));
    }, function(error) {
        res.status(500);
    });
  }

  /* GET appointments without user. */
exports.getAppointmentsByMedic = function(req, res, next) {
    appointmentService.getAppointmentsByMedic(req.params.medicId, req.pagination).then(function(results){
        res.send(pagination.generateResponse(results, req.pagination));
    }, function(error) {
        res.status(500);
    });
  }

    /* GET appointments without user. */
exports.postAppointments = function(req, res, next) {
    appointmentService.createAppointment(req.body).then(function(appointments){
      res.send(appointments);
    }, function(error) {
        res.status(500);
    });
  }


      /* GET appointments without user. */
exports.putAppointments = function(req, res, next) {
    appointmentService.updateAppointment(req.params.appointmentId, req.body).then(function(appointments){
      res.send(appointments);
    }, function(error) {
        res.status(500);
      console.log("error: " + error);
    });
  }
