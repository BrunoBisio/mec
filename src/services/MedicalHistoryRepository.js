import React from 'react';
import RestService from './RestService';

export function getPatientHistory() {
    return RestService.get('/MedicalRecord');
}
export function getPatientHistoryById(userId) {
    return RestService.get('/MedicalRecord/' + userId);
}

export function updatePatientHistory(patientHistory) {
    return RestService.put('/MedicalRecord/' + patientHistory.id, patientHistory);
}