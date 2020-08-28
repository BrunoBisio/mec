import React from 'react';

export function getPatients() {
    return RestService.get('/users/patients');
}

export function createPatient(patient) {
    return RestService.get('/users', patient);
}

export function updatePatient(patient) {
    return RestService.get('/users/' + patient.id, patient);
}

export function deletePatient(patientId) {
    return RestService.get('/users/' + patientId);
}

