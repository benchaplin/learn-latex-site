import React from "react";
import Explanation from "./Explanation";
import TeXCompile from "./TeXCompile";
import ReactTooltip from "react-tooltip";
import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

function WholeTutorial(props) {
  return (
    <div className="container">
      <div className="subcontainer">
        <div className="row">
          <h3>
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
      </div>
      <hr />
      <div className="subcontainer">
        <div className="row">
          <div className="col-sm-10">
            <p>
              TeX up the following to move on: &#160;
              <InlineMath math={props.lesson.test} />
            </p>
          </div>
          <div className="col-sm-2">
            <button
              className="btn btn-outline-dark"
              data-tip={props.lesson.hint}
              style={{marginBottom: 10}}
            >
              Hint
            </button>
            <ReactTooltip place="left" type="dark" effect="solid" />
          </div>
        </div>
        <TeXCompile prompt=" " />
      </div>
    </div>
  );
}

export default WholeTutorial;
