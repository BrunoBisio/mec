import React from 'react';
import { TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';



class MecAutocomplete extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            values: props.listObject.values || {},
            label: props.listObject.label || {},
            title: props.listObject.title || {},
            changeEvent: props.changeEvent || function(){},
        }
        
    }

    onValueChange = (event, value) => {
        this.setState(this.state, () => {
            if (this.state.changeEvent != null) {
                this.state.changeEvent(event, value);
            }
        });
      }
    
    render() {
        return (
            <Autocomplete 
                options={this.state.values}
                getOptionLabel={(option) => option[this.state.label]}
                renderInput={(params) => <TextField {...params} label={this.state.title} 
                variant="outlined" />}
                onChange={this.onValueChange}
                filterSelectedOptions={true}>
            </Autocomplete>
        )
    }
}

export default MecAutocomplete;