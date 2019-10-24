import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { lessonList } from "./lessons/lessons";

ReactDOM.render(
  <Router>
    <App lessonList={lessonList()} />
  </Router>,
  document.getElementById("root")
);
