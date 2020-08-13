import React from 'react';
import {Typography, TextField, Paper, Button, MenuItem } from '@material-ui/core';
import {getAccesses} from '../services/RolRepository'
import '../css/styles/AddRole.scss';
import Select from '@material-ui/core/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

class AddEmployee extends React.Component {
    constructor(props){
        super(props);
        if (props.data) {
            this.state = props.data
        } else {
            this.state = {
            name: "",
            id: "",
            access: []
        }
    }
    }
    handleIdChange = (event) => { this.setState({ id: event.target.value})};
    handleNameChange = (event) => { this.setState({ name: event.target.value})};
    handleAccessChange = (event) => { this.setState({ access: event.target.value})};


    render() {
        return (

            <Paper className="MyAccountPaper">
                <div className="MyAccountHeader">
                    <div className="MyAccountTitle"><Typography variant="h4">Alta de empleado</Typography></div>
                </div>
                <form noValidate className="MyAccountForm" autoComplete="off">
                    <div className="MyAccountCol ColLeft">
                    <TextField label="Id" value={this.state.id} onChange={this.handleIdChange} type="number"></TextField>
                    <TextField label="Nombre" value={this.state.name} onChange={this.handleNameChange}></TextField>
                    <Select
                        multiple
                        value={this.state.access}
                        onChange={this.handleAccessChange}
                        MenuProps={MenuProps}
                        >
                        {getAccesses().map((access) => (
                            <MenuItem key={access.title} value={access} >
                            {access.title}
                            </MenuItem>
                        ))}
                        </Select>
                    </div>
                </form>
                <div className="MyAccountButton"><Button variant="contained" color="primary" onClick={this.updateUser}>Guardar</Button></div>
            </Paper>
        );
    }
}

export default AddEmployee;