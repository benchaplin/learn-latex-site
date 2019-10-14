import React from "react";
import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

function CompiledBox(props) {
  return (
    <p className="tex">
      <InlineMath
        math={props.text}
        renderError={error => {
          return null;
        }}
      />
    </p>
  );
}

export default CompiledBox;
