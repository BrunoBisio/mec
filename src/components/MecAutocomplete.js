import React from 'react';
import autoBind from 'auto-bind';
import { TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';


class MecAutocomplete extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            values: props.listObject.values,
            label: props.listObject.label,
            title: props.listObject.title
        }

        autoBind(this);
    }
    
    render() {
        return (
            <Autocomplete 
                options={this.state.values}
                getOptionLabel={(option) => option[this.state.label]}
                renderInput={(params) => <TextField {...params} label={this.state.title} variant="outlined" />}>
            </Autocomplete>
        )
    }
}

export default MecAutocomplete;