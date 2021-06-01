import React from "react";
import { Switch, Route } from "react-router";
import Header from "./components/header/Header";
import Home from "./views/home/Home";
import Resume from "./views/resume/Resume";
import "./App.css";
import SocialLinks from "./components/socialLinks/SocialLinks";

function App() {
  return (
    <div className="mainAppContainer">
      <Header />
      <SocialLinks />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/resume" component={Resume} />
      </Switch>
    </div>
  );
}

export default App;
