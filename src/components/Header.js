import React from 'react';
import { Button } from '@material-ui/core';
import logo from '../Logo-nombre.png';
import '../css/Header.scss'
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';

class Header extends React.Component {
   
    render() {
        return <header className="App-header">
            <div>
                <Grid container direction="row"
                    justify="space-between"
                    alignItems="center"
                    spacing={3}>
                    <Grid item xs={5}>
                        <img src={logo} className="App-logo" alt="logo" />
                    </Grid>
                    <Grid item xs={2}>
                    <Grid container direction="row"
                    justify="space-between"
                    alignItems="center"
                    spacing={1}>
                       <Grid item xs={6}><Link to="/singup"><Button variant="contained" color="primary" className ="SingButtons">SingUp</Button></Link></Grid>
                       <Grid item xs={6}><Link to="/singin"><Button variant="contained" color="primary" className ="SingButtons">SingIn</Button></Link></Grid>
                       </Grid>
                    </Grid>
                </Grid>
            </div>
        </header>
    }
}

export default Header;