const express = require('express');
const router = express.Router();
var cityController = require('../controllers/cityController');

router.get('/', cityController.getCities);

module.exports = router;