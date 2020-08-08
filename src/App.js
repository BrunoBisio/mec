import React, {Container} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import SignInSide from './component/SignInSide.js'
import SignUp from './component/SignUp.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
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
