import React, { Component } from "react";

class Page1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfNumbers: [],
      listOfStrings: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.makeString = this.makeString.bind(this);
  }

  // function passing "event" to get input value from <input />
  handleChange(event) {

    // setting a new state for "value" which is initially an empty string "" with event.target.value from <input />
    this.setState({ value: event.target.value });
  };

  // fuction passing "event" to complete the submit form without reloading the page
  handleSubmit(event) {

    // prevents reloading of page
    event.preventDefault();

    // setting a new var to current array of listOfNumbers
    var number = this.state.listOfNumbers;

    // setting a new var to what value is
    var valueNumber = this.state.value;

    // setting a new var that concatenates the original array of listOfNumbers with the new value input
    var totalNumber = number.concat(valueNumber);

    // setting a new state of listOfNumbers with concatenated variable
    this.setState({ listOfNumbers: totalNumber });

    this.setState({ value: "" });
    // resetting the state of value to an empty string

  };

  makeString() {
    console.log(this.state.listOfNumbers)
    this.state.listOfStrings = this.state.listOfNumbers.toString();
    console.log(this.state.listOfStrings)
  };

  render() {
    return (
      <div>
        <h1></h1>
        {this.state.listOfNumbers.map((eachNumber, index) => (
          <span key={index} id={eachNumber}>
            {eachNumber}, {}
          </span>
        ))}

        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value || ""} onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>

        <button onClick={this.makeString}>MAKE STRING CHEESE</button>
        <div>
          <h4>String Cheese below:</h4>
          {this.state.listOfStrings}
        </div>
      </div>
    )
  };
};

export default Page1;
