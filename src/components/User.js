import React from 'react';
import Dashboard from './Dashboard.js'
import {getUser as GetUser} from '../services/RolRepository.js';
import {Redirect} from "react-router-dom";
import {getUser} from '../services/RolRepository';

class User extends React.Component {

    render() {
        const user = getUser();
        const route = "/user/" + getUser().rol.defaultView.route;
        return (<div><Redirect to={route}></Redirect><Dashboard drawerItems={GetUser().rol.access}></Dashboard></div>)
    }
}

export default User;