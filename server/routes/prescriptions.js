const express = require('express');
const router = express.Router();
var PrescriptionController = require('../controllers/prescriptionController');

router.post('/', PrescriptionController.createPrescription);

module.exports = router;