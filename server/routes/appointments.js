const express = require('express');
const router = express.Router();
const Middleware = require('../middleware/paginationMiddleware');
const AppointmentController = require('../controllers/appointmentController');

/* GET users listing. */
router.get('/', Middleware.paginationMiddleware, AppointmentController.getAppointments);
router.get('/user/:userId', Middleware.paginationMiddleware, AppointmentController.getAppointmentsByUser);
router.get('/unnasigned', Middleware.paginationMiddleware, AppointmentController.getAppointmentsWithoutUser);
router.get('/user', Middleware.paginationMiddleware, AppointmentController.getAppointmentsWithUser);
router.get('/medic/user', Middleware.paginationMiddleware, AppointmentController.getAppointmentsWithMedicAndUser);
router.get('/medic/:medicId/user', Middleware.paginationMiddleware, AppointmentController.getAppointmentsByMedicAndWithUser);
router.get('/medic/:medicId', Middleware.paginationMiddleware, AppointmentController.getAppointmentsByMedic);
router.post('/', AppointmentController.postAppointments);
router.put('/:appointmentId', AppointmentController.putAppointments);
router.delete('/:appointmentId', AppointmentController.deleteAppointments);

module.exports = router;
