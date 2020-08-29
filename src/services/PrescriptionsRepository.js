import React from 'react';
import RestService from './RestService';

export function createPrescription(prescription) {
    return RestService.post('/prescription', prescription);
}

export function getPrescriptions() {
    return RestService.get('/prescription');
}

export function getPendingPrescriptions() {
    return RestService.get('/prescription/approved/false');
}

export function updatePrescription(prescription) {
    return RestService.put('/prescription/' + prescription.id, prescription);
}

export function getPrescriptionByUser(userId) {
    return RestService.get('/prescription/user/' + userId);
}

export function getPrescriptionBySpecialty(specialtyId) {
    return RestService.get('/prescription/specialty/' + specialtyId);
}

export function deletePrescription(prescription) {
    return RestService.delete('/prescription/' + prescription.id);
}