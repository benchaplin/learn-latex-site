import React from "react";

function Nav() {
  return (
    <ul className="nav flex-column">
      <li className="nav-item">
        <a
          className="nav-link"
          style={{ color: "black" }}
          href="/MainContent"
        >
          Lesson 1: Fractions
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link"
          style={{ color: "black" }}
          href="/MainContent"
        >
          Lesson 2: Sums
        </a>
      </li>
    </ul>
  );
}

export default Nav;
