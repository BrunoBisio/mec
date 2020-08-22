const express = require('express');
const router = express.Router();
var PrescriptionController = require('../controllers/prescriptionController');

router.post('/', PrescriptionController.createPrescription);
router.put('/:id', PrescriptionController.updatePrescription);
router.get('/pending', PrescriptionController.getPrescriptionsNotApproved);
router.get('/user/:userId', PrescriptionController.getPrescriptionsByUser);
router.get('/medic/:medicId', PrescriptionController.getPrescriptionByMedic);

module.exports = router;