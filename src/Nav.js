import React from "react";

function Nav() {
  return (
    <nav>
      <div className="nav flex-column">
        <p className="nav-topic">
          <b>
            <u>Basic Commands</u>
          </b>
        </p>
        <ol>
          <li className="nostyle">
            <a className="nav-link" style={{ color: "black" }} href="/exps">
              Exponents
              
            </a>
          </li>
          <li className="nostyle">
            <a className="nav-link" style={{ color: "black" }} href="/subs">
              Subscripts
            </a>
          </li>
          <li className="nostyle">
            <a className="nav-link" style={{ color: "black" }} href="/sqrts">
              Square Roots
            </a>
          </li>
          <li className="nostyle">
            <a className="nav-link" style={{ color: "black" }} href="/fracs">
              Fractions
            </a>
          </li>
          <li className="nostyle">
            <a className="nav-link" style={{ color: "black" }} href="/binoms">
              Binomial Coefficients
            </a>
          </li>
          <li className="nostyle">
            <a className="nav-link" style={{ color: "black" }} href="/sums">
              Sums
            </a>
          </li>
          <li className="nostyle">
            <a className="nav-link" style={{ color: "black" }} href="/ints">
              Integrals
            </a>
          </li>
        </ol>
      </div>
    </nav>
  );
}

export default Nav;
