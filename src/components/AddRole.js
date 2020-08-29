import React from 'react';
import {Grid, FormControlLabel, Paper, Checkbox, Typography, TextField, Button } from '@material-ui/core';
import {getAccesses} from '../services/RolRepository'
import '../css/styles/AddRole.scss';

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

const accesses = [
    { id: 1, name: 'AltaPaciente' },
    { id: 2, name: 'AltaPaciente1' },
    { id: 3, name: 'AltaPaciente2' },
    { id: 4, name: 'AltaPaciente3' },
    { id: 5, name: 'AltaPaciente4' },
    { id: 6, name: 'AltaPaciente5' },
    { id: 7, name: 'AltaPaciente6' },
    { id: 8, name: 'AltaPaciente7' },
]

class AddEmployee extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            title: ((props.data && props.data.id > 0) ? 'Modificar rol' : 'Alta Rol'),
            role: props.data || { id: 0, name: '', access: [] },
            accesses: accesses,
            accessesTotal: 8,
            accessesPerRow: 4,
            close: props.onClose
        }
    }
    closeModal(){
        this.setState((state,props)=>{
            state.close()
        })
    }

    handleChange = (event) => {
        let accesses = this.state.accesses;
        accesses.map((a) => {
            if (a.id == event.target.id) {
                a.checked = event.target.checked;
            }
        });
        this.setState({ accesses });
    };

    handleNameChange = (event, value) => { 
        let role = this.state.role;
        role.name = event.target.value
        this.setState({ role }); 
    };

    containsAccess = (access) => {
        const value = this.state.role.access.filter((myAccess) => {
            return myAccess.id === access.id;
        });
        return (value.length > 0 && value[0] !== null);
    }

    componentDidMount() {
        // this.state.role = getRole;
        // this.state.accesses = getAccesses;
        this.state.accesses.forEach((access) => {
            if (this.state.role.access.legth > 0) {
                const value = this.state.role.access.find((roleAccess) => { return roleAccess.id === access.id; });
                access.checked = value.legth > 0;
            }
            access.checked = false;
        });
        const accesses = this.state.accesses;
        this.setState({ accesses });
    }

    render() {
        return (
            <div>
                <div className="TitleContainer"><Typography variant="h2">{this.state.title}</Typography></div>
                <div className="NameContainer"><TextField label="Nombre" value={this.state.role.name} onChange={this.handleNameChange}></TextField></div>
                <div className="GridAccessesContainer">
                    <Grid container spacing={1} className="GridAccesses">
                        {
                            this.state.accesses.map((access) => {
                                return (<Paper>
                                    <FormControlLabel control={ <Checkbox checked={access.checked} onChange={this.handleChange} id={access.id} /> } label={access.name} />
                                </Paper>);
                            })
                        }
                    </Grid>
                </div>
                <div className="ButtonContainer"><Button variant="contained" color="primary" onClick={()=>{this.closeModal()}}>Guardar</Button></div>
            </div>
        );
    }
}
export default AddEmployee;