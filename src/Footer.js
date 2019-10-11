import React from "react";

function Footer() {
  return (
    <footer className="page-footer font-small fixed-bottom pt-4">
      <div className="container-fluid text-center">
        <p>
          <img
            src="https://image.flaticon.com/icons/svg/25/25231.svg"
            width="30"
            alt="git"
          ></img>{" "}
          <a
            href="https://github.com/benchaplin/learn_latex_site"
            style={{ color: "black" }}
          >
            https://github.com/benchaplin/learn_latex_site
          </a>{" "}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
