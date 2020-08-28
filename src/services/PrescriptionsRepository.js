import React from 'react';
import RestService from './RestService';

export function createPrescription(prescription) {
    return RestService.post('/prescriptions', prescription);
}

export function getPrescriptions() {
    return RestService.get('/prescriptions');
}

export function getPendingPrescriptions() {
    return RestService.get('/prescriptions/approved/false');
}

export function updatePrescription (prescription) {
    return RestService.put('/prescriptions/' + prescription.id, prescription);
}

export function getPrescriptionByUser (userId) {
    return RestService.get('/prescriptions/user/' +userId);
}

export function getPrescriptionBySpecialty (specialtyId) {
    return RestService.get('/prescriptions/specialty/' +specialtyId);
}