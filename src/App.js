import React, { Component } from 'react';
import './App.css';
import FormStepper1 from './FormStepper1';
import FormStepper3 from './FormStepper3';
import FormStepper4 from './FormStepper4';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FormStepper1/>
        <FormStepper3/>
        <FormStepper4/>
      </div>
    );
  }
}

export default App;
