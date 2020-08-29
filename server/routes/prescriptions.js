const express = require('express');
const multer  = require('multer');
const router = express.Router();
const upload = multer();
const Middleware = require('../middleware/paginationMiddleware');
const PrescriptionController = require('../controllers/prescriptionController');

router.post('/', PrescriptionController.createPrescription);
router.get('/', PrescriptionController.getPrescriptions);
router.post('/:id/file', upload.single('file'), PrescriptionController.uploadPrescription);
router.put('/:id', PrescriptionController.updatePrescription);
router.get('/:id/file', PrescriptionController.downloadPrescription);
router.get('/approved/:state', Middleware.paginationMiddleware, PrescriptionController.getPrescriptionsByState);
router.get('/user/:userId', Middleware.paginationMiddleware, PrescriptionController.getPrescriptionsByUser);
router.get('/medic/:medicId', Middleware.paginationMiddleware, PrescriptionController.getPrescriptionByMedic);
router.get('/specialty/:specialtyId', Middleware.paginationMiddleware, PrescriptionController.getPrescriptionBySpecialty);
router.delete('/prescriptionId', PrescriptionController.deletePrescription);

module.exports = router;
