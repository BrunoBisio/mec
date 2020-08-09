import React from 'react';
import autoBind from 'auto-bind';
import { Grid, Divider, List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import Logo from '../css/img/Logo.png';
import CallIcon from '@material-ui/icons/Call';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import '../css/styles/Footer.scss';

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
            <ListItemText primary={props.item.Text} primaryTypographyProps={{ variant: 'caption' }} alignItems="center"></ListItemText>
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
                <Grid container xs={12} className="FooterContainer">
                    <Grid item xs={2}><img src={Logo}></img></Grid>
                    <Divider variant="fullWidth"/>
                    <Grid container spacing={2} xs={10} className="FooterInfo">
                        <Grid item xs={6} sm={3} className="FooterGridContainer"></Grid>
                        <Grid item xs={6} sm={3} justify="flex-start" className="FooterGridContainer">
                            <div className="FooterContactInfoTitle"><Typography variant="h8" className="FooterContactInfo" align="left">Conoce mas sobre nosotros</Typography></div>
                            <ContactList></ContactList>
                        </Grid>
                        <Grid xs={12} sm={6} justify="flex-start" alignItems="center" className="FooterGridContainerDisclaimer">
                            <div className="FooterDisclaimerDiv"><Typography variant="caption" className="FooterDisclaimer" align="left">{this.state.disclaimerBody}</Typography></div>
                            <div className="FooterDisclaimerDiv"><Typography variant="caption" className="FooterDisclaimer" align="left">{this.state.disclaimerFinisher}</Typography></div>
                        </Grid>
                    </Grid>
                </Grid>
            </footer>
        )
    }
}

export default Footer;