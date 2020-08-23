import React, { Component } from 'react';
import {Typography, TextField, Paper, Button, MenuItem } from '@material-ui/core';
import '../css/styles/MyAccount.scss';
import {getUser} from '../services/RolRepository';

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
            id: props.userId,
            user: {},
            docTypes: [], 
            cities: [],
            roles: [],
            races: []
            /*name: user.name,
            docTypeAndDoc: dummyInfo.docTypeAndDoc,
            fullName: user.name,
            birthday: dummyInfo.birthday,
            insurance: dummyInfo.insurance,
            city: dummyInfo.city,
            address: dummyInfo.address,
            mail: dummyInfo.mail,
            telephone: dummyInfo.telephone,
            cellphone: dummyInfo.cellphone*/
        }
    }

    handleDocTypeChange = (event, obj) => { this.setState({ docType: obj.props.value}); };

    handleDocNumberChange = (event, value) => { this.setState({ docNumber: event.target.value }); };

    handleNameChange = (event, value) => { this.setState({ name: event.target.value }); };

    handleLastNameChange = (event, value) => { this.setState({ lastName: event.target.value }); };

    handleDateChange = (event, value) => { this.setState({ birthdate: event.target.value }); }; // buscar como es para fecha
    
    handleRaceChange = (event, obj) => { this.setState({ race: obj.props.value}); };
    
    handleRoleChange = (event, obj) => { this.setState({ role: obj.props.value}); };

    handleCityChange = (event, obj) => { this.setState({ city: obj.props.value}); };

    handleAddressChange = (event, value) => { this.setState({ address: event.target.value }); };

    handleMailChange = (event, value) => { this.setState({ mail: event.target.value }); };
    
    handleTelChange = (event, value) => { this.setState({ telephone: event.target.value }); };
    
    handleCelChange = (event, value) => { this.setState({ cellphone: event.target.value }); };

    handlePasswordChange = (event, value) => { this.setState({ password: event.target.value }); };

    componentDidMount() {
        /*
            user
            tipoDocumento
            races
            roles
            cities
        */
        // const apiUrl = 'http://localhost:3000';
        axios.all([
            // get user
            axios.get('/users/' + this.state.id),
            // get docTypes
            axios.get('/docType'),
            // get cities
            // axios.get('/cities'); // falta
            // get roles
            // axios.get('/roles'); // falta
            // get races
            // axios.get('/races');
        ]).then((responses) => {
            const user = responses[0].data;
            const docTypes = responses[1].data;
            const cities = responses[2].data;
            const roles = responses[3].data;
            const races = responses[4].data;
            this.setState({ user, docTypes, cities, roles, races });
        });
    }

    updateUser = () => { 
        const user = this.state.user;
        axios.put('/users/' + this.state.id, { user }).then((resp) => {

        });
    }

    render() {
        return (
            <Paper className="MyAccountPaper">
                <div className="MyAccountHeader">
                    <div className="MyAccountTitle"><Typography variant="h4">Hola {this.state.name}</Typography></div>
                    <div className="MyAccountDelete"><Button variant="contained" color="primary">Solicitar baja</Button></div>
                </div>
                <form noValidate className="MyAccountForm" autoComplete="off" onSubmit={this.updateUser}>
                    <div className="MyAccountCol ColLeft">
                        <TextField label="Tipo de documento" value={this.state.user.docType} select onChange={this.handleDocTypeChange}>
                            {this.state.docTypes.map((option, index) => (
                                <MenuItem key={index} value={option.value}>{option.value}</MenuItem>
                            ))}
                        </TextField>
                        <TextField label="Número de documento" value={this.state.user.docNumber} onChange={this.handleDocNumberChange}></TextField>
                        <TextField label="Nombres" value={this.state.user.name} onChange={this.handleNameChange}></TextField>
                        <TextField label="Apellido" value={this.state.user.lastName} onChange={this.handleLastNameChange}></TextField>
                        <TextField label="Fecha de nacimiento" value={this.state.user.birthdate} onChange={this.handleDateChange}></TextField>
                        <TextField label="Raza" value={this.state.user.race} select onChange={this.handleRaceChange}>
                            {this.state.races.map((option, index) => (
                                <MenuItem key={index} value={option.value}>{option.value}</MenuItem>
                            ))}
                        </TextField>
                        <TextField label="Genero" value={this.state.user.gender} onChange={this.handleMailChange}></TextField>
                    </div>
                    <div className="MyAccountCol ColRight">
                        <TextField label="Rol" select value={this.state.user.role}  onChange={this.handleRoleChange}>
                            {this.state.roles.map((option, index) => (
                                <MenuItem key={index} value={option.value}>{option.value}</MenuItem>
                            ))}
                        </TextField>
                        <TextField label="Ciudad" select value={this.state.user.city}  onChange={this.handleCityChange}>
                            {this.state.cities.map((option, index) => (
                                <MenuItem key={index} value={option.value}>{option.value}</MenuItem>
                            ))}
                        </TextField>
                        <TextField label="Dirección" value={this.state.user.address} onChange={this.handleAddressChange}></TextField>
                        <TextField label="Correo electronico" value={this.state.user.mail} onChange={this.handleMailChange}></TextField>
                        <TextField label="Telefono" value={this.state.user.telephone} onChange={this.handleTelChange}></TextField>
                        <TextField label="Celular" value={this.state.user.cellphone} onChange={this.handleCelChange} ></TextField>
                        <TextField label="Contraseña" value={this.state.user.password} onChange={this.handlePasswordChange}></TextField>
                    </div>
                    <div className="MyAccountButton"><Button variant="contained" color="primary" type="submit">Guardar</Button></div>
                </form>
            </Paper>
        );
    }
}

export default MyAccount;