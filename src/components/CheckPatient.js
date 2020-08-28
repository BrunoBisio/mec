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
import MedicalHistory from './MedicalHistory.js';

function MedicalHistoryModal(props) {
    const value = props.data.doc;
    return (
        <div className="modal">
            <MedicalHistory userId={value}></MedicalHistory>
        </div>
    )
}

class CheckPatient extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            patients: [],
            selectedRow: null,
            open: false
        }
    }

    columns = [
        { title: "Tipo de documento", field: "tipoDoc" },
        { title: "Documento", field: "doc" },
        { title: "Nombre", field: "name" },
        { title: "Apellido", field: "lastName" },
        { title: "Fecha de Nacimiento", field: "bDay", type: "date" },
        { title: "Plan", field: "plan" },
        { title: "Mail", field: "mail" },
        { title: "Telefono", field: "telefono" }
    ]

    openMedicalHistory = (event, rowData) => {
        this.setState({ 
            selectedRow: rowData,
            open: true
        });
    }
    componentDidMount () {
        getPatients().then(data=> {
            this.setState({patients: data.data.data.results})
        })
    }
    closeMedicalHistory = () => {
        this.setState({
            open: false
        })
    }

    render(){
        return(
            <Paper className="CheckPatientInputSection">
                <MaterialTable 
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
                            onClick: (event, rowData) => this.openMedicalHistory(event, rowData)
                        },
                    ]}
                    options={{
                        filtering: true,
                        actionsColumnIndex: -1
                    }}>
                </MaterialTable>
                <Modal open={this.state.open} onClose={()=>{this.closeMedicalHistory()}}><MedicalHistoryModal data={this.state.selectedRow}/></Modal>
            </Paper>
        )
    }
}

export default CheckPatient;