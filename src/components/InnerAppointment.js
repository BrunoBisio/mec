import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { get } from '../services/AppointmentRepository.js';
import { Grid, TextField, Paper, Button } from '@material-ui/core';
import MaterialTable from 'material-table';
import MedicalHistory from './MedicalHistory.js';
import '../css/styles/InnerAppointment.scss'

class InnerAppointment extends React.Component {
    
    constructor (props) {
        super(props);

        this.state = {
            data: get()
        }
    }

    openMedicalHistory = () => {
        console.log("abrir histria clinica")
    }

    render() {
        return (
            <Grid container xs={12} className="AppointmentGrid">
                <Grid item xs={6}>
                    <div>
                        <MaterialTable 
                            title="Turnos"
                            columns={[
                                { title: "Fecha", field: "date", type: "datetime" },
                                { title: "Paciente", field: "patient" },
                            ]}
                            localization={{
                                header: { actions: 'Acciones' },
                            }}
                            data={this.state.data}
                            actions={[{
                                icon: MenuIcon,
                                tooltip: 'Abrir historia clinica',
                                onClick: (event, rowData) => this.openMedicalHistory(rowData)
                            }]}
                            options={{
                                actionsColumnIndex: -1
                            }}>
                        </MaterialTable>
                    </div>
                    <div>
                        <Button variant="contained" color="primary" >Aceptar</Button>
                        <Button variant="contained" color="primary" >Cancelar Turno</Button>
                    </div>
                </Grid>
                <Grid item xs={6} className="MedicalHistory">
                    <MedicalHistory userId='123456'></MedicalHistory>
                </Grid>
            </Grid>
        )
    }
}

export default InnerAppointment;