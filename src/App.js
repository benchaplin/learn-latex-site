import React from "react";
import Header from "./Header";
import NotFoundPage from "./NotFoundPage";
import Nav from "./Nav";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import WholeTutorial from "./components/WholeTutorial";

function App(props) {
  const routeLessons = props.lessonList.map(lesson => (
    <Route path={lesson.path}>
      <WholeTutorial lesson={lesson} />
    </Route>
  ));

  return (
    <div className="general">
      <Header />
      <div className="row">
        <div className="col-md-12 col-lg-2">
          <Nav />
        </div>
        <div className="col-md-12 col-lg-10">
          <Switch>
            <Route path="/" exact>
              <Home isAuthed={true} />
            </Route>
            {routeLessons}
            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
