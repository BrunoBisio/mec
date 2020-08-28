import React, { Component } from 'react';
import {Typography, TextField, Paper, Button, MenuItem } from '@material-ui/core';
import '../css/styles/MyAccount.scss';
import axios from 'axios'
import { getLoggedUser } from '../services/RolRepository.js';
import { getCities } from '../services/DropDownRepositories';
import { updateUser } from '../services/UserRepository';

class MyAccountEmployee extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            user: { DocType: {}, Race: {}, Role: {}, City: {} },
            cities: [],
        }
    }

    handleCityChange = (event, obj) => { this.setState({ city: obj.props.value}); };

    handleAddressChange = (event, value) => { this.setState({ address: event.target.value }); };

    handleMailChange = (event, value) => { this.setState({ mail: event.target.value }); };
    
    handleTelChange = (event, value) => { this.setState({ telephone: event.target.value }); };
    
    handleCelChange = (event, value) => { this.setState({ cellphone: event.target.value }); };

    handlePasswordChange = (event, value) => { this.setState({ password: event.target.value }); };

    componentDidMount() {
        axios.all([
            getCities(),
            getLoggedUser()
        ]).then((res) => {
            const cities = res[0].data;
            const user = res[1];
            this.setState({ cities, user });
        });
    }

    updateUser = (event) => {
        event.preventDefault();
        const user = this.state.user;
        updateUser(user.id, user).then((resp) => {
            console.log(resp);
        });
    }

    render() {
        return (
            <Paper className="MyAccountPaper">
                <div className="MyAccountHeader">
                    <div className="MyAccountTitle"><Typography variant="h4">Hola {this.state.user.name}</Typography></div>
                </div>
                <form noValidate className="MyAccountForm" autoComplete="off" onSubmit={this.updateUser}>
                    <div className="MyAccountCol ColLeft">
                        <TextField label="Tipo de documento" value={this.state.user.DocType.docTypeCode} disabled={true}></TextField>
                        <TextField label="Número de documento" value={this.state.user.docNumber} disabled={true}></TextField>
                        <TextField label="Nombres" value={this.state.user.name} disabled={true}></TextField>
                        <TextField label="Apellido" value={this.state.user.lastName} disabled={true}></TextField>
                        <TextField label="Fecha de nacimiento" value={this.state.user.birthdate} disabled={true}></TextField>
                        <TextField label="Raza" value={this.state.user.Race.name} disabled={true}></TextField>
                        <TextField label="Género" value={this.state.user.gender} disabled={true}></TextField>
                    </div>
                    <div className="MyAccountCol ColRight">
                        <TextField label="Rol" value={this.state.user.Role.nameRole} disabled={true}></TextField>
                        <TextField label="Ciudad" select value={this.state.user.City.name} onChange={this.handleCityChange}>
                            {this.state.cities && this.state.cities.map((option, index) => (
                                <MenuItem key={index} value={option}>{option.name}</MenuItem>
                            ))}
                        </TextField>
                        <TextField label="Dirección" value={this.state.user.address} onChange={this.handleAddressChange}></TextField>
                        <TextField label="Correo electrónico" value={this.state.user.mail} onChange={this.handleMailChange}></TextField>
                        <TextField label="Teléfono" value={this.state.user.telephone} onChange={this.handleTelChange}></TextField>
                        <TextField label="Celular" value={this.state.user.cellphone} onChange={this.handleCelChange} ></TextField>
                        <TextField label="Contraseña" value={this.state.user.password} onChange={this.handlePasswordChange}></TextField>
                    </div>
                    <div className="MyAccountButton"><Button variant="contained" color="primary" type="submit">Guardar</Button></div>
                </form>
            </Paper>
        );
    }
}

export default MyAccountEmployee;