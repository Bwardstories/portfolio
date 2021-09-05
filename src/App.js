<<<<<<< HEAD
import React from "react";
import { Switch, Route } from "react-router";
import Header from "./components/header/Header";
import ContactForm from "./components/contactForm/ContactForm";
import Home from "./views/home/Home";
import Resume from "./views/resume/Resume";
import { useProvideContact } from "./hooks";
import "./App.scss";
import SocialLinks from "./components/socialLinks/SocialLinks";
=======
import logo from './logo.svg';
import './App.css';
>>>>>>> fd49a13 (added server)

function App() {
  const { state } = useProvideContact();
  console.log(state.contactFormVisible);
  return (
<<<<<<< HEAD
    <div className="mainAppContainer">
      <Header />
      {state.contactFormVisible ? <ContactForm /> : ""}
      <SocialLinks />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/resume" component={Resume} />
      </Switch>
=======
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
>>>>>>> fd49a13 (added server)
    </div>
  );
}

export default App;
