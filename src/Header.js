import React from "react";

function Header() {
  return (
    <header>
      <div className="row">
        <div className="col-sm-2.1">
          <a className="link" href="/">
            <h2>
              Learn
              <img
                src="https://i.stack.imgur.com/zHFFO.png"
                width="110"
                style={{ pointerEvents: "none" }}
                alt="logo"
              ></img>
            </h2>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
