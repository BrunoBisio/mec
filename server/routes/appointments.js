const express = require('express');
const router = express.Router();
var AppointmentController = require('../controllers/appointmentController');

/* GET users listing. */
router.get('/user/:userId', AppointmentController.getAppointmentsByUser);
router.get('/', AppointmentController.getAppointmentsWithoutUser);

module.exports = router;
