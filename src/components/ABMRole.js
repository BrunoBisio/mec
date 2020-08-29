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
import {getRoles, removeRoles, createRole, updateRole} from '../services/RolRepository' ;
import IconButton from '@material-ui/core/IconButton';
import AddRole from './AddRole';
import Modal from '@material-ui/core/Modal';
import ConfirmDeleteRole from './ConfirmDeleteRole';



function InternalModal(props) {
  return  <div  className="modal">
            <AddRole data={props.data} onClose={props.onClose} onChange={props.onChange}/>
          </div>
}

function InternalDeleteModal(props) {
  return  <div  className="deleteModal">
            <ConfirmDeleteRole data={props.data} onClose={props.onClose} confirm={props.confirm}/>
          </div>
}

class ABMRole extends React.Component {
  constructor(props){
    super(props);
    this.state = { data:[],
    newRole: false,
    newData: null};
  }


  updateRole(role){
    updateRole(role.id, role).then(()=>{
      this.loadRoles()
    })
  }
  addRole(role){
    createRole(role).then(()=>{
      this.loadRoles()
    })
  }
  loadRoles() {
    getRoles().then(res => {
      this.setState({ data: res.data })
    })
  }

  componentDidMount() {
    this.loadRoles()
  }
  openModal(row, newVal) {
    const newData = this.state.data;
    const dataIndex = newData.indexOf(row);
    const updatedData = newData[dataIndex]; 
    updatedData.open = newVal;
    newData[dataIndex] = updatedData;
    this.setState({ 
      data: newData,
      editRole: newVal
    });
  }
  openDeleteModal(row, newVal) {
    const newData = this.state.data;
    const dataIndex = newData.indexOf(row);
    const updatedData = newData[dataIndex]; 
    updatedData.open = newVal;
    newData[dataIndex] = updatedData;
    this.setState({ 
      data: newData,
      deleteRole: newVal
    });
  }
  openNew(val) {
    this.setState((state,props) => state.newRole = val)
  }
  remove(row) {
    removeRoles(row).then(()=>{this.loadRoles()})
    
  }

  render() {
    return (
      <Grid container xs={12} className="AppointmentGrid">
        <Grid item xs={8}>
          <MaterialTable title="Roles"
            columns={[
              { title: "Id", field: "id" },
              { title: "Nombre", field: "nameRole" },
              { title: "Actualizar", field: "" ,
              render: rowData =>  <div><IconButton onClick= {()=> this.openModal(rowData, true)}><CreateIcon/></IconButton><Modal open={!!rowData.open && !!this.state.editRole} onClose={()=>{this.openModal(rowData, false)}}><InternalModal data={rowData} onChange={(role) => {this.updateRole(role)}} onClose={()=>{this.openModal(rowData, false)}}/></Modal></div>},
              { title: "Borrar", field: "",
              render: rowData =>  <div><IconButton onClick= {()=> this.openDeleteModal(rowData, true)}><DeleteIcon/></IconButton><Modal open={rowData.open && this.state.deleteRole} onClose={()=>{this.openDeleteModal(rowData, false)}}><InternalDeleteModal data={rowData} confirm={(role) => {this.deleteRole(role)}} onClose={()=>{this.openDeleteModal(rowData, false)}}/></Modal></div>}, 
            
            ]}
            data={this.state.data}>
          </MaterialTable>
        </Grid>
        <Grid xs={4}>
        <Button variant="contained" color="primary" onClick= {()=>this.openNew(true)} className ="NewAppointment">Nuevo rol</Button>
        <Modal open={this.state.newRole} onClose={()=>{this.openNew(false)}}><InternalModal onChange={(role) => {this.addRole(role)}} data={this.state.newData} onClose={()=>{this.openNew(false)}}/></Modal>
        </Grid>
      </Grid>
    )
  }
}

export default ABMRole;