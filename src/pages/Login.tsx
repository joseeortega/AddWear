import React, { Component } from "react";
import { connect } from "react-redux";
import ILogin from "./../data/models/Login";

interface Props {}

export class Login extends Component<Props, ILogin> {
  constructor(props: Props) {
    super(props);
    this.state = { username: "", password: "" };
  }

  setUsername(username: string) {
    const newSate = Object.assign({}, this.state, { username: username });
    this.setState(newSate);
  }

  setPassword(password: string) {
    const newSate = Object.assign({}, this.state, { password: password });
    this.setState(newSate);
  }

  render() {
    return (
      <form>
        <div>
          <label>
            Username *:
            <input
              type="text"
              value={this.state.username}
              onChange={event => {
                this.setUsername(event.target.value);
              }}
            />
          </label>
        </div>
        <div>
          <label>
            Password *:
            <input
              type="password"
              value={this.state.password}
              onChange={event => {
                this.setPassword(event.target.value);
              }}
            />
          </label>
        </div>
      </form>
    );
  }
}

// Styles
const styles = {};

// Redux
const mapStateToProps = (state: any) => state;

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
