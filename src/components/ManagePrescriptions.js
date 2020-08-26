import React from 'react';
import { Button, Modal, Paper, TextField } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import MaterialTable from "material-table";
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import { getPendingPrescriptions } from '../services/PrescriptionsRepository.js';
import RelativeLink from './RelativeLink.js';
import '../css/styles/Header.scss'
import '../css/styles/ManagePrescription.scss'
import MenuIcon from '@material-ui/icons/Menu';

function PrescriptionModal(props) {
    return (
        <div className="modal">
            <Prescription data={props.data}></Prescription>
        </div>
    )
}

class Prescription extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          data: props.data
        };
    }

    getFullName() {
        return this.state.data.name + " " + this.state.data.lastName
    }

    render(){
        return (
            <Paper>
                <div className="PrescriptionContainer">
                    <div className="PrescriptionColumn">
                        <TextField label="Numero de documento" disabled={true} value={this.state.data.doc}></TextField>
                        <TextField label="Nombre y Apellido" disabled={true} value={this.getFullName()}></TextField>
                        <TextField label="Descripcion" disabled={true} value={this.state.data.description}></TextField>
                    </div>
                    <div className="PrescriptionColumn">
                        <TextField label="Comentario" disabled={true} value={this.state.data.comment} multiline rows={6} variant="outlined"></TextField>
                    </div>
                </div>
                <div className="PrescriptionButtonContainer">
                    <Button variant="contained" color="primary">Aceptar</Button>
                    <Button variant="contained" color="primary">Rechazar</Button>
                </div>
            </Paper>
        )
    }
}

class ManagePrescriptions extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        data: getPendingPrescriptions()
      };
  }
  /*
  TODO: for later
  removePrescription(row) {
      const newData = arrayRemove(this.state.data, row);
      this.setState((state,props) => state.data = newData);
  }
  */

 openPrescription = (event, rowData) => {
    this.setState({ 
        selectedRow: rowData,
        open: true
    });
}

closePrescription = () => {
    this.setState({
        open: false
    })
}
  
  render() {
    return (
      <Grid container xs={12} className="AppointmentGrid">
          <MaterialTable title="Recetas"
            columns={[
              { title: "Fecha", field: "date", type: "date" },
              { title: "Paciente", field: "name" },
              { title: "Descripcion", field: "description" }
            ]}
            localization={{ header: { actions: 'Detalle' }, }}
            data={this.state.data}
            actions={[{
              icon: MenuIcon,
              tooltip: 'Detalle',
              onClick: (event, rowData) => this.openPrescription(event, rowData)
            }]}
            options={{
              actionsColumnIndex: -1
            }}>
          </MaterialTable>
          <Modal open={this.state.open} onClose={()=>{this.closePrescription()}}><PrescriptionModal data={this.state.selectedRow}></PrescriptionModal></Modal>
      </Grid>
    )
  }
}

export default ManagePrescriptions;