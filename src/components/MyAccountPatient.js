import React, { Component } from 'react';
import {Typography, TextField, Paper, Button, MenuItem, Modal, Container, FormControl, InputLabel, Select } from '@material-ui/core';
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
        user.deleteRequest = 1;
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
            user: { DocType: {}, Race: {}, Plan: {}, City: {} },
            PlanList: [],
            CityList: [],
            CityLoaded: {},
            PlanLoaded: {},
            CityValue: '',
            PlanValue: '',
            open: false
        }
    }

    // select handlers
    handleSelectChange = (event, obj) => {
        const itemId = event.target.value;
        const fieldName = event.target.name;
        this.setState((state, props) => {
            state.user[fieldName] = itemId > 0 ? state[fieldName + 'List'].find((item) => { return item.id = itemId }) : state[fieldName + 'Loaded'];
            state.user[fieldName + 'Id'] = itemId > 0 ? state.user[fieldName].id : state[fieldName + 'Loaded'].id;
            state[fieldName + 'Value'] = event.target.value;
            return state;
        });
    }

    // text handler
    handleTextChange = (event, value) => { 
        const fieldValue = event.target.value;
        const fieldName = event.target.name;
        this.setState((state, props) => {
            state.user[fieldName] = fieldValue;
            return state;
        });
    }

    componentDidMount() {
        axios.all([
            getLoggedUser(),
            getPlans(),
            getCities(),
        ]).then((responses) => {
            const user = responses[0];
            
            const PlanLoaded = user.Plan ? user.Plan : {};
            const PlanList = responses[1].data.filter((item) => { return item.id !== PlanLoaded.id });
            
            const CityLoaded = user.City ? user.City : {};
            const CityList = responses[2].data.filter((item) => { return item.id !== CityLoaded.id });
            
            this.setState({
                PlanLoaded: PlanLoaded,
                PlanList: PlanList,
                CityLoaded: CityLoaded,
                CityList: CityList,
                user: user
            });
        });
    }

    updateUser = (event) => {
        event.preventDefault();
        const user = this.state.user;
        updateUser(user.id, user).then((resp) => {
            alert("Los cambios se guardaron satisfactoriamente");
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
                            <FormControl>
                                <InputLabel shrink>Plan</InputLabel>
                                <Select name="Plan" value={this.state.PlanValue} onChange={this.handleSelectChange} displayEmpty >
                                    <MenuItem value="">{this.state.PlanLoaded.planName}</MenuItem>
                                    {this.state.PlanList && this.state.PlanList.map((option, index) => (
                                        <MenuItem key={option.id} value={option.id}>{option.planName}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <FormControl>
                                <InputLabel shrink>Ciudad</InputLabel>
                                <Select name="City" value={this.state.CityValue} onChange={this.handleSelectChange} displayEmpty >
                                    <MenuItem value="">{this.state.CityLoaded.name}</MenuItem>
                                    {this.state.CityList && this.state.CityList.map((option, index) => (
                                        <MenuItem key={option.id} value={option.id}>{option.name}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <TextField name="address" label="Dirección" value={this.state.user.address} onChange={this.handleTextChange}></TextField>
                            <TextField name="mail" label="Correo electrónico" value={this.state.user.mail} onChange={this.handleTextChange}></TextField>
                            <TextField name="phone" label="Teléfono" value={this.state.user.phone} onChange={this.handleTextChange}></TextField>
                            <TextField name="cellphone" label="Celular" value={this.state.user.cellphone} onChange={this.handleTextChange} ></TextField>
                            <TextField name="password" label="Contraseña" value={this.state.user.password} onChange={this.handleTextChange}></TextField>
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