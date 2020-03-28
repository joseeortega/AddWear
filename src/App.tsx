import React, { Component } from "react";
import RouterApp from "./routing/RouterApp";
import "./styles.css";

export default class App extends Component<{}, {}> {
  state = {};

  render() {
    return <RouterApp />;
  }
}
