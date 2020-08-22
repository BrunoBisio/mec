const express = require('express');
const router = express.Router();
var SpecialtyController = require('../controllers/specialtyController');

router.get('/', SpecialtyController.getSpecialties);

module.exports = router;