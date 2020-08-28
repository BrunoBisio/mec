const express = require('express');
const router = express.Router();
const roleController = require('../controllers/roleController');
const Middleware = require('../middleware/paginationMiddleware');

router.get('/', roleController.getRoles);
router.get('/list', Middleware.paginationMiddleware, roleController.getRolesList);
router.get('/:id', roleController.getRolesById);
router.post('/', roleController.postRole);
router.put('/:id', roleController.updateRole);

module.exports = router;
