import React, { Component } from 'react';
import {Typography, TextField, Paper, Button, MenuItem, Modal, Container } from '@material-ui/core';
import '../css/styles/MyAccount.scss';
import axios from 'axios'
import { getLoggedUser } from '../services/RolRepository.js';
import { getDocTypes, getCities, getPlans, getRaces } from '../services/DropDownRepositories';
import { updateUser } from '../services/UserRepository';
import foto_baja from '../css/img/foto_baja.png';

class DeleteUser extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: props.user,
            Styles: {
                width: '20vw',
                height: '20vh',
                backgroundImage: `url(${foto_baja})`
            },
            closeFunc: props.closeFunc
        }
    }

    handleCancel = (event) => {
        this.state.closeFunc(false);
    }

    handleConfirm = (event) => {
        const user = this.state.user;
        user.requestDelete = 1;
        updateUser(user.id, user);
        this.state.closeFunc(false);
    }

    render() {
        return (
            <div className="DeleteUserContainer">
                <div className="DeleteUserTitle"><Typography variant="h2">¡Te vamos a extrañar!</Typography></div>
                <div>
                    <Container className="DeleteUserImage" style={this.state.Styles}></Container>
                </div>
                <div>
                    <Button className="DeleteUserButton" variant="contained" color="primary" title="Confirmar" onClick={this.handleConfirm}>¡Quiero una nueva aventura!</Button>
                    <Button className="DeleteUserButton" variant="contained" color="primary" title="Cancelar" onClick={this.handleCancel}>¡Quiero quedarme!</Button>
                </div>
            </div>
        )
    }
}

function DeleteUserModal(props) {
    return (
        <div className="modal">
            <div><DeleteUser user={props.user}/></div>
        </div>
    )
}

class MyAccountPatient extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: { DocType: {}, Race: {} },
            cities: [],
            plans: [],
            open: false
        }
    }
    
    handlePlanChange = (event, obj) => { this.setState({ plan: obj.props.value}); };

    handleCityChange = (event, obj) => { this.setState({ city: obj.props.value}); };

    handleAddressChange = (event, value) => { this.setState({ address: event.target.value }); };

    handleMailChange = (event, value) => { this.setState({ mail: event.target.value }); };
    
    handleTelChange = (event, value) => { this.setState({ telephone: event.target.value }); };
    
    handleCelChange = (event, value) => { this.setState({ cellphone: event.target.value }); };

    handlePasswordChange = (event, value) => { this.setState({ password: event.target.value }); };

    componentDidMount() {
        axios.all([
            getCities(),
            getPlans(),
            getLoggedUser()
        ]).then((responses) => {
            const cities = responses[0].data;
            const plans = responses[1].data;
            const user = responses[2];
            this.setState({ cities, plans, user });
        });
    }

    updateUser = (event) => {
        event.preventDefault();
        const user = this.state.user;
        updateUser(user.id, user).then((resp) => {
            console.log(resp);
        });;
    }

    handleDeleteUser = (value) => {
        this.setState({ open: value });
    }

    render() {
        return (
            <div>
                <Paper className="MyAccountPaper">
                    <div className="MyAccountHeader">
                        <div className="MyAccountTitle"><Typography variant="h4">Hola {this.state.user.name}</Typography></div>
                    </div>
                    <div className="MyAccountButtonDelete"><Button variant="contained" color="primary" onClick={()=>{this.handleDeleteUser(true)}}>Solicitud de baja</Button></div>
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
                            <TextField label="Plan" select value={this.state.user.Plan} onChange={this.handlePlanChange}>
                                {this.state.plans && this.state.plans.map((option, index) => (
                                    <MenuItem key={index} value={option}>{option.planName}</MenuItem>
                                ))}
                            </TextField>
                            <TextField label="Ciudad" select value={this.state.user.City} onChange={this.handleCityChange}>
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
                <Modal open={this.state.open} onClose={()=>{this.handleDeleteUser(false)}}><DeleteUserModal user={this.state.user} closeFunc={this.handleDeleteUser} /></Modal>
            </div>
        );
    }
}

export default MyAccountPatient;