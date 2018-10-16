import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import ToDoApp from "./components/pages/ToDoApp";
import Calculator from "./components/pages/Calculator";
import Contact from "./components/pages/Contact";
import Slide from "react-reveal";

const App = () => (
  <Router>
    <div>
      <NavTabs />
      <Route exact path="/" component={Home} />
      <Slide bottom duration={1500}>
        <Route exact path="/toDoApp" component={ToDoApp} />
      </Slide>
      <Route exact path="/calculator" component={Calculator} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>
);

export default App;
