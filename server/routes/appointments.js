const express = require('express');
const router = express.Router();
var AppointmentController = require('../controllers/appointmentController');

/* GET users listing. */
router.get('/user/:userId', AppointmentController.getAppointmentsByUser);

module.exports = router;
