

class MedicalRecordAppointment extends React.Component {

    render() {
        return (
            <Grid item xs={12} className="">
                <div className="MedicNotes"><Typography variant="h4">Consultas Medicas</Typography></div>
                <div>
                    <Grid container xs={12} className="MedicNotesColumnsTitle">
                    <Grid item xs={3} className="colHeader">
                        <Typography variant="h5">Fecha de consulta</Typography>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker label="Fecha" disableToolbar variant="inline" format="dd/MM/yyyy" margin="normal" value={this.state.appointment.date} onChange={this.onDateChange}></KeyboardDatePicker>
                        </MuiPickersUtilsProvider>
                    </Grid>
                    <Grid item xs={3} className="colHeader">
                        <Typography variant="h5">Especialidad</Typography>
                        <TextField select value={this.state.specialtyFilter} onChange={this.handleSelectChange}>
                        {/*this.state.docTypes.map((option, index) => (
                                    <MenuItem key={index} value={option}>{option.docTypeCode}</MenuItem>
                        ))*/}
                        </TextField>
                    </Grid>
                    <Grid item xs={6} className="colHeader"><Typography variant="h5">Observaciones</Typography></Grid>
                    </Grid>
                </div>
                <div>
                {this.state.medicalRecord.medicNotes && this.state.medicalRecord.medicNotes.length > 0 && this.state.medicalRecord.medicNotes.map((medicNote) => {
                        return (
                        <Grid container xs={12}>
                        <Grid item xs={3}><TextField disabled={true} value={medicNote.date} variant="outlined" className="MedicNotesDate"></TextField></Grid>
                        <Grid item xs={3}><TextField disabled={true} value={medicNote.medic.specialty.name} variant="outlined" className="MedicNotesSpecialty"></TextField></Grid>
                        <Grid item xs={6}><TextField disabled={true} value={medicNote.comment} variant="outlined" className="MedicNotesComment"></TextField></Grid>
                        </Grid>
                        )
                    })}
                </div>
                <div>
                    <Grid container xs={12}>
                    <Grid item xs={3}><TextField disabled={true} value={this.state.newMedicRecApp.date} variant="outlined" className="MedicNotesDate"></TextField></Grid>
                    <Grid item xs={3}><TextField disabled={true} value={this.state.newMedicRecApp.medicDetail.specialty.name} variant="outlined" className="MedicNotesSpecialty"></TextField></Grid>
                    <Grid item xs={5}><TextField value={this.state.newMedicRecApp.comment} variant="outlined" className="MedicNotesComment" multiline rows={6}></TextField></Grid>
                    <Grid item xs={1}><IconButton onClick={this.openWarningDialog}><CheckIcon /></IconButton></Grid>
                    </Grid>
                </div>
            </Grid>
        )
    }
}