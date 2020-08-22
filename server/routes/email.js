const express = require('express');
const router = express.Router();
var EmailController = require('../controllers/emailController');

router.post('/', EmailController.sendEmail);

module.exports = router;