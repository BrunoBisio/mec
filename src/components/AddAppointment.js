import React from 'react';
import format from "date-fns/format";
import esLocale from "date-fns/locale/es";
import { Grid, List, ListItem, TextField, MenuItem } from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import MaterialTable from "material-table";
import AddIcon from '@material-ui/icons/Add';
import '../css/styles/AddAppointment.scss';
import {getAppointments, updateAppointment} from '../services/AppointmentRepository.js';
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

class LocalizedUtils extends DateFnsUtils {
    getDatePickerHeaderText(date) {
      return format(date, "dd/MM/yyyy", { locale: this.locale });
    }
}

const findUser = (list, value) => {
    return list.find((item) => { return item.docNumber === value });
}

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
            filterDate: new Date(),
            listDocTypes: [],
            listSpecialities: [],
            listAppointments: [],
            isUser: false
        };
    }

    addAppointment(row) {
        let user = this.state.loggedUser;
        if (user.role !== 4) {
            user = findUser(this.state.filterDocType.users, this.state.filterDocNumber);
        }
        updateAppointment(row, user);
    }

    filterByDate = (appointment) => {
        return this.state.filterDate == appointment.date;
    }

    filterBySpeciality = (appointment) => {
        if (this.state.filterSpeciality.id == appointment.medicDetail.speciality.id) {
            if (this.state.filterClinic && this.state.filterClinic.id > 0) {
                return this.filterByClinic(appointment);
            }
            return this.filterByDate(appointment);
        }
        return false;
    }

    filterByClinic = (appointment) => {
        if (this.state.filterClinic.id == appointment.medicDetail.clinic.id) {
            if (this.state.filterMedic && this.state.filterMedic.id > 0) {
                return this.filterByClinic(appointment);
            }
            return this.filterByDate(appointment);
        } 
        return false;
    }

    filterByMedic = (appointment) => {
        if (this.state.filterMedic.id === appointment.medicDetail.user.id) {
            return this.filterByDate(appointment);
        } else {
            return false;
        }
    }

    filterList = () => {
        const listAppointments = this.state.listAppointments.filter((appointment) => {
            // check if it filters by speciality
            if (this.state.filterSpeciality && this.state.filterSpeciality.id > 0) {
                return this.filterBySpeciality(appointment);
            }
            return this.filterByDate(appointment);
        });
        this.setState({ listAppointments });
    }

    onDocTypeChange = (event, obj) => { this.setState({ filterDocType: obj.props.value }, this.filterList); };

    onUserChange = (event, obj) => { this.setState({ filterDocNumber: event.target.value }, this.filterList); };

    onSpecialtyChange = (event, obj) => { this.setState({ filterSpeciality: obj.props.value }, this.filterList); };

    onClinicChange = (event, obj) => { this.setState({ filterClinic: obj.props.value }, this.filterList); };

    onMedicChange = (event, obj) => { this.setState({ filterMedic: obj.props.value }, this.filterList); };

    onDateChange = (event, value) => { this.setState({ filterDate: value }, this.filterList); };

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
        this.setState({ listDocTypes, listSpecialities, listAppointments }, this.filterList);
    }

    render() {
        return (
            <Grid container direction="row" className="AddAppointmentGrid">
                <Grid item xs={12} sm={6} className="LeftPanel">
                    {!this.state.isUser && <div className="FilterRow">
                        <TextField fullWidth select variant="outlined" value={this.state.filterDocType} onChange={this.onDocTypeChange} label="Tipo de documento">
                            {this.state.listDocTypes.map((option, index) => (
                                <MenuItem key={index} value={option}>{option.docTypeCode}</MenuItem>
                            ))}
                        </TextField>
                    </div>}
                    {!this.state.isUser && this.state.filterDocType && this.state.filterDocType.id > 0 && <div className="FilterRow">
                        <TextField fullWidth variant="outlined" value={this.state.filterDocNumber} onChange={this.onUserChange} label="Número de documento"></TextField>
                    </div>}
                    <div className="FilterRow">
                        <TextField fullWidth select variant="outlined" value={this.state.filterSpeciality} onChange={this.onSpecialtyChange} label="Especialidad" >
                            {this.state.listSpecialities.map((option, index) => (
                                <MenuItem key={index} value={option}>{option.name}</MenuItem>
                            ))}
                        </TextField>
                    </div>
                    {this.state.filterSpeciality && this.state.filterSpeciality.id > 0 && this.state.filterSpeciality.Clinics && <div className="FilterRow">
                        <TextField fullWidth select variant="outlined" value={this.state.filterClinic} onChange={this.onClinicChange} label="Clinica" >
                            {this.state.filterSpeciality.Clinics.map((option, index) => (
                                <MenuItem key={index} value={option}>{option.name}</MenuItem>
                            ))}
                        </TextField>
                    </div>}
                    {this.state.filterClinic && this.state.filterClinic.id > 0 && this.state.filterClinic.Users && <div className="FilterRow">
                        <TextField fullWidth select variant="outlined" value={this.state.filterMedic} onChange={this.onMedicChange} label="Medico" >
                            {this.state.filterClinic.Users.map((option, index) => (
                                <MenuItem key={index} value={option}>{option.name}</MenuItem>
                            ))}
                        </TextField>
                    </div>}
                    <div className="FilterRow">
                        <MuiPickersUtilsProvider utils={LocalizedUtils} locale={esLocale}>
                            <KeyboardDatePicker fullWidth variant="inline" format="dd/MM/yyyy" margin="normal" value={this.state.filterDate} onChange={this.onDateChange}></KeyboardDatePicker>
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