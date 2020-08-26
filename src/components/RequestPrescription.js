import React from 'react';
import { Typography, TextField, MenuItem, Paper, Button } from '@material-ui/core';
import { createPrescription } from '../services/PrescriptionsRepository.js';
import '../css/styles/RequestPrescription.scss';

const specialties = [
    { id: 1, name: 'Adicciones' },
    { id: 2, name: 'Clinica medica' },
    { id: 3, name: 'Heridas Magicas' },
    { id: 4, name: 'Nutricion' },
    { id: 5, name: 'Psicologia' },
    { id: 6, name: 'Traumatologia' }
]

class RequestPrescription extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            specialty: '',
            description: '',
            comment: ''
        }
    }

    handleSpecialtyChange = (event, obj) => { this.setState({ specialty: obj.props.value }); };

    handleDescriptionChange = (event, value) => { this.setState({ description: event.target.value }); };

    handleCommentChange = (event, value) => { this.setState({ comment: event.target.value }); };

    requesrPrescription = () => {
        createPrescription(this.state);
        
        this.setState({
            specialty: '',
            description: '',
            comment: ''
        })
    }

    render() {
        return (
            <Paper className="RequestPrescriptionContainer">
                <div className="DisclaimerContainer">
                    <div></div>
                    <Typography>El doctor se reserva el derecho de decidir si la receta sera aceptada y emitida o rechazada.</Typography>
                    <Typography>Una vez que el doctor tome la decision usted sera notificado atravez de su casilla de correo.</Typography>
                    <Typography>Este proceso puede llegar a tardar hasta 24 hs</Typography>
                </div>
                <div className="InputContainer">
                    <div className="DetailsContainer">
                        <TextField label="especialidad medica" select value={this.state.specialty} onChange={this.handleSpecialtyChange}>{
                            specialties.map((option, index) => (
                                <MenuItem key={index} value={option.name}>{option.name}</MenuItem>
                            ))}</TextField>
                        <TextField label="Descripcion" value={this.state.description} onChange={this.handleDescriptionChange}></TextField>
                    </div>
                    <div className="CommentContainer">
                        <TextField label="Comentario" multiline rows={6} variant="outlined" value={this.state.comment} onChange={this.handleCommentChange} ></TextField>
                    </div>
                </div>
                <div>
                    <Button onClick={this.requesrPrescription} variant="contained" color="primary" >Solicitar</Button>
                </div>
            </Paper>
        )
    }
}

export default RequestPrescription;