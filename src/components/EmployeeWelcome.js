import React from 'react';
import employee from '../css/img/fondoSecretaria.jpg';
import Welcome from './Welcome.js';

class EmployeeWelcome extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '¡Hola ' + props.userName + '!',
            text: 'Bienvenido a tu gestion',
            img: employee
        }
    }
    
    render() {
        return (
            <Welcome config={this.state}></Welcome>
        )
    }
}

export default EmployeeWelcome;