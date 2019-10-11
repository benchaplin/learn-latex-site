import React from "react";
import { InlineMath } from "react-katex";
import 'katex/dist/katex.min.css';

function CompiledBox() {
    return (
        <p className="tex"><InlineMath math="\sum_&#123;k=0&#125;^n"/></p>
    )
}

export default CompiledBox;