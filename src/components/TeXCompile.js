import React, { useState } from "react";
import "../index.css";
import InputBox from "./InputBox";
import CompiledBox from "./CompiledBox";
import { lessonList } from "../lessons/lessons";

function TeXCompile(props) {
  const [text, setText] = useState(props.prompt);
  const [completed, setCompleted] = useState(false);

  const handleChange = event => {
    // Compare strings w/out spaces and unnecessary curly brackets
    if (props.comparable) {
      if (formatTeX(event.target.value) === formatTeX(props.lesson.test)) {
        setCompleted(true);
      }
    }
    setText(event.target.value);
  };

  const nextPath =
    lessonList().indexOf(props.lesson) < lessonList().length - 1
      ? lessonList()[lessonList().indexOf(props.lesson) + 1].path
      : "/";

  return (
    <>
      <div className="row" style={{ marginTop: "15px" }}>
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
            <a href={nextPath} style={{ color: "white" }}>
              Next
            </a>
          </button>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

// Returns input string without spaces and curly brackets containing one non-space character
function formatTeX(str) {
  const new_str = str.replace(/ /g, "");
  let newer_str = new_str;

  let i = 0;
  while (i < newer_str.length) {
    if (newer_str.charAt(i) === "}") {
      if (newer_str.charAt(i - 2) === "{") {
        newer_str =
          newer_str.slice(0, i - 2) +
          newer_str.slice(i - 1, i) +
          newer_str.slice(i + 1);
      }
    }
    i = i + 1;
  }
  return newer_str;
}

export default TeXCompile;
