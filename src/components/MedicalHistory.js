import React from 'react';
import { Button } from '@material-ui/core';
import '../css/styles/Header.scss'
import Grid from '@material-ui/core/Grid';
import MaterialTable from "material-table";
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import '../css/styles/MedicalHistory.scss'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import IconButton from '@material-ui/core/IconButton';
import Modal from '@material-ui/core/Modal';

function arrayRemove(array, value) { return array.filter(function(item){ return item !== value; });}


function CommentModal(props) {
  return  <div  className="modal">
  <h2 id="simple-modal-title">Comentario de la fecha: {props.date + ""}</h2>
  <p id="simple-modal-description">
    {props.comment}
  </p>
</div>
}
class MedicalHistory extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          data:[
            {   
                id: 1,
                date: new Date(),
                specialty: "Oncologia",
                comment: "algun dia se va a morir",
                open: false
            },
            {   
              id: 1,
              date: new Date(),
              specialty: "Yo que se",
              comment: "Que esperaba conseguir?",
              open: false
          },
          {   
            id: 1,
            date: new Date(),
            specialty: "PHP con esteroides",
            comment: "La revolucion volviendo a la misma mierda de antes",
            open: false
        },
            
          ]};
    }

    openModal(row, newVal) {
      const newData = this.state.data;
      const dataIndex = newData.indexOf(row);
      const updatedData = newData[dataIndex]; 
      updatedData.open = newVal;
      newData[dataIndex] = updatedData;
      this.setState((state,props) => state.data = newData);
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
            { title: "Especialidad", field: "specialty" },
            { title: "Comentario", field: "comment",
                 render: rowData =>  <div><IconButton onClick= {()=> this.openModal(rowData, true)}><MoreHorizIcon/></IconButton><Modal open={rowData.open} onClose={()=>{this.openModal(rowData, false)}}><CommentModal date={rowData.date} comment={rowData.comment}/></Modal></div>},
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

export default MedicalHistory;