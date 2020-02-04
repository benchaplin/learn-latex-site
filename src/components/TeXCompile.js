import React, { useState } from "react";
import InputBox from "./InputBox";
import CompiledBox from "./CompiledBox";
import { lessonList } from "../lessons/lessons";

function TeXCompile(props) {
  const [text, setText] = useState(
    props.comparable ? " " : props.lesson.prompt
  );
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

  // Force reset
  const handleNext = () => {
    setText(" ");
    setCompleted(false);
  };

  const nextPath =
    lessonList().indexOf(props.lesson) < lessonList().length - 1
      ? lessonList()[lessonList().indexOf(props.lesson) + 1].path
      : "/";

  return (
    <>
      <div className="row" style={{ marginTop: 15, marginRight: 10 }}>
        <div
          className="container-fluid col-md-6 col-lg-7"
          style={{ marginBottom: 10 }}
        >
          <InputBox text={text} handleChange={handleChange} setText={setText} />
        </div>
        <div className="col-md-6 col-lg-5">
          <CompiledBox text={text} />
        </div>
      </div>
      <div>
        {completed ? (
          <a href={nextPath}>
            <button onClick={handleNext} className="btn btn-success">
              Next
            </button>
          </a>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

// Returns input string without spaces and curly brackets containing one non-space character
// Consider "..." equivalent to "\ldots"
function formatTeX(str) {
  let new_str = str.replace(/ /g, "");
  new_str = new_str.replace(/\\ldots/g, "...");

  let i = 0;
  while (i < new_str.length) {
    if (new_str.charAt(i) === "}") {
      if (new_str.charAt(i - 2) === "{") {
        new_str =
          new_str.slice(0, i - 2) +
          new_str.slice(i - 1, i) +
          new_str.slice(i + 1);
      }
    }
    i = i + 1;
  }
  return new_str;
}

export default TeXCompile;
