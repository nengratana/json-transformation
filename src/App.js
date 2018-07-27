import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>JSON Transformation</h1>
        <h3>INPUT</h3>
        <textarea className="input box" />
        <textarea className="output box" disabled />
      </div>
    );
  }
}

export default App;
