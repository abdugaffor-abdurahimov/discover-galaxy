import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import routes from "./routes";

function ReactRouter() {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route, key) => (
          <Route key={key} exact path={route.path} />
        ))}
      </Switch>
    </BrowserRouter>
  );
}

export default ReactRouter;
