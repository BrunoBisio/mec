import React from 'react';
function arrayRemove(array, value) { return array.filter(function(item){ return item !== value; });}
let appointments = [
  {   
      id: 1,
      date: new Date(),
      specialty: "Oncologia",
      doctor: "Wilson"
  },
  {
      id: 2,
      date: new Date(),
      specialty: "Problemas Generales",
      doctor: "House"
  },
  {
      id: 3,
      date: new Date(),
      specialty: "neurología",
      doctor: "Trece"
  },
  
];

export function push(appointment) {
    debugger
    appointments.push(appointment);
}

export function get() {
    return appointments;
}

export function remove(appointment) {
    appointments = arrayRemove(appointments, appointment);
}
