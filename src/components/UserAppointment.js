import React from 'react';
import { Grid, TextField, Button, Modal, Typography, IconButton, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';
import '../css/styles/Header.scss'
import MaterialTable from "material-table";
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import '../css/styles/UserAppointment.scss';
import RelativeLink from './RelativeLink.js';
import {getAppointmentsByUser, remove} from '../services/AppointmentRepository.js';
import { getLoggedUser } from '../services/RolRepository';
import AddAppointment from './AddAppointment.js';


function NewAppointmentModal(props) {
  return (
      <div className="modal">
          <div><AddAppointment/></div>
          <div><Button  variant="contained" color="primary" onClick={()=> props.closeFunc(false)}>Cerrar</Button></div>
      </div>
  )
}

class UserAppointment extends React.Component {
  constructor(props){
    super(props);
    
    this.state = { 
      data: [],
      user: props.user ,
      openNewAppointment: false
    };
  }

  componentDidMount() {
    if (this.state.user && this.state.user.id > 0) {
      getAppointmentsByUser(this.state.user.id).then((response) => {
        this.setState({ data: response.data.results });
      })
    } else {
      getLoggedUser().then((user) => {
        this.setState({ user: user });
        getAppointmentsByUser(user.id).then((response) => {
          this.setState({ 
            data: response.data.results
          });
        });
      });
    }
  }

  removeAppointment(row) {
    remove(row.id).then(() => {
      getAppointmentsByUser(this.state.user.id).then((response) => {
        this.setState({ data: response.data.results });
      });
    });
  }
  handleNewAppointment = (val) => {
    this.setState({ openNewAppointment: val });
}


  render() {
    return (
      <Grid container xs={12} className="AppointmentGrid">
        <Grid item xs={6}>
          <MaterialTable title="Turnos"
            columns={[
              { title: "Fecha", field: "date", type: "datetime" },
              { title: "Especialidad", field: "MedicDetail.Specialty.name" },
              { title: "Medico", field: "MedicDetail.User.name" },
            ]}
            localization={{
              header: {
                actions: 'Acciones'
            },}}
            data={this.state.data}
            actions={[{
              icon: DeleteOutline,
              tooltip: 'Borrar Turno',
              onClick: (event, rowData) => this.removeAppointment(rowData)
            }]}
            options={{
              actionsColumnIndex: -1
            }}>
          </MaterialTable>
        </Grid>
        <Grid item xs={6}>
        <Modal open={this.state.openNewAppointment} onClose={()=>{this.handleNewAppointment(false)}}><NewAppointmentModal closeFunc={this.handleNewAppointment}/></Modal>
          <Button variant="contained" color="primary" className ="NewAppointment" onClick={()=> this.handleNewAppointment(true)}>Nuevo Turno</Button>
        </Grid>
      </Grid>
    )
  }
}

export default UserAppointment;