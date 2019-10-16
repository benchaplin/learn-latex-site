import React from "react";

function InputBox(props) {
  function fixSpace() {
    props.setText("");
  }

  return (
    <textarea
      className="form-control"
      id="comment"
      rows="3"
      spellCheck="false"
      value={props.text}
      onClick={fixSpace}
      onChange={props.handleChange}
    >
    </textarea>
  );
}

export default InputBox;
