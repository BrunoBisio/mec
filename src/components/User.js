import React from 'react';
import Dashboard from './Dashboard.js'
import {Redirect} from "react-router-dom";
import {getLoggedUser, defaultView, accesses} from '../services/RolRepository';

class User extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            route: undefined
        };
    }

    componentDidMount () {
        const user = getLoggedUser().then(data=> {
            console.log(data);
            const finalRoute = "/user/" + defaultView[data.Role.id].route;
            console.log(finalRoute);
            this.setState({ route: finalRoute});
        });
    }
    render() {
       
        return (
        <div>
            {this.state.route && <Redirect to={this.state.route}></Redirect>}
            <Dashboard drawerItems={accesses}></Dashboard>
            </div>)
    }
}

export default User;