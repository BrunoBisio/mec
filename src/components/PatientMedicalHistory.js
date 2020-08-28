import React from 'react';
import MedicalHistory from './MedicalHistory.js';
import { getLoggedUser } from '../services/UserRepository';

class PatientMedicalHistory extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: {}
        }
    }

    componentDidMount() {
        const user = getLoggedUser();
        this.setState({ user });
    }

    render() {
        return(
            <div>
                <MedicalHistory userId={this.state.user.id}></MedicalHistory>
            </div>
        )
    }
}

export default PatientMedicalHistory;