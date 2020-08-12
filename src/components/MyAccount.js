import React from 'react';
import {Typography, TextField, Paper, Button, MenuItem } from '@material-ui/core';

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



class MyAccount extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            name: dummyInfo.name,
            docTypeAndDoc: dummyInfo.docTypeAndDoc,
            fullName: dummyInfo.fullName,
            birthday: dummyInfo.birthday,
            insurance: dummyInfo.insurance,
            city: dummyInfo.city,
            address: dummyInfo.address,
            mail: dummyInfo.mail,
            telephone: dummyInfo.telephone,
            cellphone: dummyInfo.cellphone
        }
    }

    handleInsuranceChange = (event, obj) => { this.setState({ insurance: obj.props.value }); };
    
    handleCityChange = (event, obj) => { this.setState({ city: obj.props.value}); };

    handleAddressChange = (event, value) => { this.setState({ address: event.target.value }); };

    handleMailChange = (event, value) => { this.setState({ mail: event.target.value }); };
    
    handleTelChange = (event, value) => { this.setState({ telephone: event.target.value }); };
    
    handleCelChange = (event, value) => { this.setState({ cellphone: event.target.value }); };

    render() {
        return (
            <Paper className="MyAccountPaper">
                <div className="MyAccountHeader">
                    <div className="MyAccountTitle"><Typography variant="h4">Hola {this.state.name}</Typography></div>
                    <div className="MyAccountDelete"><Button variant="contained">Solicitar baja</Button></div>
                </div>
                <form noValidate className="MyAccountForm" autoComplete="off">
                    <div className="MyAccountCol ColLeft">
                        <TextField label="Tipo y Nro de doc" value={this.state.docTypeAndDoc} InputProps={{readOnly: true}}></TextField>
                        <TextField label="Nombre y Apellido" value={this.state.fullName} InputProps={{readOnly: true}}></TextField>
                        <TextField label="Fecha de nacimiento" value={this.state.birthday} InputProps={{readOnly: true}}></TextField>
                        <TextField label="Plan" select value={this.state.insurance}  onChange={this.handleInsuranceChange}>
                            {insurances.map((option, index) => (
                                <MenuItem key={index} value={option.value}>{option.value}</MenuItem>
                            ))}
                        </TextField>
                        <TextField label="Ciudad" select value={this.state.city}  onChange={this.handleCityChange}>
                            {cities.map((option, index) => (
                                <MenuItem key={index} value={option.value}>{option.value}</MenuItem>
                            ))}
                        </TextField>
                    </div>
                    <div className="MyAccountCol ColRight">
                        <div>
                            <TextField label="Direccion" value={this.state.address} onChange={this.handleAddressChange}></TextField>
                            <TextField label="Correo electronico" value={this.state.mail} onChange={this.handleMailChange}></TextField>
                            <TextField label="Telefono" value={this.state.telephone} onChange={this.handleTelChange}></TextField>
                            <TextField label="Celular" value={this.state.cellphone} onChange={this.handleCelChange} ></TextField>
                        </div>
                        <Button variant="contained">Guardar</Button>
                    </div>
                </form>
            </Paper>
        );
    }
}

export default MyAccount;