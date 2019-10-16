import React from "react";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

function CompiledBox(props) {
  return (
    <p className="tex">
      <BlockMath
        math={props.text}
        renderError={error => {
          return null;
        }}
      />
    </p>
  );
}

export default CompiledBox;
