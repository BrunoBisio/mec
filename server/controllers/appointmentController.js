const appointment = require('../models/Appointment');

/* GET appointments by user. */
exports.getAppointmentsByUser = function(req, res, next) {
    appointment.findAll({where:{UserUserId: req.params.userId}}).then(function(appointments){
      res.send(appointments);
    }, function(error) {
      console.log("error: " + error);
    });
  }
