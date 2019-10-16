import React from "react";
import WholeTutorial from "./components/WholeTutorial";

function MainContent(props) {
  return (
    <>
      <WholeTutorial lesson={props} />
    </>
  );
}

export default MainContent;
