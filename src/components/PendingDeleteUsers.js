import React from 'react';
import { Button } from '@material-ui/core';
import '../css/styles/Header.scss'
import Grid from '@material-ui/core/Grid';
import MaterialTable from "material-table";
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import '../css/styles/UserAppointment.scss';
import RelativeLink from './RelativeLink.js';
import { getPendingDeletes, deleteUser } from '../services/UserRepository.js';

class PendingDeleteUsers extends React.Component {
  constructor(props){
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    // const apiUrl = 'http://localhost:3000';
    getPendingDeletes().then((response) => {
      this.setState({ data: response.data.results });
    })
  }

  removeUser(row) {
    deleteUser(row).then(() => {
      getPendingDeletes().then((response) => {
        this.setState({ data: response.data.results });
      });
    });
  }

  render() {
    return (
      <Grid container xs={12} className="AppointmentGrid1">
        <MaterialTable title="Solicitudes de baja pendientes"
          columns={[
            { title: "Tipo de documento", field: "DocType.docTypeCode" },
            { title: "Numero de documento", field: "docNumber" }
          ]}
          localization={{
            header: {
              actions: ''
          },}}
          data={this.state.data}
          actions={[{
            icon: DeleteOutline,
            tooltip: 'Borrar Usuario',
            onClick: (event, rowData) => this.removeUser(rowData)
          }]}
          options={{
            actionsColumnIndex: -1
          }}>
        </MaterialTable>
      </Grid>
    )
  }
}

export default PendingDeleteUsers;