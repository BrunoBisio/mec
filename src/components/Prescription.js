import React from 'react';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import MaterialTable from "material-table";
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import { getPrescriptions } from '../services/PrescriptionsRepository.js';
import RelativeLink from './RelativeLink.js';
import '../css/styles/Header.scss'
import '../css/styles/UserAppointment.scss'

class Prescription extends React.Component {

  constructor(props){
    console.log("creando el prescription")
      super(props);
      this.state = {
        data: []
      };
  }

  componentDidMount() {
    console.log("trayendo las prescriptions")
    getPrescriptions().then(data => {
      this.setState({data: data.data.data.results})
    })
  }
  
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