import React from 'react';
import autoBind from 'auto-bind';
import { Grid, Divider, List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import Logo from '../css/img/Logo.png';
import CallIcon from '@material-ui/icons/Call';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';

const items = [
    {
        Text: 'Habla con un operador',
        Icon: <CallIcon />
    },
    {
        Text: 'Acercate a una sucursal',
        Icon: <LocationOnIcon />
    },
    {
        Text: 'Envianos un correo',
        Icon: <EmailIcon />
    }
]

function ContactListItem(props) {
    return (
        <ListItem>
            <ListItemIcon>{props.item.Icon}</ListItemIcon>
            <ListItemText primary={props.item.Text}></ListItemText>
        </ListItem>
    )
}

function ContactList(){
    return (
        <div className="ListItem">
            <List>
                { items.map((item, index) => {return <ContactListItem item={item} key={index}></ContactListItem>})}
            </List>
        </div>
    )
}

class Footer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            disclaimerBody: 'Al ingresar a sitio los usuarios son supervisados por El ojo de Sauron. La empresa no se responsabiliza por posibles ataques de panico y/o visiones de un futuro apocaliptico.',
            disclaimerFinisher: 'Movimientos sospechosos serán reportados a Mordor y castigados por Orcos.'
        }

        autoBind(this);
    }
    
    render() {
        return (
            <footer>
                <Grid container xs={12}>
                    <Grid item xs={2}><img src={Logo}></img></Grid>
                    <Divider variant="fullWidth"/>
                    <Grid container spacing={2} xs={10}>
                        <Grid item xs={4} md={6}>
                            <Typography variant="h6" className="FooterContactInfo">Conoce mas sobre nosotros</Typography>
                            <ContactList></ContactList>
                        </Grid>
                        <Grid xs={8}>
                            <Typography variant="h8" className="FooterDisclaimer">{this.state.disclaimerBody}</Typography>
                            <Typography variant="h8" className="FooterDisclaimer">{this.state.disclaimerFinisher}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </footer>
        )
    }
}

export default Footer;