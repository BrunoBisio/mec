import React from 'react';
import { Button, Radio, Grid, IconButton, TextField, Typography, RadioGroup, FormControlLabel, MenuItem } from '@material-ui/core';
import '../css/styles/Header.scss'
import MaterialTable from "material-table";
import '../css/styles/MedicalHistory.scss';
import { getPatientHistoryById, updatePatientHistory } from '../services/MedicalHistoryRepository.js'
import { MuiPickersUtilsProvider, KeyboardDatePicker, KeyboardTimePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import CheckIcon from '@material-ui/icons/Check';
import {getPatientHistoryAppointmentById} from '../services/medicalRecordAppointmentRepository'

class PatologicalRow extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      text: props.text,
      activeField: props.active,
      commentField: props.comment,
      medRec: props.object,
      isActiveValue: '',
      commentValue: '',
      change: props.onChange
    }
  }

  handleChange = (event) => {
    const value = event.target.value;
    this.setState((state, props) => {
      state.isActiveValue = value;
      state.medRec[state.activeField] = (state.isActiveValue === 'si');
      state.change({ 
        medRec: state.medRec,
        field: state.activeField
      })
      return state;
    });
  }

  handleTextChange = (event, value) => { 
    const fieldValue = event.target.value;
    this.setState((state, props) => {
        state.commentValue = fieldValue;  
        state.medRec[state.commentField] = state.commentValue;
        state.change({ 
          medRec: state.medRec,
          field: state.commentField
        })
        return state;
    });
  }

  componentDidMount() {
    this.setState((state, props) => {
        state.isActiveValue = state.medRec[state.activeField] ? 'si' : 'no';
        state.commentValue = state.medRec[state.commentField];
        return state;
    })
  }

  render() {
    return (
      <div className="PatologicalRow">
        <Grid container xs={12}  direction="row" justify="center" alignItems="center">
          <Grid item xs={3} className="RowText PatologicalRow"><Typography variant="body1">{this.state.text}</Typography></Grid>
          <Grid item xs={6} direction="row" justify="center" alignItems="center">
            <RadioGroup value={this.state.isActiveValue} onChange={this.handleChange} className="RowRadioButtonContainer">
              <Grid item xs={6} className="RowRadioButton PatologicalRow"><FormControlLabel value="si" control={<Radio />} /></Grid>
              <Grid item xs={6} className="RowRadioButton PatologicalRow"><FormControlLabel value="no" control={<Radio />} /></Grid>
            </RadioGroup>
          </Grid>
          <Grid item xs={3} className="RowComment PatologicalRow"><TextField disabled={this.state.isActiveValue === 'no'} label="Detalle" variant="outlined" value={this.state.commentValue} onChange={this.handleTextChange}></TextField></Grid>
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
      frequencyField: props.frequency,
      frequencyValue: '',
      commentField: props.comment,
      commentValue: '',
      medRec: props.object,
      change: props.onChange
    }
  }
  
  handleChange = (event) => {
    const frequency = event.target.value;
    this.setState((state, props) => {
        state.frequencyValue = frequency;
        state.medRec[state.frequencyField] = state.frequencyValue;
        state.change({ 
          medRec: state.medRec,
          field: state.frequencyField
        })
    });
  }

  handleTextChange = (event, value) => { 
    const fieldValue = event.target.value;
    this.setState((state, props) => {
        state.commentValue = fieldValue;  
        state.medRec[state.commentField] = state.commentValue;
        state.change({ 
          medRec: state.medRec,
          field: state.commentField
        })
        return state;
    });
  }

  componentDidMount() {
    this.setState((state, props) => {
        state.frequencyValue = state.medRec[state.frequencyField] + "";
        state.commentValue = state.medRec[state.commentField];
        return state;
    })
  }

  render() {
    return (
      <div className="nonPatologicalRow">
        <Grid container xs={12}  direction="row" justify="center" alignItems="center">
          <Grid item xs={3} className="RowText nonPatologicalColumn"><Typography variant="body1">{this.state.text}</Typography></Grid>
          <Grid item xs={6} direction="row" justify="center" alignItems="center">
            <RadioGroup value={this.state.frequencyValue} onChange={this.handleChange} className="RowRadioButtonContainer">
              <Grid item xs={6} className="RowRadioButton nonPatologicalColumn"><FormControlLabel value="2" control={<Radio />} /></Grid>
              <Grid item xs={4} className="RowRadioButton nonPatologicalColumn"><FormControlLabel value="1" control={<Radio />} /></Grid>
              <Grid item xs={2} className="RowRadioButton nonPatologicalColumn"><FormControlLabel value="0" control={<Radio />} /></Grid>
           </RadioGroup>
          </Grid>
          <Grid item xs={3} className="RowComment nonPatologicalColumn"><TextField disabled={this.state.frequencyValue == '0'} label="Detalle" variant="outlined" value={this.state.commentValue} onChange={this.handleTextChange}></TextField></Grid>
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
          specialties: [],
          fullName: '',
          age: ''
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

    updateMedRecord = (obj) => {
      this.setState((state, props) => {
        state.medicalRecord[obj.field] = obj.medRec[obj.field];
        return state;
      })
    }

    updateAllMedRecord = () => {
      updatePatientHistory(this.state.medicalRecord).then(() => {
        alert("se guardaron los cambios de manera satisfactoria");
      });
    }

    getFullName = () => {
      return this.state.user.name + " " + this.state.user.lastName;
    }

    getAge = () => {
      const date1 = new Date(this.state.user.birthdate);
      const date2 = new Date();
      const diffTime = Math.abs(date2 - date1);
      const age = Math.ceil(diffTime / (1000 * 60 * 60 * 24* 365)); 
      return age;
    }


    componentDidMount() {
      getPatientHistoryById(this.state.user.id).then((response) => {
        const medicalRecord = response.data;
        getPatientHistoryAppointmentById(medicalRecord.id).then((response) => {
          const medicalRecordApps = response.data;
          const fullName = this.getFullName();
          const age = this.getAge();
          this.setState({ 
            medicalRecord:medicalRecord, 
            medicalRecordApps:medicalRecordApps,
            fullName: fullName,
            age: age
          });
        });
      });
    }

    render() {
        return (
          <div>
          {this.state.user && <Grid container xs={9} className="MedicalHistoryContainer">
            <Grid item xs={12} className="GeneraInformationContainer">
              <div className="GeneralInfoTitle"><Typography variant="h4">Datos Generales</Typography></div>
              <div>
                <TextField className="GeneralInfoText" label="Nombre completo" value={this.state.fullName} disabled={true}></TextField>
                <TextField className="GeneralInfoText" label="Genero" value={this.state.user.gender} disabled={true}></TextField>
              </div>
              <div>
                {this.state.user.Race && <TextField className="GeneralInfoText" label="Raza" value={this.state.user.Race.name} disabled={true}></TextField>}
                <TextField className="GeneralInfoText" label="Edad" value={this.state.age} disabled={true}></TextField>
              </div>
            </Grid>
            {this.state.medicalRecord.id && <Grid item xs={12} className="">
              <div className="PatologicInfoTitle"><Typography variant="h4">Antecedentes patológicos</Typography></div>
              <div>
                <Grid container xs={12} className="PatologicColumnsTitle">
                  <Grid item xs={3} className="colHeader"><Typography variant="h5">Condiciones previas</Typography></Grid>
                  <Grid item xs={3} className="colHeader"><Typography variant="h5">SI</Typography></Grid>
                  <Grid item xs={3} className="colHeader"><Typography variant="h5">NO</Typography></Grid>
                  <Grid item xs={3} className="colHeader"><Typography variant="h5">En caso de marcar "SI", especifique</Typography></Grid>
                </Grid>
              </div>
              <div><PatologicalRow text="Alergia a medicamentos" active="allergyActive" comment="allergyDrug" object={this.state.medicalRecord} onChange={(obj) => {this.updateMedRecord(obj)}}></PatologicalRow></div>
              <div><PatologicalRow text="Enfermedades cardiovasculares" active="cardioActive" comment="cardioComment" object={this.state.medicalRecord} onChange={(obj) => {this.updateMedRecord(obj)}}></PatologicalRow> </div>
              <div><PatologicalRow text="Enfermedades pulmonares" active="pulmonaryActive" comment="pulmonaryComment" object={this.state.medicalRecord} onChange={(obj) => {this.updateMedRecord(obj)}}></PatologicalRow></div>
              <div><PatologicalRow text="Enfermedades digestivas" active="digestiveActive" comment="digestiveComment" object={this.state.medicalRecord} onChange={(obj) => {this.updateMedRecord(obj)}}></PatologicalRow></div>
              <div><PatologicalRow text="Enfermedades renales" active="renalActive" comment="renalComment" object={this.state.medicalRecord} onChange={(obj) => {this.updateMedRecord(obj)}}></PatologicalRow></div>
              <div><PatologicalRow text="Enfermedades Neurológicas" active="neurologicalActive" comment="neurologicalComment" object={this.state.medicalRecord} onChange={(obj) => {this.updateMedRecord(obj)}}></PatologicalRow></div>
              <div><PatologicalRow text="Diabetes" active="diabetesActive" comment="diabetesComment" object={this.state.medicalRecord} onChange={(obj) => {this.updateMedRecord(obj)}}></PatologicalRow></div>
              <div><PatologicalRow text="Antecedentes quirúrgicos" active="surgicalActive" comment="surgicalComment" object={this.state.medicalRecord} onChange={(obj) => {this.updateMedRecord(obj)}}></PatologicalRow></div>
              <div><PatologicalRow text="Medicamentos actuales" active="treatmentActive" comment="treatmentComment" object={this.state.medicalRecord} onChange={(obj) => {this.updateMedRecord(obj)}}></PatologicalRow></div>
              <div><PatologicalRow text="Embarazos" active="pregnancyActive" comment="pregnancyComment" object={this.state.medicalRecord} onChange={(obj) => {this.updateMedRecord(obj)}}></PatologicalRow></div>
            </Grid>}
            {this.state.medicalRecord.id && <Grid item xs={12} className="">
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
              <div><NotPatologicalRow text="Alcohol" frequency="alcoholFreq" comment="alcoholComment" object={this.state.medicalRecord} onChange={(obj) => {this.updateMedRecord(obj)}}></NotPatologicalRow></div>
              <div><NotPatologicalRow text="Tabaco" frequency="tobaccoFreq" comment="tobacoComment"object={this.state.medicalRecord} onChange={(obj) => {this.updateMedRecord(obj)}}></NotPatologicalRow></div>
              <div><NotPatologicalRow text="Drogas" frequency="drugsFreq" comment="drugsComment" object={this.state.medicalRecord} onChange={(obj) => {this.updateMedRecord(obj)}}></NotPatologicalRow></div>
              <div><NotPatologicalRow text="Otros" frequency="otherFreq" comment="otherComment" object={this.state.medicalRecord} onChange={(obj) => {this.updateMedRecord(obj)}}></NotPatologicalRow></div>
            </Grid>}
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
                      <Grid item xs={3}><TextField disabled={true} value={medicNote.MedicDetail.Specialty.name} variant="outlined" className="MedicNotesSpecialty"></TextField></Grid>
                      <Grid item xs={6}><TextField disabled={true} value={medicNote.comment} variant="outlined" className="MedicNotesComment"></TextField></Grid>
                      </Grid>
                      )
                  })}
              </div>
            </Grid>
          </Grid>}
          </div>
        )
    }
}

export default MedicalHistory;






