import React from 'react';
import {Typography, TextField, Paper, Button, MenuItem } from '@material-ui/core';
import '../css/styles/AddRole.scss'

class AddPatient extends React.Component {
    constructor(props){
        super(props);
        if (props.data) {
            this.state = props.data
        } else {
            this.state = {
                name: "",
            docTypeAndDoc: "",
            id: "",
            role: "",
            name: "",
            surname: "",
            birthday: "",            
            mail: "",
            telephone: "",
            cellphone: ""
        }
    }
    }
    handleDocTypeAndDocChange = (event) => { this.setState({ docTypeAndDoc: event.target.value})};
    handleIdChange = (event) => { this.setState({ id: event.target.value})};
    handleNameChange = (event) => { this.setState({ name: event.target.value})};
    handleSurNameChange = (event) => { this.setState({ surname: event.target.value})};
    handleBirthdayChange = (event) => { this.setState({ birthday: event.target.value})};
    handleRoleChange = (event) => { this.setState({ role: event.target.value})};
    handleTelephoneChange = (event) => { this.setState({ telephone: event.target.value})};
    handleCellphoneChange = (event) => { this.setState({ cellphone: event.target.value})};
    handlemailChange = (event) => { this.setState({ mail: event.target.value})};


    render() {
        return (

            <Paper className="MyAccountPaper">
                <div className="MyAccountHeader">
                    <div className="MyAccountTitle"><Typography variant="h4">Alta de empleado</Typography></div>
                </div>
                <form noValidate className="MyAccountForm" autoComplete="off">
                    <div className="MyAccountCol ColLeft">
                    <TextField label="Tipo y Nro de doc" value={this.state.docTypeAndDoc} onChange={this.handleDocTypeAndDocChange}></TextField>
                    <TextField label="Id de empleado" value={this.state.id} onChange={this.handleIdChange} type="number"></TextField>
                    <TextField label="Nombre" value={this.state.name} onChange={this.handleNameChange}></TextField>
                    <TextField label="Apellido" value={this.state.surname} onChange={this.handleSurNameChange}></TextField>
                    <TextField label="Fecha de nacimiento" value={this.state.birthday} onChange={this.handleBirthdayChange} type="date"  InputLabelProps={{shrink: true}}></TextField>
                    </div>
                    <div className="MyAccountCol ColRight">
                    <TextField label="Rol" value={this.state.role} onChange={this.handleRoleChange}></TextField>
                    <TextField label="Telefono" value={this.state.telephone} onChange={this.handleTelephoneChange}></TextField>
                    <TextField label="Celular" value={this.state.cellphone} onChange={this.handleCellphoneChange}></TextField>
                    <TextField label="Mail" value={this.state.mail} onChange={this.handlemailChange}></TextField>
                    </div>
                </form>
                <div className="MyAccountButton"><Button variant="contained" color="primary" onClick={this.updateUser}>Guardar</Button></div>
            </Paper>
        );
    }
}

export default AddPatient;