import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import MainContent from "./MainContent";
import Footer from "./Footer";

function App() {
  return (
    <div className="general">
      <Header />
      <div className="row">
        <div className="col-sm-2">
          <Nav />
        </div>
        <div className="col-sm-10">
          <MainContent />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
