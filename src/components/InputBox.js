import React from "react";

function InputBox(props) {
  return (
    <textarea class="form-control" id="comment">
      {props.prompt}
    </textarea>
  );
}

export default InputBox;
