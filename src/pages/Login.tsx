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
      <div className="container flex justify-content-center">
        <div className="m-5 p-5 bg-white border-gray border-radius">
          <h1 className="m-0 mb-2 p-0">Login</h1>
          <form>
            <div className="mb-1">
              <label>
                <span>Username *:</span>
                <input
                  type="text"
                  value={this.state.username}
                  onChange={event => {
                    this.setUsername(event.target.value);
                  }}
                />
              </label>
            </div>
            <div className="mb-2">
              <label>
                <span>Password *:</span>
                <input
                  type="password"
                  value={this.state.password}
                  onChange={event => {
                    this.setPassword(event.target.value);
                  }}
                />
              </label>
            </div>
            <div>
              <button>Send</button>
            </div>
          </form>
          <p>You do not have an account? Create Account</p>
        </div>
      </div>
    );
  }
}

// Styles
const styles = {};

// Redux
const mapStateToProps = (state: any) => state;

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
