const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
const Middleware = require('../middleware/paginationMiddleware');
const security = require('../middleware/passportMiddleware');

router.get('/logged', security.ensureAuthenticated, UserController.getLogedUser)
router.get('/', Middleware.paginationMiddleware, UserController.getUsers);

router.get('/patients', Middleware.paginationMiddleware, UserController.getPatients);
router.get('/employee', Middleware.paginationMiddleware, UserController.getEmployees);
router.get('/role/:roleId', Middleware.paginationMiddleware, UserController.getUserByRoleId);
router.post('/', UserController.createUser);
router.get('/delete', UserController.getUsersPendingDelete);
router.delete('/:userId', UserController.deleteUser);
router.post('/login', UserController.login);
router.put('/:id', /*security.ensureAuthenticated,*/ UserController.updateUser);
router.get('/:id', UserController.getUserById);
module.exports = router;

