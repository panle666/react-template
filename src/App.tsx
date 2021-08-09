import React, { useEffect } from "react";
import { Router, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import { routeConfigs } from "./router/routeConfigs";
import { IRouteConfig } from "./router/IRouteConfig";
import history from "./router/history";

function App() {
  return (
    <div>
      <Router history={history}>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/haha">HaHa</Link>
          </li>
        </ul>
        <div>
          <Switch>
            {routeConfigs.map((item, index) => {
              return <RouteWithSubRoutes key={index} {...item} />;
            })}
          </Switch>
        </div>
      </Router>
    </div>
  );
}

function RouteWithSubRoutes(route: IRouteConfig) {
  useEffect(() => {
    document.title = route.title;
  })
  return (
    <Route
      path={route.path}
      render={(props) => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.children} />
      )}
    />
  );
}

export default App;
