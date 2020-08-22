const express = require('express');
const router = express.Router();
var MedicalRecordController = require('../controllers/medicalRecordController');

router.get('/role/:roleId', MedicalRecordController.getMedicalRecordsByPatientId);
router.post('/', MedicalRecordController.createMedicalRecord);
router.put('/:id', MedicalRecordController.updateMedicalRecord);

module.exports = router;