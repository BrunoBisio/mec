import React from 'react';
import { Typography, TextField, Paper, MenuItem, Modal } from '@material-ui/core';
import { getDocTypes, getInsurances } from '../services/DropDownRepositories.js';
import { getPatients } from '../services/PatientRepository.js';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import '../css/styles/CheckPatient.scss';
import MaterialTable from 'material-table';
import EventIcon from '@material-ui/icons/Event';
import MenuIcon from '@material-ui/icons/Menu';
import SubtitlesIcon from '@material-ui/icons/Subtitles';
import MedicalHistory from './MedicalHistory.js';
import UserAppointment from './UserAppointment.js'
import Prescription from './Prescription.js';

class CheckPatient extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            patients: [],
            selectedUser: null,
            openPatientList: true,
            openMedicalHistory: false,
            openUserAppointment: false,
            openPrescriptions: false
        }
    }

    columns = [
        { title: "Tipo de documento", field: "DocType.docTypeCode" },
        { title: "Documento", field: "docNumber" },
        { title: "Nombre", field: "name" },
        { title: "Apellido", field: "lastName" },
        { title: "Fecha de Nacimiento", field: "birthdate", type: "date" },
        { title: "Plan", field: "Plan.planName" },
        { title: "Mail", field: "mail" },
        { title: "Telefono", field: "phone" }
    ]

    openMedicalHistory = (event, rowData) => {
        this.setState({
            selectedUser: rowData,
            openMedicalHistory: true,
            openPatientList: false,
            openUserAppointment: false,
            openPrescriptions: false
        });
    }

    openAppointments = (event, rowData) => {
        this.setState({
            selectedUser: rowData,
            openMedicalHistory: false,
            openPatientList: false,
            openUserAppointment: true,
            openPrescriptions: false
        });
    }

    openPrescriptions = (event, rowData) => {
        this.setState({
            selectedUser: rowData,
            openMedicalHistory: false,
            openPatientList: false,
            openUserAppointment: false,
            openPrescriptions: true
        });
    }

    componentDidMount() {
        getPatients().then((resposne) => {
            this.setState({ patients: resposne.data.results });
        })
    }

    render() {
        return (
            <Paper className="CheckPatientInputSection">
                {this.state.openPatientList && <MaterialTable
                    title="Consulta"
                    data={this.state.patients}
                    columns={this.columns}
                    actions={[{
                        icon: MenuIcon,
                        tooltip: 'Historia clinica',
                        onClick: (event, rowData) => this.openMedicalHistory(event, rowData)
                    },
                    {
                        icon: EventIcon,
                        tooltip: 'Turnos',
                        onClick: (event, rowData) => this.openAppointments(event, rowData)
                    },
                    {
                        icon: SubtitlesIcon,
                        tooltip: 'Recetas',
                        onClick: (event, rowData) => this.openPrescriptions(event, rowData)
                    }
                    ]}
                    options={{
                        filtering: true,
                        actionsColumnIndex: -1
                    }}>
                </MaterialTable>}
                {this.state.openMedicalHistory && <MedicalHistory user={this.state.selectedUser}></MedicalHistory>}
                {this.state.openUserAppointment && <UserAppointment user={this.state.selectedUser}></UserAppointment>}
                {this.state.openPrescriptions && <Prescription user={this.state.selectedUser}></Prescription>}
            </Paper>
        )
    }
}

export default CheckPatient;