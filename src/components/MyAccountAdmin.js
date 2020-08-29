import React, { Component } from 'react';
import {Typography, TextField, Paper, Button, MenuItem, FormControl, InputLabel, Select } from '@material-ui/core';
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
            DocTypeList: [],
            RaceList: [],
            RoleList: [],
            CityList: [],
            CityLoaded: {},
            DocTypeLoaded: {},
            RoleLoaded: {},
            RaceLoaded: {},
            CityValue: '',
            DocTypeValue: '',
            RoleValue: '',
            RaceValue: '',
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

    handleDateChange = (event, value) => { this.setState({ birthdate: event.target.value }); }; // buscar como es para fecha
    
    componentDidMount() {
        axios.all([
            getLoggedUser(),
            getDocTypes(),
            getCities(),
            getRoles(),
            getRaces()
        ]).then((responses) => {
            const user = responses[0];
            
            const DocTypeLoaded = user.DocType ? user.DocType : {};
            const DocTypeList = responses[1].data.filter((item) => { return item.id !== DocTypeLoaded.id });
            
            const CityLoaded = user.City ? user.City : {};
            const CityList = responses[2].data.filter((item) => { return item.id !== CityLoaded.id });
            
            const RoleLoaded = user.Role ? user.Role : {};
            const RoleList = responses[3].data.filter((item) => { return item.id !== RoleLoaded.id });
            
            const RaceLoaded = user.Race ? user.Race : {};
            const RaceList = responses[4].data.filter((item) => { return item.id !== RaceLoaded.id });
            
            this.setState({
                DocTypeLoaded: DocTypeLoaded,
                DocTypeList: DocTypeList,
                CityLoaded: CityLoaded,
                CityList: CityList,
                RoleLoaded: RoleLoaded,
                RoleList: RoleList,
                RaceLoaded: RaceLoaded,
                RaceList: RaceList,
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

    render() {
        return (
            <Paper className="MyAccountPaper">
                <div className="MyAccountHeader">
                    <div className="MyAccountTitle"><Typography variant="h4">Hola {this.state.user.name}</Typography></div>
                </div>
                <form noValidate className="MyAccountForm" autoComplete="off" onSubmit={this.updateUser}>
                    <div className="MyAccountCol ColLeft">
                        <FormControl>
                            <InputLabel shrink>Tipo de documento</InputLabel>
                            <Select name="DocType" value={this.state.DocTypeValue} onChange={this.handleSelectChange} displayEmpty >
                                <MenuItem value="">{this.state.DocTypeLoaded.docTypeCode}</MenuItem>
                                {this.state.DocTypeList && this.state.DocTypeList.map((option, index) => (
                                    <MenuItem key={option.id} value={option.id}>{option.docTypeCode}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <TextField name="docNumber" label="Número de documento" value={this.state.user.docNumber} onChange={this.handleTextChange}></TextField>
                        <TextField name="name" label="Nombres" value={this.state.user.name} onChange={this.handleTextChange}></TextField>
                        <TextField name="lastName" label="Apellido" value={this.state.user.lastName} onChange={this.handleTextChange}></TextField>
                        <TextField name="birthdate" label="Fecha de nacimiento" value={this.state.user.birthdate} onChange={this.handleTextChange}></TextField>
                        <FormControl>
                            <InputLabel shrink>Raza</InputLabel>
                            <Select name="Race" value={this.state.RaceValue} onChange={this.handleSelectChange} displayEmpty >
                                <MenuItem value="">{this.state.RaceLoaded.name}</MenuItem>
                                {this.state.RaceList && this.state.RaceList.map((option, index) => (
                                    <MenuItem key={option.id} value={option.id}>{option.name}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <TextField name="gender" label="Genero" value={this.state.user.gender} onChange={this.handleTextChange}></TextField>
                    </div>
                    <div className="MyAccountCol ColRight">
                        <FormControl>
                            <InputLabel shrink>Rol</InputLabel>
                            <Select name="Role" value={this.state.RoleValue} onChange={this.handleSelectChange} displayEmpty >
                                <MenuItem value="">{this.state.RoleLoaded.nameRole}</MenuItem>
                                {this.state.RoleList && this.state.RoleList.map((option, index) => (
                                    <MenuItem key={option.id} value={option.id}>{option.nameRole}</MenuItem>
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
                        <TextField name="mail" label="Correo electronico" value={this.state.user.mail} onChange={this.handleTextChange}></TextField>
                        <TextField name="phone" label="Teléfono" value={this.state.user.phone} onChange={this.handleTextChange}></TextField>
                        <TextField name="cellphone" label="Celular" value={this.state.user.cellphone} onChange={this.handleTextChange} ></TextField>
                        <TextField name="password" label="Contraseña" value={this.state.user.password} onChange={this.handleTextChange}></TextField>
                    </div>
                    <div className="MyAccountButton"><Button variant="contained" color="primary" type="submit">Guardar</Button></div>
                </form>
            </Paper>
        );
    }
}

export default MyAccountAdmin;