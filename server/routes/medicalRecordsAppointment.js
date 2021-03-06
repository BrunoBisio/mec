const express = require('express');
const router = express.Router();
var MedicalRecordAppointmentController = require('../controllers/medicalRecordAppointmentController');

router.get('/:id', MedicalRecordAppointmentController.getMedicalRecordAppointment);
router.post('/', MedicalRecordAppointmentController.createMedicalRecordAppointment);
router.put('/:id', MedicalRecordAppointmentController.updateMedicalRecordAppointment);

module.exports = router;