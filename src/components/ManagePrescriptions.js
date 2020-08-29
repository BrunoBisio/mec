import React from 'react';
import { Button, Modal, Paper, TextField } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import MaterialTable from "material-table";
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import { getPendingPrescriptions, deletePrescription, uploadPrescription, updatePrescription } from '../services/PrescriptionsRepository.js';
import RelativeLink from './RelativeLink.js';
import '../css/styles/Header.scss'
import '../css/styles/ManagePrescription.scss'
import MenuIcon from '@material-ui/icons/Menu';

function PrescriptionModal(props) {
    return (
        <div className="modal">
            <Prescription data={props.data} onClose={props.onClose}></Prescription>
        </div>
    )
}

class Prescription extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          data: props.data,
          close: props.onClose
        };
    }
    onFileChange(event) {
     
        // Update the state 
        this.setState({ selectedFile: event.target.files[0] }); 
       
    }
    onFileUpload() { 
     
      // Create an object of formData 
      const formData = new FormData(); 
     
      // Update the formData object 
      formData.append( 
        "file", 
        this.state.selectedFile
      ); 
     
      return uploadPrescription(this.state.data.id, formData);
    }; 

    confirmPrescription() {
      this.onFileUpload().then(()=> {
        this.setState((state,props)=> {
          state.data.approved = 1;
          updatePrescription(state.data).then(()=>{
            this.state.close()
          })
        })
      })
    }
    getFullName() {
        return this.state.data.User.name + " " + this.state.data.User.lastName
    }

    remove() {
      deletePrescription(this.state.data).then(() => {
        this.state.close()
      })
    }

    render(){
        return (
            <Paper>
                <div className="PrescriptionContainer">
                    <div className="PrescriptionColumn">
                        <TextField label="Numero de documento" disabled={true} value={this.state.data.User.docNumber}></TextField>
                        <TextField label="Nombre y Apellido" disabled={true} value={this.getFullName()}></TextField>
                        <TextField label="Descripcion" disabled={true} value={this.state.data.drug}></TextField>
                    </div>
                    <div className="PrescriptionColumn">
                        <TextField label="Comentario" disabled={true} value={this.state.data.comment} multiline rows={6} variant="outlined"></TextField>
                        <input type="file" onChange={(event)=>{this.onFileChange(event)}} /> 
                    </div>
                </div>
                <div className="PrescriptionButtonContainer">
                    <Button variant="contained" color="primary" onClick={()=>{this.confirmPrescription()}}>Aceptar</Button>
                    <Button variant="contained" color="primary" onClick={()=>{this.remove()}}>Rechazar</Button>
                </div>
            </Paper>
        )
    }
}

class ManagePrescriptions extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        data: []
      };
  }
  /*
  TODO: for later
  removePrescription(row) {
      const newData = arrayRemove(this.state.data, row);
      this.setState((state,props) => state.data = newData);
  }
  */
 componentDidMount() {
    getPendingPrescriptions().then(response => {
      this.setState({data: response.data.results})
    })
  }

 openPrescription = (event, rowData) => {
    this.setState({ 
        selectedRow: rowData,
        open: true
    });
}

closePrescription = () => {
  getPendingPrescriptions().then(response => {
    this.setState({data: response.data.results, open: false})
  })
}
  
  render() {
    return (
      <Grid container xs={12} className="AppointmentGrid">
          <MaterialTable title="Recetas"
            columns={[
              { title: "Fecha", field: "date", type: "date" },
              { title: "Paciente", field: "User.name" },
              { title: "Descripcion", field: "comment" }
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
          <Modal open={this.state.open} onClose={()=>{this.closePrescription()}}><PrescriptionModal data={this.state.selectedRow} onClose={()=>{this.closePrescription()}}></PrescriptionModal></Modal>
      </Grid>
    )
  }
}

export default ManagePrescriptions;