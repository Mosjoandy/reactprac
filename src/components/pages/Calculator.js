import React from "react";

class Calculator extends React.Component {
  constructor() {
    super()
    this.state = {
      value1: "",
      value2: "",
      operator: ""
    }

    this.handleChange1 = this.handleChange1.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.currentValues = this.currentValues.bind(this);
  }

  currentValues() {
    console.log("value1 = " + this.state.value1 + "\nvalue2 = " + this.state.value2 + "\noperator = " + this.state.operator)

  }

  handleChange1(event) {
    this.setState({ value1: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("submitted")
  }

  render() {
    return (
      <div>
        <button tpye="button" onClick={() => this.currentValues()}>Current Value Test</button>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value1} onChange={this.handleChange1} />
          {/* <input type="text" value={this.state.operator} onChange={this.handleChange} />
          <input type="text" value={this.state.value2} onChange={this.handleChange} /> */}
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
};

export default Calculator;
