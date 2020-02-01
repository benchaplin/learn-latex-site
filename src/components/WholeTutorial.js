import React from "react";
import Explanation from "./Explanation";
import TeXCompile from "./TeXCompile";
import ReactTooltip from "react-tooltip";
import { BlockMath } from "react-katex";
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
          <div className="col-md-12 col-lg-6">
            <Explanation lesson={props.lesson} />
          </div>
          <div className="col-md-12 col-lg-6">
            <p>
              <b>Try it out!</b>
            </p>
            <TeXCompile
              prompt={props.lesson.prompt}
              lesson={props.lesson}
              comparable={false}
            />
          </div>
        </div>
      </div>
      <hr />
      <div className="subcontainer">
        <div className="row">
          <div className="col-md-12 col-lg-3">
            <p>TeX up the following to move on: &#160;</p>
          </div>
          <div className="col-md-12 col-lg-3">
            <BlockMath math={props.lesson.test} />
          </div>
          <div className="col-md-12 col-lg-3" />
          <div className="col-md-12 col-lg-1">
            <button
              className="btn btn-outline-dark"
              data-tip={props.lesson.hint}
              style={{ marginBottom: 10 }}
            >
              Hint
            </button>
          </div>
          <div className="col-md-12 col-lg-1">
            <button
              className="btn btn-outline-dark"
              data-tip={props.lesson.test}
              style={{ marginBottom: 10 }}
            >
              Answer
            </button>
          </div>
          <ReactTooltip place="right" type="dark" effect="solid" />
        </div>
        <TeXCompile prompt=" " lesson={props.lesson} comparable={true} />
      </div>
    </div>
  );
}

export default WholeTutorial;
