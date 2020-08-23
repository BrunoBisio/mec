import React from 'react';
import { Button, Grid, Typography, Modal } from '@material-ui/core';
import CallIcon from '@material-ui/icons/Call';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import '../css/styles/ContactButton.scss'

const items = [
    {
        Text: 'Telefono',
        Icon: <CallIcon/>,
        Title: 'Habla con un operador',
        Info: '0666-6660'
    },
    {
        Text: 'Sucursales',
        Icon: <LocationOnIcon />,
        Title: 'Acercate a una sucursal',
        Info: 'Gondor, La comarca, Mordor, Moria',
    },
    {
        Text: 'Mail',
        Icon: <EmailIcon />,
        Title: 'Envianos un correo',
        Info: 'middleEarthClinics@mordor.com',
    }
]

function CustomButton(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <div>
            <Button onClick={handleClick} className="ContactButton" startIcon={props.item.Icon}>{props.item.Text}</Button>
            <Modal open={open} onClose={handleClose} className="ContactModal">
                <div className="modalTextContainer">
                    <Typography variant="h4" className="modalText title">{props.item.Title}</Typography>
                    <Typography variant="body1" className="modalText text">{props.item.Info}</Typography>
                </div>
            </Modal>
        </div>
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