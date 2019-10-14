import React from "react";
import Explanation from "./Explanation";
import TeXCompile from "./TeXCompile";
import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

function WholeTutorial(props) {
  return (
    <div className="container">
      <div className="row" style={{ paddingBottom: "20px" }}>
        <h3 style={{ paddingLeft: "15px" }}>
          <u>{props.lesson.title}</u>
        </h3>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <Explanation lesson={props.lesson} />
        </div>
        <div className="col-sm-6">
          <p>
            <b>Try it out!</b>
          </p>
          <TeXCompile prompt={props.lesson.prompt} />
        </div>
      </div>
      <hr />
      <div style={{ paddingTop: "2%" }}>
        <p>
          TeX up the following to move on: &#160;
          <InlineMath math={props.lesson.test} />
        </p>
        <TeXCompile prompt=" " />
      </div>
      <hr />
    </div>
  );
}

export default WholeTutorial;
