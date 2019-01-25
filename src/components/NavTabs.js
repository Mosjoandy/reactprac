import React from "react";
import { Link } from "react-router-dom";

const NavTabs = () => (
  <ul className="nav nav-tabs">
  <li className="nav-item">
      <Link
        to="/"
        className={
          window.location.pathname === "/" ? "nav-link active" : "nav-link"
        }
      >
        Home
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/Login"
        className={
          window.location.pathname === "/Login" ? "nav-link active" : "nav-link"
        }
      >
        Login
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/Registration"
        className={
          window.location.pathname === "/Registration" ? "nav-link active" : "nav-link"
        }
      >
        Registration
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/toDoApp"
        className={
          window.location.pathname === "/toDoApp" ? "nav-link active" : "nav-link"
        }
      >
        ToDoApp
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/calculator"
        className={
          window.location.pathname === "/calculator" ? "nav-link active" : "nav-link"
        }
      >
        Calculator
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/contact"
        className={
          window.location.pathname === "/contact" ? "nav-link active" : "nav-link"
        }
      >
        Contact
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/contact/learn"
        className={
          window.location.pathname === "/contact/learn" ? "nav-link active" : "nav-link"
        }
      >
        Learn
      </Link>
    </li>
  </ul>
);

export default NavTabs;
