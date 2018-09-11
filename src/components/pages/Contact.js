import React from "react";
import { Link, Route } from "react-router-dom";
import Learn from "./Learn";

const Contact = props => (
  <div>
    <h1>Contact Page</h1>
    <p>
    Contact page garbage click links below to toggle "learn.js"
    </p>
    <Link to={`${props.match.url}/learn`} role="button" className="btn btn-link">
      Learn More
    </Link>{" "}
    <Link to="/contact" role="button" className="btn btn-link">
      Learn Less
    </Link>
    <Route exact path={`${props.match.url}/learn`} component={Learn} />
  </div>
);

export default Contact;
