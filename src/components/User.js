import React from 'react';
import Dashboard from './Dashboard.js'

const items = [
    {
        text: 'Cuentas'
    },
    {
        text: 'Turnos'
    },
    {
        text: 'Recetas'
    },
    {
        text: 'Historial'
    }
]

class User extends React.Component {

    render() {
        return (<Dashboard drawerItems={items}></Dashboard>)
    }
}

export default User;