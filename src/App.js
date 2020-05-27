import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import ToDoApp from "./components/pages/ToDoApp";
import Calculator from "./components/pages/Calculator";
import Contact from "./components/pages/Contact";
import Login from "./components/pages/Login";
import Registration from "./components/pages/Registration";
import Page1 from "./components/pages/Page1";

import Slide from "react-reveal";
import firebase from "./firebase";

class App extends Component {
  constructor() {
    super()
    this.state = {
      authenticated: false,
    };
    this.checkUser = this.checkUser.bind(this);
  };
  componentDidMount() {
    firebase.auth().onAuthStateChanged((authenticated) => {
      authenticated ?
        this.setState(() => ({
          authenticated: true,
        }))
        : this.setState(() => ({
          authenticated: false,
        }));
    });
  };

  checkUser(authenticated) {
    console.log(authenticated);
  };

  render() {
    return (
      <Router>
        <div>
          <NavTabs authenticated={this.state.authenticated} />
          <button onClick={this.checkUser}>Test</button>
          <Route exact path="/" component={Home} />
          <Slide bottom duration={1500}>
            <Route exact path="/toDoApp" component={ToDoApp} />
          </Slide>
          <Route exact path="/calculator" component={Calculator} />
          <Route path="/contact" component={Contact} />
          <Route path="/registration" component={Registration} />
          <Route path="/login" component={Login} />
          <Route path="/page1" component={Page1} />
        </div>
      </Router>
    );
  };
};

export default App;
