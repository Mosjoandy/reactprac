import React, { Component } from 'react';
import "./ToDoApp.css";

// original task:

/*
	1. Add a new item
	2. Mark as done
	3. Delete from list
*/

///////////////////initial pseudo code/////////////////////////////////////////////

// state of line items that is an array
// state of todo item boolean
// handleformsubmit (e) preventdefault
// input value taken pushed into state array of todo items with 				data-key id

// function that !this.setState of that button
// state change will change the list item to "done"

// function that hooks into todo item data-key id
// forloop of the array
// if data id key = any of data-id keys,
// then *remove* data-id key item from array
// re-render element in DOM (to do item array)

class ToDoApp extends Component {
  constructor() {
    // required super() to call on parent class so we can access "this."
    super();

    // setting state initial values for to-do-item list and value from input field
    this.state = {

      // value will be an empty string
      value: "",

      // toDoItems will be an empty array
      toDoItems: []

      // strike: false
      // ^^^^^^ ABANDONED - strike originally a boolean for strike-through
    };

    // binding in the constructor so functions have ".this" is defined 
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.destructoDisk = this.destructoDisk.bind(this);
    this.strike = this.strike.bind(this);
  };

  // function passing "event" to get input value from <input />
  handleChange(event) {

    // setting a new state for "value" which is initially an empty string "" with event.target.value from <input />
    this.setState({ value: event.target.value });
  };

  // fuction passing "event" to complete the submit form without reloading the page
  handleSubmit(event) {
  
    // prevents reloading of page
    event.preventDefault();

    // setting a new var to current array of toDoItems
    var toDo1 = this.state.toDoItems;

    // setting a new var to what value is
    var toDo2 = this.state.value;

    // setting a new var that concatenates the original array of toDoItems with the new value input
    var toDoTotal = toDo1.concat(toDo2);

    // setting a new state of toDoItems with concatenated variable
    this.setState({ toDoItems: toDoTotal });

    // this.setState({toDoItems: this.state.toDoItems.push(this.state.value)});
    // ^^^^^^ ABANDONED - original attempt to change state with .push

    this.setState({ value: "" });
    // resetting the state of value to an empty string
  };

  // 	strikeOut() {
  // 		this.setState({
  // 			strike: !this.state.strike
  // 		});
  // 	};
  // ^^^^^^ ABANDONED - original function to change text-decoration for items that were done

  // function that passes index from .map below so we can delete toDoItems from array when clicked
  destructoDisk(index) {
    console.log("Destructo-Disk at item " + index);

    // this.setState({toDoItems: this.state.toDoItems.splice(index, 1)})
    // ^^^^^^ ABANDONED - unable to splice an item from the state

    // setting a new var with the entire toDoItems array
    var getCut = this.state.toDoItems;
   
    // using the .splice method to target the index(from .map) and deleting "1" itemfrom that array
    getCut.splice(index, 1);

    // changing the state of toDoItems with new array
    this.setState({ toDoItems: getCut });

    console.log(this.state.toDoItems);
  };

  // function that passes index from .map below so we can change the class of an item when clicked
  strike(index) {
    console.log("strike down thee # " + index);

    // setting a new var with an item from toDoItems array - toDoItems[#]
    var strikeDown = this.state.toDoItems[index];
    console.log(strikeDown);

    // hook into the id of that array item and give it a new attribute "class" = "striker"
    document.getElementById(strikeDown).setAttribute("class", "striker");

    // strikeDown.setAttribute("class", "striker");
    // ^^^^^^ ABANDONED - unable to directly .setAttribute without hooking the id
  };

  render() {
    // let strike = this.state.strike ? "strike" : "none";

    return (
      <div>
      <h1>To Do List Exercise</h1>
        {this.state.toDoItems.map((toDoItem, index) => (
          <li key={index}
            id={toDoItem}
          // className={strike}
          >
            <span id={index} onClick={() => this.strike(index)}>
              {toDoItem}
            </span>
            {/* <input type="checkbox" /> */}
            {/* ^^^^^^ ABANDONED - original way to mark an item on the list as "done" */}
            <button type="button" onClick={() => this.destructoDisk(index)}>X</button>
          </li>
        ))}
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  };
};

export default ToDoApp;
