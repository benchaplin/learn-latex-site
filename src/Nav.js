import React from "react";
import { a } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul className="nav flex-column">
      <li className="nav-item">
          <a
            className="nav-link"
            style={{ color: "black" }}
            href="/exps"
          >
            Exponents
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            style={{ color: "black" }}
            href="/sqrts"
          >
            Square Roots
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            style={{ color: "black" }}
            href="/fracs"
          >
            Fractions
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            style={{ color: "black" }}
            href="/binoms"
          >
            Binomial Coefficients
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            style={{ color: "black" }}
            href="/sums"
          >
            Sums
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            style={{ color: "black" }}
            href="/ints"
          >
            Integrals
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
