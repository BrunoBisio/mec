import React from 'react';

let accesses = [
    {
      id: 1,
      title: 'Alta Paciente',
      assigned: false
    },
    {
      id: 2,
      title: 'Baja Paciente',
      assigned: false
    },
    {
      id: 3,
      title: 'Mod. Paciente',
      assigned: false
    },
    {
      id: 4,
      title: 'Alta Empleado',
      assigned: false
    },
    {
      id: 5,
      title: 'Baja Empleado',
      assigned: false
    },
    {
      id: 6,
      title: 'Mod. Empleado',
      assigned: false
    },
    {
      id: 7,
      title: 'Alta Receta',
      assigned: false
    },
    {
      id: 8,
      title: 'Baja Receta',
      assigned: false
    },
    {
      id: 9,
      title: 'Lectura Receta',
      assigned: false
    },
    {
      id: 10,
      title: 'Alta Turno',
      assigned: false
    },
    {
      id: 11,
      title: 'Baja Turno',
      assigned: false
    },
    {
      id: 12,
      title: 'Mod. Turno',
      assigned: false
    },
    {
      id: 13,
      title: 'Lectura Turno',
      assigned: false
    },
    {
      id: 14,
      title: 'Alta Hist. Clinica',
      assigned: false
    },
    {
      id: 15,
      title: 'Baja Hist. Clinica',
      assigned: false
    },
    {
      id: 16,
      title: 'Mod. Hist. Clinica',
      assigned: false
    },
    {
      id: 17,
      title: 'Lectura Hist. Clinica',
      assigned: false
    },
    {
      id: 18,
      title: 'Alta Rol',
      assigned: false
    },
    {
      id: 19,
      title: 'Baja Rol',
      assigned: false
    },
    {
      id: 20,
      title: 'Mod. Rol',
      assigned: false
    }
  ]


const roles = [
    {
        id: 1,
        name: 'Admin',
        access: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
    },
    {
        id: 2,
        name: 'Medico',
        access: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 21]
    },
    {
        id: 3,
        name: 'Administrativo',
        access: [10, 11, 12, 13, 17, 21]
    },
    {
        id: 4,
        name: 'Paciente',
        access: [10, 11, 12, 13, 14, 16, 17]
    }
]

export function getRoles() {
    return rol;
}

export function getAccesses() {
    return accesses;
}

export function hasAccess(role, viewTitle) {
    const currentView = accesses.find((acc) => { return acc.title == viewTitle });
    return role.access.indexOf(currentView.id) > -1
}