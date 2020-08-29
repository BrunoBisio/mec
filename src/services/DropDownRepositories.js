import React from 'react';
import RestService from './RestService';

export function getDocTypes() {
    return RestService.get('/docTypes');
}

export function getRaces() {
    return RestService.get('/races');
}

export function getCities() {
    return RestService.get('/cities');
}

export function getRoles() {
    return RestService.get('/roles');
}

export function getPlans() {
    return RestService.get('/plans');
}

export function getSpecialties() {
    return RestService.get('/specialties');
}

export function getClinics() {
    return RestService.get('/clinics');
}

// TODO: replace object with proper REST call
export function getDocTypesWithPatients() {
    return RestService.get('/docTypes/patient')
}

// TODO: replace object with proper REST call
export function getSpecialtiesWithClinicsWithMedics() {
    return RestService.get('/specialties/clinics/medics');
}