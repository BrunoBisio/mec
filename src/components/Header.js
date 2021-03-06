import React from 'react';
import { Button } from '@material-ui/core';
import '../css/styles/Header.scss'
import logo from '../css/img/Logo-nombre.png';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';
import {isAuthenticated, singout} from '../services/RolRepository'

class Header extends React.Component {
    
    login() {
        singout();
            }

    render() {
        return <header className="App-header">
            <div>
                <Grid container direction="row" justify="space-between" alignItems="center" spacing={3} xs={12} className="HeaderContainer">
                    <Grid item xs={4} className="HeaderSection">
                        <img src={logo} className="App-logo" alt="logo" />
                    </Grid>
                    { !isAuthenticated() &&
                    <Grid item xs={8} className="HeaderSection">
                        <Grid container item direction="row" justify="flex-end" alignItems="flex-start" spacing={3} xs={12}>
                            <Link to="/user"><Button variant="contained" color="primary" className ="SingButtons">Mi Middle Earth</Button></Link>
                            <Link to="/singup"><Button variant="contained" color="primary" className ="SingButtons">Quiero asociarme</Button></Link>
                       </Grid>
                    </Grid>
                    }
                    { isAuthenticated() &&
                    <Grid item xs={8} className="HeaderSection">
                        <Grid container item direction="row" justify="flex-end" alignItems="flex-start" spacing={3} xs={12}>
                        <Link to="/"><Button variant="contained" color="primary" className ="SingButtons" onClick={()=>{this.login()}}>Desconectar</Button></Link>
                       </Grid>
                    </Grid>
                    }
                </Grid>
            </div>
        </header>
    }
}

export default Header;