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
                <Link to={`${path}/${item.route}`}>
                    <ListItem button key={index}>
                        {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
                        <ListItemText primary={item.text} />
                    </ListItem>
                </Link>
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