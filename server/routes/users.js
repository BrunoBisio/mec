const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
const Middleware = require('../middleware/paginationMiddleware');

router.get('/', Middleware.paginationMiddleware, UserController.getUsers);
router.get('/:id', UserController.getUserById);
router.get('/role/:roleId', Middleware.paginationMiddleware, UserController.getUserByRoleId);
router.post('/', UserController.createUser);
router.put('/:id', UserController.updateUser);

module.exports = router;