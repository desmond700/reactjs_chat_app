import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isNullOrUndefined } from 'util';

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => {
  // Add your own authentication on the below line.
  const isAuthenticated = true; 
  //
  console.log(rest.computedMatch.params.username);
  console.log(rest);

  return (
    < Route {...rest} render={
      props =>
        isAuthenticated ? (
          <Layout {...rest}/>
        ) : (
            <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
          )
    }
    />
  );
};

export default AppRoute;