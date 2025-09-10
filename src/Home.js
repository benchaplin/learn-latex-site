import React from "react";
import TexCompile from "./components/TeXCompile";
import logo from "./images/latex_logo.png";

const homeEx = {
  prompt: "\\sum_{n = 0}^\\infty q(n)x^n = \\prod_{k = 1}^\\infty (1 + x^k)"
};

function Home(props) {
  return (
    <div className="container">
      <div className="row">
        <h3>
          What is
          <img
            src={logo}
            width="90"
            style={{ pointerEvents: "none" }}
            alt="logo"
          ></img>
          ?
        </h3>
      </div>

      <div className="row">
        <div className="col-sm-10">
          <p>
            <img
              src={logo}
              width="50"
              style={{ pointerEvents: "none" }}
              alt="logo"
            ></img>
            is a typesetting system used in technical academic fields. The
            system takes your input and formats it to display equations,
            graphics and document layouts.
          </p>
          <p>
            With the{" "}
            <a href="http://texdoc.net/texmf-dist/doc/latex/amsmath/amsldoc.pdf">
              <b>amsmath</b>
            </a>{" "}
            package,
            <img
              src={logo}
              width="50"
              style={{ pointerEvents: "none" }}
              alt="logo"
            ></img>
            allows users to type up mathematics for a professional presentation.
          </p>
        </div>
        <div className="col-sm-2"></div>
      </div>

      <div className="row">
        <h3 style={{ paddingTop: "20px" }}>How do I use it?</h3>
      </div>
      <div className="row">
        <div className="col-sm-10">
          <p>
            This website offers a basic TeX compiler to help you get started
            learning basic mathematical formatting. To work in a full document
            environment, try{" "}
            <b>
              <a href="https://www.overleaf.com/">overleaf.com</a>
            </b>
            , an easy-to-use TeX editor with great templates for beginners.
          </p>
          <p>
            Use this website to aid your
            <img
              src={logo}
              width="50"
              style={{ pointerEvents: "none" }}
              alt="logo"
            ></img>
            learning curve. Completing all of the lessons will give you an
            excellent foundation on which to build your capabilities writing up
            math in TeX.
          </p>
        </div>
        <div className="col-sm-2"></div>
      </div>

      <div className="row">
        <h3 style={{ paddingTop: "20px" }}>Try it Out!</h3>
      </div>
      <div className="row">
        <div className="col-sm-10">
          <TexCompile lesson={homeEx} comparable={false} />
        </div>
      </div>
      <a href="/exps">
        <button className="btn btn-success">Begin</button>
      </a>
    </div>
  );
}

export default Home;
