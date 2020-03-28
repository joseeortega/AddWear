import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Login from "../pages/Login";

export default class RouterApp extends Component<{}, {}> {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
        </Switch>
      </BrowserRouter>
    );
  }
}
