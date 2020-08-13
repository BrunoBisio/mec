import React from 'react';
import Dashboard from './Dashboard.js'
import InnerAppointment from './InnerAppointment.js'
import AddAppointment from './AddAppointment.js'
import Prescription from './Prescription.js'
import MedicalHistory from './MedicalHistory.js'
import MyAccount from './MyAccount.js'
import RequestPrescription from './RequestPrescription.js'

const items = [
    {
        text: 'Agenda',
        route: '',
        component: null
    },
    {
        text: 'Turnos',
        route: 'appointment',
        component: InnerAppointment
    },
    {
        text: 'Recetas',
        route: '',
        component: null
    },
    {
        route: '',
        component: null
    },
    {
        route: '',
        component: null
    }
]

class Doctor extends React.Component {

    render() {
        return (<Dashboard drawerItems={items}></Dashboard>)
    }
}

export default Doctor;