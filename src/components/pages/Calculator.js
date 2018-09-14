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

    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange1(event) {
    this.setState({ value1: event.target.value });
  };

  handleChange2(event) {
    this.setState({ value2: event.target.value });
  };

  handleChange3(event) {
    this.setState({ operator: event.target.value });
  };

  handleSubmit(event) {
    event.preventDefault();
    var answer = parseInt(this.state.value1, 10) + parseInt(this.state.value2, 10);
    console.log(answer);
    this.setState({answer: answer});
    console.log("Calculate you MONSTER");
    console.log("value1 = " + this.state.value1 + "\noperator = " + this.state.operator + "\nvalue2 = " + this.state.value2);
  };

  render() {
    return (
      <div>
        {/* <button tpye="button" onClick={() => this.currentValues()}>Current Value Test</button> */}
        <form onSubmit={this.handleSubmit}>

          <label>First Number</label>
          <input type="number" value={this.state.value1} onChange={this.handleChange1} />
          <br />

          <label>Operator</label>
          <input type="text" maxLength="1" size="1" value={this.state.operator} onChange={this.handleChange3} />
          <br />

          <label>Second Number</label>
          <input type="number" value={this.state.value2} onChange={this.handleChange2} />
          <br />

          <input type="submit" value="Submit" />

        </form>
        <div>{this.state.value1} {this.state.operator} {this.state.value2} = {this.state.answer}</div>
      </div>
    );
  };
};

export default Calculator;
