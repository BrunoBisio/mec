import React from 'react';
import MedicalHistory from './MedicalHistory.js';
import { getLoggedUser } from '../services/RolRepository';

class PatientMedicalHistory extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: getLoggedUser()
        }
    }

    render() {
        return(
            <div>
                <MedicalHistory user={this.state.user}></MedicalHistory>
            </div>
        )
    }
}

export default PatientMedicalHistory;