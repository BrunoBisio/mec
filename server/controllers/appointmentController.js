const AppointmentService = require('../services/appointmentService');
const Pagination = require('../utils/paginationResponse');

/* GET appointments by user. */
exports.getAppointmentsByUser = function (req, res, next) {
  AppointmentService.getAppointmentsByUser(req.params.userId, req.pagination).then(function (results) {
    res.send(Pagination.generateResponse(results, req.pagination));
  }).catch(function (error) {
    next(error);
  });
}

/* GET appointments without user. */
exports.getAppointments = function (req, res, next) {
  AppointmentService.getAppointments(req.pagination).then(function (results) {
    res.send(Pagination.generateResponse(results, req.pagination));
  }).catch(function (error) {
    next(error);
  });
}

/* GET appointments without user. */
exports.getAppointmentsWithoutUser = function (req, res, next) {
  AppointmentService.getAppointmentsWithoutUser(req.pagination).then(function (results) {
    res.send(Pagination.generateResponse(results, req.pagination));
  }).catch(function (error) {
    next(error);
  });
}

/* GET appointments with any user. */
exports.getAppointmentsWithUser = function (req, res, next) {
  AppointmentService.getAppointmentsWithUser(req.pagination).then(function (results) {
    res.send(Pagination.generateResponse(results, req.pagination));
  }).catch(function (error) {
    next(error);
  });
}

/* GET appointments with any medic and user. */
exports.getAppointmentsWithMedicAndUser = function (req, res, next) {
  AppointmentService.getAppointmentsWithMedicAndUser(req.pagination).then(function (results) {
    res.send(Pagination.generateResponse(results, req.pagination));
  }).catch(function (error) {
    next(error);
  });
}

/* GET appointments by medic and with any user. */
exports.getAppointmentsByMedicAndWithUser = function (req, res, next) {
  AppointmentService.getAppointmentsWithoutUser(req.params.medicId, req.pagination).then(function (results) {
    res.send(Pagination.generateResponse(results, req.pagination));
  }).catch(function (error) {
    next(error);
  });
}

/* GET appointments by medic. */
exports.getAppointmentsByMedic = function (req, res, next) {
  AppointmentService.getAppointmentsByMedic(req.params.medicId, req.pagination).then(function (results) {
    res.send(Pagination.generateResponse(results, req.pagination));
  }).catch(function (error) {
    next(error);
  });
}

/* POST appointments. */
exports.postAppointments = function (req, res, next) {
  AppointmentService.createAppointment(req.body).then(function (appointments) {
    res.send(appointments);
  }).catch(function (error) {
    next(error);
  });
}


/* PUT appointments. */
exports.putAppointments = function (req, res, next) {
  AppointmentService.updateAppointment(req.params.appointmentId, req.body).then(function (appointments) {
    res.send(appointments);
  }).catch(function (error) {
    next(error);
  });
}

/* DELETE appointments. */
exports.deleteAppointments = function (req, res, next) {
  AppointmentService.deleteAppointment(req.params.appointmentId).then(function (appointments) {
    if (appointments > 0) {
      res.send("ok");
    } else {
      res.status(404).send("not found");
    }
  }).catch(function (error) {
    next(error);
  });
}