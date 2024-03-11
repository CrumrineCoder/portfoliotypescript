import React from "react";
import logo from "./logo.svg";
import "./App.css";

import emailIcon from "./assets/email.svg";
import githubIcon from "./assets/github.svg";
import linkedinIcon from "./assets/linkedin.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="header-content">
          <h1>Nicolas Crumrine</h1>
          <div className="social-links">
            <a
              href="https://github.com/nicolas-crumrine"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={emailIcon} />
            </a>
            <a
              href="https://www.linkedin.com/in/nicolas-crumrine"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={emailIcon} />
            </a>
            <a
              href="https://twitter.com/nicolas_crumrine"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={emailIcon} />
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
