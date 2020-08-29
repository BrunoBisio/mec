import React from 'react';
import { Button, Modal, IconButton, Grid } from '@material-ui/core';
import MaterialTable from "material-table";
import RelativeLink from './RelativeLink.js';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import { getEmployees } from '../services/EmployeeRepository';
import { remove } from '../services/UserRepository';
import AddEmploye from './AddEmploye';
import ConfirmDelete from './ConfirmDelete';

import '../css/styles/Header.scss';
import '../css/styles/UDEmployee.scss';

function InternalModal(props) {
  return <div className="modal">
    <AddEmploye data={props.data} onClose={props.onClose}/>
  </div>
}

function InternalDeleteModal(props) {
  return <div className="deleteModal">
    <ConfirmDelete data={props.data} title="Está por eliminar al empleado:" onClose={props.onClose} />
  </div>
}

class ABMPatients extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      newPatient: false,
      deletePatient: false,
      editPatient: false,
      newData: null
    };
  }


  updateUser(user){
    updateUser(user.id, user).then(()=>{
      this.loadPatients()
    })
  }
  addUser(user){
    add(user).then(()=>{
      this.loadPatients()
    })
  }

  componentDidMount() {
    getEmployees().then((data) => {
      this.setState({ data: data.data.results });
    })
  }

  openEditModal(row, newVal) {
    const newData = this.state.data;
    const dataIndex = newData.indexOf(row);
    const updatedData = newData[dataIndex];
    updatedData.open = newVal;
    newData[dataIndex] = updatedData;
    this.setState({
      data: newData,
      editPatient: newVal
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
      deletePatient: newVal
    });
  }

  openNewModal(val) {
    this.setState({ newPatient: val })
  };

  removeUser(row) {
    remove(row).then(() => {
      getEmployees().then((data) => {
        this.setState({ data: data.data.results });
      })
    });
  }

  render() {
    return (
      <Grid container xs={12} className="AppointmentGrid">
        <Grid item xs={8}>
          <MaterialTable title="ABM Empleado"
            columns={[
              { title: "tipo de documento", field: "docType.docTypeCode" },
              { title: "Numero de documento", field: "docNumber" },
              { title: "Nombre", field: "name" },
              { title: "Apellido", field: "lastName" },
              {
                title: "Actualizar", field: "",
                render: rowData => <div><IconButton onClick={() => this.openEditModal(rowData, true)}><CreateIcon /></IconButton><Modal open={!!rowData.open && this.state.editPatient} onClose={() => { this.openEditModal(rowData, false) }}><InternalModal data={rowData} onClose={() => { this.openEditModal(rowData, false) }} onChange={(user) => {this.updateUser(user)}}/></Modal></div>
              },
              {
                title: "Borrar", field: "",
                render: rowData => <div><IconButton onClick={() => this.openDeleteModal(rowData, true)}><DeleteIcon /></IconButton><Modal open={!!rowData.open && this.state.deletePatient} onClose={() => { this.openDeleteModal(rowData, false) }}><InternalDeleteModal data={rowData} onClose={() => { this.openDeleteModal(rowData, false) }} confirm={(user) => {this.removeUser(user)}} /></Modal></div>
              },
            ]}
            data={this.state.data}>
          </MaterialTable>
        </Grid>
        <Grid xs={4}>
          <Button variant="contained" color="primary" onClick={() => this.openNewModal(true)} className="NewAppointment">Nuevo empleado</Button>
          <Modal open={this.state.newPatient} onClose={() => { this.openNewModal(false) }}><InternalModal data={this.state.newData} onClose={() => { this.openNewModal(false) }} onChange={(user) => {this.addUser(user)}}/></Modal>
        </Grid>
      </Grid>
    )
  }
}

export default ABMPatients;