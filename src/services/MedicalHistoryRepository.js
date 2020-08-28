import React from 'react';
import RestService from './RestService';

export function getPatientHistory() {
    return RestService.get('/medicalRecord');
}
export function getPatientHistoryById(userId) {
    return RestService.get('/medicalRecord/user/' + userId);
}

export function updatePatientHistory(patientHistory) {
    return RestService.put('/medicalRecord/' + patientHistory.id, patientHistory);
}