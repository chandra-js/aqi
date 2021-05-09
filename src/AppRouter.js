import React from 'react';
import App from './router/App';
import Main from './router/Main';
import NoMatch from './router/NoMatch';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// way you'd do inside a `<Switch>`.
const routes = [
    {
      path: "/home",
      component: App
    },
    {
      path: "/aqi",
      component: Main
    },
    {
      path: "*",
      component: Main
    }
  ];

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

export default function AppRouter (){
    return (
        <Router>
            <Switch>
                {routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route} />
                ))}
            </Switch>
        </Router>
    )
    
}