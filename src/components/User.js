import React from 'react';
import Dashboard from './Dashboard.js'
import Appointment from './Appointment.js'
import Recipes from './Recipes.js'
import MedicalHistory from './MedicalHistory.js'


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
        route: 'recipes',
        component: Recipes
    },
    {
        text: 'Historial',
        route: 'history',
        component: MedicalHistory
    }
]

class User extends React.Component {

    render() {
        return (<Dashboard drawerItems={items}></Dashboard>)
    }
}

export default User;