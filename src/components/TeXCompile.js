import React, { useState } from "react";
import "../index.css";
import InputBox from "./InputBox";
import CompiledBox from "./CompiledBox";

function TeXCompile(props) {
  const [text, setText] = useState(props.prompt);

  const handleChange = event => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="row">
        <div className="container-fluid col-sm-7" style={{marginBottom: 10}}>
          <InputBox
            text={text}
            handleChange={handleChange}
            defVal={props.prompt}
          />
        </div>
        <div className="col-sm-5">
          <CompiledBox text={text} />
        </div>
      </div>
    </>
  );
}

export default TeXCompile;
