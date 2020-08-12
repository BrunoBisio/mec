import React from 'react';
import { Typography, Grid, Paper, List, ListItem, Button } from '@material-ui/core';
import MecAutocomplete from './MecAutocomplete.js';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import MaterialTable from "material-table";
import AddIcon from '@material-ui/icons/Add';
import '../css/styles/AddAppointment.scss';

const dropDownLists = [
    {
        title: 'Especialidad',
        label: 'name',
        values: [
            { id: 1, name: 'Adicciones' },
            { id: 2, name: 'Clinica medica' },
            { id: 3, name: 'Heridas Magicas' },
            { id: 4, name: 'Nutricion' },
            { id: 5, name: 'Psicologia' },
            { id: 6, name: 'Traumatologia' }
        ]
    },
    {
        title: 'Clinica',
        label: 'name',
        values: [
            { id: 1, name: 'Gondor', specialitys: [1, 2] },
            { id: 2, name: 'La Comarca', specialitys: [3, 4] },
            { id: 3, name: 'Mordor', specialitys: [5, 6] },
            { id: 4, name: 'Moria', specialitys: [1, 2, 3] }
        ]
    },
    {
        title: 'Medico',
        label: 'name',
        values: [
            { id: 1, name: 'Aragon', specialty: 1, clinic: 1 },
            { id: 2, name: 'Arwen', specialty: 2, clinic: 1 },
            { id: 3, name: 'Bilbo', specialty: 3, clinic: 2 },
            { id: 4, name: 'Boromir', specialty: 4, clinic: 2 },
            { id: 5, name: 'Gandalf', specialty: 5, clinic: 3 },
            { id: 6, name: 'Gimli', specialty: 6, clinic: 3 },
            { id: 7, name: 'Isildur', specialty: 1, clinic: 4 },
            { id: 8, name: 'Legolas', specialty: 2, clinic: 4 },
            { id: 9, name: 'Tauriel', specialty: 3, clinic: 4 }
        ]
    }
]

const matTableOpt = {
    columns: [
        { title: "Dia", field: "date", type: "date" },
        { title: "Horario", field: "time", type: "time" },
        { title: "Medico", field: "doctor.name" },
        { title: "Asignado", field: "assignedTo", type:"numeric", hidden: true }
    ],
    localization: { header: { actions: 'Acciones' } },
    options: { actionsColumnIndex: -1, filtering: true }
}

// example: { date: "29/02/1992 15:00:00", doctor: { id: 1, name: "Aragon", specialty: "Traumatologia" }, assignedTo: /* Id del paciente */ }
let appointments = [
];

function generateAppointments() {
    // init appointment dates
    let appointmentDates = [];
    let dateAux;
    for (let i=8; i < 16; i++) {
        dateAux = new Date();
        dateAux.setHours(i);
        appointmentDates.push(dateAux);
    }
    // init appointments
    const doctors = dropDownLists[2].values;
    for (let i = 0; i < doctors.length; i++) {
        for (let j = 0; j < appointmentDates.length; j++) {
            appointments.push({ 
                date: appointmentDates[j].toLocaleDateString(),
                time: appointmentDates[j].toLocaleTimeString(),
                doctor: doctors[i],
                assignedTo: -1
            });
        }
    }
}

function arrayRemove(array, value) { return array.filter(function(item){ return item !== value; });}

class AutoCompleteList extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            specialtySelected: props.specialtySelected || {},
            clinicSelected: props.clinicSelected || {},
            doctorSelected: props.doctorSelected || {},
            selectedDate: props.selectedDate || {},
            clinicDropdown: dropDownLists[1],
            doctorDropdown: dropDownLists[2]
        }
    }

    onSpecialtyChange(event, value) {
        this.setState((state,props) => {
            state.specialtySelected = value;
            state.clinicDropdown.values = dropDownLists[1].values.filter((clinic) => { 
                    return clinic.specialitys.indexOf(value.id) > -1
                });
        });
    }

    onClinicChange(event, value) {
        this.setState((state,props) => {
            state.clinicSelected = value;
            state.doctorDropdown.values = dropDownLists[2].values.filter((doc) => { return doc.clinic === value.id });
        });
    }

    onDoctorChange(event, value) {
        this.setState({
            doctorSelected: value
        });
    }

    onDateChange (event, value) {
        this.setState({
            selectedDate: value
        });
    }

    render() {
        return (
            <List>
                <ListItem className="AppAutocompContainer"><MecAutocomplete listObject={dropDownLists[0]} changeEvent={(event, value) => {this.onSpecialtyChange(event, value)}}></MecAutocomplete></ListItem>
                <ListItem className="AppAutocompContainer"><MecAutocomplete listObject={this.state.clinicDropdown} changeEvent={(event, value) => {this.onClinicChange(event, value)}}></MecAutocomplete></ListItem>
                <ListItem className="AppAutocompContainer"><MecAutocomplete listObject={this.state.doctorDropdown} changeEvent={(event, value) => {this.onDoctorChange(event, value)}}></MecAutocomplete></ListItem>
                <ListItem>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker fullWidth variant="inline" format="dd/MM/yyyy" margin="normal" value={this.selectedDate} onChange={this.onDateChange}></KeyboardDatePicker>
                    </MuiPickersUtilsProvider>
                </ListItem>
            </List>
        )
    }
}

class AddApointment extends React.Component {
    
    constructor(props){
        super(props);
        generateAppointments();
        this.state = {
            data: appointments
        };
    }

    addAppointment(row) {
        // const newData = arrayRemove(this.state.data, row);
        // this.setState((state,props) => state.data = newData);
        console.log("add")
    }

    render() {
        return (
            <Grid container direction="row" justify="center" alignItems="center" >
                <Grid item xs={12} sm={6} direction="row" justify="center" alignItems="center">
                    <Paper>
                        <Typography variant="h6">Turnos para: Usuario</Typography>
                        <AutoCompleteList></AutoCompleteList>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} direction="row" justify="center" alignItems="center">
                    <Paper>
                        <Typography variant="h6">Turnos Disponibles</Typography>
                        <MaterialTable title="Turnos disponibles" 
                            data={this.state.data}
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
                    </Paper>
                </Grid>
            </Grid>
        )
    }
}

export default AddApointment;