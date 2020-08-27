import React from 'react';
import RestService from './RestService.js'

export function createMedRecApp (MedRecApp) {
    return RestService.restClient.post('/MedicalRecordAppointment', MedRecApp);
    
}