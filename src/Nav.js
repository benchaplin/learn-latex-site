import React from "react";

function Nav() {
  return (
    <ul class="nav flex-column">
      <li class="nav-item">
        <a
          class="nav-link"
          style={{ color: "black" }}
          href="/MainContent"
        >
          Lesson 1: Fractions
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
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
