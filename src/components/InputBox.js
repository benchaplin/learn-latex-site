import React from "react";

function InputBox(props) {
  return (
    <textarea
      className="form-control"
      id="comment"
      onChange={props.handleChange}
    >
      {props.text}
    </textarea>
  );
}

export default InputBox;
