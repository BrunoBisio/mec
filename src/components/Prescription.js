import React from 'react';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import MaterialTable from "material-table";
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import { getPrescriptions } from '../services/PrescriptionsRepository.js';
import RelativeLink from './RelativeLink.js';
import '../css/styles/Header.scss'
import '../css/styles/UserAppointment.scss'

function arrayRemove(array, value) { return array.filter(function(item){ return item !== value; });}

class Prescription extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        data: getPrescriptions()
      };
  }
  /*
  TODO: for later
  removePrescription(row) {
      const newData = arrayRemove(this.state.data, row);
      this.setState((state,props) => state.data = newData);
  }
  */
  
  render() {
    return (
      <Grid container xs={12} className="AppointmentGrid">
        <Grid item xs={6}>
          <MaterialTable title="Recetas"
            columns={[
              { title: "Fecha", field: "date", type: "datetime" },
              { title: "Descripcion", field: "description" },
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
          <RelativeLink route="request"><Button variant="contained" color="primary" className ="NewAppointment">Nueva Receta</Button></RelativeLink>
        </Grid>
      </Grid>
    )
  }
}

export default Prescription;