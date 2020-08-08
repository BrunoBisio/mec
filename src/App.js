import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MecCarousel from './components/MecCarousel.js';
import SignInSide from './components/SignInSide.js';
import SignUp from './components/SignUp.js';
import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MecCarousel/>
      </header>
      <BrowserRouter>
          <Switch>
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
          </BrowserRouter>
    </div>
  );
}

export default App;
