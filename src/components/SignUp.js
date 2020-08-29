import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import {Select} from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { getPlans, getDocTypes, getCities, getRaces } from '../services/DropDownRepositories.js';
import '../css/styles/Signup.scss';
import {add} from '../services/UserRepository'
import {
  useHistory,
  useLocation,
  Link
} from "react-router-dom";

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

  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const [docType, setDocType] = React.useState();
  const [docNumber, setDocNumber] = React.useState();
  const [password, setPassword] = React.useState();
  const [name, setName] = React.useState();
  const [lastName, setLastName] = React.useState();
  const [birthday, setBirthday] = React.useState();
  const [plan, setPlan] = React.useState();
  const [city, setCity] = React.useState();
  const [address, setAddress] = React.useState();
  const [mail, setMail] = React.useState();
  const [telephone, setTelephone] = React.useState();
  const [cellphone, setCellphone] = React.useState();


  const [plans, setPlans] = React.useState();
  const [docTypes, setDocTypes] = React.useState();
  const [cities, setCities] = React.useState();

  React.useEffect(()  => {
    getPlans().then((data)=>
    {
      setPlans(data.data)
    });
  getDocTypes().then((data)=>
  {
    setDocTypes(data.data)
  });
    getCities().then((data)=>
  {
    setCities(data.data)
  });
  }, []);

  const buildUser= () => {
    const user = {
      DocTypeId: docType.id,
      docNumber: docNumber,
      name: name,
      lastName: lastName,
      birthday: birthday,
      PlanId: plan.id,
      CityId: city.id,
      address: address,
      mail: mail,
      phone: telephone,
      cellphone: cellphone,
      RoleId: 4
    }
    add(user).then(()=> {
      from.pathname += "user"
      history.replace(from);
    })
  }

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
            <Select label="Tipo de documento" select value={docType} onChange={(event) => setDocType(event.target.value)}>
            {docTypes && docTypes.map((option, index) => (
               <MenuItem key={index} value={option}>{option.docTypeCode}</MenuItem>
              ))}
            </Select>
            <TextField label="Número de documento" value={docNumber} onChange={(event) => setDocNumber(event.target.value)}></TextField>
            <TextField label="password" value={password} type="password" onChange={(event) => setPassword(event.target.value)}></TextField>
            <TextField label="Nombre" value={name} onChange={(event) => setName(event.target.value)}></TextField>
            <TextField label="Apellido" value={lastName} onChange={(event) => setLastName(event.target.value)}></TextField>
            <TextField label="Fecha de nacimiento" value={birthday} onChange={(event) => setBirthday(event.target.value)}></TextField>
            <Select label="Plan" select value={plan}  onChange={(event) => setPlan(event.target.value)}>
              {plans && plans.map((option, index) => (
               <MenuItem key={index} value={option}>{option.planCode}</MenuItem>
              ))}
            </Select>
            <Select label="Ciudad" select value={city}  onChange={(event) => setCity(event.target.value)}>
              {cities && cities.map((option, index) => (
                <MenuItem key={index} value={option}>{option.name}</MenuItem>
              ))}
            </Select>
            <TextField label="Dirección" value={address} onChange={(event) => setAddress(event.target.value)}></TextField>
            <TextField label="Correo electronico" value={mail} onChange={(event) => setMail(event.target.value)}></TextField>
            <TextField label="Teléfono" value={telephone} onChange={(event) => setTelephone(event.target.value)}></TextField>
            <TextField label="Celular" value={cellphone}  onChange={(event) => setCellphone(event.target.value)}></TextField>
          </Grid>
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={()=>{buildUser()}}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end" xs={12}>
            <Grid item>
              <Link href="/login" variant="body2">
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