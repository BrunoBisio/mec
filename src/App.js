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
import PrivateRoute from './components/Security.js';
import User from './components/User.js';
import MyAccountAdmin from './components/MyAccountAdmin.js'

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
        <PrivateRoute path="/user"><User></User></PrivateRoute>
        <Route path="/pruebaBruno"><MyAccountAdmin></MyAccountAdmin></Route>
      </Switch>
    </div>
  );
}

export default App;
