import React, {Container} from 'react';
import logo from './logo.svg';
import MyCarrousel from './components/myComponent.js';
import SecondExample from './components/secondExample.js';
import {Card, CardMedia} from '@material-ui/core';
import './App.css';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import SignInSide from './component/SignInSide.js'
import SignUp from './component/SignUp.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SecondExample/>
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
