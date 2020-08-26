const express = require('express');
const router = express.Router();
var roleController = require('../controllers/roleController');

router.get('', roleController.getRoles);
router.get('/:id', roleController.getRolesById);
router.post('/', roleController.postRole);
router.update('/:id', roleController.updateRole);

module.exports = router;
