const express = require('express');
const router = express.Router();
var UserController = require('../controllers/UserController');

router.get('/', UserController.getUsers);
router.get('/:id', UserController.getUserById);
router.get('/role/:roleId', UserController.getUserByRoleId);
router.post('/', UserController.createUser);
router.put('/:id', UserController.updateUser);

module.exports = router;