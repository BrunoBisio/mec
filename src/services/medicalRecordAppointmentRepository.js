import React from 'react';
import RestService from './RestService';

export function createMedRecApp(MedRecApp) {
    return RestService.post('/MedicalRecordAppointment', MedRecApp);
}

export function getPatientHistoryAppointmentById(id) {
    return RestService.get('/MedicalRecordAppointment/' + id);
}