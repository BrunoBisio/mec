import React from 'react';
import admin from '../css/img/fondoAdmin.jpg';
import Welcome from './Welcome.js';

class AdminWelcome extends React.Component {

    constructor(props) {
        console.log("entro al admin welcome")
        super(props);

        this.state = {
            title: '¡Hola ' + props.userName + '!',
            text: 'Bienvenido a tu gestion',
            img: admin
        }
    }
    
    render() {
        return (
            <div className="AdminWelcome">
                <Welcome config={this.state}></Welcome>
            </div>
        )
    }
}

export default AdminWelcome;