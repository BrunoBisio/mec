import React from 'react';
import { Typography, Grid, Paper, Autocomplete } from '@material-ui/core';

const dropDownLists = {
    specilityList: {
        title: 'Especialidad',
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
        values: [
            { text: 'Gondor' },
            { text: 'La Comarca' },
            { text: 'Mordor' },
            { text: 'Moria' }
        ]
    },
    medicList: {
        title: 'Medico',
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
    return (
        <List>
            <ListItem><AutoComplete options={dropDownLists.specilityList.values}></AutoComplete></ListItem>
            <ListItem><AutoComplete options={dropDownLists.clinicList.values}></AutoComplete></ListItem>
            <ListItem><AutoComplete options={dropDownLists.medicList.values}></AutoComplete></ListItem>
        </List>
    )
}

class AddApointment extends React.Component {
    
    render() {
        return (
            <Grid xs={12} spacing={8}>
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