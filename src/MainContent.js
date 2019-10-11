import React from "react";
import Tutorial from "./components/Tutorial";
import TypesetEx from "./components/TypesetEx";
import Test from "./components/Test";

function MainContent() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <Tutorial />
        </div>
        <div className="col-sm-6">
          <p>Try it out!</p>
          <TypesetEx />
        </div>
      </div>
      <hr/>
      <div style={{paddingTop: '2%'}}>
        <Test />
      </div>
    </div>
  );
}

export default MainContent;
