const express = require('express');
const router = express.Router();
var prescriptionController = require('../controllers/prescriptionController');
var multer  = require('multer')
var upload = multer()

router.post('/', PrescriptionController.createPrescription);
router.post('/:id/file', upload.single('file'), prescriptionController.uploadPrescription);
router.put('/:id', PrescriptionController.updatePrescription);
router.get('/:id/file', prescriptionController.downloadPrescription);
router.get('/pending', PrescriptionController.getPrescriptionsNotApproved);
router.get('/user/:userId', PrescriptionController.getPrescriptionsByUser);
router.get('/medic/:medicId', PrescriptionController.getPrescriptionByMedic);

module.exports = router;