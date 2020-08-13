import React from 'react';

import UserAppointment from '../components/UserAppointment.js'
import AddAppointment from '../components/AddAppointment.js'
import Prescription from '../components/Prescription.js'
import MedicalHistory from '../components/MedicalHistory.js'
import MyAccount from '../components/MyAccount.js'
import RequestPrescription from '../components/RequestPrescription.js'
import AddEmployee from '../components/AddEmploye'
import InnerAppointment from '../components/InnerAppointment.js';
import UDEmployee from '../components/UDEmploye'
import CheckPatient from '../components/CheckPatient';
import SetAppointments from '../components/SetAppointments.js';
import ABMRole from '../components/ABMRole'
import ABMPatients from '../components/ABMPatients'

function arrayRemove(array, value) { return array.filter(function(item){ return item !== value; });}
let accesses = [{},
  {
    id: 1,
    title: 'Alta Paciente',
    visible: true,
    route: 'patient/abm',
    component: ABMPatients

  },
  {
    id: 2,
    title: 'Baja Paciente',
    visible: false
  },
  {
    id: 3,
    title: 'Mod. Paciente',
    visible: false
  },
  {
    id: 4,
    title: 'Alta Empleado',
    visible: true,
    route: 'employee/add',
    component: AddEmployee
  },
  {
    id: 5,
    title: 'Baja Empleado',
    visible: true,
    route: 'employee/update',
    component: UDEmployee
  },
  {
    id: 6,
    title: 'Mod. Empleado',
    visible: false
  },
  {
    id: 7,
    title: 'Alta Receta',
    visible: false,
    route: 'prescription/request',
    component: RequestPrescription
  },
  {
    id: 8,
    title: 'Baja Receta',
    visible: false
  },
  {
    id: 9,
    title: 'Recetas',
    visible: true,
    route: 'prescription',
    component: Prescription
  },
  {
    id: 10,
    title: 'Alta Turno',
    visible: false,
    route: 'appointment/add',
    component: AddAppointment
  },
  {
    id: 11,
    title: 'Baja Turno',
    visible: false
  },
  {
    id: 12,
    title: 'Mod. Turno',
    visible: true,
    route: 'doctorAppointment',
    component: InnerAppointment
  },
  {
    id: 13,
    title: 'Turnos',
    visible: true,
    route: 'appointment',
    component: UserAppointment
  },
  {
    id: 14,
    title: 'Alta Hist. Clinica',
    visible: false
  },
  {
    id: 15,
    title: 'Baja Hist. Clinica',
    visible: false
  },
  {
    id: 16,
    title: 'Mod. Hist. Clinica',
    visible: false
  },
  {
    id: 17,
    title: 'Historial',
    visible: true,
    route: 'history',
    component: MedicalHistory
  },
  {
    id: 18,
    title: 'Alta Rol',
    visible: true,
    route: 'admin/role',
    component: ABMRole
  },
  {
    id: 19,
    title: 'Baja Rol',
    visible: false
  },
  {
    id: 20,
    title: 'Mod. Rol',
    visible: false
  },
  {
    id: 21,
    title: 'Cuenta',
    route: 'account',
    component: MyAccount,
    visible: true
  },
  {
    id: 22,
    title: 'Consultar Paciente',
    route: 'checkPatient',
    component: CheckPatient,
    visible: true
  },
  {
    id: 23,
    title: 'Alta Turno Empleado',
    route: 'employee/setAppointment',
    component: SetAppointments,
    visible: false
  }
]

const roles = [{
    id: 1,
    name: 'Admin',
    access: [accesses[1], accesses[2], accesses[3], accesses[4], accesses[5], accesses[6], accesses[7], accesses[8], accesses[9], accesses[10], accesses[11], accesses[12], accesses[13], accesses[14], accesses[15], accesses[16], accesses[17], accesses[18], accesses[19], accesses[20], accesses[21], accesses[22], accesses[23]]
  },
  {
    id: 2,
    name: 'Medico',
    access: [accesses[7], accesses[8], accesses[9], accesses[10], accesses[11], accesses[12], accesses[13], accesses[14], accesses[15], accesses[16], accesses[17], accesses[21], accesses[22], accesses[23]]
  },
  {
    id: 3,
    name: 'Administrativo',
    access: [accesses[10], accesses[11], accesses[12], accesses[13], accesses[17], accesses[21], accesses[22], accesses[23]]
  },
  {
    id: 4,
    name: 'Paciente',
    access: [accesses[10], accesses[11], accesses[12], accesses[13], accesses[14], accesses[16], accesses[17]]
  }
]
 

export const users = [
  {
      name: "Aragon",
      rol: roles[1]
    },
    {
      name: "Boromir",
      rol: roles[3]
    },
    {
      name: "Sauron",
      rol: roles[0]
    },
    {
      name: "Gimli",
      rol: roles[2]
    },
    {
      name: "Tauriel",
      rol: roles[1]
    },
    {
      name: "Legolas",
      rol: roles[1]
    },
    {
      name: "Gandalf",
      rol: roles[1]
    },
    {
      name: "Boromir",
      rol: roles[1]
    },
    {
      name: "Arwen",
      rol: roles[1]
    },
    {
      id: 1,
      tipoDoc: 'DH',
      doc: '123456',
      name: 'Frodo',
      lastName: 'Baggins',
      bDay: "22/9/2968",
      plan: 'MEC50',
      ciudad: 3,
      direccion: 'Bolson cerrado 123, Hobbiton',
      mail: 'frodoNueveDedos@gmail.com',
      telefono: '48247864',
      celular: '15123456',
      rol: roles[3]
    },
    {
      id: 2,
      tipoDoc: 'DE',
      doc: '000002',
      name: 'Galadriel',
      lastName: 'del bosque',
      bDay: "27/12/1362",
      plan: 'MEC-ELFOS',
      ciudad: 1,
      direccion: 'Arbol 49, Bosque de Doriath',
      mail: 'DamaBlanca@gmail.com',
      telefono: '27122812',
      celular: '15456789',
      rol: roles[3]
  }

];

let user = null;

export function getRoles() {
  return roles;
}
export function removeRoles(role) {
  roles = arrayRemove(roles, role)
}
export function addRole(role) {
  roles.push(role)
}
export function updateRole(role) {
  const oldRole = roles.filter(element => element.id === role.id)[0]
  roles[roles.indexOf(oldRole)]=role
}
export function getAccesses() {
  return accesses;
}

export function login(username) {
    user = users.filter(user  => user.name.toUpperCase() == username.toUpperCase())[0]
}

export function isAuthenticated() {
  return user;
}
export function getUser() {
  return user;
}
export function singout() {
  user = null;
}

export function hasAccess(role, viewTitle) {
  const currentView = accesses.find((acc) => {
    return acc.title == viewTitle
  });
  return role.access.indexOf(currentView.id) > -1
}

export function getPatients() {
  return users.filter((user) => { return user.rol.id === 4 });
}