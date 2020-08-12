import React from 'react';
import autoBind from 'auto-bind';
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
        
        // this.onValueChange = this.onValueChange.bind(this);
        // autoBind(this);
    }

    onValueChange = (event, value) => {
        this.setState(this.state, () => {
            if (this.state.changeEvent != null) {
                this.state.changeEvent(event, value);
                console.log("se corrio la func custom");
            } else {
                console.log("no se corrio un carajo negri");
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