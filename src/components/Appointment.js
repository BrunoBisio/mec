import React from 'react';
import { Button } from '@material-ui/core';
import '../css/styles/Header.scss'
import Grid from '@material-ui/core/Grid';
import MaterialTable from "material-table";
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import '../css/styles/Appointment.scss'

function arrayRemove(array, value) { return array.filter(function(item){ return item !== value; });}


class Appointment extends React.Component {
    constructor(props){
        super(props);
        this.state = {data:[
            {   
                id: 1,
                date: new Date(),
                specialty: "Oncologia",
                medicName: "Wilson"
            },
            {
                id: 2,
                date: new Date(),
                specialty: "Problemas Generales",
                medicName: "House"
            },
            {
                id: 3,
                date: new Date(),
                specialty: "neurología",
                medicName: "Trece"
            },
            
          ]};
    }


    removeAppointment(row) {
        const newData = arrayRemove(this.state.data, row);
        this.setState((state,props) => state.data = newData);
    }
    render() {
        return (
            <Grid container xs={12} className="AppointmentGrid">
                <Grid item xs={6}>
                 <MaterialTable 
                
                 title="Turnos"
                 columns={[
            { title: "Fecha", field: "date", type: "datetime" },
            { title: "Especialidad", field: "specialty" },
            { title: "Medico", field: "medicName" },
          ]}
          localization={{
            header: {
              actions: 'Acciones'
          },
          }}
          data={this.state.data}
          actions={[
            {
              icon: DeleteOutline,
              tooltip: 'Delete User',
              onClick: (event, rowData) => this.removeAppointment(rowData)
            }
          ]}
          options={{
            actionsColumnIndex: -1
          }}
        /></Grid>
        <Grid item xs={6}>
        <Button variant="contained" color="primary" className ="NewAppointment">Nuevo Turno</Button></Grid>
            </Grid>)
    }
}

export default Appointment;