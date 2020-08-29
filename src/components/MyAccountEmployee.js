import React, { Component } from 'react';
import {Typography, TextField, Paper, Button, MenuItem, FormControl, InputLabel, Select, FilledInput } from '@material-ui/core';
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
            cityLoaded: {},
            cityValue: ''
        }
    }

    handleCityChange = (event, obj) => { 
        const cityId = event.target.value;
        this.setState((state, props) => {
            state.user.City =  cityId ? state.cities.find((city) => { return city.id == cityId }) : state.cityLoaded;
            state.cityValue = event.target.value;
            return state;
        });
    };

    handleAddressChange = (event, value) => { 
        const textValue = event.target.value;
        this.setState((state, props) => { 
            state.user.address = textValue; 
            return state;
        });
    };

    handleMailChange = (event, value) => {
        const textValue = event.target.value;
        this.setState((state, props) => { 
            state.user.mail = textValue; 
            return state; 
        });
    };
    
    handleTelChange = (event, value) => {
        const textValue = event.target.value;
        this.setState((state, props) => { 
            state.user.telephone = textValue; 
            return state;
        });
    };
    
    handleCelChange = (event, value) => {
        const textValue = event.target.value;
        this.setState((state, props) => { 
            state.user.cellphone = textValue; 
            return state;
        });
    };

    handlePasswordChange = (event, value) => {
        const textValue = event.target.value;
        this.setState((state, props) => { 
            state.user.password = textValue; 
            return state;
        });
    };

    componentDidMount() {
        axios.all([
            getCities(),
            getLoggedUser()
        ]).then((res) => {
            const user = res[1];
            const cityLoaded = res[1].City ? res[1].City : {};
            const cities = res[0].data.filter((city) => { return city.id !== cityLoaded.id });
            this.setState({ 
                cities: cities, 
                user: user, 
                cityLoaded: cityLoaded
            });
        });
    }

    updateUser = (event) => {
        event.preventDefault();
        const user = this.state.user;
        updateUser(user.id, user).then((resp) => {
            alert("Los cambios se guardaron satisfactoriamente");
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
                        <FormControl>
                            <InputLabel shrink>Ciudad</InputLabel>
                            <Select value={this.state.cityValue} onChange={this.handleCityChange} displayEmpty >
                                <MenuItem value="">{this.state.cityLoaded.name}</MenuItem>
                                {this.state.cities && this.state.cities.map((option, index) => (
                                    <MenuItem key={option.id} value={option.id}>{option.name}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <TextField label="Dirección" value={this.state.user.address} onChange={this.handleAddressChange}></TextField>
                        <TextField label="Correo electrónico" value={this.state.user.mail} onChange={this.handleMailChange}></TextField>
                        <TextField label="Teléfono" value={this.state.user.phone} onChange={this.handleTelChange}></TextField>
                        <TextField label="Celular" value={this.state.user.cellphone} onChange={this.handleCelChange} ></TextField>
                        <TextField label="Contraseña" value={this.state.user.password} onChange={this.handlePasswordChange} defaultValue=""></TextField>
                    </div>
                    <div className="MyAccountButton"><Button variant="contained" color="primary" type="submit">Guardar</Button></div>
                </form>
            </Paper>
        );
    }
}

export default MyAccountEmployee;