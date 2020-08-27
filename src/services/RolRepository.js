import React from 'react';

import UserAppointment from '../components/UserAppointment.js'
import AddAppointment from '../components/AddAppointment.js'
import Prescription from '../components/Prescription.js'
import MedicalHistory from '../components/MedicalHistory.js'
// import MyAccount from '../components/MyAccount.js'
import RequestPrescription from '../components/RequestPrescription.js'
import AddEmployee from '../components/AddEmploye'
import InnerAppointment from '../components/InnerAppointment.js';
// import UDEmployee from '../components/UDEmploye'
import CheckPatient from '../components/CheckPatient';
import SetAppointments from '../components/SetAppointments.js';
import ABMRole from '../components/ABMRole.js'
import ABMPatients from '../components/ABMPatients.js'
import ManagePrescriptions from '../components/ManagePrescriptions.js';
import MyAccountAdmin from '../components/MyAccountAdmin.js';
import PendingDeleteUsers from '../components/PendingDeleteUsers.js';
import ABMEmployee from '../components/ABMEmployee.js';

import MyAccountPatient from '../components/MyAccountPatient.js';
import UserMedicalHistory from '../components/UserMedicalHistory.js';
import CalendarMedic from '../components/CalendarMedic.js';

import AdminWelcome from '../components/AdminWelcome';
import Welcome from '../components/Welcome';
import PatientWelcome from '../components/PatientWelcome';
import Calendar from '../components/Calendar';
import MedicWelcome from '../components/MedicWelcome';
import MyAccountEmployee from '../components/MyAccountEmployee';
import EmployeeWelcome from '../components/EmployeeWelcome';
import RestService from './RestService.js';
import {saveToken, deleteToken} from './RestService.js'
function arrayRemove(array, value) { return array.filter(function(item){ return item !== value; });}

export let accesses = [{},
  {
    id: 1,
    title: 'Bienvenida', //Bienvenida de paciente
    visible: true,
    route: 'patiente/welcome',
    component: PatientWelcome
  },
  {
    id: 2,
    title: 'Mi Cuenta', //Cuenta de paciente
    visible: true,
    route: 'patiente/account',
    component: MyAccountPatient

  },
  {
    id: 3,
    title: 'Mis Turnos', //Turnos de paciente
    visible: true,
    route: 'patiente/appointments',
    component: UserAppointment
  },
  {
    id: 4,
    title: 'Mis Recetas', //Recetas de paciente
    visible: true,
    route: 'patiente/prescriptions',
    component: Prescription
  },
  {
    id: 5,
    title: 'Mi Historial Clínico', //histclinico de paciente
    visible: true,
    route: 'patiente/history',
    component: ''//FALTA (copiar MedicalHistory)
  },
   {
    id: 6,
    title: 'Bienvenida', //Bienvenida de Admin
    visible: true,
    route: 'admin/welcome',
    component: AdminWelcome
  },
  {
    id: 7,
    title: 'Mi Cuenta', //Cuenta de Admin
    visible: true,
    route: 'admin/account',
    component: MyAccountAdmin
  },
  {
    id: 8,
    title: 'Solicitudes Baja', //Bajas pendedientes
    visible: true,
    route: 'admin/deleteRequest',
    component: PendingDeleteUsers
  },
  {
    id: 9,
    title: 'ABM Usuario',
    visible: true,
    route: 'admin/abmPatient',
    component:  ABMPatients
  },
  {
    id: 10,
    title: 'ABM Empleado',
    visible: true,
    route: 'admin/abmEmployee',
    component: ABMEmployee
  },
  {
    id: 11,
    title: 'ABM Rol',
    visible: true,
    route: 'admin/abmRole',
    component: ABMRole
  },
  {
    id: 12,
    title: 'Turnos', //Turnos pendientes admin y secre
    visible: true,
    route: 'appointment',
    component: InnerAppointment
  },
  {
    id: 13,
    title: 'Tomar Turnos', //tomar turno admin y medico
    visible: false,
    route: 'takeAppointment',
    component: MedicalHistory
  },
  {
    id: 14,
    title: 'Recetas', //recetas pendientes
    visible: true,
    route: 'prescriptions',
    component: ManagePrescriptions
  },
  {
    id: 15,
    title: 'Agenda', //Agendas medicos (admin y secre)
    visible: true,
    route: 'schedule',
    component: Calendar //terminar
  },
  {
    id: 16,
    title: 'Consultar Paciente', //consulta (admin, med y secre)
    visible: true,
    route: 'searchPatiente',
    component: CheckPatient
  },
  {
    id: 17,
    title: 'Historial',
    visible: true,
    route: 'history',
    component: UserMedicalHistory
  },
  {
    id: 18,
    title: 'Turnos Paciente', //Turnos de paciente
    visible: false,
    route: 'patienteAppointments',
    component: UserAppointment //filtrado por el usuario buscado en consultar paciente
  },
  {
    id: 19,
    title: 'Recetas Paciente', //Recetas de paciente
    visible: false,
    route: 'patientePrescription',
    component: Prescription //filtrado por el usuario buscado en consultar paciente
  },
  {
    id: 20,
    title: 'Bienvenida', //Bienvenida de medico
    visible: true,
    route: 'medic/welcome',
    component: MedicWelcome
  },
  {
    id: 21,
    title: 'Mi Cuenta', //Cuenta de medico- secre
    visible: true,
    route: 'employee/myAccount',
    component: MyAccountEmployee
  },
  {
    id: 23,
    title: 'Agenda', //Agendas medicos 
    visible: true,
    route: 'medic/schedule',
    component: 'algo'//adapatar Calendar
  },
  {
    id: 24,
    title: 'Bienvenida', //Bienvenida de secre
    visible: true,
    route: 'secre/welcome',
    component: EmployeeWelcome
  },
  {
    id: 25,
    title: 'Solicitud bajas',
    route: 'admin/pendingDeletes',
    component: PendingDeleteUsers,
    visible: true
  },
  {
    id: 26,
    title: 'Agenda',
    route: 'admin/agenda',
    component: Calendar,
    visible: true
  },
  {
    id: 27,
    title: 'Cuenta',
    route: 'account',
    component: MyAccountPatient,
    visible: true
  },
  {
    id: 28,
    title: 'Agenda',
    route: 'medic/agenda',
    component: CalendarMedic,
    visible: true
  }
]

const roles = [{
    id: 1,
    name: 'Admin',
    defaultView: accesses[1],
    access: [accesses[1], accesses[2], accesses[3], accesses[4], accesses[5], accesses[6], accesses[7], accesses[8], accesses[10], accesses[11], accesses[12], accesses[14], accesses[15], accesses[16], accesses[18], accesses[19], accesses[20], accesses[21], accesses[23], accesses[24], accesses[25], accesses[26]]
  },
  {
    id: 2,
    name: 'Medico',
    defaultView: accesses[12],
    access: [accesses[7], accesses[8], accesses[10], accesses[11], accesses[12], accesses[14], accesses[15], accesses[16], accesses[21], accesses[22], accesses[23], accesses[24], accesses[28]]
  },
  {
    id: 3,
    name: 'Administrativo',
    defaultView: accesses[23],
    access: [accesses[10], accesses[11], accesses[12], accesses[21], accesses[22], accesses[23]]
  },
  {
    id: 4,
    name: 'Paciente',
    defaultView: accesses[21],
    access: [accesses[9], accesses[10], accesses[11], accesses[13], accesses[14], accesses[16], accesses[17], accesses[27]]
  }
]

export const defaultView = ['', {
  id: 6,
  title: 'Bienvenida', //Bienvenida de Admin
  visible: true,
  route: 'admin/welcome',
  component: AdminWelcome
}, {
  id: 24,
  title: 'Bienvenida', //Bienvenida de secre
  visible: true,
  route: 'secre/welcome',
  component: EmployeeWelcome
}, {
  id: 24,
  title: 'Bienvenida', //Bienvenida de secre
  visible: true,
  route: 'secre/welcome',
  component: EmployeeWelcome
}, {
  id: 1,
  title: 'Bienvenida', //Bienvenida de paciente
  visible: true,
  route: 'patiente/welcome',
  component: PatientWelcome
},]
let user = null;

export function getRoles() {
  return RestService.get('/roles');
}
export function removeRoles(roleId) {
  return RestService.delete('/roles/' + roleId);
}
export function createRole(role) {
  return RestService.post('/roles', role);
}
export function updateRole(role) {
  return RestService.put('/roles/' + role.id, role);
}

export function getAccesses() {
  return RestService.get('/accesses');
}

export function login(docNumber, docType, password) {
  return RestService.post('/users/login', {
    docNumber: docNumber,
    docType: docType,
    password: password
  }).then(data => {
    saveToken(data.data.data.token);
    return getLoggedUser();
  });
}


export function isAuthenticated() {
  return !!user;
}

export function getLoggedUser() {
  const promise = Promise;
  if(!user) {
    return RestService.get('/users/logged').then(data => {
      user = data.data;
      return user;
  });
  }
  return promise.resolve(user);
}
export function getUser(id) {
  return RestService.get('/users/' + id);
}
export function singout() {
  RestService.deleteToken()
  user = null;
}

export function hasAccess(view) {
  return user.Role.Accesses.find((acc) => {
    return acc.id == view.id
  })
}

export function getPatients() {
  return RestService.get('/users/patients');
}

export function getEmployees() {
  return RestService.get('/users/employee');

}

