import React from 'react';
import { Typography, Button } from '@material-ui/core';
import '../css/styles/ConfirmDeletePatient.scss';

class ConfirmDeletePatient extends React.Component {

    constructor(props) {
        super(props);
        if (!props.data) {
           this.state = {
               user: {
                   docType: {
                       docTypeCode: 'lala'
                   },
                   docNumber: '1122',
                   name: 'lele',
                   lastName: 'lolo'
               }
           }
        } else {
            this.state = {
                user: props.data,
                title: props.title
            }
        }
        this.state.close = props.onClose
        this.state.confirm = props.confirm
    }
    close() {
        this.setState((state,props) => {
            state.close()
        })
    }
    confirm() {
        this.setState((state,props) => {
            state.confirm()
            state.close()
        })
    }

    render() {
        return (<div className="confirmDeleteContainer">
            <div className="logo"></div>
                <Typography variant="h2" component="h2">{this.state.title}</Typography>
            <div className="userDetails">
                <div className="textBox"><Typography>{this.state.user.docType/*.docTypeCode*/}</Typography></div>
                <div className="textBox"><Typography>{this.state.user.docNumber}</Typography></div>
                <div className="textBox"><Typography>{this.state.user.name}</Typography></div>
                <div className="textBox"><Typography>{this.state.user.lastName}</Typography></div>
            </div>
            <Typography variant="h4" component="h4">Esta accion no se podra deshacer</Typography>
            <div className="buttonContainer">
                <Button className="cancelButton" variant="contained" color="primary" onClick={()=>{this.close()}}>Cancelar</Button>
                <Button className="deleteButton" variant="contained" color="primary" onClick={()=>{this.confirm()}}>Eliminar</Button>
            </div>
        </div>)
    }
}

export default ConfirmDeletePatient;
    