import React from 'react';
import { Button } from '@material-ui/core';
import '../css/styles/Header.scss'
import logo from '../css/img/Logo-nombre.png';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';
import MaterialTable from "material-table";
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import '../css/styles/Appointment.scss'

function arrayRemove(arr, value) { return arr.filter(function(ele){ return ele != value; });}


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
            <Grid container xs={12}>
                <Grid item xs={6}>
                 <MaterialTable 
                
                 title="Turnos"
                 columns={[
            { title: "Fecha", field: "date", type: "datetime" },
            { title: "Especialidad", field: "specialty" },
            { title: "Medico", field: "medicName" },
          ]}
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