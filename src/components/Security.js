import React from 'react';
import '../css/styles/Header.scss'
import {Redirect, Route} from 'react-router-dom';
import {getUser as IsAuthenticated} from '../services/RolRepository.js';


// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          IsAuthenticated() ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }
export default PrivateRoute;
