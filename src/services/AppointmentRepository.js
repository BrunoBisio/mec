import React from 'react';
function arrayRemove(array, value) { return array.filter(function(item){ return item !== value; });}
let appointments = [
  {   
      id: 1,
      date: new Date(),
      specialty: "Oncologia",
      doctor: "Wilson",
      patient: { id: 1, name: "lu" },
      medicDetail: {
          specialty: { name: "especialidad1" }
      }
  },
  {
      id: 2,
      date: new Date(),
      specialty: "Problemas Generales",
      doctor: "House",
      patient: { id: 2, name: "alexis" },
      medicDetail: {
          specialty: { name: "especialidad2" }
      }
  },
  {
      id: 3,
      date: new Date(),
      specialty: "neurología",
      doctor: "Trece",
      patient: { id: 3, name: "bruno" },
      medicDetail: {
          specialty: { name: "especialidad3" }
      }
  },
  
];

export function push(appointment) {
    appointments.push(appointment);
}

export function getAppointments () {

}

export function getAppointmentsByMedic (id) {

}

export function getAppointmentsByUser (id) {

}

export function updateAppointment (appointment) {

}

export function createAppointment (appointment) {

}

export function remove(appointment) {
    appointments = arrayRemove(appointments, appointment);
}
