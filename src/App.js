import React from 'react';
import {Switch, Route} from 'react-router-dom';
import MecCarousel from './components/MecCarousel.js';
import ContactButton from './components/ContactButtons';
import SignInSide from './components/SignInSide.js';
import SignUp from './components/SignUp.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import './css/styles/App.scss';
import NewsContainer from './components/NewsContainer'
import LoggedIn from './components/LoggedIn.js';
import PrivateRoute from './components/Security.js';
import Appointment from './components/Appointment';
import User from './components/User.js';
import AddAppointment from './components/AddAppointment.js';
import Dashboard from './components/Dashboard.js';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact strict >
          <Header></Header>
          <div className="AppBody">
            <MecCarousel></MecCarousel>
            <ContactButton></ContactButton>
            <NewsContainer></NewsContainer>
          </div>
          <Footer></Footer>
        </Route>
        <Route path="/login" exact strict component={SignInSide}></Route>
        <Route path="/singup" exact strict component={SignUp}></Route> 
        <PrivateRoute path="/loggedin" exact strict>
        <LoggedIn></LoggedIn>
        </PrivateRoute> 
        <PrivateRoute path="/user"><User></User></PrivateRoute>
        <Route path="/appointment"><Appointment></Appointment></Route>
        <Route path="/addAppointment"><AddAppointment></AddAppointment></Route>
        <Route path="/dashboard"><Dashboard></Dashboard></Route>
      </Switch>
    </div>
  );
}

export default App;
