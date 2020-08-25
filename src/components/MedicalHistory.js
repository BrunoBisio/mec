import React from 'react';
import { Button, Radio, Grid, Checkbox, TextField } from '@material-ui/core';
import '../css/styles/Header.scss'
import MaterialTable from "material-table";
import '../css/styles/MedicalHistory.scss';
import { getGeneraInformation, getPatalogicHistory, getNonPatologicHistory } from '../services/MedicalHistoryRepository.js'

function RadioButtons(props) {
  
  const [selectedValue, setSelectedValue] = React.useState(props.value);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    props.value = selectedValue;
  };

  return (
    <div>
      <Radio
        checked={selectedValue === '2'}
        onChange={handleChange}
        value="2"
        name="radio-button-demo"
        label="Frecuentemente"
      />
      <Radio
        checked={selectedValue === '1'}
        onChange={handleChange}
        value="1"
        name="radio-button-demo"
        label="Esporadico"
      />
      <Radio
        checked={selectedValue === '0'}
        onChange={handleChange}
        value="0"
        name="radio-button-demo"
        label="Nunca"
      />
    </div>
  )
}

class MedicalHistory extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
          generaInformation: getGeneraInformation(props.userId),
          patologicalHistory: getPatalogicHistory(props.userId),
          nonPatologicHistory: getNonPatologicHistory(props.userId)
        };
    }

    handleChange = (event) => {
      this.setState({ value: event.target.checked });
      // updateMedicalHistory("") verificar si recibe campo
    };

    handleCommentChange = (event, value) => { 
      this.setState({ comment: event.target.value }); // verificar si recibe campo
    };

    render() {
        return (
          <Grid container xs={12} className="MedicalHistoryContainer">
            <Grid item xs={12} className="GeneraInformationContainer">
              <MaterialTable title="Datos Generales"
                columns={[
                  { title: "", field: "fieldName" },
                  { title: "", field: "value" }
                ]}
                data={this.state.generaInformation}
                options={{
                  paging: false,
                  search: false,
                  header: false
                }}>
              </MaterialTable>
            </Grid>
            <Grid item xs={12} className="">
              <MaterialTable title="Antecedentes Pátologicos"
                  columns={[
                    { title: "", field: "fieldName" },
                    { title: "", field: "value.active", 
                      render: rowData => <div><Checkbox name="active" checked={rowData.value && rowData.value.active} onChange={this.handleChange} color="primary"/></div> 
                    },
                    { title: "", field: "value.comment", 
                      render: rowData => <div><TextField name="comment" value={rowData.value && rowData.value.comment} onChange={this.handleCommentChange}></TextField></div>
                    }
                  ]}
                  data={this.state.patologicalHistory}
                  options={{
                    paging: false,
                    search: false,
                    header: false
                  }}>
              </MaterialTable>
            </Grid>
            <Grid item xs={12} className="">
              <MaterialTable title="Antecedentes no Pátalogicos - Consumo de sustancias"
                  columns={[
                    { title: "", field: "fieldName" },
                    { title: "", field: "value.recurrence", render: rowData => <div><RadioButtons value={rowData.value && rowData.value.recurrence}></RadioButtons></div> },
                    { title: "", field: "value.comment" }
                    // render: rowData => <div><Checkbox checked={rowData.value} onChange={this.handleChange} name="checkedB" color="primary"/></div>
                  ]}
                  data={this.state.nonPatologicHistory}
                  options={{
                    paging: false,
                    search: false,
                    header: false
                  }}>
              </MaterialTable>
            </Grid>
          </Grid>
        )
    }
}

export default MedicalHistory;