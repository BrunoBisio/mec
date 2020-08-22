const appointmentService = require('../services/appointmentService');

/* GET appointments by user. */
exports.getAppointmentsByUser = function(req, res, next) {
    appointmentService.getAppointmentsByUser(req.params.userId).then(function(appointments){
      res.send(appointments);
    }, function(error) {
      console.log("error: " + error);
    });
  }
