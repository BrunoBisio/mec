import React from 'react';
import MecDrawer from './MecDrawer.js';
import Header from './Header.js';
import '../css/styles/Header.scss';

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
        return (
            <div>
                <Header></Header>
                <MecDrawer items={items}></MecDrawer>
            </div>
        )
    }
}

export default User;