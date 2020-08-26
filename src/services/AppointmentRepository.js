import React from 'react';
import RestService from './RestService.js'
function arrayRemove(array, value) { return array.filter(function(item){ return item !== value; });}
let appointments = [
  {   
      id: 1,
      date: new Date(),
      specialty: "Oncologia",
      doctor: "Wilson",
      patient: "lu"
  },
  {
      id: 2,
      date: new Date(),
      specialty: "Problemas Generales",
      doctor: "House",
      patient: "alexis"
      
  },
  {
      id: 3,
      date: new Date(),
      specialty: "neurología",
      doctor: "Trece",
      patient: "bruno"
  },
  
];

export function push(appointment) {
    appointments.push(appointment);
}

export function getAppointments () {
    return RestService.restClient.get('/appointments');

}

export function getAppointmentsByMedic (id) {
    return RestService.restClient.get('/appointments/medic/' + id);

}

export function getAppointmentsByUser (id) {
    return RestService.restClient.get('/appointments/patient/' +id);

}

export function updateAppointment (appointment) {
    return RestService.restClient.put('/appointments/' + appointments.id, appointments);

}

export function createAppointment (appointment) {
    return RestService.restClient.post('/appointments', appointments);

}

export function remove(appointmentId) {
    return RestService.restClient.delete('/appointments/' +appointmentsId);

}
