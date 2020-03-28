import React, { Component } from "react";

interface Props { };

interface State {
  name: string;
  surnames: string;
  nickname: string;
};

export default class Register extends Component<Props, State> {

  constructor(props: any) {
    super(props);
    this.state = {
      name: '',
      surnames: '',
      nickname: '',
    };

  }

  handleChange(event: any) {
    console.log("Register -> handleChange -> event", event)

    const target = event.target;
    const value = target.value;
    const name = target.name;

    const newSate = Object.assign({}, this.state, { [name]: value });
    this.setState(newSate);
    console.log("Register -> handleChange -> this.state", this.state)
  }

  handleSubmit(event: any) {
    console.log(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={event => { this.handleSubmit(event) }}>
          <label>
            Nombre:
            <input type="text" name="name" value={this.state.name} onChange={event => { this.handleChange(event) }} />
          </label>
          <label>
            Apellidos:
            <input type="text" name="surnames" value={this.state.surnames} onChange={event => { this.handleChange(event) }} />
          </label>
          <label>
            Nickname:
            <input type="text" name="nickname" value={this.state.nickname} onChange={event => { this.handleChange(event) }} />
          </label>
          <input type="submit" value="registrar" />
        </form>
      </div>
    );
  }

}