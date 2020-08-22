const appointmentService = require('../services/appointmentService');

/* GET appointments by user. */
exports.getAppointmentsByUser = function(req, res, next) {
    appointmentService.getAppointmentsByUser(req.params.userId).then(function(appointments){
      res.send(appointments);
    }, function(error) {
      console.log("error: " + error);
    });
  }


/* GET appointments without user. */
exports.getAppointmentsWithoutUser = function(req, res, next) {
    appointmentService.getAppointmentsWithoutUser().then(function(appointments){
      res.send(appointments);
    }, function(error) {
      console.log("error: " + error);
    });
  }
