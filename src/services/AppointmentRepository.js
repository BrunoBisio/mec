import React from 'react';
import RestService from './RestService';
function arrayRemove(array, value) { return array.filter(function(item){ return item !== value; });}
let appointments = [
  {   
      id: 1,
      date: new Date(),
      user: { id: 1, name: "lu" },
      medicDetail: {
          specialty: { name: "especialidad1" },
          medic: { name: "gimli" },
          speciality: { name: "Oncologia" }
      }
  },
  {
      id: 2,
      date: new Date(),
      user: { id: 2, name: "alexis" },
      medicDetail: {
          specialty: { name: "especialidad2" },
          medic: { name: "legolas" },
          speciality: { name: "Problemas Generales" }
      }
  },
  {
      id: 3,
      date: new Date(),
      user: { id: 3, name: "bruno" },
      medicDetail: {
          specialty: { name: "especialidad3" },
          medic: { name: "aragon" },
          speciality: { name: "neurología" }
      }
  },
  
];

export function push(appointment) {
    appointments.push(appointment);
}

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