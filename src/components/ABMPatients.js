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
import { getPatients } from '../services/PatientRepository';
import { remove } from '../services/UserRepository';
import IconButton from '@material-ui/core/IconButton';
import AddPatient from './AddPatient';
import Modal from '@material-ui/core/Modal';
import ConfirmDelete from './ConfirmDelete';


function InternalModal(props) {
  return <div className="modal">
    <AddPatient data={props.data} onClose={props.onClose}/>
  </div>
}

function InternalDeleteModal(props) {
  return <div className="deleteModal">
    <ConfirmDelete data={props.data} title="Está por eliminar al paciente:" onClose={props.onClose}/>
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
  componentDidMount() {
    getPatients().then(res => {
      this.setState({ data: res.data.results })
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
    this.setState((state, props) => state.newPatient = val)
  }
  removeUser(row) {
    remove(row);
    this.setState((state, props) => state.data = getPatients());
  }

  render() {
    return (
      <Grid container xs={12} className="AppointmentGrid">
        <Grid item xs={8}>
          <MaterialTable title="ABM Paciente"
            columns={[
              { title: "tipo de documento", field: "docType.docTypeCode" },
              { title: "Numero de documento", field: "docNumber" },
              { title: "Nombre", field: "name" },
              { title: "Apellido", field: "lastName" },
              {
                title: "Actualizar", field: "",
                render: rowData => <div><IconButton onClick={() => this.openEditModal(rowData, true)}><CreateIcon /></IconButton><Modal open={!!rowData.open && this.state.editPatient} onClose={() => { this.openEditModal(rowData, false) }}><InternalModal data={rowData} onClose={() => { this.openEditModal(rowData, false) }}/></Modal></div>
              },
              {
                title: "Borrar", field: "",
                render: rowData => <div><IconButton onClick={() => this.openDeleteModal(rowData, true)}><DeleteIcon /></IconButton><Modal open={!!rowData.open && this.state.deletePatient} onClose={() => { this.openDeleteModal(rowData, false) }}><InternalDeleteModal data={rowData} onClose={() => { this.openDeleteModal(rowData, false) }}/></Modal></div>
              },
            ]}
            data={this.state.data}>
          </MaterialTable>
        </Grid>
        <Grid xs={4}>
          <Button variant="contained" color="primary" onClick={() => this.openNewModal(true)} className="NewAppointment">Nuevo paciente</Button>
          <Modal open={this.state.newPatient} onClose={() => { this.openNewModal(false) }}><InternalModal data={this.state.newData} onClose={() => { this.openNewModal(false) }}/></Modal>
        </Grid>
      </Grid>
    )
  }
}

export default ABMPatients;