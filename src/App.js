import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    input: "",
    output: ""
  };

  handleInput = event => {
    const input = event.target.value;
    this.setState({ input });
  };

  render() {
    return (
      <div className="App">
        <h1>JSON Transformation</h1>
        {this.state.input}
        <textarea
          className="input box"
          value={this.state.input}
          onChange={this.handleInput}
        />
        <textarea className="output box" disabled />
      </div>
    );
  }
}

export default App;
