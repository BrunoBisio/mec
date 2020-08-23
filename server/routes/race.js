const express = require('express');
const router = express.Router();
var raceController = require('../controllers/raceController');

router.get('/', raceController.getRaces);

module.exports = router;