import React from 'react';
import RestService from './RestService';

export function getAppointments() {
    return RestService.get('/appointment');
}
export function getAppointmentsWithUser() {
    return RestService.get('/appointment/user');
}

export function getAppointmentsByMedic(id) {
    return RestService.get('/appointment/medic/' + id);
}

export function getAppointmentsByUser(id) {
    return RestService.get('/appointment/user/' + id);
}

export function updateAppointment(appointments) {
    return RestService.put('/appointment/' + appointments.id, appointments);
}

export function createAppointments(appointment) {
    return RestService.post('/appointment', appointment);
}

export function remove(appointmentId) {
    return RestService.delete('/appointment/' + appointmentId);
}