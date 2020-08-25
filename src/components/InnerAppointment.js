import React from 'react';
import { get } from '../services/AppointmentRepository.js';
import { Grid, TextField, Paper, Button, Modal } from '@material-ui/core';
import MaterialTable from 'material-table';
import MoveAppointment from './MoveAppointment';
import '../css/styles/InnerAppointment.scss'

function AppointmentModal(props) {
    return  (
        <div className="modal">
            <MoveAppointment data={props.data}/>
        </div>
    )
}

class InnerAppointment extends React.Component {
    
    constructor (props) {
        super(props);

        this.state = {
            data: get(),
            movingAppointment: false
        }
    }

    checkAppointment = (row, event) => {
        // TODO: update appointment status
        console.log("status appointment updated");
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

    render() {
        return (
            <Grid container xs={12} className="AppointmentGrid">
                    <div className="tableContainer">
                        <MaterialTable 
                            title="Turnos"
                            columns={[
                                { title: "Fecha", field: "date", type: "datetime", cellStyle: { minWidth: 'fit-content'} },
                                { title: "Paciente", field: "patient", cellStyle: { minWidth: 'fit-content'} },
                                { title: "", field: "", cellStyle: { minWidth: 'fit-content'} , 
                                    render: rowData =>  <div><Button variant="contained" color="primary" onClick= {()=> this.moveAppointment(rowData, true)}>Reprogramar Turno</Button><Modal open={!!rowData.open && this.state.movingAppointment} onClose={()=>{this.moveAppointment(rowData, false)}}><AppointmentModal data={rowData} /></Modal></div>
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
            </Grid>
        )
    }
}

export default InnerAppointment;