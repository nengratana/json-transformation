import React, { Component } from "react";
// Import Component
import InputBox from "./InputBox";
import OutputBox from "./OutputBox";
import example from "./example";
import "./App.css";

class App extends Component {
  state = {
    input: " ",
    output: " ",
    isClean: true,
    error: false
  };

  handleInput = event => {
    const input = event.target.value;
    this.setState({ input });
  };

  convertInput = () => {
    const { input } = this.state;
    // Check if Input is an Object
    const isInputObject = this.isInputObject(input);

    if (isInputObject) {
      // Pull each object from input and reformatted into a single array
      // [{id:1..},{id:2...},{id:3...}]
      const reformattedInput = this.reformatInput(input);

      // Transform the reformatted array into expected output
      const output = this.transformInput(reformattedInput, null);
      this.setState({ output, error: false, isClean: false });
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
    // Convert input from String into Object
    const inputObject = JSON.parse(input);
    let inputArray = [];

    Object.keys(inputObject).map(key => {
      // Loop through each Object
      return inputObject[key].map(item => {
        // Loop inside each array for inner Objects and push them into inputArray
        return inputArray.push(item);
      });
    });
    return inputArray;
  };

  transformInput = (input, parent) => {
    let result = [];
    // Filter input with parent_id start with null
    input
      .filter(item => item.parent_id === parent)
      // Loop through filtered item
      .map(item => {
        let children = this.transformInput(input, item.id);
        // If current item still has children
        if (children.length) {
          // Run transformInput() again with current item is as parent_id
          item.children = children;
        }
        return result.push(item);
      });
    return result;
  };

  clearInput = () => {
    this.setState({ input: "" });
  };

  render() {
    return (
      <div className="App">
        <h1>JSON Transformation</h1>
        <div className="display">
          <InputBox input={this.state.input} handleInput={this.handleInput} />
          <OutputBox
            output={this.state.output}
            error={this.state.error}
            clean={this.state.isClean}
          />
        </div>
        <div className="row">
          <button className="button clear" onClick={this.clearInput}>
            CLEAR
          </button>
          <button className="button convert" onClick={this.convertInput}>
            CONVERT INPUT
          </button>
        </div>
        <div className="row">
          <h2 className="example">Example Input:</h2>
          <pre>
            <code>{JSON.stringify(example, null, 2)} </code>
          </pre>
        </div>
      </div>
    );
  }
}

export default App;
