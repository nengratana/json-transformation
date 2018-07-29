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

  reformatInput = input => {
    const inputObject = JSON.parse(input);
    let inputArray = [];
    Object.keys(inputObject).map(key => {
      return inputObject[key].map(item => {
        inputArray.push(item);
      });
    });
    return inputArray;
  };

  convertInput = event => {
    const input = this.state.input;
    const output = this.reformatInput(input);
    this.setState({ output });
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
        <textarea
          className="output box"
          value={JSON.stringify(this.state.output, null, 2)}
          disabled
        />
        <button className="button" onClick={this.convertInput}>
          Convert
        </button>
      </div>
    );
  }
}

export default App;
