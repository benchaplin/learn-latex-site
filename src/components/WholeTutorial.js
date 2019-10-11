import React from "react";
import Explanation from "./Explanation";
import TypesetEx from "./TypesetEx";
import Test from "./Test";

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
          <p><b>Try it out!</b></p>
          <TypesetEx lesson={props.lesson} />
        </div>
      </div>
      <hr />
      <div style={{ paddingTop: "2%" }}>
        <Test lesson={props.lesson} />
      </div>
    </div>
  );
}

export default WholeTutorial;
