import React from 'react'
import {Route, Redirect } from 'react-router-dom'

const Routes = ({ component: Component, ...rest, isLoggedin }) => (
  <Route
    {...rest}
    render={(props) =>
      isLoggedin === true
      ? <Component {...props} />
      : <Redirect to={{
          pathname: "/",
          state: {from: props.location}
        }} />
    }
  />
)

export default Routes