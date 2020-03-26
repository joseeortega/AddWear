import React, { Component } from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

export default class RouterApp extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/register" component={Register} />
        </Switch>
        <Switch>
          <Route exact path="/login" component={Login} />
        </Switch>
        <Switch>
          <Route exact path="/home" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}
