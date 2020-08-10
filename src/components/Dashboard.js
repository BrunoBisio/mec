import React from 'react';
import MecDrawer from './MecDrawer.js';
import Header from './Header.js';
import autoBind from 'auto-bind';
import { Divider } from '@material-ui/core';
import '../css/styles/Dashboard.scss';
import {
    Route,
    useRouteMatch
  } from "react-router-dom";

  
function RenderRoutes(props){
    const { path } = useRouteMatch();
    const routes = props.items.map((item,index)=> 
        <Route key={index} path={`${path}/${item.route}`} component={item.component}></Route>
    )
    return  (<div>{routes}</div>);
}

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
                    <main className="DashboardMain">
                        <RenderRoutes items={this.state.drawerItems}/>
                    </main>
                </div>
            </div>
        )
    }
}


export default Dashboard;