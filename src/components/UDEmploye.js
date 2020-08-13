import React from 'react';
import { Button } from '@material-ui/core';
import '../css/styles/Header.scss'
import Grid from '@material-ui/core/Grid';
import MaterialTable from "material-table";
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import '../css/styles/UDEmployee.scss';
import RelativeLink from './RelativeLink.js';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import {get, remove} from '../services/UserRepository';
import {getRoles} from '../services/RolRepository' ;
import IconButton from '@material-ui/core/IconButton';
import AddEmploye from './AddEmploye';
import Modal from '@material-ui/core/Modal';


function InternalModal(props) {
  return  <div  className="modal">
  <AddEmploye data={props.data}/>
</div>
}

class UDEmployee extends React.Component {
  constructor(props){
    super(props);
    this.state = { data:this.getEmployees() };
  }
  openModal(row, newVal) {
    const newData = this.state.data;
    const dataIndex = newData.indexOf(row);
    const updatedData = newData[dataIndex]; 
    updatedData.open = newVal;
    newData[dataIndex] = updatedData;
    this.setState((state,props) => state.data = newData);
  }
  getEmployees() {
    return get().filter(user => user.rol != getRoles()[3])
  }
  removeUser(row) {
    remove(row);
    this.setState((state,props) => state.data = this.getEmployees());
  }

  render() {
    return (
      <Grid container xs={12} className="AppointmentGrid">
        <Grid item xs={6}>
          <MaterialTable title="Turnos"
            columns={[
              { title: "Id", field: "id" },
              { title: "Nombre", field: "name" },
              { title: "Actualizar", field: "" ,
              render: rowData =>  <div><IconButton onClick= {()=> this.openModal(rowData, true)}><CreateIcon/></IconButton><Modal open={rowData.open} onClose={()=>{this.openModal(rowData, false)}}><InternalModal data={rowData}/></Modal></div>},
              { title: "Borrar", field: "",
              render: rowData =>  <div><IconButton onClick= {()=> this.removeUser(rowData, true)}><DeleteIcon/></IconButton></div>}, 
            
            ]}
            data={this.state.data}>
          </MaterialTable>
        </Grid>
        <Grid item xs={6}>
          <RelativeLink route="add"><Button variant="contained" color="primary" className ="NewAppointment">Nuevo Turno</Button></RelativeLink>
        </Grid>
      </Grid>
    )
  }
}

export default UDEmployee;