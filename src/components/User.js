import React from 'react';
import Dashboard from './Dashboard.js'
import Appointment from './Appointment.js'
import AddAppointment from './AddAppointment.js'
import Recipes from './Recipes.js'
import MedicalHistory from './MedicalHistory.js'
import MyAccount from './MyAccount.js'


const items = [
    {
        text: 'Cuenta',
        route: 'account',
        component: MyAccount
    },
    {
        text: 'Turnos',
        route: 'appointment',
        component: Appointment
    },
    {
        text: 'Recetas',
        route: 'recipes',
        component: Recipes
    },
    {
        text: 'Historial',
        route: 'history',
        component: MedicalHistory
    },
    {
        route: 'appointment/addapointment',
        component: AddAppointment
    }
]

class User extends React.Component {

    render() {
        return (<Dashboard drawerItems={items}></Dashboard>)
    }
}

export default User;