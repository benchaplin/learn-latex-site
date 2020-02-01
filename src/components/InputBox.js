import React from "react";

function InputBox(props) {
  return (
    <textarea
      className="form-control"
      id="comment"
      rows="3"
      spellCheck="false"
      value={props.text}
      onChange={props.handleChange}
    ></textarea>
  );
}

export default InputBox;
