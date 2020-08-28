import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { getPlans, getDocTypes, getCities, getRaces } from '../services/DropDownRepositories.js';
import '../css/styles/Signup.scss';

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
    marginTop: theme.spacing(8),
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  
  const [docType, setDocType] = React.useState();
  const [docNumber, setDocNumber] = React.useState();
  const [name, setName] = React.useState();
  const [lastName, setLastName] = React.useState();
  const [birthday, setBirthday] = React.useState();
  const [plan, setPlan] = React.useState();
  const [city, setCity] = React.useState();
  const [address, setAddress] = React.useState();
  const [mail, setMail] = React.useState();
  const [telephone, setTelephone] = React.useState();
  const [cellphone, setCellphone] = React.useState();

  const plans = getPlans();
  const docTypes = getDocTypes();
  const cities = getCities();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate className="SignupForm">
          <Grid container spacing={2}>
            <TextField label="Tipo de documento" value={docType} >
            {docTypes.map((option, index) => (
               <MenuItem key={index} value={option.codigo}>{option.codigo}</MenuItem>
              ))}
            </TextField>
            <TextField label="Número de documento" value={docNumber}></TextField>
            <TextField label="Nombre" value={name} ></TextField>
            <TextField label="Apellido" value={lastName} ></TextField>
            <TextField label="Fecha de nacimiento" value={birthday} ></TextField>
            <TextField label="Plan" select value={plan}  >
              {plans.map((option, index) => (
               <MenuItem key={index} value={option.name}>{option.name}</MenuItem>
              ))}
            </TextField>
            <TextField label="Ciudad" select value={city}  >
              {cities.map((option, index) => (
                <MenuItem key={index} value={option.name}>{option.name}</MenuItem>
              ))}
            </TextField>
            <TextField label="Dirección" value={address} ></TextField>
            <TextField label="Correo electronico" value={mail} ></TextField>
            <TextField label="Teléfono" value={telephone} ></TextField>
            <TextField label="Celular" value={cellphone}  ></TextField>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end" xs={12}>
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}