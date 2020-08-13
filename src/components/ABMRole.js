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
import {getRoles, removeRoles} from '../services/RolRepository' ;
import IconButton from '@material-ui/core/IconButton';
import AddRole from './AddRole';
import Modal from '@material-ui/core/Modal';


function InternalModal(props) {
  return  <div  className="modal">
            <AddRole data={props.data}/>
          </div>
}

class ABMRole extends React.Component {
  constructor(props){
    super(props);
    this.state = { data:getRoles() ,
    newRole: false,
    newData: null};
  }
  openModal(row, newVal) {
    const newData = this.state.data;
    const dataIndex = newData.indexOf(row);
    const updatedData = newData[dataIndex]; 
    updatedData.open = newVal;
    newData[dataIndex] = updatedData;
    this.setState((state,props) => state.data = newData);
  }
  openNew(val) {
    this.setState((state,props) => state.newRole = val)
  }
  removeUser(row) {
    removeRoles(row);
    this.setState((state,props) => state.data = getRoles());
  }

  render() {
    return (
      <Grid container xs={12} className="AppointmentGrid">
        <Grid item xs={8}>
          <MaterialTable title="Empleados"
            columns={[
              { title: "Id", field: "id" },
              { title: "Nombre", field: "name" },
              { title: "Actualizar", field: "" ,
              render: rowData =>  <div><IconButton onClick= {()=> this.openModal(rowData, true)}><CreateIcon/></IconButton><Modal open={!!rowData.open} onClose={()=>{this.openModal(rowData, false)}}><InternalModal data={rowData}/></Modal></div>},
              { title: "Borrar", field: "",
              render: rowData =>  <div><IconButton onClick= {()=> this.removeUser(rowData, true)}><DeleteIcon/></IconButton></div>}, 
            
            ]}
            data={this.state.data}>
          </MaterialTable>
        </Grid>
        <Grid xs={4}>
        <Button variant="contained" color="primary" onClick= {()=>this.openNew(true)} className ="NewAppointment">Nuevo rol</Button>
        <Modal open={this.state.newRole} onClose={()=>{this.openNew(false)}}><InternalModal data={this.state.newData}/></Modal>
        </Grid>
      </Grid>
    )
  }
}

export default ABMRole;