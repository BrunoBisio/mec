import React, { Component } from 'react';
import {Typography, TextField, Paper, Button, MenuItem } from '@material-ui/core';
import '../css/styles/MyAccount.scss';
import axios from 'axios'
import { getLoggedUser } from '../services/RolRepository.js';
import { getDocTypes, getCities, getRoles, getRaces } from '../services/DropDownRepositories';
import { updateUser } from '../services/UserRepository';

class MyAccountAdmin extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            user: { DocType: {}, Race: {}, Role: {}, City: {} },
            docTypes: [], 
            cities: [],
            roles: [],
            races: []
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
        axios.all([
            getDocTypes(),
            getCities(),
            getRoles(),
            getRaces(),
            getLoggedUser()
        ]).then((responses) => {
            const docTypes = responses[0].data;
            const cities = responses[1].data;
            const roles = responses[2].data;
            const races = responses[3].data;
            const user = responses[4];
            this.setState({ docTypes, cities, roles, races, user });
        });
    }

    updateUser = (event) => {
        event.preventDefault();
        const user = this.state.user;
        updateUser(user.id, user).then((resp) => {
            console.log(resp);
        });;
    }

    render() {
        return (
            <Paper className="MyAccountPaper">
                <div className="MyAccountHeader">
                    <div className="MyAccountTitle"><Typography variant="h4">Hola {this.state.user.name}</Typography></div>
                </div>
                <form noValidate className="MyAccountForm" autoComplete="off" onSubmit={this.updateUser}>
                    <div className="MyAccountCol ColLeft">
                        <TextField label="Tipo de documento" value={this.state.user.DocType.docTypeCode} select onChange={this.handleDocTypeChange}>
                            {this.state.docTypes && this.state.docTypes.map((option, index) => (
                                <MenuItem key={index} value={option}>{option.docTypeCode}</MenuItem>
                            ))}
                        </TextField>
                        <TextField label="Número de documento" value={this.state.user.docNumber} onChange={this.handleDocNumberChange}></TextField>
                        <TextField label="Nombres" value={this.state.user.name} onChange={this.handleNameChange}></TextField>
                        <TextField label="Apellido" value={this.state.user.lastName} onChange={this.handleLastNameChange}></TextField>
                        <TextField label="Fecha de nacimiento" value={this.state.user.birthdate} onChange={this.handleDateChange}></TextField>
                        <TextField label="Raza" value={this.state.user.Race.name} select onChange={this.handleRaceChange}>
                            {this.state.races && this.state.races.map((option, index) => (
                                <MenuItem key={index} value={option}>{option.name}</MenuItem>
                            ))}
                        </TextField>
                        <TextField label="Genero" value={this.state.user.gender} onChange={this.handleMailChange}></TextField>
                    </div>
                    <div className="MyAccountCol ColRight">
                        <TextField label="Rol" select value={this.state.user.Role.nameRole} onChange={this.handleRoleChange}>
                            {this.state.roles && this.state.roles.map((option, index) => (
                                <MenuItem key={index} value={option}>{option.nameRole}</MenuItem>
                            ))}
                        </TextField>
                        <TextField label="Ciudad" select value={this.state.user.City.name} onChange={this.handleCityChange}>
                            {this.state.cities && this.state.cities.map((option, index) => (
                                <MenuItem key={index} value={option}>{option.name}</MenuItem>
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

export default MyAccountAdmin;