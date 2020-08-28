import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Typography, TextField, Paper, Button, MenuItem } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import '../css/styles/SignInSide.scss';
import { login as securityLogin } from '../services/RolRepository.js';
import {
  useHistory,
  useLocation
} from "react-router-dom";
import { getDocTypes } from '../services/DropDownRepositories';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  }
}));

export default function SignInSide() {
  const classes = useStyles();
  let history = useHistory();
  let location = useLocation();
  const [userName, setUserName] = React.useState();
  const [password, setPassword] = React.useState();
  const [docType, setdocType] = React.useState();
  const [userDocNumber, setDocNumber] = React.useState();
  const [docTypes, setdocTypes] = React.useState();

  React.useEffect(() => {
    getDocTypes().then((response) => {
      setdocTypes(response.data)
    })

  }, []);

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    securityLogin(userDocNumber, docType.docTypeCode, password).then(
      (data) => {
        console.log("entro al replace")
        history.replace(from);
      }
    )
  };

  return (
    <Grid container component="main" className="SingInContainer">
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className="SingInImage" />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square className="SingInFormContainer">
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">Sign in</Typography>
          <form className={classes.form} noValidate>
            <Grid container xs={12}>
              <Grid item xs={3}>
                <TextField variant="outlined" margin="normal" required fullWidth label="Tipo de documento" value={docType} select onChange={(event, obj) => setdocType(obj.props.value)}>
                  {docTypes && docTypes.map((option, index) => (
                    <MenuItem key={index} value={option}>{option.docTypeCode}</MenuItem>
                  ))}
                </TextField></Grid>
              <Grid item xs={9}>
                <TextField variant="outlined" margin="normal" required fullWidth label="Número de documento" value={userDocNumber} onChange={(event) => setDocNumber(event.target.value)}></TextField>
              </Grid>
            </Grid >

            <TextField variant="outlined" margin="normal" required fullWidth name="password" label="Password" type="password" id="password" onChange={(event) => setPassword(event.target.value)} autoComplete="current-password" />
            <Button onClick={login} type="button" variant="contained" color="primary" className="SingInButton"> Sign In</Button>
            <Grid container justify="center">
              <Grid item xs={12} md={6} className="SingInLinkText">
                <Link href="#" variant="body2">{"¿Olvidaste tu contraseña?"}</Link>
              </Grid>
              <Grid item xs={12} md={6} className="SingInLinkText">
                <Link href="#" variant="body2">{"¿Todavia no tenes tu cuenta? Registrate aca"}</Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
