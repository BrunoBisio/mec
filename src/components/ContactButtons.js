import React from 'react';
import { Button, Grid } from '@material-ui/core';
import CallIcon from '@material-ui/icons/Call';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import '../css/ContactButton.scss'

function CallButton() {
    const text = 'Telefono';
    
    return (
        <Button className="ContactButton" startIcon={<CallIcon />}>{text}</Button>
    )
}

function LocationButton() {
    const text = 'Sucursales';
    
    return (
        <Button className="ContactButton" startIcon={<LocationOnIcon />}>{text}</Button>
    )
}

function EmailButton() {
    const text = 'Mail';

    return (
        <Button className="ContactButton" startIcon={<EmailIcon />}>{text}</Button>
    )
}

class ContactButtons extends React.Component {
    render() {
        return (
            <div className="ContactButtonsContainer">
                <Grid container spacing={6} justify="center" alignItems="center" direction="row" className="ContactButtons">
                    <LocationButton></LocationButton>
                    <CallButton></CallButton>
                    <EmailButton></EmailButton>
                </Grid>
            </div>
        )
    }
}

export default ContactButtons;