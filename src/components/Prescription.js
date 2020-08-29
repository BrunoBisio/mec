import React from 'react';
import { Button, Modal, Grid } from '@material-ui/core';
import MaterialTable from "material-table";
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import { getPrescriptionByUser, createPrescription } from '../services/PrescriptionsRepository.js';
import { getLoggedUser } from '../services/RolRepository.js';
import RelativeLink from './RelativeLink.js';
import RequestPrescription from './RequestPrescription.js';

import '../css/styles/Header.scss';
import '../css/styles/UserAppointment.scss';

function InternalModal(props) {
  return <div className="modal">
    <RequestPrescription onClose={props.onClose} user={props.user} />
  </div>
}

class Prescription extends React.Component {

  constructor(props){
      super(props);
      this.state = {
        data: [],
        user: props.user,
        newPrescription: false
      };
  }

  openNewModal(val) {
    this.setState({ newPrescription: val })
  };

/*  addPrescription(prescription){
    createPrescription(prescription).then(()=>{
      this.loadPatients()
    })
  }*/

  loadPrescriptions() {
    getPrescriptionByUser(this.state.user.id).then(res => {
      this.setState({ data: res.data.results })
    })
  }

  componentDidMount() {
    if (this.state.user && this.state.user.id > 0) {
      this.loadPrescriptions();
    } else {
      getLoggedUser().then((user) => {
        this.setState({ user: user });
        getPrescriptionByUser(user.id).then((response) => {
          this.setState({ data: response.data.results });
        });
      });
    }
  }
  
  render() {
    return (
      <div>
        <Grid container xs={12} className="AppointmentGrid">
          <Grid item xs={6}>
            <MaterialTable title="Recetas"
              columns={[
                { title: "Fecha", field: "date", type: "datetime" },
                { title: "Comentario", field: "comment" },
              ]}
              localization={{ header: { actions: 'Descargar' }, }}
              data={this.state.data}
              actions={[{
                icon: SaveAltIcon,
                tooltip: 'Descargar receta',
                onClick: (event, rowData) => alert("descargando receta: " + rowData.description)
              }]}
              options={{
                actionsColumnIndex: -1
              }}>
            </MaterialTable>
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" color="primary" className ="NewAppointment" onClick={() => this.openNewModal(true)} >Nueva Receta</Button>
          </Grid>
        </Grid>
        <Modal open={this.state.newPrescription} onClose={() => { this.openNewModal(false) }}><InternalModal user={this.state.user} onClose={() => { this.openNewModal(false) }} /></Modal>
      </div>
    )
  }
}

export default Prescription;