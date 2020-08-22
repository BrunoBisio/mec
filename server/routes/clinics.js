const express = require('express');
const router = express.Router();
var ClinicController = require('../controllers/clinicController');

router.get('/', ClinicController.getClinics);

module.exports = router;