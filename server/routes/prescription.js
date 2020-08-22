const express = require('express');
const router = express.Router();
var prescriptionController = require('../controllers/prescriptionController');
var multer  = require('multer')
var upload = multer()

router.post('/:id/file', upload.single('file'), prescriptionController.uploadPrescription);
router.get('/:id/file', prescriptionController.downloadPrescription);

module.exports = router;