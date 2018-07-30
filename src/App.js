import React, { Component } from "react";
// Import Component
import InputBox from "./InputBox";
import OutputBox from "./OutputBox";
import "./App.css";

class App extends Component {
  state = {
    input: "",
    output: "",
    error: false
  };

  handleInput = event => {
    const input = event.target.value;
    this.setState({ input });
  };

  convertInput = () => {
    const { input, error } = this.state;
    const isInputObject = this.isInputObject(input);

    if (isInputObject) {
      const reformattedInput = this.reformatInput(input);
      const output = this.transformInput(reformattedInput, null);

      this.setState({ output, error: false });
    } else {
      this.setState({ output: "Wrong input format", error: true });
    }
  };

  isInputObject = input => {
    try {
      this.reformatInput(input);
      return true;
    } catch (error) {
      return false;
    }
  };

  reformatInput = input => {
    const inputObject = JSON.parse(input);
    let inputArray = [];
    Object.keys(inputObject).map(key => {
      return inputObject[key].map(item => {
        return inputArray.push(item);
      });
    });
    return inputArray;
  };

  transformInput = (input, parent) => {
    let result = [];
    input.filter(item => item.parent_id === parent).map(item => {
      let children = this.transformInput(input, item.id);
      if (children.length) {
        item.children = children;
      }
      return result.push(item);
    });
    return result;
  };

  render() {
    return (
      <div className="App">
        <h1>JSON Transformation</h1>
        <InputBox input={this.state.input} handleInput={this.handleInput} />
        <OutputBox output={this.state.output} error={this.state.error} />
        <textarea
          className="output box"
          value={JSON.stringify(this.state.output, null, 2)}
          disabled
        />
        <button className="button" onClick={this.convertInput}>
          Convert
        </button>
        {this.state.error ? "Error is True" : "Error is false"}
      </div>
    );
  }
}

export default App;
