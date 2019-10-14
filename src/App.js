import React from "react";
import Header from "./Header";
import NotFoundPage from "./NotFoundPage";
import Nav from "./Nav";
import MainContent from "./MainContent";
import Footer from "./Footer";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="general">
      <Header />
      <div className="row">
        <div className="col-sm-2">
          <Nav />
        </div>
        <div className="col-sm-10">
          <Switch>
            <Route path="/" exact component={MainContent} />           
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
