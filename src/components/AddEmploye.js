import React from 'react';
import {Typography, TextField, Paper, Button, MenuItem } from '@material-ui/core';
import '../css/styles/MyAccount.scss';

let dummyInfo = {
    name: 'Aragon',
    docTypeAndDoc: 'DU 100988',
    fullName: 'Aragorn heir of Isildur',
    birthday: '29/07/1954',
    insurance: 'MEC50',
    city: 'Gondor',
    address: 'Isildur 101',
    mail: 'Aragorn@orcSlayer.org',
    telephone: '55443366',
    cellphone: '01155445555'
}

const insurances = [
    { value: 'MEC10' },
    { value: 'MEC20' },
    { value: 'MEC30' },
    { value: 'MEC40' },
    { value: 'MEC50' },
    { value: 'MEC-ELFOS' }
]

const cities = [
    { value: 'Erebor' },
    { value: 'Gondor' },
    { value: 'Hobbiton' },
    { value: 'Mordor' },
    { value: 'Moria' },
    { value: 'Rohan' },
]



class AddEmployee extends React.Component {
    constructor(props){
        super(props);

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
    handleDocTypeAndDocChange = (event) => { this.setState({ docTypeAndDoc: event.target.value})};
    handleIdChange = (event) => { this.setState({ id: event.target.value})};
    handleNameChange = (event) => { this.setState({ name: event.target.value})};
    handleSurNameChange = (event) => { this.setState({ surname: event.target.value})};
    handleBirthdayChange = (event) => { this.setState({ birthday: event.target.value})};
    handleRoleChange = (event) => { this.setState({ role: event.target.value})};
    handleTelephoneChange = (event) => { this.setState({ telephone: event.target.value})};
    handleCellphoneChange = (event) => { this.setState({ cellphone: event.target.value})};
    handlemailChange = (event) => { this.setState({ mail: event.target.value})};

    updateUser = () => { 
        dummyInfo.insurance = this.state.insurance;
        dummyInfo.city = this.state.city;
        dummyInfo.address = this.state.address;
        dummyInfo.mail = this.state.mail;
        dummyInfo.telephone = this.state.telephone;
        dummyInfo.cellphone = this.state.cellphone;
    }

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

export default AddEmployee;