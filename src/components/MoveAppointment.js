import React from 'react';
import { MuiPickersUtilsProvider, KeyboardDatePicker, KeyboardTimePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { Typography, TextField, Button } from '@material-ui/core';
import '../css/styles/MoveAppointment.scss';

class MoveAppointment extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            appointment: props.data,
            comment: ''
        }
    }

    onDateChange (event, value) {
        let appointment = this.state.appointment;
        appointment.date = value;
        this.setState({ appointment });
    }

    onStartHourChange (event, value) {
        let appointment = this.state.appointment;
        appointment.startHour = value;
        this.setState({ appointment });
    }

    handleCommentChange = (event, value) => { this.setState({ comment: event.target.value }); };

    render(){
        return(
            <div className="moveAppointmentContainer">
                <div></div>
                <div className="moveAppointmentTitle"><Typography variant="h2">Reprogramar turno de Paciente</Typography></div>
                <div className="moveAppointmentBody">
                    <div className="moveAppointmentDateTime">
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker label="Fecha" disableToolbar variant="inline" format="dd/MM/yyyy" margin="normal" value={this.state.appointment.date} onChange={this.onDateChange}></KeyboardDatePicker>
                        </MuiPickersUtilsProvider>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardTimePicker label="Hora" margin="normal" value={this.state.appointment.startHour} onChange={this.onStartHourChange}></KeyboardTimePicker>
                        </MuiPickersUtilsProvider>
                    </div>
                    <div className="moveAppointmentComment">
                        <TextField label="Motivo de reprogramación" variant="outlined" multiline rows={6} value={this.state.comment} onChange={this.handleCommentChange}></TextField>
                    </div>
                </div>
                <div className="moveAppointmentButtonContainer">
                    <Button variant="contained" color="primary">Cancelar</Button>
                    <Button variant="contained" color="primary">Reporgramar</Button>
                </div>
            </div>
        );
    }
}

export default MoveAppointment;