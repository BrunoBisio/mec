import React from 'react';
import Dashboard from './Dashboard.js'
import Appointment from './Appointment.js'

const items = [
    {
        text: 'Cuentas',
        route: 'account'
    },
    {
        text: 'Turnos',
        route: 'appointment',
        component: Appointment
    },
    {
        text: 'Recetas',
        route: 'recipes'
    },
    {
        text: 'Historial',
        route: 'history'
    }
]

class User extends React.Component {

    render() {
        return (<Dashboard drawerItems={items}></Dashboard>)
    }
}

export default User;