import React from 'react';
import patient from '../css/img/fondoPaciente.jpg';
import Welcome from './Welcome.js';

class PatientWelcome extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '¡Hola ' + props.userName + '!',
            text: 'Bienvenido a tu gestion',
            img: patient
        }
    }
    
    render() {
        return (
            <Welcome config={this.state}></Welcome>
        )
    }
}

export default PatientWelcome;