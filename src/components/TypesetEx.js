import React from "react";
import "../index.css";
import InputBox from "./InputBox";
import CompiledBox from "./CompiledBox";

function TypesetEx(props) {
  return (
    <div className="row">
      <div className="container-fluid col-sm-7">
        <InputBox prompt={props.lesson.prompt}/>
      </div>
      <div className="col-sm-5">
        <CompiledBox />
      </div>
    </div>
  );
}

export default TypesetEx;
