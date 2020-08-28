import React from 'react';
import RestService from './RestService';

export function getAppointments () {
    return RestService.get('/appointments');
}

export function getAppointmentsByMedic (id) {
    return RestService.get('/appointments/medic/' + id);
}

export function getAppointmentsByUser (id) {
    return RestService.get('/appointments/patient/' +id);
}

export function updateAppointment (appointments) {
    return RestService.put('/appointments/' + appointments.id, appointments);
}

export function createAppointments (appointment) {
    return RestService.post('/appointments', appointment);
}

export function remove(appointmentId) {
    return RestService.delete('/appointments/' +appointmentId);
}