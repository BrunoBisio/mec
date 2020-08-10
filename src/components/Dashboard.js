import React from 'react';
import MecDrawer from './MecDrawer.js';
import Header from './Header.js';
import autoBind from 'auto-bind';
import { Divider } from '@material-ui/core';
import '../css/styles/Dashboard.scss';

class Dashboard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            drawerItems: props.drawerItems
        }

        autoBind(this);
    }


    render() {
        return (
            <div className="DashboardContainer">
                <Header></Header>
                <Divider className="DashboardDivider"/>
                <div className="DashboardBody">
                    <nav className="DashboardNav"><MecDrawer items={this.state.drawerItems}></MecDrawer></nav>
                    <main className="DashboardMain"></main>
                </div>
            </div>
        )
    }
}

export default Dashboard;