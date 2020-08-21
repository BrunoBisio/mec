const express = require('express');
const router = express.Router();
var UserController = require('../controllers/UserController');

/* GET users listing. */
router.get('/{id}', UserController.getUserById);

module.exports = router;
