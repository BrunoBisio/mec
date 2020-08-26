const express = require('express');
const router = express.Router();
var MedicalRecordController = require('../controllers/medicalRecordController');

router.get('/', MedicalRecordController.getMedicalRecords);
router.get('/user/:id', MedicalRecordController.getMedicalRecordsByPatientId);
router.post('/', MedicalRecordController.createMedicalRecord);
router.put('/:id', MedicalRecordController.updateMedicalRecord);

module.exports = router;

