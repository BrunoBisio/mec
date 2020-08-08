import React from 'react';
import { Button } from '@material-ui/core';
import logo from '../Logo-nombre.png';
import '../css/styles/Header.scss'
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';

class Header extends React.Component {
   
    render() {
        return <header className="App-header">
            <div>
                <Grid container direction="row" justify="space-between" alignItems="center" spacing={3} xs={12}>
                    <Grid item xs={4}>
                        <img src={logo} className="App-logo" alt="logo" />
                    </Grid>
                    <Grid item xs={8}>
                        <Grid container item direction="row" justify="flex-end" alignItems="flex-start" spacing={3} xs={12}>
                            <Link to="/singin"><Button variant="contained" color="primary" className ="SingButtons">SingIn</Button></Link>
                            <Link to="/singup"><Button variant="contained" color="primary" className ="SingButtons">SingUp</Button></Link>
                       </Grid>
                    </Grid>
                </Grid>
            </div>
        </header>
    }
}

export default Header;