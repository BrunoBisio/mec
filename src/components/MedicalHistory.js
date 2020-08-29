import React from 'react';
import { Button, Radio, Grid, IconButton, TextField, Typography, RadioGroup, FormControlLabel, MenuItem } from '@material-ui/core';
import '../css/styles/Header.scss'
import MaterialTable from "material-table";
import '../css/styles/MedicalHistory.scss';
import { getPatientHistoryById } from '../services/MedicalHistoryRepository.js'
import { MuiPickersUtilsProvider, KeyboardDatePicker, KeyboardTimePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import CheckIcon from '@material-ui/icons/Check';

class PatologicalRow extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      text: props.text,
      isActive: props.active,
      comment: props.comment
    }
  }

  handleChange = (event) => {
    const isActive = event.target.value;
    this.setState({ isActive });
  }

  render() {
    return (
      <div className="PatologicalRow">
        <Grid container xs={12}  direction="row" justify="center" alignItems="center">
          <Grid item xs={3} className="RowText PatologicalRow"><Typography variant="body1">{this.state.text}</Typography></Grid>
          <Grid item xs={6} direction="row" justify="center" alignItems="center">
            <RadioGroup value={this.state.isActive} onChange={this.handleChange} className="RowRadioButtonContainer">
              <Grid item xs={6} className="RowRadioButton PatologicalRow"><FormControlLabel value={true} control={<Radio />} /></Grid>
              <Grid item xs={6} className="RowRadioButton PatologicalRow"><FormControlLabel value={false} control={<Radio />} /></Grid>
            </RadioGroup>
          </Grid>
          <Grid item xs={3} className="RowComment PatologicalRow"><TextField disabled={this.state.isActive} label="Detalle" variant="outlined" value={this.state.comment}></TextField></Grid>
        </Grid>
      </div>
    )
  }
}

class NotPatologicalRow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: props.text,
      frequency: props.frequency,
      comment: props.comment
    }
  }
  
  handleChange = (event) => {
    const frequency = event.target.value;
    this.setState({ frequency });
  }

  render() {
    return (
      <div className="nonPatologicalRow">
        <Grid container xs={12}  direction="row" justify="center" alignItems="center">
          <Grid item xs={3} className="RowText nonPatologicalColumn"><Typography variant="body1">{this.state.text}</Typography></Grid>
          <Grid item xs={6} direction="row" justify="center" alignItems="center">
            <RadioGroup value={this.state.frequency} onChange={this.handleChange} className="RowRadioButtonContainer">
              <Grid item xs={6} className="RowRadioButton nonPatologicalColumn"><FormControlLabel value={2} control={<Radio />} /></Grid>
              <Grid item xs={4} className="RowRadioButton nonPatologicalColumn"><FormControlLabel value={1} control={<Radio />} /></Grid>
              <Grid item xs={2} className="RowRadioButton nonPatologicalColumn"><FormControlLabel value={0} control={<Radio />} /></Grid>
           </RadioGroup>
          </Grid>
          <Grid item xs={3} className="RowComment nonPatologicalColumn"><TextField disabled={this.state.frequency > -1} label="Detalle" variant="outlined" value={this.state.comment}></TextField></Grid>
        </Grid>
      </div>
    )
  }

}

class MedicalHistory extends React.Component {
    
  constructor(props) {
        super(props);
        
        this.state = {
          user: props.user,
          medicalRecord: {},
          medicalRecordApps: [],
           // filterDate: new Date(),
          specialtyFilter: '',
          specialties: []
        };
    }

    handleChange = (event) => {
      this.setState({ value: event.target.checked });
      // updateMedicalHistory("") verificar si recibe campo
    };

    onDateChange = (value) => {
      const medicalRecordApps = this.state.medicalRecordApps.filter((mra) => {
        return mra.date == value;
      });
      this.setState({ medicalRecordApps:medicalRecordApps });
    }

  
  handleSelectChange = (event, obj) => { 
      const medicalRecordApps = this.state.medicalRecordApps.filter((mra) => {
          return mra.medicDetail.specialty.id === obj.props.value.id;
      });
      this.setState({ medicalRecordApps:medicalRecordApps });
  };

    componentDidMount() {
      getPatientHistoryById(this.state.user.id).then((response) => {
        const medicalRecord = response.data;
        const medicalRecordApps = medicalRecord;
        this.setState({ medicalRecord:medicalRecord, medicalRecordApps:medicalRecordApps });
      });
    }

    render() {
        return (
          <Grid container xs={9} className="MedicalHistoryContainer">
            <Grid item xs={12} className="GeneraInformationContainer">
              <div className="GeneralInfoTitle"><Typography variant="h4">Datos Generales</Typography></div>
              <div>
                <TextField className="GeneralInfoText" label="Nombre completo" disabled={true}></TextField>
                <TextField className="GeneralInfoText" label="Genero" disabled={true}></TextField>
              </div>
              <div>
                <TextField className="GeneralInfoText" label="Raza" disabled={true}></TextField>
                <TextField className="GeneralInfoText" label="Edad" disabled={true}>{/* calcular */}</TextField>
              </div>
            </Grid>
            <Grid item xs={12} className="">
              <div className="PatologicInfoTitle"><Typography variant="h4">Antecedentes patológicos</Typography></div>
              <div>
                <Grid container xs={12} className="PatologicColumnsTitle">
                  <Grid item xs={3} className="colHeader"><Typography variant="h5">Condiciones previas</Typography></Grid>
                  <Grid item xs={3} className="colHeader"><Typography variant="h5">SI</Typography></Grid>
                  <Grid item xs={3} className="colHeader"><Typography variant="h5">NO</Typography></Grid>
                  <Grid item xs={3} className="colHeader"><Typography variant="h5">En caso de marcar "SI", especifique</Typography></Grid>
                </Grid>
              </div>
              <div><PatologicalRow text="Alergia a medicamentos" active={this.state.medicalRecord.allergyActive} comment={this.state.medicalRecord.allergyDrug}></PatologicalRow></div>
              <div><PatologicalRow text="Enfermedades cardiovasculares" active={this.state.medicalRecord.cardioActive} comment={this.state.medicalRecord.cardioComment}></PatologicalRow></div>
              <div><PatologicalRow text="Enfermedades pulmonares" active={this.state.medicalRecord.pulmonaryActive} comment={this.state.medicalRecord.pulmonaryComment}></PatologicalRow></div>
              <div><PatologicalRow text="Enfermedades digestivas" active={this.state.medicalRecord.digestiveActive} comment={this.state.medicalRecord.digestiveComment}></PatologicalRow></div>
              <div><PatologicalRow text="Enfermedades renales" active={this.state.medicalRecord.renalActive} comment={this.state.medicalRecord.renalComment}></PatologicalRow></div>
              <div><PatologicalRow text="Enfermedades Neurológicas" active={this.state.medicalRecord.neurologicalActive} comment={this.state.medicalRecord.neurologicalComment}></PatologicalRow></div>
              <div><PatologicalRow text="Diabetes" active={this.state.medicalRecord.diabetesActive} comment={this.state.medicalRecord.diabetesComment}></PatologicalRow></div>
              <div><PatologicalRow text="Antecedentes quirúrgicos" active={this.state.medicalRecord.surgicalActive} comment={this.state.medicalRecord.surgicalComment}></PatologicalRow></div>
              <div><PatologicalRow text="Medicamentos actuales" active={this.state.medicalRecord.treatmentActive} comment={this.state.medicalRecord.treatmentComment}></PatologicalRow></div>
              <div><PatologicalRow text="Embarazos" active={this.state.medicalRecord.pregnancyActive} comment={this.state.medicalRecord.pregnancyComment}></PatologicalRow></div>
            </Grid>
            <Grid item xs={12} className="">
              <div className="NonPatologicInfoTitle"><Typography variant="h4">Antecedentes no patológicos</Typography></div>
              <div>
                <Grid container xs={12} className="NonPatologicColumnsTitle">
                  <Grid item xs={3} className="colHeader"><Typography variant="h5">Condiciones Previas</Typography></Grid>
                  <Grid item xs={3} className="colHeader"><Typography variant="h5">Frecuentemente</Typography></Grid>
                  <Grid item xs={2} className="colHeader"><Typography variant="h5">Ocacionalmente</Typography></Grid>
                  <Grid item xs={1} className="colHeader"><Typography variant="h5">Nunca</Typography></Grid>
                  <Grid item xs={3} className="colHeader"><Typography variant="h5">Especifique:</Typography></Grid>
                </Grid>
              </div>
              <div><NotPatologicalRow text="Alcohol" active={this.state.medicalRecord.alcoholFreq} comment={this.state.medicalRecord.alcoholComment}></NotPatologicalRow></div>
              <div><NotPatologicalRow text="Tabaco" active={this.state.medicalRecord.tobaccoFreq} comment={this.state.medicalRecord.tobacoComment}></NotPatologicalRow></div>
              <div><NotPatologicalRow text="Drogas" active={this.state.medicalRecord.drugsFreq} comment={this.state.medicalRecord.drugsComment}></NotPatologicalRow></div>
              <div><NotPatologicalRow text="Otros" active={this.state.medicalRecord.otherFreq} comment={this.state.medicalRecord.otherComment}></NotPatologicalRow></div>
            </Grid>
            <Grid item xs={12} className="">
              <div className="MedicNotes"><Typography variant="h4">Consultas Medicas</Typography></div>
              <div>
                  <Grid container xs={12} className="MedicNotesColumnsTitle">
                    <Grid item xs={3} className="colHeader">
                        <Typography variant="h5">Fecha de consulta</Typography>
                        {/*<MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker label="Fecha" disableToolbar variant="inline" format="dd/MM/yyyy" margin="normal" value={this.state.filterDate} onChange={this.onDateChange}></KeyboardDatePicker>
                        </MuiPickersUtilsProvider>*/}
                    </Grid>
                    <Grid item xs={3} className="colHeader">
                        <Typography variant="h5">Especialidad</Typography>
                        <TextField select value={this.state.specialtyFilter} onChange={this.handleSelectChange}>
                        {this.state.specialties.map((option, index) => (
                                    <MenuItem key={index} value={option}>{option.docTypeCode}</MenuItem>
                        ))}
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
            </Grid>
          </Grid>
        )
    }
}

export default MedicalHistory;






