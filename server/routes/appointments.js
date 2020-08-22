const express = require('express');
const router = express.Router();
var AppointmentController = require('../controllers/appointmentController');

/* GET users listing. */
router.get('/user/:userId', AppointmentController.getAppointmentsByUser);
router.get('/unnasigned', AppointmentController.getAppointmentsWithoutUser);
router.get('/user', AppointmentController.getAppointmentsWithUser);
router.get('/medic/user', AppointmentController.getAppointmentsWithMedicAndUser);
router.get('/medic/:medicId/user', AppointmentController.getAppointmentsByMedicAndWithUser);
router.get('/medic/:medicId', AppointmentController.getAppointmentsByMedic);

module.exports = router;
