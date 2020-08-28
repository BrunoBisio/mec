const express = require('express');
const router = express.Router();
var SpecialtyController = require('../controllers/specialtyController');

router.get('/', SpecialtyController.getSpecialties);
router.get('/clinics/medics', SpecialtyController.getSpecialtiesWithClinicsWithMedics);

module.exports = router;