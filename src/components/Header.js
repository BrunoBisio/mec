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
                <Grid container>
                    <Grid item>
                        <img src={logo} className="App-logo" alt="logo" />
                    </Grid>
                    <Grid item>
                       <Link to="/singup"><Button variant="contained" color="primary" className ="SingButtons">SingUp</Button></Link>
                       <Link to="/singin"><Button variant="contained" color="primary" className ="SingButtons">SingIn</Button></Link>
                    </Grid>
                </Grid>
            </div>
        </header>
    }
}

export default Header;