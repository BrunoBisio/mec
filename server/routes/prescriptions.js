const express = require('express');
const multer  = require('multer');
const router = express.Router();
const upload = multer();
const Middleware = require('../middleware/paginationMiddleware');
const PrescriptionController = require('../controllers/prescriptionController');

router.post('/', PrescriptionController.createPrescription);
router.post('/:id/file', upload.single('file'), PrescriptionController.uploadPrescription);
router.put('/:id', PrescriptionController.updatePrescription);
router.get('/:id/file', PrescriptionController.downloadPrescription);
router.get('/pending', Middleware.paginationMiddleware, PrescriptionController.getPrescriptionsNotApproved);
router.get('/user/:userId', Middleware.paginationMiddleware, PrescriptionController.getPrescriptionsByUser);
router.get('/medic/:medicId', Middleware.paginationMiddleware, PrescriptionController.getPrescriptionByMedic);

module.exports = router;