import React from 'react';
import { Button } from '@material-ui/core';
import '../css/styles/Header.scss'
import Grid from '@material-ui/core/Grid';
import MaterialTable from "material-table";
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import '../css/styles/Appointment.scss'

function arrayRemove(array, value) { return array.filter(function(item){ return item !== value; });}


class Recipes extends React.Component {
    constructor(props){
        super(props);
        this.state = {data:[
            {   
                id: 1,
                date: new Date(),
                description: "Paracetamol x200"
            },
            {   
              id: 1,
              date: new Date(),
              description: "Marihuana x200kg por dia"
          },
          {   
            id: 1,
            date: new Date(),
            description: "Morfina x200cc x hora"
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
                
                 title="Recetas"
                 columns={[
            { title: "Fecha", field: "date", type: "datetime" },
            { title: "Descripcion", field: "description" },
          ]}
          localization={{
            header: {
              actions: 'Descargar'
          },
          }}
          data={this.state.data}
          actions={[
            {
              icon: SaveAltIcon,
              tooltip: 'Descargar receta',
              onClick: (event, rowData) => alert("descargando receta: " + rowData.description)
            }
          ]}
          options={{
            actionsColumnIndex: -1
          }}
        /></Grid>
        <Grid item xs={6}>
        <Button variant="contained" color="primary" className ="NewAppointment">Nueva Receta</Button></Grid>
            </Grid>)
    }
}

export default Recipes;