import React from 'react';
import { Typography, Button } from '@material-ui/core';
import '../css/styles/ConfirmDeletePatient.scss';

class ConfirmDeleteRole extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            role: props.data
        }
    }

    render() {
        return (<div className="confirmDeleteContainer">
            <div className="logo"></div>
                <Typography variant="h2" component="h2">Esta por eliminar el rol</Typography>
            <div className="userDetails">
                <div className="textBox"><Typography>{this.state.role.id/*.docTypeCode*/}</Typography></div>
                <div className="textBox"><Typography>{this.state.role.name}</Typography></div>
            </div>
            <Typography variant="h4" component="h4">Esta accion no se podra deshacer</Typography>
            <div className="buttonContainer">
                <Button className="cancelButton" variant="contained" color="primary">Cancelar</Button>
                <Button className="deleteButton" variant="contained" color="primary">Eliminar</Button>
            </div>
        </div>)
    }
}

export default ConfirmDeleteRole;
    