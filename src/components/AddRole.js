import React from 'react';
import {Grid, FormControlLabel, Paper, Checkbox, MenuItem } from '@material-ui/core';
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
            data: props.data ? props.data : { id: '', nameRole: '', accesses: [] },
            accesses: accesses,
            accessesTotal: 8,
            accessesPerRow: 4
        }
    }

    handleChange = (event) => {
        this.state.data.accesses.push(event.target.checked);
        const data = this.state.data;
        this.setState({ data });
    };

    containsAccess = (access) => {
        const value = this.state.data.accesses.filter((myAccess) => {
            return myAccess.id === access.id;
        });
        return value !== null;
    }

    componentDidMount() {
        // this.state.data = accesses;
    }

    render() {
        return (
            <div className="GridAccessesContainer">
                <Grid container spacing={1} className="GridAccesses">
                    {
                        this.state.accesses.map((access) => {
                            return (<Paper>
                                <FormControlLabel control={ <Checkbox checked={this.containsAccess(access)} onChange={this.handleChange} name="checkedF" indeterminate /> } label={access.name} />
                            </Paper>);
                        })
                    }
                </Grid>
            </div>
        );
    }
}


/*
<Grid container item xs={12} spacing={3}>
                    <FormRow />
                    </Grid>
                    <Grid container item xs={12} spacing={3}>
                    <FormRow />
                    </Grid>
                    <Grid container item xs={12} spacing={3}>
                    <FormRow />
                    </Grid>
*/
export default AddEmployee;