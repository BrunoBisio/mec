import React from 'react';
import {Switch, Route} from 'react-router-dom';
import MecCarousel from './components/MecCarousel.js';
import SignInSide from './components/SignInSide.js';
import SignUp from './components/SignUp.js';

import './App.css';
import Header from './components/Header.js'
function App() {
  return (
    <div className="App">
      
      
          <Switch>
          <Route
              path="/"
              exact
              strict
            >
            <Header></Header>
      <MecCarousel/>
            </Route>
            <Route
              path="/singin"
              exact
              strict
              component={SignInSide}
            >
            </Route>
            <Route
              path="/singup"
              exact
              strict
            component={SignUp}/>
          </Switch>
    </div>
  );
}

export default App;
