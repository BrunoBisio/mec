const express = require('express');
const router = express.Router();
var roleController = require('../controllers/roleController');

router.get('/', roleController.getRoles);

module.exports = router;