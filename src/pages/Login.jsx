import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      <form>
        <div>
          <label>Username *:</label>
          <input type="text" />
        </div>
        <div>
          <label>Password *:</label>
          <input type="text" />
        </div>
      </form>
    );
  }
}

// Styles
const styles = {
  
}