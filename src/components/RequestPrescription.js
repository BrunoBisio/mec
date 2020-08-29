import React from 'react';
import { Typography, TextField, MenuItem, Paper, Button, FormControl, InputLabel, Select } from '@material-ui/core';
import { createPrescription } from '../services/PrescriptionsRepository.js';
import '../css/styles/RequestPrescription.scss';
import { getSpecialties } from '../services/DropDownRepositories.js';
import { getLoggedUser } from '../services/RolRepository.js';
import Axios from 'axios';

class RequestPrescription extends React.Component {

    constructor(props) {
        super(props);
        // if i get a user is because someone else is creating the prescription
        this.state = {
            prescription: {
                drug: '',
                comment: '',
                User: props.user,
                Specialty: {},
                date: new Date(),
                UserId: props.user.id
            },
            close: props.onClose,
            SpecialtyValue: '',
            SpecialtyList: [],
            SpecialtyLoaded: {},
        }
    }

    // select handlers
    handleSelectChange = (event, obj) => {
        const itemId = event.target.value;
        const fieldName = event.target.name;
        this.setState((state, props) => {
            state.prescription[fieldName] = itemId > 0 ? state[fieldName + 'List'].find((item) => { return item.id = itemId }) : state[fieldName + 'Loaded'];
            state.prescription[fieldName + 'Id'] = itemId > 0 ? state.prescription[fieldName].id : state[fieldName + 'Loaded'].id;
            state[fieldName + 'Value'] = event.target.value;
            return state;
        });
    }

    handleTextChange = (event, value) => { 
        const fieldValue = event.target.value;
        const fieldName = event.target.name;
        this.setState((state, props) => {
            state.prescription[fieldName] = fieldValue;
            return state;
        });
    }

    requestPrescription = () => {
        createPrescription(this.state.prescription);
        
        this.setState((state, props) => {
            state.close();
            return state;
        });
    }

    componentDidMount() {
        Axios.all([
            getLoggedUser(),
            getSpecialties()
        ]).then((responses) => {
            if (responses[0].id !== this.state.prescription.User.id) {
                this.setState((state, props) => {
                    const SpecialtyLoaded = responses[0].Specialty ? responses[0].Specialty : {};
                    const SpecialtyList = responses[1].data.filter((item) => { return item.id !== SpecialtyLoaded.id });
                    state.SpecialtyLoaded = SpecialtyLoaded;
                    state.SpecialtyList = SpecialtyList;
                    return state;
                });
            } else {
                this.setState((state, props) => {
                    state.SpecialtyLoaded = null;
                    state.SpecialtyList = responses[1].data;
                    return state;
                });
            }
            
        })
    }

    render() {
        return (
            <Paper className="RequestPrescriptionContainer">
                <div className="DisclaimerContainer">
                    <div></div>
                    <Typography>El doctor se reserva el derecho de decidir si la receta sera aceptada y emitida o rechazada.</Typography>
                    <Typography>Una vez que el doctor tome la decision usted sera notificado atravez de su casilla de correo.</Typography>
                    <Typography>Este proceso puede llegar a tardar hasta 24 hs</Typography>
                </div>
                <div className="InputContainer">
                    <div className="DetailsContainer">
                        <FormControl>
                            <InputLabel shrink>Especialidad medica</InputLabel>
                            <Select name="Specialty" value={this.state.SpecialtyValue} onChange={this.handleSelectChange} displayEmpty >
                                {this.state.SpecialtyLoaded && <MenuItem value="">{this.state.SpecialtyLoaded.name}</MenuItem>}
                                {this.state.SpecialtyList && this.state.SpecialtyList.map((option, index) => (
                                    <MenuItem key={option.id} value={option.id}>{option.name}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <TextField name="drug" label="Remedio solicitado" value={this.state.drug} onChange={this.handleTextChange}></TextField>
                    </div>
                    <div className="CommentContainer">
                        <TextField name="comment" label="Comentario" multiline rows={6} variant="outlined" value={this.state.comment} onChange={this.handleTextChange} ></TextField>
                    </div>
                </div>
                <div>
                    <Button onClick={this.requestPrescription} variant="contained" color="primary" >Solicitar</Button>
                </div>
            </Paper>
        )
    }
}

export default RequestPrescription;