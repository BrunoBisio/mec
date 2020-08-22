const appointmentService = require('../services/appointmentService');

/* GET appointments by user. */
exports.getAppointmentsByUser = function(req, res, next) {
    appointmentService.getAppointmentsByUser(req.params.userId).then(function(appointments){
      res.send(appointments);
    }, function(error) {
        res.status(500);
      console.log("error: " + error);
    });
  }


/* GET appointments without user. */
exports.getAppointmentsWithoutUser = function(req, res, next) {
    appointmentService.getAppointmentsWithoutUser().then(function(appointments){
      res.send(appointments);
    }, function(error) {
        res.status(500);
      console.log("error: " + error);
    });
  }



  /* GET appointments without user. */
exports.getAppointmentsWithUser = function(req, res, next) {
    appointmentService.getAppointmentsWithUser().then(function(appointments){
      res.send(appointments);
    }, function(error) {
        res.status(500);
      console.log("error: " + error);
    });
  }
/* GET appointments without user. */
exports.getAppointmentsWithMedicAndUser = function(req, res, next) {
    appointmentService.getAppointmentsWithMedicAndUser().then(function(appointments){
      res.send(appointments);
    }, function(error) {
        res.status(500);
      console.log("error: " + error);
    });
  }
/* GET appointments without user. */
exports.getAppointmentsByMedicAndWithUser = function(req, res, next) {
    appointmentService.getAppointmentsWithoutUser(req.params.medicId).then(function(appointments){
      res.send(appointments);
    }, function(error) {
        res.status(500);
      console.log("error: " + error);
    });
  }

  /* GET appointments without user. */
exports.getAppointmentsByMedic = function(req, res, next) {
    appointmentService.getAppointmentsByMedic(req.params.medicId).then(function(appointments){
      res.send(appointments);
    }, function(error) {
        res.status(500);
      console.log("error: " + error);
    });
  }

    /* GET appointments without user. */
exports.postAppointments = function(req, res, next) {
    appointmentService.createAppointment(req.body).then(function(appointments){
      res.send(appointments);
    }, function(error) {
        res.status(500);
      console.log("error: " + error);
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
