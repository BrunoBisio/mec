import React from 'react';
import MedicalHistory from './MedicalHistory.js';
import { getLoggedUser } from '../services/RolRepository';

class UserMedicalHistory extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: {}
        }
    }

    componentDidMount() {
        getLoggedUser().then((userData) => {
            const user = userData;
            this.setState({ user:user });
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

export default UserMedicalHistory;