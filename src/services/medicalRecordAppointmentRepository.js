import React from 'react';
import RestService from './RestService';

export function createMedRecApp(MedRecApp) {
    return RestService.post('/medicalRecordAppointment', MedRecApp);
}

export function getPatientHistoryAppointmentById(id) {
    return RestService.get('/medicalRecordAppointment/' + id);
}