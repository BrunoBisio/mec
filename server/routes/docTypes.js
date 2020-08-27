const express = require('express');
const router = express.Router();
const DocTypeController = require('../controllers/docTypeController');

router.get('/', DocTypeController.getDocTypes);
router.get('/patient', DocTypeController.getDocTypesWithPatient);


module.exports = router;