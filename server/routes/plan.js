const express = require('express');
const router = express.Router();
var planController = require('../controllers/planController');

router.get('/', planController.getPlans);

module.exports = router;