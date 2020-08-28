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
        /*getLoggedUser().then((userData) => {
            const user = userData.data;
            this.setState({ user });
        })*/
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

export default UserMedicalHistory;