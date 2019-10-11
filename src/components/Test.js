import React from "react";
import "../index.css";
import { InlineMath } from "react-katex";
import 'katex/dist/katex.min.css';
import InputBox from "./InputBox";
import CompiledBox from "./CompiledBox";

function Test() {
  return (
    <>
        <div className="container" style={{paddingBottom: '2%'}}>
            <p>TeX up the following to move on: &#160;
                <InlineMath math="(x+y)^n = \displaystyle\sum_{k=0}^n \binom{n}{k}x^{n}y^{n-k}"/>
            </p>
        </div>
        <div className="row">
        <div className="container-fluid col-sm-7">
            <InputBox />
        </div>
        <div className="col-sm-5">
            <CompiledBox />
        </div>
        </div>
    </>
  );
}

export default Test;
