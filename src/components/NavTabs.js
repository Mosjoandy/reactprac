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
        to="/blog"
        className={
          window.location.pathname === "/blog" ? "nav-link active" : "nav-link"
        }
      >
        Blog
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
