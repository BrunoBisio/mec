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
import AdminWelcome from '../components/AdminWelcome';
import Welcome from '../components/Welcome';
import PatientWelcome from '../components/PatientWelcome';
import Calendar from '../components/Calendar';
import MedicWelcome from '../components/MedicWelcome';
import MyAccountEmployee from '../components/MyAccountEmployee';
import MyAccountPatient from '../components/MyAccountPatient';
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
    title: 'Historial Clínico', //histclinico de paciente
    visible: false,
    route: 'patienteHistory',
    component: MedicalHistory
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
    title: 'Turnos', //Turnos de secre
    visible: true,
    route: 'secre/appointment',
    component: 'algo'//FALTA ADAPTAR DE InnerAppointment
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
      console.log(data)
      user = data.data;
      console.log(user)
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
  console.log("entro al hasAccess")
  console.log(user)
  return user.Role.Accesses.find((acc) => {
    return acc.nameAccess == view.title
  })
}

export function getPatients() {
  return RestService.get('/users/patients');
}

export function getEmployees() {
  return RestService.get('/users/employee');

}

