import React from 'react';
import RestService from './RestService.js'

export function getPatients() {
    return RestService.restClient.get('/users/patients');
}

export function createPatient(patient) {
    return RestService.restClient.get('/users', patient);
}

export function updatePatient(patient) {
    return RestService.restClient.get('/users/' + patient.id, patient);
}

export function deletePatient(patientId) {
    return RestService.restClient.get('/users/' + patientId);
}

