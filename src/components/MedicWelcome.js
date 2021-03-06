import React from 'react';
import medic from '../css/img/fondoMedico.jpg';
import Welcome from './Welcome.js';

class MedicWelcome extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '¡Hola ' + props.userName + '!',
            text: 'Bienvenido a tu gestion',
            img: medic
        }
    }
    
    render() {
        return (
            <div className="MedicWelcome">
                <Welcome config={this.state}></Welcome>
            </div>
        )
    }
}

export default MedicWelcome;