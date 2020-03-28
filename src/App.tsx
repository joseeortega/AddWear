import React, { Component } from "react";
import RouterApp from "./routing/RouterApp";
import "./styles/styles.scss";

export default class App extends Component<{}, {}> {
  state = {};

  render() {
    return <RouterApp />;
  }
}
