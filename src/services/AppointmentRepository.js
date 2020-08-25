import React from 'react';
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
