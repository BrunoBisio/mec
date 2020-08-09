import React from 'react';
import { Button, Grid } from '@material-ui/core';
import CallIcon from '@material-ui/icons/Call';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import '../css/styles/ContactButton.scss'

const items = [
    {
        text: 'Telefono',
        icon: <CallIcon/>
    },
    {
        text: 'Sucursales',
        icon: <LocationOnIcon />
    },
    {
        text: 'Mail',
        icon: <EmailIcon />
    }
]

function CustomButton(props) {
    return (
        <Button className="ContactButton" startIcon={props.item.icon}>{props.item.text}</Button>
    )
}

class ContactButtons extends React.Component {
    render() {
        return (
            <div className="ContactButtonsContainer">
                <Grid container spacing={6} justify="center" alignItems="center" direction="row" className="ContactButtons">
                    { items.map((item, index) => { return <CustomButton item={item} key={index}></CustomButton>}) }
                </Grid>
            </div>
        )
    }
}

export default ContactButtons;