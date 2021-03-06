import React from 'react';
import { getAppointmentsWithUser, updateAppointment } from '../services/AppointmentRepository.js';
import { Grid, TextField, Button, Modal, Typography, IconButton, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';
import MaterialTable from 'material-table';
import MoveAppointment from './MoveAppointment';
import '../css/styles/InnerAppointment.scss';
import MedicalHistory from './MedicalHistory';
import { createMedRecApp } from '../services/medicalRecordAppointmentRepository'
import { MuiPickersUtilsProvider, KeyboardDatePicker, KeyboardTimePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import CheckIcon from '@material-ui/icons/Check';
import '../css/styles/MedicalHistory.scss';
import AddAppointment from './AddAppointment.js';

function MoveAppointmentModal(props) {
    return  (
        <div className="modal">
            <MoveAppointment data={props.data}/>
        </div>
    )
}

function NewAppointmentModal(props) {
    return (
        <div className="modal">
            <div><AddAppointment/></div>
            <div><Button  variant="contained" color="primary" onClick={()=> props.closeFunc(false)}>Cerrar</Button></div>
        </div>
    )
}

class InnerAppointment extends React.Component {
    
    constructor (props) {
        super(props);
        this.state = {
            data: [],
            movingAppointment: false,
            showHideAppointmentGrid: true,
            showHideMedicalHistory: false,
            appointmentSelected: null,
            open: false,
            newMedicRecApp: {
                date: '',
                medicDetail: '',
                comment: ''
            },
            openNewAppointment: false,
            loggedUser: {}
        }
    }

    loadAppointments() {
        this._isMounted = true;


        getAppointmentsWithUser().then(res => {
            if( this._isMounted)
                this.setState({ data: res.data.results })
        })
      }
    
      componentDidMount() {
        this.loadAppointments()
      }
      componentWillUnmount() {
        this._isMounted = false;
      }
    checkAppointment = (row, event) => {
        const appointmentSelected = row; 
        const showHideAppointmentGrid = false; 
        const showHideMedicalHistory = true;
        const newMedicRecApp = {
            date: row.date,
            medicDetail: row.MedicDetail,
            comment: ''
        }
        this.setState({ 
            appointmentSelected: appointmentSelected, 
            showHideAppointmentGrid: showHideAppointmentGrid, 
            showHideMedicalHistory: showHideMedicalHistory,
            newMedicRecApp: newMedicRecApp
        });
    }

    moveAppointment(row, newVal) {
        const newData = this.state.data;
        const dataIndex = newData.indexOf(row);
        const updatedData = newData[dataIndex]; 
        updatedData.open = newVal;
        newData[dataIndex] = updatedData;
        this.setState({
          data: newData,
          movingAppointment: newVal
        });
    }

    /* Handlers for medical record appointment section */
    handleCommentChange = (event) => { 
        const res = event.target.value
        this.setState((state, props)=>{
            return state.newMedicRecApp.comment =res
        })
    };

    openWarningDialog = () => {
       this.setState({ open: true });
    }

    handleConfirm = () => {
        this.state.appointmentSelected.completed = true;
        updateAppointment(this.state.appointmentSelected).then(()=>{
            const medRecApp = {
                date: this.state.newMedicRecApp.date,
                comment: this.state.newMedicRecApp.comment,
                MedicDetailId: this.state.newMedicRecApp.medicDetail.id
            }
            createMedRecApp(medRecApp).then(()=> {
                this.loadAppointments().then(()=> {
                    this.setState({
                        open: false,
                        showHideAppointmentGrid: true, 
                        showHideMedicalHistory: false
                    });
                })
            })
        })

        // createNewMedicalRecordAppointment
        
       
    }

    handleCancel = () => {
        this.setState({ open: false });
    }

    handleNewAppointment = (val) => {
        this.setState({ openNewAppointment: val });
    }

    render() {
        return (
            <div>
            { this.state.showHideAppointmentGrid && <div>
                <Grid container xs={12} className="AppointmentGrid">
                        <div className="tableContainer">
                            <MaterialTable 
                                title="Turnos pendientes"
                                columns={[
                                    { title: "Fecha", field: "date", type: "datetime", cellStyle: { minWidth: 'fit-content'} },
                                    { title: "Paciente", field: "User.name", cellStyle: { minWidth: 'fit-content'} },
                                    { title: "", field: "", cellStyle: { minWidth: 'fit-content'} , 
                                        render: rowData =>  <div><Button variant="contained" color="primary" onClick= {()=> this.moveAppointment(rowData, true)}>Reprogramar Turno</Button><Modal open={!!rowData.open && this.state.movingAppointment} onClose={()=>{this.moveAppointment(rowData, false)}}><MoveAppointmentModal data={rowData} /></Modal></div>
                                    },
                                    { title: "", field: "", cellStyle: { minWidth: 'fit-content'}, 
                                        render: rowData => <div><Button variant="contained" color="primary" onClick= {()=> this.checkAppointment(rowData, true)}>Tomar turno</Button></div>
                                    }
                                ]}
                                data={this.state.data}
                                options={{
                                    actionsColumnIndex: -1
                                }}>
                            </MaterialTable>
                        </div>
                        <div className="ButtonContainer"><Button variant="contained" color="primary" onClick={()=> this.handleNewAppointment(true)}>Agendar Turno</Button></div>
                </Grid>
            </div>}
            { this.state.showHideMedicalHistory && this.state.appointmentSelected && this.state.appointmentSelected.User && <div>
                <MedicalHistory user={this.state.appointmentSelected.User}></MedicalHistory>
                <Grid container xs={9} className="MedicalHistoryContainer">
                    <Grid item xs={12} className="NewMedicNoteContainer">
                        <Grid item xs={3}><TextField disabled={true} value={this.state.newMedicRecApp.date} variant="outlined" className="MedicNotesDate"></TextField></Grid>
                        <Grid item xs={3}><TextField disabled={true} value={this.state.newMedicRecApp.medicDetail.Specialty.name} variant="outlined" className="MedicNotesSpecialty"></TextField></Grid>
                        <Grid item xs={5}><TextField value={this.state.newMedicRecApp.comment} variant="outlined" onChange={(event)=>{this.handleCommentChange(event)}} className="MedicNotesComment" multiline rows={6}></TextField></Grid>
                        <Grid item xs={1}><IconButton onClick={this.openWarningDialog}><CheckIcon /></IconButton></Grid>
                    </Grid>
                </Grid>
            </div>}
            <Dialog open={this.state.open} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">{"Finalizar el turno"}</DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Está finalizando el turno y modificando la historia clínica, esta acción no se podrá deshacer.
                    ¿Esta seguro de querer guardar la observación?
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={this.handleConfirm} color="primary">
                    Aceptar
                </Button>
                <Button onClick={this.handleCancel} color="primary" autoFocus>
                    Cancelar
                </Button>
                </DialogActions>
            </Dialog>
            <Modal open={this.state.openNewAppointment} onClose={()=>{this.handleNewAppointment(false)}}><NewAppointmentModal closeFunc={this.handleNewAppointment}/></Modal>
            </div>
        )
    }
}

export default InnerAppointment;