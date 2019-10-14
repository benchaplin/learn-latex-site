import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul className="nav flex-column">
        <li className="nav-item">
          <NavLink
            className="nav-link"
            style={{ color: "black" }}
            to="/fractions"
          >
            Lesson 1: Fractions
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            style={{ color: "black" }}
            to="/sums"
          >
            Lesson 2: Sums
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
