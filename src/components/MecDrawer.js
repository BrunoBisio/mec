import React from 'react';
import autoBind from 'auto-bind';
import '../css/styles/MecDrawer.scss';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import {
    Link,
    useRouteMatch
  } from "react-router-dom";
function DrawerItems(props){
    let { path } = useRouteMatch();
    return (
        <List>
            {props.items && props.items.filter((item)=> item.text).map((item, index) => (
                <ListItem button key={index}>
                <Link to={`${path}/${item.route}`}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                    </Link>
                </ListItem>
            ))}
        </List>
    )
}

class MecDrawer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: props.items
        }

        autoBind(this);
    }

    render() {
        return (
            <Drawer variant="permanent" open className="DashboardDrawer">
                <DrawerItems items={this.state.items}></DrawerItems>
            </Drawer>
        )
    }
}

export default MecDrawer;