import React from 'react';
import Paper from '@material-ui/core/Paper';
import {
    Scheduler,
    WeekView,
    Appointments,
    AppointmentTooltip,
    AppointmentForm,
    EditRecurrenceMenu,
    AllDayPanel,
    ConfirmationDialog,
} from '@devexpress/dx-react-scheduler-material-ui';
import { ViewState, EditingState, IntegratedEditing } from '@devexpress/dx-react-scheduler';
import { createAppointments, remove, getAppointmentsByMedic, getAppointments } from '../services/AppointmentRepository.js';
import { getUsersByRole } from '../services/UserRepository.js';
import MecAutocomplete from './MecAutocomplete.js';
import { Typography } from '@material-ui/core';
import '../css/styles/calendar.scss'

const currentDate = new Date(2017, 4, 25);

class Calendar extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            medic: {},
            data: [],
            medicsAutocomplete: {
                values: [],
                label: '',
                title: 'Medicos'
            }
        }
        this.commitChanges = this.commitChanges.bind(this);
    }

    componentDidMount() {
        getUsersByRole(2).then((response) => {
            const medicsAutocomplete = {
                values: response.data.results,
                label: 'user.lastName',
                title: 'Medicos'
            }
            this.setState({ medicsAutocomplete });
        });
    }

    commitChanges({ added, changed, deleted }) {
        let appointment = {};
        let func = undefined;
        if (added) {
            appointment = {
                startDate: added.startDate,
                endDate: added.endDate,
                medic: this.state.medic,
            };
            func = createAppointments;
        } else if (deleted) {
            appointment = {
                startDate: deleted.startDate,
                endDate: deleted.endDate,
                medic: this.state.medic
            };
            func = remove;
        }
        if (func !== undefined)
        func(appointment).then((val) => {
            if (val) {
                const data = getAppointmentsByMedic();
                this.setState({ data });
            }
        });
    }

    onMedicChange(event, value) {
        const medicId =  value ? value.id : 0;
        if (medicId > 0) {
            this.setState({ data: getAppointmentsByMedic(medicId) });
        }
    }

    render() {
        return (
            <Paper>
                <div className="CalendarTitle"><Typography variant="h3">Agenda</Typography></div>
                <div className="CalendarAutocomplete"><MecAutocomplete listObject={this.state.medicsAutocomplete} changeEvent={(event, value) => {this.onMedicChange(event, value)}} /></div>
                <Scheduler data={this.state.data}>
                    <ViewState currentDate={currentDate} />
                    <WeekView
                    startDayHour={9}
                    endDayHour={18}
                    excludedDays={[0]}
                    />
                    <EditingState onCommitChanges={this.commitChanges} />
                    <IntegratedEditing />
                    <ConfirmationDialog />
                    <Appointments />
                    <AppointmentTooltip showOpenButton showDeleteButton/>
                    <AppointmentForm />
                </Scheduler>
            </Paper>
        );
    }
}

export default Calendar;