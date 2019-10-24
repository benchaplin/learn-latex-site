import React from "react";

function Header() {
  return (
    <header className="page-header">
      <div className="float-left">
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
      <div className="git-link float-right">
        <a
          className="link"
          href="https://github.com/benchaplin/learn_latex_site"
        >
          <img
            src="https://image.flaticon.com/icons/svg/25/25231.svg"
            width="30"
            alt="git"
          ></img>
        </a>
      </div>
      <div className="clearfix"></div>
    </header>
  );
}

export default Header;
