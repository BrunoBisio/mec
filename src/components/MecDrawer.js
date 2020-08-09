import React from 'react';
import autoBind from 'auto-bind';
import '../css/styles/Header.scss';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

function DrawerItems(props){
    return (
        <List>
            {props.items.map((item, index) => (
                <ListItem button key={index}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
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
            <Drawer variant="permanent" open>
                <DrawerItems items={this.state.items}></DrawerItems>
            </Drawer>
        )
    }
}

export default MecDrawer;