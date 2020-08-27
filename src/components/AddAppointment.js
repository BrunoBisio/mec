import React from 'react';
import { Grid, List, ListItem, TextField, MenuItem } from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import MaterialTable from "material-table";
import AddIcon from '@material-ui/icons/Add';
import '../css/styles/AddAppointment.scss';
import {push, getAppointments} from '../services/AppointmentRepository.js';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Axios from 'axios';
import { getLoggedUser } from '../services/UserRepository.js';
import { getDocTypesWithPatients, getSpecialtiesWithClinicsWithMedics } from '../services/DropDownRepositories.js';

const matTableOpt = {
    columns: [
        { title: "Dia", field: "date", type: "date" },
        { title: "Horario", field: "startHour", type: "time" },
        { title: "Medico", field: "medicDetail.medic.name" }
    ],
    localization: { header: { actions: 'Acciones' } },
    options: { actionsColumnIndex: -1 }
}

/*
doctypes: [
    { id: 1, code: 'DE', ..., users: [
        {id: 1, name: '', ...}
    ] }
]
*/

/*
speciality: [
    { id: 1, name: '', ..., clinics: [
        { id: 1, name: '', ..., medics: [
            {id: 1, name: '', ...}
        ]}
    ]}
]
*/

class AddApointment extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            loggedUser: {},
            filterDocType: {},
            filterDocNumber: "",
            filterSpeciality: {},
            filterClinic: {},
            filterMedic: {},
            filterDate: '',
            listDocTypes: [],
            listSpecialities: [],
            listAppointments: [],
            isUser: false
        };
    }

    addAppointment(row) {
        row.specialty = row.doctor.specialty
        row.doctor = row.doctor.name
        push(row);
    }

    componentDidMount () {
        /*Axios.all([
            getLoggedUser(),
            getDocTypesWithPatients(),
            getSpecialtiesWithClinicsWithMedics(),
            getAppointments()
        ]).then((responses) => {
            const loggedUser = responses[0];
            const listDocTypes = responses[1];
            const listSpecialities = responses[2];
            const listAppointments = responses[3];
            this.setState({ loggedUser, listDocTypes, listSpecialities, listAppointments });
        });*/
        const listDocTypes = getDocTypesWithPatients().data;
        const listSpecialities = getSpecialtiesWithClinicsWithMedics().data;
        const listAppointments = getAppointments().results;
        this.setState({ listDocTypes, listSpecialities, listAppointments });
    }

    filterList = () => {
        this.state.listAppointments.filter((appointment) => {
            if (this.state.filterSpeciality && this.state.filterSpeciality.id > 0) {
                if (this.state.filterSpeciality.id == appointment.medicDetail.speciality.id) {
                    if (this.state.filterClinic && this.state.filterClinic.id > 0) {
                        if (this.state.filterClinic.id === appointment.medicDetail.clinic.id) {
                            if (this.state.filterMedic && this.state.filterMedic.id > 0) {
                                if (this.state.filterMedic.id === appointment.medicDetail.user.id) {
                                    return true;
                                }
                            }
                        }
                    }
                }
            }
        });
    }

    onDocTypeChange = (event, obj) => { this.setState({ filterDocType: obj.props.value }); };

    onUserChange = (event, obj) => { this.setState({ filterDocNumber: event.target.value }); };

    onSpecialtyChange = (event, obj) => { this.setState({ filterSpeciality: obj.props.value }); };

    onClinicChange = (event, obj) => { this.setState({ filterClinic: obj.props.value }); };

    onMedicChange = (event, obj) => { this.setState({ filterMedic: obj.props.value }); };

    onDateChange = (event, value) => { this.setState({ filterDate: value }); };

    render() {
        return (
            <Grid container direction="row" justify="center" alignItems="center" >
                <Grid item xs={12} sm={6} direction="row" justify="center" alignItems="center">
                    {!this.state.isUser && <div>
                        <TextField select variant="outlined" value={this.state.filterDocType} onChange={this.onDocTypeChange} label="Tipo de documento">
                            {this.state.listDocTypes.map((option, index) => (
                                <MenuItem key={index} value={option}>{option.docTypeCode}</MenuItem>
                            ))}
                        </TextField>
                    </div>}
                    {!this.state.isUser && this.state.filterDocType && this.state.filterDocType.id > 0 && <div>
                        <TextField variant="outlined" value={this.state.filterDocNumber} onChange={this.onUserChange} label="Número de documento"></TextField>
                    </div>}
                    <div>
                        <TextField select variant="outlined" value={this.state.filterSpeciality} onChange={this.onSpecialtyChange} label="Especialidad" >
                            {this.state.listSpecialities.map((option, index) => (
                                <MenuItem key={index} value={option}>{option.name}</MenuItem>
                            ))}
                        </TextField>
                    </div>
                    {this.state.filterSpeciality && this.state.filterSpeciality.id > 0 && this.state.filterSpeciality.Clinics && <div>
                        <TextField select variant="outlined" value={this.state.filterClinic} onChange={this.onClinicChange} label="Clinica" >
                            {this.state.filterSpeciality.Clinics.map((option, index) => (
                                <MenuItem key={index} value={option}>{option.name}</MenuItem>
                            ))}
                        </TextField>
                    </div>}
                    {this.state.filterClinic && this.state.filterClinic.id > 0 && this.state.filterClinic.Users && <div>
                        <TextField select variant="outlined" value={this.state.filterMedic} onChange={this.onMedicChange} label="Medico" >
                            {this.state.filterClinic.Users.map((option, index) => (
                                <MenuItem key={index} value={option}>{option.name}</MenuItem>
                            ))}
                        </TextField>
                    </div>}
                    <div>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker fullWidth variant="inline" format="dd/MM/yyyy" margin="normal" value={this.filterDate} onChange={this.onDateChange}></KeyboardDatePicker>
                        </MuiPickersUtilsProvider>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} className="RightPanel">
                    <div className="tableContainer">
                        <MaterialTable title="Turnos disponibles" 
                            data={this.state.listAppointments}
                            columns={matTableOpt.columns}
                            localization={matTableOpt.localization}
                            actions={[ 
                                {
                                  icon: AddIcon,
                                  tooltip: 'Add appointment',
                                  onClick: (event, rowData) => this.addAppointment(rowData)
                                }
                              ]}
                            options={matTableOpt.options} >
                        </MaterialTable>
                    </div>
                </Grid>
            </Grid>
        )
    }
}

export default AddApointment;