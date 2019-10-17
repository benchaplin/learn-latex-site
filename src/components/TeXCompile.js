import React, { useState } from "react";
import "../index.css";
import InputBox from "./InputBox";
import CompiledBox from "./CompiledBox";

function TeXCompile(props) {
  const [text, setText] = useState(props.prompt);
  const [completed, setCompleted] = useState(false);

  const handleChange = event => {
    // Compare strings w/out spaces
    if (spaceInsensEq(event.target.value, props.test)) {
      setCompleted(true);
    }
    setText(event.target.value);
  };

  return (
    <>
      <div className="row">
        <div className="container-fluid col-sm-7" style={{ marginBottom: 10 }}>
          <InputBox text={text} handleChange={handleChange} setText={setText} />
        </div>
        <div className="col-sm-5">
          <CompiledBox text={text} />
        </div>
      </div>
      <div>
        {completed ? (
          <button className="btn btn-success">
            <a href="/fracs" style={{ color: "white" }}>
              Move on
            </a>
          </button>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

function spaceInsensEq(str1, str2) {
  return str1.replace(/ /g, "") === str2.replace(/ /g, "");
}

export default TeXCompile;
