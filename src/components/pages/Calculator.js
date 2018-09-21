import React from "react";

class Calculator extends React.Component {
  constructor() {
    super()
    this.state = {
      value1: "",
      operator: "",
      value2: "",
      answer: ""
    };

    this.handleChange = this.handleChange.bind(this);
    // this.handleChange2 = this.handleChange2.bind(this);
    // this.handleChange3 = this.handleChange3.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    // using [event.target.name] allows the use of multiple input fields, as long as "name='thing'" is specified in the input
  };

  // handleChange2(event) {
  //   this.setState({ value2: event.target.value });
  // };

  // handleChange3(event) {
  //   this.setState({ operator: event.target.value });
  // };
  // ^^^^^^ ABANDONED - consolidate handleChange functions

  handleSubmit(event) {
    event.preventDefault();
    // console.log("Calculate you MONSTER");
    console.log("value1 = " + this.state.value1 + "\noperator = " + this.state.operator + "\nvalue2 = " + this.state.value2);

    // if (this.state.operator === "+") {
    //   this.setState({ answer: parseInt(this.state.value1, 10) + parseInt(this.state.value2, 10)})

    // } else if (this.state.operator === "-") {
    //   this.setState({ answer: parseInt(this.state.value1, 10) - parseInt(this.state.value2, 10)})

    // } else if (this.state.operator === "/") { 
    //   this.setState({ answer: parseInt(this.state.value1, 10) / parseInt(this.state.value2, 10)})

    // } else if (this.state.operator === "*") {
    //   this.setState({ answer: parseInt(this.state.value1, 10) * parseInt(this.state.value2, 10)}) 

    // } else this.setState({ answer: "Pick these operators: +, -, /, *"})
    // ^^^^^^ ABANDONED - switch is a better choice for this kind of operation

    const operator = this.state.operator;
    const value1 = parseInt(this.state.value1, 10);
    const value2 = parseInt(this.state.value2, 10);
    // setting values from input fields to variables, then parsing those strings into numbers with parseInt(#, hex value)

    switch (operator) {
    // switch case passing variable operator (because operator is what the cases will be)

      case "+":
      // Takes the string from operator input form and run the appropriate state change

        this.setState({ answer: value1 + value2 });
        // sets new state of answer based on switch case value running addition in this line

        break
        // ends the switch if this case is matched

      case "-":
        this.setState({ answer: value1 - value2 });
        break
      case "/":
        this.setState({ answer: value1 / value2 });
        break
      case "*":
        this.setState({ answer: value1 * value2 });
        break
      default:
      // if none of the cases are matched, run this instead:

        // console.log("Pick these operators: +, -, /, *");
        this.setState({ answer: "Pick these operators: +, -, /, *" });
        // Telling users that they need to pick a real operator
    };

    // var answer = (parseInt(this.state.value1, 10) + parseInt(this.state.value2, 10))
    // ^^^^^^ ABANDONED - original parsing of answer prior to switch
  };

  render() {
    return (
      <div>
        {/* <button tpye="button" onClick={() => this.currentValues()}>Current Value Test</button> */}
        {/* ^^^^^^ ABANDONED - showing values of operators without needing to open consolelog */}
        <form onSubmit={this.handleSubmit}>

          <label>First Number</label>
          <input type="number" name="value1" onChange={this.handleChange} />
          <br />

          <label>Operator</label>
          <input type="text" maxLength="1" size="1" name="operator" onChange={this.handleChange} />
          <br />

          <label>Second Number</label>
          <input type="number" name="value2" onChange={this.handleChange} />
          <br />

          <input type="submit" value="Submit" />

        </form>
        <div>{this.state.value1} {this.state.operator} {this.state.value2} = {this.state.answer}</div>
        {/* rendering the values and the operator to show user the answer */}
      </div>
    );
  };
};

export default Calculator;
