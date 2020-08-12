import React from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import EditIcon from '@material-ui/icons/Edit';
import { get } from '../services/AppointmentRepository.js';
import { Grid, TextField, Paper } from '@material-ui/core';
import MaterialTable from 'material-table';
import RelativeLink from './RelativeLink.js';

class InnerAppointment extends React.Component {
    
    constructor (props) {
        super(props);

        this.state = {
            data: get()
        }
    }

    openAppointment = () => {

    }

    render() {
        return (
            <Grid container xs={12} className="AppointmentGrid">
                <Grid item xs={6}>
                    <MaterialTable 
                        title="Turnos"
                        columns={[
                            { title: "Fecha", field: "date", type: "datetime" },
                            { title: "Paciente", field: "patient" },
                        ]}
                        localization={{
                            header: { actions: 'Acciones' },
                        }}
                        data={this.state.data}
                        actions={[{
                            icon: EditIcon,
                            tooltip: 'Editar turno',
                            onClick: (event, rowData) => this.openAppointment(rowData)
                        }]}
                        options={{
                            actionsColumnIndex: -1
                        }}>
                    </MaterialTable>
                </Grid>
                <Grid item xs={6}>
                    <Paper>
                        <form>
                            <TextField></TextField>
                            <TextField></TextField>
                            <TextField></TextField>
                            <TextField></TextField>
                            <TextField></TextField>
                            <TextField></TextField>
                            <TextField></TextField>
                            <TextField></TextField>
                        </form>
                    </Paper>
                </Grid>
            </Grid>
        )
    }
}

export default InnerAppointment;