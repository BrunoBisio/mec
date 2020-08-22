const express = require('express');
const router = express.Router();
var UserController = require('../controllers/UserController');

router.get('/', UserController.getUsers);
router.get('/:id', UserController.getUserById);
router.get('/role/:id', UserController.getUserByRoleId);

module.exports = router;