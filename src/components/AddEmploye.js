import React from 'react';
import {Typography, TextField, Paper, Button, MenuItem } from '@material-ui/core';
import '../css/styles/AddRole.scss'
import axios from 'axios';
import {  getDocTypes, getCities, getRaces, getRoles } from '../services/DropDownRepositories.js';

class AddEmploye extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            docTypes: [],
            races: [],
            cities: [],
            roles: [],
            user: props.data ? props.data : {}
        }
    }

    componentDidMount() {
        axios.all([
            getDocTypes(),
            getCities(),
            getRaces(),
            getRoles()
        ]).then((responses) => {
            const docTypes = responses[0].data;
            const cities = responses[1].data;
            const races = responses[2].data;
            const roles = responses[3].data;
            this.setState({ docTypes, cities, races, roles });
        });
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

    render() {
        return (

            <Paper className="MyAccountPaper">
                <div className="MyAccountHeader">
                    <div className="MyAccountTitle"><Typography variant="h4">Alta de empleado</Typography></div>
                </div>
                <form noValidate className="MyAccountForm" autoComplete="off" onSubmit={this.updateUser}>
                    <div className="MyAccountCol ColLeft">
                        <TextField label="Tipo de documento" value={this.state.user.docType} select onChange={this.handleDocTypeChange}>
                            {this.state.docTypes.map((option, index) => (
                                <MenuItem key={index} value={option}>{option.docTypeCode}</MenuItem>
                            ))}
                        </TextField>
                        <TextField label="Número de documento" value={this.state.user.docNumber} onChange={this.handleDocNumberChange}></TextField>
                        <TextField label="Nombres" value={this.state.user.name} onChange={this.handleNameChange}></TextField>
                        <TextField label="Apellido" value={this.state.user.lastName} onChange={this.handleLastNameChange}></TextField>
                        <TextField label="Fecha de nacimiento" value={this.state.user.birthdate} onChange={this.handleDateChange}></TextField>
                        <TextField label="Raza" value={this.state.user.race} select onChange={this.handleRaceChange}>
                            {this.state.races.map((option, index) => (
                                <MenuItem key={index} value={option}>{option.name}</MenuItem>
                            ))}
                        </TextField>
                        <TextField label="Genero" value={this.state.user.gender} onChange={this.handleMailChange}></TextField>
                    </div>
                    <div className="MyAccountCol ColRight">
                        <TextField label="Rol" select value={this.state.user.role} onChange={this.handleRoleChange}>
                            {this.state.roles.map((option, index) => (
                                <MenuItem key={index} value={option}>{option.nameRole}</MenuItem>
                            ))}
                        </TextField>
                        <TextField label="Ciudad" select value={this.state.user.city} onChange={this.handleCityChange}>
                            {this.state.cities.map((option, index) => (
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

export default AddEmploye;