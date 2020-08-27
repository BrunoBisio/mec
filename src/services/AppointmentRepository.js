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
    return {
        "pagination": {
            "total": 1,
            "offset": 0,
            "limit": 30
        },
        "results": [
            {
                "id": 1,
                "date": "2020-08-22T05:11:18.000Z",
                "startHour": "12:00:00",
                "endHour": "21:00:00",
                "completed": true,
                "createdAt": "2019-08-22T05:11:28.000Z",
                "updatedAt": "2020-08-22T05:18:38.000Z",
                "deletedAt": null,
                "UserId": null,
                "MedicDetailId": null,
                "User": null,
                "MedicDetail": null
            }
        ]
    };
}

export function getAppointmentsByMedic (id) {
    return appointments;
}

export function getAppointmentsByUser (id) {
    return appointments;
}

export function updateAppointment (appointment) {

}

export function createAppointment (appointment) {

}

export function createAppointments (preAppointmentsObject) {

}

export function remove(appointment) {
    appointments = arrayRemove(appointments, appointment);
}
