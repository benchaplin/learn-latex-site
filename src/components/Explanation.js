import React from "react";
import "../index.css";

function Explanation(props) {
  return (
    <>
      <p>{props.lesson.explanation1}</p>
      <p>{props.lesson.explanation2}</p>
    </>
  );
}

export default Explanation;
