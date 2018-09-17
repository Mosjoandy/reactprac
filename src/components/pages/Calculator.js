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
  };

  // handleChange2(event) {
  //   this.setState({ value2: event.target.value });
  // };

  // handleChange3(event) {
  //   this.setState({ operator: event.target.value });
  // };

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

    const operator = this.state.operator;
    const value1 = parseInt(this.state.value1, 10);
    const value2 = parseInt(this.state.value2, 10);

    switch (operator) {
      case "+":
        this.setState({ answer: value1 + value2 });
        break
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
        console.log("Pick these operators: +, -, /, *");
        this.setState({ answer: "Pick these operators: +, -, /, *" });
    };

    // var answer = (parseInt(this.state.value1, 10) + parseInt(this.state.value2, 10))
    // console.log(this.state.value1 + "+" + this.state.value2+"="+answer);
  };

  render() {
    return (
      <div>
        {/* <button tpye="button" onClick={() => this.currentValues()}>Current Value Test</button> */}
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
      </div>
    );
  };
};

export default Calculator;
