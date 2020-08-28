import React from 'react';

export function createMedRecApp (MedRecApp) {
    return RestService.post('/MedicalRecordAppointment', MedRecApp);
    
}