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

  convertInput = event => {
    this.setState({ output: "test" });
  };

  render() {
    return (
      <div className="App">
        <h1>JSON Transformation</h1>
        <textarea
          className="input box"
          value={this.state.input}
          onChange={this.handleInput}
        />
        <textarea className="output box" value={this.state.output} disabled />
        <button className="button" onClick={this.convertInput}>
          Convert
        </button>
      </div>
    );
  }
}

export default App;
