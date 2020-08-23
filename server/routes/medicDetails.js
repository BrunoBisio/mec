const express = require('express');
const router = express.Router();
var MedicDetailController = require('../controllers/medicDetailController');

router.post('/', MedicDetailController.createMedicDetail);

module.exports = router;