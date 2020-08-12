import React from 'react';
import { Button } from '@material-ui/core';
import '../css/styles/Header.scss'
import Grid from '@material-ui/core/Grid';
import MaterialTable from "material-table";
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import '../css/styles/UserAppointment.scss';
import RelativeLink from './RelativeLink.js';
import {get, remove} from '../services/AppointmentRepository.js';

class UserAppointment extends React.Component {
  constructor(props){
    super(props);
    this.state = { data:get() };
  }

  removeAppointment(row) {
    remove(row);
      this.setState((state,props) => state.data = get());
  }

  render() {
    return (
      <Grid container xs={12} className="AppointmentGrid">
        <Grid item xs={6}>
          <MaterialTable title="Turnos"
            columns={[
              { title: "Fecha", field: "date", type: "datetime" },
              { title: "Especialidad", field: "specialty" },
              { title: "Medico", field: "doctor" },
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
          <RelativeLink route="add"><Button variant="contained" color="primary" className ="NewAppointment">Nuevo Turno</Button></RelativeLink>
        </Grid>
      </Grid>
    )
  }
}

export default UserAppointment;