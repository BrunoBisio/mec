import React from 'react';
import MedicalHistory from './MedicalHistory.js';
import { getLoggedUser } from '../services/RolRepository';

class PatientMedicalHistory extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: null
        }
    }

    componentDidMount() {
        getLoggedUser().then((res) => {
            const user = res;
            this.setState({ user: user });
        });
    }

    render() {
        return(
            <div>
                {this.state.user && <MedicalHistory user={this.state.user}></MedicalHistory>}
            </div>
        )
    }
}

export default PatientMedicalHistory;