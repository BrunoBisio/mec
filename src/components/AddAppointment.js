import React from 'react';
import { Typography, Grid, Paper, List, ListItem, TextField } from '@material-ui/core';
import MecAutocomplete from './MecAutocomplete.js';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const dropDownLists = {
    specilityList: {
        title: 'Especialidad',
        label: 'text',
        values: [
            { text: 'Adicciones' },
            { text: 'Clinica medica' },
            { text: 'Heridas Magicas' },
            { text: 'Nutricion' },
            { text: 'Psicologia' },
            { text: 'Traumatologia' }
        ]
    },
    clinicList: {
        title: 'Clinica',
        label: 'text',
        values: [
            { text: 'Gondor' },
            { text: 'La Comarca' },
            { text: 'Mordor' },
            { text: 'Moria' }
        ]
    },
    medicList: {
        title: 'Medico',
        label: 'text',
        values: [
            { text: 'Aragon' },
            { text: 'Arwen' },
            { text: 'Bilbo' },
            { text: 'Boromir' },
            { text: 'Gandalf' },
            { text: 'Gimli' },
            { text: 'Isildur' },
            { text: 'Legolas' },
            { text: 'Tauriel' }
        ]
    }
}

function AutoCompleteList(){
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => { setSelectedDate(date); };

    return (
        <List>
            { dropDownLists.map( (listObj, index) => { return <ListItem><MecAutocomplete listObject={listObj} key={index}></MecAutocomplete></ListItem>}) }
            <ListItem>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker variant="inline" format="dd/MM/yyyy" margin="normal" value={selectedDate} onChange={handleDateChange}></KeyboardDatePicker>
                </MuiPickersUtilsProvider>
            </ListItem>
        </List>
    )
}

class AddApointment extends React.Component {
    
    render() {
        return (
            <Grid xs={12} spacing={8} direction="row" justify="center" alignItems="center" >
                <Grid xs={12} sm={6}>
                    <Paper>
                        <Typography variant="h2">Turnos para: Usuario</Typography>
                        <AutoCompleteList></AutoCompleteList>
                    </Paper>
                </Grid>
                <Grid xs={12} sm={6}>
                    <Paper>
                        <Typography variant="h2">Turnos Disponibles</Typography>
                    </Paper>
                </Grid>
            </Grid>
        )
    }
}

export default AddApointment;