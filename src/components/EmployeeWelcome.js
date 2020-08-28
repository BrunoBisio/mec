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
            <div className="EmployeeWelcome">
                <Welcome config={this.state}></Welcome>
            </div>
        )
    }
}

export default EmployeeWelcome;