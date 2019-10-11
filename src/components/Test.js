import React from "react";
import "../index.css";
import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import InputBox from "./InputBox";
import CompiledBox from "./CompiledBox";

function Test(props) {
  return (
    <>
      <div style={{ paddingBottom: "2%" }}>
        <p>
          TeX up the following to move on: &#160;
          <InlineMath math = {props.lesson.test} />
        </p>
      </div>
      <div className="row">
        <div className="container-fluid col-sm-7">
          <InputBox />
        </div>
        <div className="col-sm-5">
          <CompiledBox />
        </div>
      </div>
    </>
  );
}

export default Test;
