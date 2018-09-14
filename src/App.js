import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import ToDoApp from "./components/pages/ToDoApp";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";

const App = () => (
  <Router>
    <div>
      <NavTabs />
      <Route exact path="/" component={Home} />
      <Route exact path="/toDoApp" component={ToDoApp} />
      <Route exact path="/blog" component={Blog} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>
);

export default App;
