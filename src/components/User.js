import React from 'react';
import Dashboard from './Dashboard.js'
import UserAppointment from './UserAppointment.js'
import AddAppointment from './AddAppointment.js'
import Prescription from './Prescription.js'
import MedicalHistory from './MedicalHistory.js'
import MyAccount from './MyAccount.js'
import RequestPrescription from './RequestPrescription.js'

const items = [
    {
        text: 'Cuenta',
        route: 'account',
        component: MyAccount
    },
    {
        text: 'Turnos',
        route: 'appointment',
        component: UserAppointment
    },
    {
        text: 'Recetas',
        route: 'prescription',
        component: Prescription
    },
    {
        text: 'Historial',
        route: 'history',
        component: MedicalHistory
    },
    {
        route: 'appointment/add',
        component: AddAppointment
    },
    {
        route: 'prescription/request',
        component: RequestPrescription
    }
]

class User extends React.Component {

    render() {
        return (<Dashboard drawerItems={items}></Dashboard>)
    }
}

export default User;