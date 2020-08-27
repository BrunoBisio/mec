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
import { getEmployeeByRole } from '../services/EmployeeRepository.js';
import MecAutocomplete from './MecAutocomplete.js';
import { Typography } from '@material-ui/core';
import '../css/styles/calendar.scss'
import { getLoggedUser } from '../services/UserRepository.js';

const currentDate = new Date(2017, 4, 25);

class CalendarMedic extends React.Component {
    
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
        /*
            getLoggedUSer().then((user) => {
                getAppointmentsByMedic(user.data.id).then((appointments) => {
                    const data = appointments.data;
                    this.setState({ data });
                });
            })
        */
        const loggedUser = getLoggedUser();
        this.setState({ data: getAppointmentsByMedic(loggedUser.id) });
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

    render() {
        return (
            <Paper>
                <div className="CalendarTitle"><Typography variant="h3">Agenda</Typography></div>
                <Scheduler data={this.state.data}>
                    <ViewState currentDate={currentDate} />
                    <WeekView
                        startDayHour={7}
                        endDayHour={22}
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

export default CalendarMedic;