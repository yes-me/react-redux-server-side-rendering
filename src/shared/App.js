import React, { Component } from "react";
import { Route } from "react-router-dom";
import routes from "./routes";
import "./App.css";
import Navigation from "./Header";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <section className="content-section">
        <Navigation />
          {routes.map((route, i) => <Route key={i} {...route} />)}
        <Footer />
      </section>
    );
  }
}

export default App;
